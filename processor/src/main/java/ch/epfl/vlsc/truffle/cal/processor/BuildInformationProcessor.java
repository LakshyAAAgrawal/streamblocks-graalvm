package ch.epfl.vlsc.truffle.cal.processor;


import ch.epfl.vlsc.truffle.cal.annotations.PopulateBuildInformation;

import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.lang.model.element.Element;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.PackageElement;
import javax.lang.model.element.TypeElement;
import javax.tools.JavaFileObject;
import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.CodeSource;
import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@SupportedAnnotationTypes("ch.epfl.vlsc.truffle.cal.annotations.PopulateBuildInformation")
public class BuildInformationProcessor extends TruffleCalProcessor {


    private static final String SUFFIX = "Impl";

    private final Set<String> processed = new HashSet<>();

    private File trufflecalHome;
    private String buildName;
    private String shortRevision;
    private String fullRevision;
    private String compileDate;
    private String copyrightYear;
    private String kernelMajorVersion;

    @Override
    public synchronized void init(ProcessingEnvironment env) {
        super.init(env);
        try {
            trufflecalHome = findHome();
            buildName = System.getenv("TRUFFLECAL_BUILD_NAME");
            fullRevision = runCommand("git rev-parse HEAD");
            shortRevision = fullRevision.substring(0, 8);
            compileDate = runCommand("git log -1 --date=short --pretty=format:%cd");
            copyrightYear = compileDate.split("\\-")[0];
            kernelMajorVersion = findKernelMajorVersion();
        } catch (Throwable e) {
            throw new Error(e);
        }
    }

    private File findHome() throws URISyntaxException {
        final CodeSource codeSource = getClass().getProtectionDomain().getCodeSource();
        final File jarOrClassPath;
        if (codeSource == null || codeSource.getLocation() == null) {
            String className = getClass().getName().replace('.', '/') + ".class";
            URL location = getClass().getClassLoader().getResource(className);
            if (location == null) {
                throw new RuntimeException("Could not find the source code for " + getClass());
            }
            Matcher matcher = Pattern.compile("^file:(.+)!/.+\\.class$").matcher(location.getPath());
            if (!matcher.matches()) {
                throw new RuntimeException("Could not parse URL " + location.getPath());
            }
            jarOrClassPath = new File(matcher.group(1));
        } else {
            jarOrClassPath = new File(codeSource.getLocation().toURI());
        }

        // try to find it in `mxbuild`
        File source = jarOrClassPath;
       /*
        while (!source.getName().equals("mxbuild")) {
            source = source.getParentFile();
            if (source == null) {
                throw new RuntimeException(
                        "Could not find `mxbuild` in the source path for " + getClass() + ": " + jarOrClassPath);
            }
        }*/
        return source.getParentFile();
    }

    private String findKernelMajorVersion() throws IOException, InterruptedException {
        final String kernelVersion = runCommand("uname -r");
        return kernelVersion.split(Pattern.quote("."))[0];
    }

    private String runCommand(String command) throws IOException, InterruptedException {
        final Process git = new ProcessBuilder(command.split("\\s+")).directory(trufflecalHome).start();
        final String firstLine;
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(git.getInputStream(), StandardCharsets.UTF_8))) {
            firstLine = reader.readLine();
        }

        final int exitCode = git.waitFor();
        if (exitCode != 0) {
            throw new Error("Command " + command + " failed with exit code " + exitCode);
        }
        return firstLine;
    }

    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnvironment) {
        assert isInitialized();
        if (!annotations.isEmpty()) {
            for (Element element : roundEnvironment.getElementsAnnotatedWith(PopulateBuildInformation.class)) {
                try {
                    processBuildInformation((TypeElement) element);
                } catch (Exception e) {
                    error(e.getClass() + " " + e.getMessage(), element);
                }
            }
        }

        return true;
    }

    private void processBuildInformation(TypeElement element) throws Exception {
        final PackageElement packageElement = (PackageElement) element.getEnclosingElement();
        final String packageName = packageElement.getQualifiedName().toString();

        final String qualifiedName = element.getQualifiedName().toString();

        if (!processed.add(qualifiedName)) {
            // Already processed, do nothing. This seems an Eclipse bug.
            return;
        }

        final JavaFileObject output = processingEnv.getFiler().createSourceFile(qualifiedName + SUFFIX, element);

        try (PrintStream stream = new PrintStream(output.openOutputStream(), true, "UTF-8")) {
            stream.println("/*\n" +
                    " * Copyright (c) " + Calendar.getInstance().get(Calendar.YEAR) +
                    " EPFL VLSC and/or its affiliates. All rights reserved. This\n" +
                    " * code is released under a tri EPL/GPL/LGPL license. You can use it,\n" +
                    " * redistribute it and/or modify it under the terms of the:\n" +
                    " *\n" +
                    " * Eclipse Public License version 2.0, or\n" +
                    " * GNU General Public License version 2, or\n" +
                    " * GNU Lesser General Public License version 2.1.\n" +
                    " */");
            stream.println("package " + packageName + ";");
            stream.println();
            stream.println("// GENERATED BY " + getClass().getName());
            stream.println();
            stream.println(
                    "public class " + element.getSimpleName() + SUFFIX + " implements " + element.getSimpleName() +
                            " {");
            stream.println();
            stream.println(
                    "    public static final " + element.getSimpleName() + " INSTANCE = new " +
                            element.getSimpleName() + SUFFIX + "();");
            stream.println();

            for (Element e : element.getEnclosedElements()) {
                if (e instanceof ExecutableElement) {
                    final String name = e.getSimpleName().toString();

                    final String value;
                    switch (name) {
                        case "getBuildName":
                            value = buildName;
                            break;
                        case "getShortRevision":
                            value = shortRevision;
                            break;
                        case "getFullRevision":
                            value = fullRevision;
                            break;
                        case "getCopyrightYear":
                            value = copyrightYear;
                            break;
                        case "getCompileDate":
                            value = compileDate;
                            break;
                        case "getKernelMajorVersion":
                            value = kernelMajorVersion;
                            break;
                        default:
                            throw new UnsupportedOperationException(name + " method not understood");
                    }

                    stream.println("    @Override");
                    stream.println("    public String " + name + "() {");
                    if (value == null) {
                        stream.println("        return null;");
                    } else {
                        stream.println("        return \"" + value + "\";");
                    }
                    stream.println("    }");
                    stream.println();
                }
            }

            stream.println("}");
        }
    }

}
