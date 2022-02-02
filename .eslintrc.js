module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 'dprint/dprint': ['error', {
    //   config: {
    //     "incremental": true,
    //     "useTabs": false,
    //     "semiColons": "asi",
    //     "quoteStyle": "preferSingle",
    //     "lineWidth": 100,
    //     "indentWidth": 2,
    //     "binaryExpression.operatorPosition": "sameLine",
    //     "excludes": [
    //       "**/node_modules",
    //       "**/*-lock.json"
    //     ],
    //     "plugins": [
    //       "https://plugins.dprint.dev/typescript-0.62.1.wasm",
    //       "https://plugins.dprint.dev/json-0.14.0.wasm",
    //       "https://plugins.dprint.dev/markdown-0.12.1.wasm"
    //     ]
    //   }
    // }]
  },
  overrides: [
    {
      files: 'scripts/**/*.ts',
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-namespace': 'off',
      },
    },
  ],
};
