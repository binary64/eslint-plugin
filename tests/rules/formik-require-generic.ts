import { TSESLint } from '@typescript-eslint/utils'
import rule from '../../src/rules/formik-require-generic'

const parserOptions: TSESLint.RuleTesterConfig = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}

new TSESLint.RuleTester(parserOptions).run(
  'formik-require-generic',
  rule,
  {
    valid: ['<Formik<BlahType>></Formik>'],
    invalid: [
      {
        code: '<Formik></Formik>',
        errors: [{ messageId: 'requiresGenericTyping' }],
      },
      {
        code: '<Formik<any>></Formik>',
        errors: [{ messageId: 'requiresGenericTyping' }],
      },
    ],
  },
)
