import { TSESLint } from '@typescript-eslint/utils'

const rule: TSESLint.RuleModule<'requiresGenericTyping', []> = {
  meta: {
    docs: {
      description: 'An example rule.',
      recommended: 'warn',
      url:
        'https://github.com/kotarella1110/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    messages: {
      requiresGenericTyping: "Use <Formik<T>> to strongly type Formik's props.",
    },
    schema: [],
    type: 'suggestion',
  },

  create(context) {
    return {
      'JSXElement'(node) {
        if (
          node.openingElement.type === 'JSXOpeningElement' &&
          node.openingElement.name.type === 'JSXIdentifier' &&
          node.openingElement.name.name === 'Formik' &&
          (!node.openingElement.typeParameters ||
            (node.openingElement.typeParameters.type === 'TSTypeParameterInstantiation' &&
              (node.openingElement.typeParameters.params.length === 0 ||
                node.openingElement.typeParameters.params[0].type === 'TSAnyKeyword')))
        ) {
          context.report({
            node,
            messageId: 'requiresGenericTyping',
          })
        }
      },
    }
  },
}

export default rule
