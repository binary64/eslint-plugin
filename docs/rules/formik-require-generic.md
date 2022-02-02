# @binary64/formik-require-generic

> Force the use of generics when using Formik component
>
> - ⭐️ This rule is included in `plugin:@binary64/recommended` preset.

This is an example.

## Rule Details

Formik with no generic typing produces values of type `any`. It is best practice to use strongly typed form values.

Examples of **incorrect** code:

```jsx
/*eslint @binary64/formik-require-generic: error */

<Formik />
<Formik<any> />
```

Examples of **correct** code:

```jsx
/*eslint @binary64/formik-require-generic: error */

interface FormTypes {
  test: string
}

<Formik<FormTypes> />
```

## Options

Nothing.

## Implementation

- [Rule source](../../src/rules/formik-require-generic.ts)
- [Test source](../../tests/rules/formik-require-generic.ts)
