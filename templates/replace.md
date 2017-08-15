Replace a substring or regex match in a string with a replacement.

@func
@memberOf R
@since v0.7.0
@category String
@sig RegExp|String -> String -> String -> String
@param {RegExp|String} pattern A regular expression or a substring to match.
@param {String} replacement The string to replace the matches with.
@param {String} str The String to do the search and replacement in.
@return {String} The result.
@example

     R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
     R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'

     // Use the "g" (global) flag to replace all occurrences:
     R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
