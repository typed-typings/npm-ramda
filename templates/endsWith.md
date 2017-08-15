Checks if a list ends with the provided values

@func
@memberOf R
@since v0.24.0
@category List
@sig [a] -> Boolean
@sig String -> Boolean
@param {*} suffix
@param {*} list
@return {Boolean}
@example

     R.endsWith('c', 'abc')                //=> true
     R.endsWith('b', 'abc')                //=> false
     R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
     R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
