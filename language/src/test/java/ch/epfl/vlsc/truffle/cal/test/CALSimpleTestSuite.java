package ch.epfl.vlsc.truffle.cal.test;

import java.io.IOException;
import org.junit.Ignore;
import org.junit.Test;

public class CALSimpleTestSuite extends CALTestSuite {

    @Test
    public void expressionsTest() throws IOException {
        runTest(TestCase.newBuilder("expressions").build());
    }

    @Test
    public void addTest() throws IOException {
        runTest(TestCase.newBuilder("add").build());
    }

    @Test
    public void precedenceTest() throws IOException {
        runTest(TestCase.newBuilder("precedence").build());
    }

    @Ignore
    @Test
    public void actorStateTest() throws IOException {
        runTest(TestCase.newBuilder("add-stored-var").setIterations(10).build());
    }

    @Ignore
    @Test
    public void actorParameterTest() throws IOException {
        runTest(TestCase.newBuilder("actor-parameters").setActorName("simple.dwf.SourceSink").build());
    }

    @Ignore
    @Test
    public void lambdaTest() throws IOException {
        runTest(TestCase.newBuilder("lambda").build());
    }

    @Ignore
    @Test
    public void nestedLambdaTest() throws IOException {
        runTest(TestCase.newBuilder("nested-lambda").build());
    }

    @Test
    public void printlnTest() throws IOException {
        runTest(TestCase.newBuilder("println").build());
    }

    @Test
    public void printlnVariablesTest() throws IOException {
        runTest(TestCase.newBuilder("println-var").build());
    }

    @Ignore
    @Test
    public void simpleNetworkTest() throws IOException {
        runTest(TestCase.newBuilder("simple-network").setActorName("simple.dwf.SourceSink").build());
    }

    @Ignore
    @Test
    public void simpleNestedNetworkTest() throws IOException {
        runTest(TestCase.newBuilder("network-input").setActorName("simple.dwf.SourceSink").build());
    }

    @Ignore
    @Test
    public void listInitTest() throws IOException {
        runTest(TestCase.newBuilder("init-list").build());
    }

    @Ignore
    @Test
    public void repeatInputTest() throws IOException {
        runTest(TestCase.newBuilder("repeat-input").setActorName("simple.dwf.SourceSink").build());
    }

    @Ignore
    @Test
    public void repeatOutputTest() throws IOException {
        runTest(TestCase.newBuilder("repeat-output").setActorName("simple.dwf.SourceSink").build());
    }

    @Ignore
    @Test
    public void letExprTest() throws IOException {
        runTest(TestCase.newBuilder("let-expr").build());
    }

    @Ignore
    @Test
    public void foreachTest() throws IOException {
        runTest(TestCase.newBuilder("for-loop").build());
    }

    @Ignore
    @Test
    public void nestedForLoopsTest() throws IOException {
        runTest(TestCase.newBuilder("nested-for-loop").build());
    }

    @Ignore
    @Test
    public void forComprehensionTest() throws IOException {
        runTest(TestCase.newBuilder("for-comprehensions").build());
    }

    @Test
    public void ifStatementTest() throws IOException {
        runTest(TestCase.newBuilder("if-statement").build());
    }

    @Ignore
    @Test
    public void ifElseStatementTest() throws IOException {
        runTest(TestCase.newBuilder("if-else-statement").build());
    }

    @Ignore
    @Test
    public void importsTest() throws IOException {
        runTest(TestCase.newBuilder("import/Network").setActorName("test.SourceSink").setDirLookup(true).build());
    }

    @Ignore
    @Test
    public void idctTest() throws IOException {
        runTest(TestCase.newBuilder("dct/src/TopIDCT").setActorName("RVC.TopIDCT").setDirLookup(true).build());
    }

}
