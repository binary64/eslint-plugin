/* eslint-disable @typescript-eslint/no-var-requires */
import { default as recommended } from './configs/recommended';

export = {
  configs: {
    recommended,
  },
  rules: {
    'formik-require-generic': require('./rules/formik-require-generic').default,
    'classnames-require': require('./rules/classnames-require').default,
    'react-consistent-usestate-naming': require('./rules/react-consistent-usestate-naming').default,
    'react-deprecate-fc': require('./rules/react-deprecate-fc').default,
  },
}
