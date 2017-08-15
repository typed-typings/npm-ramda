Makes a shallow clone of an object, omitting the property at the given path.
Note that this copies and flattens prototype properties onto the new object
as well. All non-primitive properties are copied by reference.

@func
@memberOf R
@since v0.11.0
@category Object
@typedefn Idx = String | Int
@sig [Idx] -> {k: v} -> {k: v}
@param {Array} path The path to the value to omit
@param {Object} obj The object to clone
@return {Object} A new object without the property at path
@see R.assocPath
@example

     R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
