# @binary64/react-deprecate-fc

> Prevents the use of React.FC
>
> - ⭐️ This rule is included in `plugin:@binary64/recommended` preset.

`React.FC` is not part of the 'react' module. It is a community-driven module called '@types/react'. For this reason, it is preferred to use the built-in React typings which are as follows:

## Rule Details

Examples of **incorrect** code:

```jsx
/*eslint @binary64/react-deprecate-fc: error */

interface P {
  test: string
}
const ComponentThatCanHaveChildren = ({ test }: React.PropsWithChildren<P>) => {

interface P {
  test: string
}
const ComponentThatCanNeverHaveChildren = ({ test }: P) => {
```

Examples of **correct** code:

```jsx
/*eslint @binary64/react-deprecate-fc: error */

interface P {
  test: string
}
const ComponentThatCanHaveChildren = ({ test }: React.PropsWithChildren<P>) => {

interface P {
  test: string
}
const ComponentThatCanNeverHaveChildren = ({ test }: P) => {
```

## Options

Nothing.

## Implementation

- [Rule source](../../src/rules/react-deprecate-fc.ts)
- [Test source](../../tests/rules/react-deprecate-fc.ts)
