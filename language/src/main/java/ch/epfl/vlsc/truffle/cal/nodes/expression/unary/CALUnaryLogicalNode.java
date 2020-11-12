package ch.epfl.vlsc.truffle.cal.nodes.expression.unary;

import ch.epfl.vlsc.truffle.cal.CALException;
import com.oracle.truffle.api.dsl.Fallback;
import com.oracle.truffle.api.dsl.Specialization;
import com.oracle.truffle.api.nodes.NodeInfo;

@NodeInfo(shortName = "not")
public abstract class CALUnaryLogicalNode extends CALUnaryNode {
    @Specialization
    protected boolean doBoolean(boolean value) {
        return !value;
    }

    @Fallback
    protected Object typeError(Object value) {
        throw CALException.typeError(this, value);
    }
}
