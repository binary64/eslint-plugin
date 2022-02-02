import { TSESLint } from '@typescript-eslint/utils'

const rule: TSESLint.RuleModule<'dontUseFc', []> = {
  meta: {
    docs: {
      description: 'An example rule.',
      recommended: 'warn',
      url:
        'https://github.com/binary64/eslint-plugin/blob/master/docs/rules/react-deprecate-fc.md',
    },
    messages: {
      dontUseFc: 'React.FC is no longer recommended. Use `({ ...props }: P) =>` instead',
    },
    schema: [],
    type: 'suggestion',
  },

  create(context) {
    return {
      'TSTypeReference'(node) {
        if (node.type === 'TSTypeReference' && node.typeName.type === 'Identifier' && node.typeName.name === 'FC') {
          context.report({
            node: node.typeName,
            messageId: 'dontUseFc',
          })
        }
      }
    }
  }
}

export default rule
