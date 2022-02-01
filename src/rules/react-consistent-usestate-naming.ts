import { TSESLint } from '@typescript-eslint/utils'
import { classify } from 'inflected'

const rule: TSESLint.RuleModule<'onlyOneVariableDeclarationSupported' | 'missingVariableDeclarationIdentifier' | 'mustCallUseState' | 'mustUseArrayPattern' | 'mustUseTuple' | 'mustUseIdentifierInTuple' | 'inconsistentNaming', []> = {
  meta: {
    docs: {
      description: 'An example rule.',
      recommended: 'warn',
      url:
        'https://github.com/kotarella1110/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    messages: {
      inconsistentNaming: 'Inconsistent naming, expected \'{{expected}}\'',
      onlyOneVariableDeclarationSupported: 'Only one variable declaration supported',
      missingVariableDeclarationIdentifier: 'Missing variable declaration identifier',
      mustCallUseState: 'You must call `useState`',
      mustUseArrayPattern: 'You must use array pattern',
      mustUseTuple: 'You must use tuple',
      mustUseIdentifierInTuple: 'You must use identifier in tuple',

    },
    schema: [],
    type: 'suggestion',
  },

  create(context) {
    return {
      'VariableDeclaration'(node) {
        const variableDeclarators = node.declarations.filter(e => e.type === 'VariableDeclarator')
        if (variableDeclarators.length !== 1) {
          // context.report({ messageId: 'onlyOneVariableDeclarationSupported', node })
          return
        }
        const declaration = variableDeclarators[0]
        if (declaration.init?.type !== "CallExpression") {
          // context.report({ messageId: 'missingVariableDeclarationIdentifier', node: declaration })
          return
        }
        const callee = declaration.init.callee
        if (callee.type !== 'Identifier') {
          return
        }
        if (callee.name !== "useState") {
          // context.report({ messageId: 'mustCallUseState', node: declaration.init })
          return
        }
        if (declaration.id.type !== "ArrayPattern") {
          context.report({ messageId: 'mustUseArrayPattern', node: declaration.id })
          return
        }
        const elements = declaration.id.elements.filter(e => !!e)
        if (elements.length !== 2) {
          context.report({ messageId: 'mustUseTuple', node: declaration })
          return
        }
        const [readerElement, setterElement] = elements
        if (!readerElement) {
          context.report({ messageId: 'mustUseIdentifierInTuple', node: declaration })
          return
        }
        if (!setterElement) {
          context.report({ messageId: 'mustUseIdentifierInTuple', node: declaration })
          return
        }
        if (readerElement.type !== "Identifier") {
          context.report({ messageId: 'mustUseIdentifierInTuple', node: readerElement })
          return
        }
        if (setterElement.type !== "Identifier") {
          context.report({ messageId: 'mustUseIdentifierInTuple', node: setterElement })
          return
        }
        const readerName = readerElement.name
        const setterName = `set${classify(readerName)}`
        if (setterName !== setterElement.name) {
          context.report({
            messageId: 'inconsistentNaming', node: setterElement, data: {
              expected: setterName,
            }
          })
          return
        }
      }
    }
  }
}

export default rule
