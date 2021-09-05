package ch.epfl.vlsc.truffle.cal.ast;

import java.net.PortUnreachableException;
import java.util.*;
import java.util.Map.Entry;

import ch.epfl.vlsc.truffle.cal.nodes.fifo.CALFifoFanoutAddFifo;
import ch.epfl.vlsc.truffle.cal.nodes.fifo.CALFifoFanoutNode;
import ch.epfl.vlsc.truffle.cal.nodes.fifo.CALFifoTransactionConclude;
import com.oracle.truffle.api.source.SourceSection;

import ch.epfl.vlsc.truffle.cal.nodes.CALExpressionNode;
import ch.epfl.vlsc.truffle.cal.nodes.CALRootNode;
import ch.epfl.vlsc.truffle.cal.nodes.CALStatementNode;
import ch.epfl.vlsc.truffle.cal.nodes.NetworkBodyNode;
import ch.epfl.vlsc.truffle.cal.nodes.NetworkNode;
import ch.epfl.vlsc.truffle.cal.nodes.contorlflow.StmtBlockNode;
import ch.epfl.vlsc.truffle.cal.nodes.expression.CALInvokeNode;
import ch.epfl.vlsc.truffle.cal.nodes.expression.literals.ActorLiteralNode;
import ch.epfl.vlsc.truffle.cal.nodes.fifo.CALCreateFIFONode;
import se.lth.cs.tycho.ir.QID;
import se.lth.cs.tycho.ir.ValueParameter;
import se.lth.cs.tycho.ir.decl.LocalVarDecl;
import se.lth.cs.tycho.ir.decl.VarDecl;
import se.lth.cs.tycho.ir.entity.PortDecl;
import se.lth.cs.tycho.ir.entity.nl.*;

public class NetworkTransformer extends ScopedTransformer<NetworkNode> {

    NlNetwork network;
    QID name;

    public NetworkTransformer(NlNetwork network, QID name, TransformContext context) {
    	super(context);
    	// We want a clean frame
    	// TODO support global variables
    	context.clearLexicalScopeAndFrame();
        //super(language, source, new LexicalScopeRW(null), new FrameDescriptor(), depth, context);
        this.network = network;
        this.name = name;
    }

    // Tranform a NlNetwork to a usable network for us.
    // 1. Tranform entity declarations
    // 1.1 Create variable declarations
    // 2. Tranform structure
    // 2.1 FIFO creation nodes
    // 2.2 FIFO linking nodes
    public NetworkNode transform() {
        List<CALStatementNode> headStatements = new ArrayList<>(network.getVarDecls().size()
                + network.getStructure().size() + network.getValueParameters().size() + network.getEntities().size() + network.getInputPorts().size() + network.getOutputPorts().size());
        int i = 0;
        // merge with actor if possible
        // TODO we are making assumptions about the number of arguments
        // and that EVERY argument and port is effectively passed

        // WARNING keep as the first declaration as it needs to match the arguments
        // position
        // Prepend arguments so they are specialized the same way as in the body
        for (VarDecl varDecl : network.getValueParameters()) {
            headStatements.add(transformArgument(varDecl, i));
            i++;
        }

        for (PortDecl in : network.getInputPorts()) {
            // Input ports are passed as arguments
            headStatements.add(transformPortDecl(in, i));
            i++;
        }
        for (PortDecl out : network.getOutputPorts()) {
            // Input ports are passed as arguments
            headStatements.add(transformPortDecl(out, i));
            i++;
        }
        for (LocalVarDecl varDecl : network.getVarDecls()) {
            headStatements.add(transformVarDecl(varDecl));
            i++;
        }
        // List all the actors instansiated
        Map<String, ActorArguments> actors = new LinkedHashMap<>();
        for (InstanceDecl instanceDecl : network.getEntities()) {
            String instanceName = instanceDecl.getInstanceName();
            // FIXME handle arguments
            if (instanceDecl.getEntityExpr() instanceof EntityInstanceExpr) {
                EntityInstanceExpr entity = (EntityInstanceExpr) instanceDecl.getEntityExpr();
                if (entity.getEntityName() instanceof EntityReferenceLocal) {
                    String actorName = ((EntityReferenceLocal) entity.getEntityName()).getName();
                    // FIXME here we assume that the parameters are passed in the same order as in the declaration
                    // it however does not need to be the case, so this has to be changed
                    List<CALExpressionNode> arguments = new ArrayList<>(entity.getValueParameters().size());
                    for (ValueParameter parameter: entity.getValueParameters())
                        arguments.add(transformExpr(parameter.getValue()));
                    actors.put(instanceName, new ActorArguments(actorName, arguments.toArray(new CALExpressionNode[arguments.size()]), getSourceSection(entity)));
                } else {
                    throw new UnsupportedOperationException("Unknown entity reference in network");
                }
            } else {
                throw new UnsupportedOperationException("Unknown entity in network");
            }
        }
        int j = 0;
        Map<String, String> outputPortToFanoutMapping = new HashMap<String, String>();
        // create the fifos and add them to the actors
        // TODO: The current Fanout implementation may not work appropriately when the root level network has input ports
        for(StructureStatement struct: network.getStructure()){
            if(struct instanceof StructureConnectionStmt) {
                StructureConnectionStmt connection = (StructureConnectionStmt) struct;
                PortReference source = connection.getSrc();
                PortReference destination = connection.getDst();

                if(source.getEntityName() != null && destination.getEntityName() != null){
                    // This happens when both the source and destination entity are part of this network

                    // Create a new Fifo for the connection
                    String fifoName = "$fifo-" + j;
                    headStatements.add(createAssignment(fifoName, new CALCreateFIFONode()));
                    ++i;

                    String portName = source.getEntityName() + "." + source.getPortName();
                    String fanoutNodeName;
                    if(!outputPortToFanoutMapping.containsKey(portName)){
                        // We are seeing the output port for the first time
                        fanoutNodeName = "$fifoFanout" + j;
                        outputPortToFanoutMapping.put(portName, fanoutNodeName);
                        headStatements.add(createAssignment(fanoutNodeName, new CALFifoFanoutNode()));
                        i++;

                        actors.get(source.getEntityName()).outputs.add(getReadNode(fanoutNodeName));
                    } else
                        fanoutNodeName = outputPortToFanoutMapping.get(portName);

                    // Add the fifo to the fanout
                    headStatements.add(new CALFifoFanoutAddFifo(getReadNode(fanoutNodeName), getReadNode(fifoName)));
                    i++;

                    actors.get(destination.getEntityName()).inputs.add(getReadNode(fifoName));
                    j++;
                } else {
                    // This happens when either the source of destination is one of the external ports of the network

                if(source.getEntityName() == null && destination.getEntityName() == null) {
                    // This is when both the source and destination are external ports of the network
                    throw new TransformException("unsupported network local fifo", context.getSource(), connection);
                } else if (source.getEntityName() == null) {
                    // This is when the source is an external port and destination is an entity within network
                    String fifoName = "$fifo-" + j;
                    headStatements.add(createAssignment(fifoName, new CALCreateFIFONode()));
                    ++i;

                    headStatements.add(new CALFifoFanoutAddFifo(getReadNode(source.getPortName()), getReadNode(fifoName)));
                    ++i;

                    actors.get(destination.getEntityName()).inputs.add(getReadNode(fifoName));
                } else if (destination.getEntityName() == null) {
                    // This is when the source is a port of an entity in the network and destination is an external port of the network

                    String portName = source.getEntityName() + "." + source.getPortName();
                    String fanoutNodeName;
                    if(!outputPortToFanoutMapping.containsKey(portName)){
                        // We are seeing the output port for the first time
                        fanoutNodeName = "$fifoFanout" + j;
                        outputPortToFanoutMapping.put(portName, fanoutNodeName);
                        headStatements.add(createAssignment(fanoutNodeName, new CALFifoFanoutNode()));
                        i++;

                        actors.get(source.getEntityName()).outputs.add(getReadNode(fanoutNodeName));
                    } else
                        fanoutNodeName = outputPortToFanoutMapping.get(portName);

                    // Add the fifo to the fanout
                    headStatements.add(new CALFifoFanoutAddFifo(getReadNode(fanoutNodeName), getReadNode(destination.getPortName())));
                    i++;
                } else
                    throw new RuntimeException("Unreachable code");
                ++j;
                }
            } else
                throw new UnsupportedOperationException("Unsupported Structure found");
        }

        // Instansiation nodes for all actors
        for (Entry<String, ActorArguments> entry : actors.entrySet()) {
            ActorArguments args = entry.getValue();
            CALExpressionNode actor = new ActorLiteralNode(context.getEntityQID(args.actorName).toString());
            CALExpressionNode[] arguments = new CALExpressionNode[args.arguments.length + args.inputs.size()
                    + args.outputs.size()];
            System.arraycopy(args.arguments, 0, arguments, 0, args.arguments.length);
            System.arraycopy(args.inputs.toArray(), 0, arguments, args.arguments.length, args.inputs.size());
            System.arraycopy(args.outputs.toArray(), 0, arguments, args.arguments.length + args.inputs.size(),
                    args.outputs.size());

            CALExpressionNode call = new CALInvokeNode(actor, arguments);
            call.setSourceSection(args.sourceSection);
            CALStatementNode assignement = createAssignment(entry.getKey(), call);
            assignement.setSourceSection(args.sourceSection);
            headStatements.add(assignement);
            i++;
        }

        context.setDepth(context.getDepth()+1);
        // Run the actors
        List<CALExpressionNode> bodyStatements = new LinkedList<>();
        for (String instanceName : actors.keySet()) {
            CALExpressionNode entityNode = getReadNode(instanceName);
            bodyStatements.add(new CALInvokeNode(entityNode, new CALExpressionNode[0]));
        }
        CALExpressionNode body = new NetworkBodyNode(
                bodyStatements.toArray(new CALExpressionNode[bodyStatements.size()]));

        StmtBlockNode head = new StmtBlockNode(headStatements.toArray(new CALStatementNode[headStatements.size()]));
        SourceSection networkSrc = getSourceSection(network);

        CALRootNode toyRoot = new CALRootNode(context.getLanguage(), context.getFrameDescriptor(), body,
        		context.getSource().createUnavailableSection(), name.toString());
        context.setDepth(context.getDepth()-1);
        return new NetworkNode(context.getLanguage(), context.getFrameDescriptor(), head, toyRoot, networkSrc, name.toString());
    }

}
