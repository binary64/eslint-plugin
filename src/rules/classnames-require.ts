import { TSESLint } from '@typescript-eslint/utils'

const rule: TSESLint.RuleModule<'requiresClassNames' | 'mustCallFunctionCalledClassNames' | 'mustHaveArguments' | 'invalidArguments' | 'mustCallStyles' | 'uselessSingleArgument', []> = {
  meta: {
    docs: {
      description: 'An example rule.',
      recommended: 'warn',
      url:
        'https://github.com/binary64/eslint-plugin/blob/master/docs/rules/classnames-require.md',
    },
    messages: {
      requiresClassNames: 'Use classNames() to parse the class names consistently.',
      mustCallFunctionCalledClassNames: 'You must call `classNames()`',
      mustCallStyles: 'You must call `styles.`',
      mustHaveArguments: 'You must have arguments',
      invalidArguments: 'Invalid arguments - try `{ classNameToUse: true }`',
      uselessSingleArgument: 'Using classNames() is useless here. Just do `className={styles.{{arg}}}` instead.',
    },
    schema: [],
    type: 'suggestion',
  },

  create(context) {
    return {
      'JSXElement'(node) {
        // console.log(node.openingElement.attributes)
        if (
          node.openingElement.type === 'JSXOpeningElement'
        ) {
          const classNameAttribute = node.openingElement.attributes.find(e =>
            e.type === 'JSXAttribute' && e.name.name === 'className'
          )
          // console.log('classNameAttribute', classNameAttribute)
          if (classNameAttribute?.type === 'JSXAttribute' && classNameAttribute.value?.loc) {
            if (classNameAttribute.value.type === 'JSXExpressionContainer') {
              if (classNameAttribute.value.expression.type === 'TemplateLiteral') {
                context.report({
                  loc: classNameAttribute.value.expression.loc,
                  messageId: 'requiresClassNames',
                })
              } else if (classNameAttribute.value.expression.type === 'MemberExpression') {
                if (classNameAttribute.value.expression.object.type === 'Identifier' && classNameAttribute.value.expression.object.name === 'styles') {
                } else {
                  context.report({
                    loc: classNameAttribute.value.expression.object.loc,
                    messageId: 'mustCallStyles',
                  })
                }
              } else if (classNameAttribute.value.expression.type === 'ConditionalExpression') {
                context.report({
                  loc: classNameAttribute.value.expression.loc,
                  messageId: 'requiresClassNames',
                })
              } else if (classNameAttribute.value.expression.type === 'BinaryExpression') {
                context.report({
                  loc: classNameAttribute.value.expression.loc,
                  messageId: 'requiresClassNames',
                })
              } else if (classNameAttribute.value.expression.type === 'CallExpression') {
                if (classNameAttribute.value.expression.callee.type === 'Identifier') {
                  if (classNameAttribute.value.expression.callee.name === 'classNames') {
                    if (classNameAttribute.value.expression.arguments.length === 1) {
                      if (classNameAttribute.value.expression.arguments[0].type !== 'ObjectExpression') {
                        if (classNameAttribute.value.expression.arguments[0].type === 'MemberExpression') {

                        }
                        context.report({
                          loc: classNameAttribute.value.expression.arguments[0].loc,
                          messageId: 'uselessSingleArgument',
                          data: {
                            arg: classNameAttribute.value.expression.arguments[0].type === 'Identifier' && classNameAttribute.value.expression.arguments[0].name === "styles" ? classNameAttribute.value.expression.arguments[0].name : classNameAttribute.value.expression.arguments[0].type,
                          }
                        })
                      }
                    }
                    if (classNameAttribute.value.expression.arguments.length > 0) {
                      for (const argument of classNameAttribute.value.expression.arguments) {
                        if (argument.type === 'MemberExpression') {
                        } else if (argument.type === 'ObjectExpression') {
                        } else {
                          if (process.env.DEBUG) console.log("HUH4", argument.type)

                          context.report({
                            node: argument,
                            messageId: 'invalidArguments'
                          })
                        }
                      }
                    } else {
                      context.report({
                        node: classNameAttribute.value.expression,
                        messageId: 'mustHaveArguments',
                      })
                    }
                  } else {
                    context.report({
                      node: classNameAttribute.value.expression.callee,
                      messageId: 'mustCallFunctionCalledClassNames',
                    })
                  }
                } else {
                  if (process.env.DEBUG) console.log("HUH3", classNameAttribute.value.expression)
                }


              } else {
                if (process.env.DEBUG) console.log("HUH2", "classNameAttribute.value.expression.type", classNameAttribute.value.expression.type)

                context.report({
                  node: classNameAttribute.value.expression,
                  messageId: 'mustCallFunctionCalledClassNames',
                })
              }


            } else {
              if (process.env.DEBUG) console.log("HUH", classNameAttribute.name.name, classNameAttribute.value.type)
            }

          }
        }
      },
    }
  },
}

export default rule
