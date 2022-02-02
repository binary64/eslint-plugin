/* DON'T EDIT THIS FILE. This is generated by 'scripts/lib/update-lib-index.ts' */
'use strict'

export = {
  configs: {
    recommended: (await import('./configs/recommended')).default,
  },
  rules: {
    'formik-require-generic': (await import('./rules/formik-require-generic')).default,
    'classnames-require': (await import('./rules/classnames-require')).default,
    'react-consistent-usestate-naming': (await import('./rules/react-consistent-usestate-naming')).default,
    'react-deprecate-fc': (await import('./rules/react-deprecate-fc')).default,
  },
}