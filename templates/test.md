Determines whether a given string matches a given regular expression.

@func
@memberOf R
@since v0.12.0
@category String
@sig RegExp -> String -> Boolean
@param {RegExp} pattern
@param {String} str
@return {Boolean}
@see R.match
@example

     R.test(/^x/, 'xyz'); //=> true
     R.test(/^y/, 'xyz'); //=> false
