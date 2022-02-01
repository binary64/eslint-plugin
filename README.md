# @binary64/eslint-plugin

<!--
[![npm version](https://img.shields.io/npm/v/eslint-plugin-xxxx.svg)](https://www.npmjs.com/package/eslint-plugin-xxxx)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-xxxx.svg)](http://www.npmtrends.com/eslint-plugin-xxxx)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-xxxx.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-xxxx)
[![Coverage Status](https://codecov.io/gh/mysticatea/eslint-plugin-xxxx/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-xxxx)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-xxxx.svg)](https://david-dm.org/mysticatea/eslint-plugin-xxxx)
-->

A collection of ESLint plugins.

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```bash
npm install --save-dev eslint @binary64/eslint-plugin
yarn add -D eslint @binary64/eslint-plugin
```

### Supported versions

- Node.js v16 or newer.
- ESLint v8 or newer.

## Usage

Write your config file such as `.eslintrc.yml`.

```yml
plugins:
  - @binary64
rules:
  @binary64/example-rule: error
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `@binary64/recommended` ... enables the recommended rules.

## Rules

<!--RULE_TABLE_BEGIN-->

### Stylistic Issues

| Rule ID                                           | Description      |     |
| :------------------------------------------------ | :--------------- | :-: |
| [xxxx/example-rule](./docs/rules/example-rule.md) | An example rule. | ⭐️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [GitHub Releases]()

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests.
- `npm run update` updates the package version. And it updates `src/configs/recommended.ts`, `lib/index.ts`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.
