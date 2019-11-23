Takes a spec object and a test object; returns true if the test satisfies
the spec. Each of the spec's own properties must be a predicate function.
Each predicate is applied to the value of the corresponding property of the
test object. `where` returns true if at least one of the predicates return true, 
false otherwise.

`whereAny` is well suited to declaratively expressing constraints for other
functions such as [`filter`](#filter) and [`find`](#find).

@func
@memberOf R
@category Object
@sig {String: (* -> Boolean)} -> {String: *} -> Boolean
@param {Object} spec
@param {Object} testObj
@return {Boolean}
@see R.propSatisfies, R.whereEq
@example

     // pred :: Object -> Boolean
     const pred = R.whereAny({
       a: R.equals('foo'),
       b: R.complement(R.equals('xxx')),
       x: R.gt(R.__, 10),
       y: R.lt(R.__, 20)
     });

     pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
     pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
     pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
     pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
     pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
