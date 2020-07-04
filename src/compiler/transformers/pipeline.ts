/*@internal*/
namespace ts {
    // function transformPipelineExpressionWorker(node: PipelineExpression, pipelineVariable: Identifier, expressions: Expression[], top: boolean) {
    //     if (isPipelineExpression(node.left)) {
    //         transformPipelineExpressionWorker(node.left, pipelineVariable, expressions, false);
    //     }
    //     else {
    //         expressions.push(createAssignment(pipelineVariable, visitNode(node.left, visitor, isExpression)));
    //     }

    //     const right = visitNode(node.right, visitor, isExpression);
    //     expressions.push(top ? call : createAssignment(pipelineVariable, call));
    // }

    export const transformPipeline: TransformerFactory<SourceFile> =
        (context: TransformationContext) => {
            return sourceFile => {
                const visitor = (node: Node): Node => {
                    // if (true) {
                    if (node.transformFlags & TransformFlags.ContainsPipeline) {
                        if (isPipelineExpression(node)) {
                            // const pipelineVariable = createUniqueName('');
                            // const expressions: Expression[] = [];
                            // transformPipelineExpressionWorker(node, pipelineVariable, expressions, /*top*/ true);
                            // const transformed = inlineExpressions(expressions);
                            // setSourceMapRange(transformed, node);
                            // setCommentRange(transformed, node);
                            // return transformed;
                            const call = createCall(
                                visitNode(node.expression, visitor),
                                /*typeArguments*/ undefined,
                                [visitNode(node.arguments[0], visitor)]
                            );
                            setSourceMapRange(call, node);
                            setCommentRange(call, node);
                            return call;
                        }
                        return visitEachChild(node, visitor, context);;
                    };
                    return node;
                };
                return visitNode(sourceFile, visitor);
            };
        };
}
