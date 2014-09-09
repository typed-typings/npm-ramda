/// <reference path="ramda.d.ts" />
import R = require('ramda');

R.substring(0, 4, '1234567');
R.substringFrom(4, '1234567');
R.substringTo(8, 'abcdefghijklm');

R.isArrayLike([1,2,3]);
R.isArrayLike([]);

var takesNoArg = function() { return true; };
var takesOneArg = function(a) { return [a]; };
var takesTwoArgs = function(a, b) { return [a, b]; };
var takesThreeArgs = function(a, b, c) { return [a, b, c]; };

var addFourNumbers = function(a, b, c, d) {
  return a + b + c + d;
};

R.curry(addFourNumbers);

R.nAry(0, takesNoArg);
R.nAry(0, takesOneArg);
R.nAry(1, takesTwoArgs);
R.nAry(1, takesThreeArgs);

R.unary(takesOneArg);
R.unary(takesTwoArgs);
R.unary(takesThreeArgs);

R.binary(takesTwoArgs);
R.binary(takesThreeArgs);

R.invoker('charAt', String.prototype);
R.invoker('charAt', String.prototype, 1);

var double = function(y) { return y * 2; };
var square = function(x) { return x * x; };
var add = function(a, b) { return a + b; };
// Adds any number of arguments together
var addAll = function() {
  return 0;
};

// Basic example
R.useWith(addAll, double, square);

(function() {
  var printXPlusFive = function(x) { console.log(x + 5); };
  R.forEach(printXPlusFive, [1, 2, 3]);
  R.clone([{},{},{}])
  R.clone([1,2,3]);
}());

(function() {
  var printXPlusFive = function(x, i) { console.log(i + 5); };
  R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
}());

var i = function(x) {return x;};
R.times(i, 5);

(function() {
  var triple = function(x: number): number { return x * 3; };
  var double = function(x: number): number { return x * 2; };
  var square = function(x: number): number { return x * x; };
  var squareThenDoubleThenTriple = R.pipe(square, double, triple);
  squareThenDoubleThenTriple(5); //=> 150

  var mergeThree = function(a: number, b: number, c: number): number[] {
    return ([]).concat(a, b, c);
  };
  mergeThree(1, 2, 3); //=> [1, 2, 3]
  R.flip(mergeThree)('1', 2, 3); //=> [2, 1, 3]
}());
