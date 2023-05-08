# Hello world javascript action
[![Test][test-badge]][test]

This action provides a semantic version from a raw version input.

## Inputs

### `versioning`

**Required** The `string` including the version to coerce.

## Outputs

### `version`

The semantic version coerced from `versioning`

## Example usage

```
uses: tynn-xyz/semantic-version@v1
with:
  versioning: 'v1'
```

  [test]: https://github.com/tynn-xyz/semantic-version/actions
  [utest-badge]: https://github.com/tynn-xyz/semantic-version/workflows/Test/badge.svg
