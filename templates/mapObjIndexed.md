An Object-specific version of [`map`](#map). The function is applied to three
arguments: *(value, key, obj)*. If only the value is significant, use
[`map`](#map) instead.

@func
@memberOf R
@since v0.9.0
@category Object
@sig ((*, String, Object) -> *) -> Object -> Object
@param {Function} fn
@param {Object} obj
@return {Object}
@see R.map
@example

     var values = { x: 1, y: 2, z: 3 };
     var prependKeyAndDouble = (num, key, obj) => key + (num * 2);

     R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
