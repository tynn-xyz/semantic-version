# Hello world javascript action
[![units-test][units-test-badge]][units-test]

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

  [units-test]: https://github.com/tynn-xyz/semantic-version/actions
  [units-test-badge]: https://github.com/tynn-xyz/semantic-version/workflows/units-test/badge.svg
