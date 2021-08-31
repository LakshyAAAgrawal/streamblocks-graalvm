/*
 * Copyright (c) 2017, 2019 Oracle and/or its affiliates. All rights reserved. This
 * code is released under a tri EPL/GPL/LGPL license. You can use it,
 * redistribute it and/or modify it under the terms of the:
 *
 * Eclipse Public License version 2.0, or
 * GNU General Public License version 2, or
 * GNU Lesser General Public License version 2.1.
 */
package ch.epfl.vlsc.truffle.cal.shared.options;

import org.graalvm.options.OptionType;

import java.util.Locale;

public class EnumOptionType {
    public static <T extends Enum<T>> OptionType<T> optionTypeFor(Class<T> type) {
        return new OptionType<>(type.getName(), v -> Enum.valueOf(type, v.toUpperCase(Locale.ENGLISH)));
    }

}
