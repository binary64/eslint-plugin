# @binary64/classnames-require

> Enforce stylistic rules on the usage of 'classnames' module.
>
> - ⭐️ This rule is included in `plugin:@binary64/recommended` preset.

## Rule Details

This rule aimed at disallowing `example` identifiers.

Examples of **incorrect** code:

```jsx
/*eslint @binary64/classnames-require: error */

import cn from 'classnames'
import classNames from 'classnames'
import classnames from 'classnames'

const TRUE_BOOL = true

// These have incorrectly named default imports
const Component1 = () => <div className={cn('yourRuleName', 'yourRuleName2')} />
const Component2 = () => <div className={classNames('yourRuleName', 'yourRuleName2')} />

// These aren't using the API from 'classnames' as per their documentation:
const Component3 = () => <div className={classnames(TRUE_BOOL ? 'yourRuleName' : '')} />

// These are pointless invokation of classnames and should be simplified:
const Component4 = () => <div className={classnames('yourRuleName')} />

```

Examples of **correct** code:

```jsx
/*eslint template/example-rule: error */

import cn from 'classnames'
import classNames from 'classnames'
import classnames from 'classnames'

const TRUE_BOOL = true

const Component1 = () => <div className={classnames(styles.yourRuleName, styles.yourRuleName2)} />
const Component2 = () => <div className={classnames(styles.yourRuleName, styles.yourRuleName2)} />
const Component3 = () => <div className={classnames({ styles.yourRuleName: TRUE_BOOL })} />
const Component4 = () => <div className={styles.yourRuleName} />
```

## Options

No options are supported.

## Implementation

- [Rule source](../../src/rules/classnames-require.ts)
- [Test source](../../tests/rules/classnames-require.ts)
