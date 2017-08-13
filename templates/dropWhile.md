Returns a new list excluding the leading elements of a given list which
satisfy the supplied predicate function. It passes each value to the supplied
predicate function, skipping elements while the predicate function returns
`true`. The predicate function is applied to one argument: *(value)*.

Dispatches to the `dropWhile` method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

@func
@memberOf R
@since v0.9.0
@category List
@sig (a -> Boolean) -> [a] -> [a]
@param {Function} fn The function called per iteration.
@param {Array} list The collection to iterate over.
@return {Array} A new array.
@see R.takeWhile, R.transduce, R.addIndex
@example

     var lteTwo = x => x <= 2;

     R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
