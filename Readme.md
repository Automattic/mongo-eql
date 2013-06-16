
# mongo-eql

Applies the MongoDB equality semantics for a comparison between
two datastructures.

## Example

```js
eql(null, undefined) // true
eql({}, {}) // true
```

## API

### eql(a, b):Boolean

Compares `a` with `b` and returns `true` or `false`.
