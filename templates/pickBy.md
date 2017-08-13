Returns a partial copy of an object containing only the keys that satisfy
the supplied predicate.

@func
@memberOf R
@since v0.8.0
@category Object
@sig (v, k -> Boolean) -> {k: v} -> {k: v}
@param {Function} pred A predicate to determine whether or not a key
       should be included on the output object.
@param {Object} obj The object to copy from
@return {Object} A new object with only properties that satisfy `pred`
        on it.
@see R.pick, R.filter
@example

     var isUpperCase = (val, key) => key.toUpperCase() === key;
     R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
