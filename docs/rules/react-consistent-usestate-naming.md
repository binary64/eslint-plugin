# @binary64/react-consistent-usestate-naming

> Enforce stylistic rules on the usage of `React.useState`
>
> - ⭐️ This rule is included in `plugin:@binary64/recommended` preset.

Forces the second element of the tuple returned by React.useState to be named with respect to the first element. For example `[somethingHere, setSomethingHere]`.

## Rule Details

This rule aimed at disallowing `example` identifiers.

Examples of **incorrect** code:

```js
/*eslint @binary64/react-consistent-usestate-naming: error */

const Component = () => {
    
    // This is bad because "is something here" doesn't match "something here"
    const [isSomethingHere, setSomethingHere] = useState()

    // This is bad because we aren't reading the state
    const [, setSomethingHere] = useState()

    // This is bad because we aren't setting the state
    const [somethingHere] = useState()

    // This is bad because we aren't deconstructing the React import
    const [somethingHere, setSomethingHere] = React.useState()

}
```

Examples of **correct** code:

```js
/*eslint @binary64/react-consistent-usestate-naming: error */

const Component = () => {
    
    const [isSomethingHere, setIsSomethingHere] = useState()
    const [somethingHere, setSomethingHere] = useState()
    const [somethingHere, setSomethingHere] = useState()
    const [somethingHere, setSomethingHere] = useState()

}
```

## Options

No options are supported.

## Implementation

- [Rule source](../../src/rules/react-consistent-usestate-naming.ts)
- [Test source](../../tests/rules/react-consistent-usestate-naming.ts)
