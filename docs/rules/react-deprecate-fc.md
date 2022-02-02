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

// This is almost OK, however it's using third-party code instead of official React.
const ComponentThatCanHaveChildren: FC<P> = ({ test }) => {

// The flaw here is you can supply JSX children to this ccomponent, but nothing will ever complain,
// and the children will be silently lost.
const ComponentThatCanNeverHaveChildren: FC<P> = ({ test }) => {
```

Examples of **correct** code:

```jsx
/*eslint @binary64/react-deprecate-fc: error */

interface P {
  test: string
}

const ComponentThatCanHaveChildren = ({ test }: React.PropsWithChildren<P>) => {
const ComponentThatCanNeverHaveChildren = ({ test }: P) => {
```

## Options

No options are supported.

## Implementation

- [Rule source](../../src/rules/react-deprecate-fc.ts)
- [Test source](../../tests/rules/react-deprecate-fc.ts)
