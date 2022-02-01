import { TSESLint } from '@typescript-eslint/utils'
import rule from '../../src/rules/classnames-require'

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
    valid: ['<Blah className={"hi there"} />'],
    invalid: [
      {
        code: "<Blah className={`hi ${true && 'there'}`} />",
        errors: [{ messageId: 'requiresClassNames' }],
      },
    ],
  },
)
