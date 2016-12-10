define(["require", "exports", "index"], function (require, exports, R) {
    "use strict";
    var double = function (x) {
        return x + x;
    };
    var shout = function (x) {
        return x >= 10
            ? 'big'
            : 'small';
    };
    // check type information is not lost for lists
    var onlyNumberList = function (xs) {
        return xs;
    };
    // check type information is not lost for simple objects
    var onlyNumberObj = function (xs) {
        return xs;
    };
    var F = (function () {
        function F() {
            this.x = 'X';
            this.y = 'Y';
        }
        return F;
    }());
    var F2 = (function () {
        function F2() {
            this.a = 100;
            this.y = 1;
        }
        F2.prototype.x = function () { };
        ;
        F2.prototype.z = function () { };
        ;
        return F2;
    }());
    (function () {
        var x;
        x = R.isArrayLike('a');
        x = R.isArrayLike([1, 2, 3]);
        x = R.isArrayLike([]);
    });
    (function () {
        R.propIs(Number, 'x', { x: 1, y: 2 }); //=> true
        R.propIs(Number, 'x')({ x: 1, y: 2 }); //=> true
        R.propIs(Number)('x', { x: 1, y: 2 }); //=> true
        R.propIs(Number)('x')({ x: 1, y: 2 }); //=> true
        R.propIs(Number, 'x', { x: 'foo' }); //=> false
        // v errors with `Argument of type '"x"' is not assignable to parameter of type 'never'.`, because 'x' is not in `{}`.
        // R.propIs(Number, 'x', {});            //=> false
    });
    (function () {
        R.type({}); //=> "Object"
        R.type(1); //=> "Number"
        R.type(false); //=> "Boolean"
        R.type('s'); //=> "String"
        R.type(null); //=> "Null"
        R.type([]); //=> "Array"
        R.type(/[A-z]/); //=> "RegExp"
    });
    (function () {
        var takeTwo = R.curry(function (x, y) { return x + y; });
        var a = takeTwo(3);
    });
    (function () {
        var takesNoArg = function () { return true; };
        var takesOneArg = function (a) { return [a]; };
        var takesTwoArgs = function (a, b) { return [a, b]; };
        var takesThreeArgs = function (a, b, c) { return [a, b, c]; };
        var addFourNumbers = function (a, b, c, d) {
            return a + b + c + d;
        };
        var curriedFourNumbers = R.curry(addFourNumbers);
        var x1 = curriedFourNumbers;
        var x2 = curriedFourNumbers(1);
        var x3 = curriedFourNumbers(1)(2);
        var x4 = curriedFourNumbers(1)(2)(3);
        var x5 = curriedFourNumbers(1, 2, 4);
        var y1 = curriedFourNumbers(1)(2)(3)(4);
        var y2 = curriedFourNumbers(1, 2)(3, 4);
        var y3 = curriedFourNumbers(1, 2, 3)(4);
        R.nAry(0, takesNoArg);
        R.nAry(0, takesOneArg);
        R.nAry(1, takesTwoArgs);
        R.nAry(1, takesThreeArgs);
        var u1 = R.unary(takesOneArg);
        var u2 = R.unary(takesTwoArgs);
        var u3 = R.unary(takesThreeArgs);
        R.binary(takesTwoArgs);
        R.binary(takesThreeArgs);
        var addTwoNumbers = function (a, b) { return a + b; };
        var addTwoNumbersCurried = R.curry(addTwoNumbers);
        var inc = addTwoNumbersCurried(1);
        var z1 = inc(2);
        var z2 = addTwoNumbersCurried(2, 3);
    });
    (function () {
        var addFour = function (a) { return function (b) { return function (c) { return function (d) { return a + b + c + d; }; }; }; };
        var uncurriedAddFour = R.uncurryN(4, addFour);
        var res = uncurriedAddFour(1, 2, 3, 4); //=> 10
    });
    (function () {
        // coerceArray :: (a|[a]) -> [a]
        var coerceArray = R.unless(R.isArrayLike, R.of);
        var a = coerceArray([1, 2, 3]); //=> [1, 2, 3]
        var b = coerceArray(1); //=> [1]
    });
    (function () {
        R.nthArg(1)('a', 'b', 'c'); //=> 'b'
        R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
    });
    (function () {
        var fn = R.unapply(JSON.stringify);
        var res = R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
    });
    (function () {
        var a = R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128
    });
    (function () {
        var truncate = R.when(R.propSatisfies(R.flip(R.gt)(10), 'length'), R.pipe(R.take(10), R.append('…'), R.join('')));
        var a = truncate('12345'); //=> '12345'
        var b = truncate('0123456789ABC'); //=> '0123456789…'
    });
    /* compose */
    (function () {
        var double = function (x) {
            return x + x;
        };
        var limit10 = function (x) {
            return x >= 10;
        };
        var func = R.compose(limit10, double);
        var res = R.compose(limit10, double)(10);
        var f0 = function (s) { return +s; }; // string -> number
        var f1 = function (n) { return n === 1; }; // number -> boolean
        var f2 = R.compose(f1, f0); // string -> boolean
        // akward example that bounces types between number and string
        var g0 = function (list) { return R.map(R.inc, list); };
        var g1 = R.dropWhile(R.gt(10));
        var g2 = R.map(function (i) { return i > 5 ? 'bigger' : 'smaller'; });
        var g3 = R.all(function (i) { return i === 'smaller'; });
        var g = R.compose(g3, g2, g1, g0);
        var g_res = g([1, 2, 10, 13]);
    });
    /* pipe */
    (function () {
        var func = R.pipe(double, double, shout);
        var res = R.pipe(double, double, shout)(10);
        var capitalize = function (str) { return R.pipe(R.split(''), R.adjust(R.toUpper, 0), R.join(''))(str); };
        var f = R.pipe(Math.pow, R.negate, R.inc);
        var fr = f(3, 4); // -(3^4) + 1
    });
    /* pipeP */
    (function () {
        var res = R.pipeP(function (m) { return Promise.resolve(R.multiply(2, m)); }, function (m) { return Promise.resolve(m / 2); }, R.multiply(2))(10);
    });
    (function () {
        R.invoker(0, 'charAt', String.prototype);
        R.invoker(1, 'charAt', String.prototype, 1);
    });
    (function () {
        var range = R.juxt([Math.min, Math.max]);
        range(3, 4, 9, -3); //=> [-3, 9]
        var chopped = R.juxt([R.head, R.last]);
        chopped('longstring'); // => ["l", "g"]
    });
    var square = function (x) { return x * x; };
    var add = function (a, b) { return a + b; };
    // Adds any number of arguments together
    var addAll = function () {
        return 0;
    };
    // Basic example
    R.useWith(addAll, [double, square]);
    (function () {
        var printXPlusFive = function (x) { console.log(x + 5); };
        R.forEach(printXPlusFive, [1, 2, 3]);
        R.clone([{}, {}, {}]);
        R.clone([1, 2, 3]);
    })();
    // (() => {
    //   var printXPlusFive = function(x, i) { console.log(i + 5); };
    //   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
    // })();
    var i = function (x) { return x; };
    R.times(i, 5);
    (function () {
        var triple = function (x) { return x * 3; };
        var square = function (x) { return x * x; };
        var squareThenDoubleThenTriple = R.pipe(square, double, triple);
        squareThenDoubleThenTriple(5); //=> 150
    })();
    (function () {
        var multiply = function (a, b) { return a * b; };
        var double = R.partial(multiply, [2]);
        double(2); //=> 4
        var greet = function (salutation, title, firstName, lastName) {
            return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
        };
        var sayHello = R.partial(greet, ['Hello']);
        var sayHelloToMs = R.partial(sayHello, ['Ms.']);
        sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
        var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
        greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
    })();
    (function () {
        var numberOfCalls = 0;
        var trackedAdd = function (a, b) {
            numberOfCalls += 1;
            return a + b;
        };
        var memoTrackedAdd = R.memoize(trackedAdd);
        memoTrackedAdd(1, 2); //=> 3
        numberOfCalls; //=> 1
        memoTrackedAdd(1, 2); //=> 3
        numberOfCalls; //=> 1
        memoTrackedAdd(2, 3); //=> 5
        numberOfCalls; //=> 2
        // Note that argument order matters
        memoTrackedAdd(2, 1); //=> 3
        numberOfCalls; //=> 3
    })();
    (function () {
        var addOneOnce = R.once(function (x) { return x + 1; });
        addOneOnce(10); //=> 11
        addOneOnce(addOneOnce(50)); //=> 11
    })();
    (function () {
        var slashify = R.wrap(R.flip(R.add)('/'), function (f, x) {
            return R.match(/\/$/, x) ? x : f(x);
        });
        slashify('a'); //=> 'a/'
        slashify('a/'); //=> 'a/'
    })();
    (function () {
        var a0 = R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
        var a1 = R.match(/a/, 'b'); //=> []
        var a2 = R.match(/a/, null); //=> TypeError: null does not have a method named "match"
    });
    (function () {
        var numbers = [1, 2, 3];
        var add = function (a, b) {
            return a + b;
        };
        R.reduce(add, 10, numbers); //=> 16;
    })();
    (function () {
        var plus3 = R.add(3);
    })();
    (function () {
        var pairs = [['a', 1], ['b', 2], ['c', 3]];
        var flattenPairs = function (acc, pair) {
            return acc.concat(pair);
        };
        R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
    })();
    (function () {
        var isOdd = function (acc, x) { return x % 2 === 1; };
        var xs = [1, 3, 5, 60, 777, 800];
        R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
        var ys = [2, 4, 6];
        R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
    });
    (function () {
        var values = { x: 1, y: 2, z: 3 };
        var prependKeyAndDouble = function (num, key, obj) {
            return key + (num * 2);
        };
        R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
    });
    (function () {
        var a = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); //=> [2, 4, 6, 4, 5, 6]
        var b = R.of([1]); //=> [[1]]
        var c = R.of(1);
    });
    (function () {
        var a1 = R.empty([1, 2, 3, 4, 5]); //=> []
        var a2 = R.empty([1, 2, 3]); //=> []
        var a3 = R.empty('unicorns'); //=> ''
        var a4 = R.empty({ x: 1, y: 2 }); //=> {}
    });
    (function () {
        R.length([1, 2, 3]); //=> 3
    });
    (function () {
        var isEven = function (n) {
            return n % 2 === 0;
        };
        var filterIndexed = R.addIndex(R.filter);
        R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
        var lastTwo = function (val, idx, list) {
            return list.length - idx <= 2;
        };
        filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
        var isOdd = function (n) {
            return n % 2 === 1;
        };
        R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
    });
    (function () {
        var isNotFour = function (x) {
            return !(x === 4);
        };
        R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
        R.take(2, [1, 2, 3, 4]); //=> [1, 2]
    });
    (function () {
        var f = function (n) { return n > 50 ? false : [-n, n + 10]; };
        var a = R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
        var b = R.unfold(f); //=> [-10, -20, -30, -40, -50]
        var c = b(10);
    });
    /*****************************************************************
     * Function category
     */
    (function () {
        var mergeThree = function (a, b, c) {
            return ([]).concat(a, b, c);
        };
        mergeThree(1, 2, 3); //=> [1, 2, 3]
        var flipped = R.flip(mergeThree);
        flipped(1, 2, 3); //=> [2, 1, 3]
    });
    /*********************
     * List category
     ********************/
    (function () {
        var lessThan2 = R.flip(R.lt)(2);
        var lessThan3 = R.flip(R.lt)(3);
        R.all(lessThan2)([1, 2]); //=> false
        R.all(lessThan3)([1, 2]); //=> true
    });
    (function () {
        var lessThan0 = R.flip(R.lt)(0);
        var lessThan2 = R.flip(R.lt)(2);
        R.any(lessThan0)([1, 2]); //=> false
        R.any(lessThan2)([1, 2]); //=> true
    });
    (function () {
        R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
        R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
        R.aperture(7, [1, 2, 3, 4, 5]); //=> []
        R.aperture(7)([1, 2, 3, 4, 5]); //=> []
    });
    (function () {
        R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
        R.append('tests')(['write', 'more']); //=> ['write', 'more', 'tests']
        R.append('tests', []); //=> ['tests']
        R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
        R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
        R.append(['tests'])(['write', 'more']); //=> ['write', 'more', ['tests']]
        R.append(['tests'])(['write', 'more']); //=> ['write', 'more', ['tests']]
    });
    (function () {
        var duplicate = function (n) {
            return [n, n];
        };
        R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
        R.chain(duplicate)([1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
    });
    (function () {
        R.clamp(1, 10, -1); // => 1
        R.clamp(1, 10)(11); // => 10
        R.clamp(1)(10, 4); // => 4
        R.clamp('a', 'd', 'e'); // => 'd'
    });
    (function () {
        R.concat([], []); //=> []
        R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
        R.concat([4, 5, 6])([1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
        R.concat('ABC')('DEF'); // 'ABCDEF'
    });
    (function () {
        R.contains(3)([1, 2, 3]); //=> true
        R.contains(3, [1, 2, 3]); //=> true
        R.contains(4)([1, 2, 3]); //=> false
        R.contains({})([{}, {}]); //=> false
        var obj = {};
        R.contains(obj)([{}, obj, {}]); //=> true
    });
    (function () {
        R.drop(3, [1, 2, 3, 4, 5, 6, 7]); //=> [4,5,6,7]
        R.drop(3)([1, 2, 3, 4, 5, 6, 7]); //=> [4,5,6,7]
        R.drop(3, 'ramda'); //=> 'ram'
        R.drop(3)('ramda'); //=> 'ram'
    });
    (function () {
        R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
        R.dropLast(2)(['foo', 'bar', 'baz']); //=> ['foo']
        R.dropLast(3, 'ramda'); //=> 'ra'
        R.dropLast(3)('ramda'); //=> 'ra'
    });
    (function () {
        var lteThree = function (x) { return x <= 3; };
        R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
    });
    (function () {
        var lteTwo = function (x) {
            return x <= 2;
        };
        R.dropWhile(lteTwo, [1, 2, 3, 4]); //=> [3, 4]
        R.dropWhile(lteTwo)([1, 2, 3, 4]); //=> [3, 4]
    });
    (function () {
        var isEven = function (n) {
            return n % 2 === 0;
        };
        // filter works with lists...
        R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
        var isEvenFn = R.filter(isEven);
        isEvenFn([1, 2, 3, 4]);
        // ... but also objects
        R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }); //=> {b:2, d:4}
        var isEvenFnObj = R.filter(isEven);
        // see that we did not break anything
        // and we kept type information
        onlyNumberList(R.filter(isEven, [1, 2, 3, 4]));
        onlyNumberObj(R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }));
    });
    (function () {
        var lastTwo = function (val, idx, list) {
            return list.length - idx <= 2;
        };
        var filterIndexed = R.addIndex(R.filter);
        filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
        var lastTwoFn = filterIndexed(lastTwo);
        lastTwoFn([8, 6, 7, 5, 3, 0, 9]);
    });
    (function () {
        var xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
        R.find(R.propEq('a', 2))(xs); //=> {a: 2}
        R.find(R.propEq('a', 4))(xs); //=> undefined
    });
    (function () {
        var tasks = [];
        var a = R.find(function (task) { return task.id === 1; }, tasks); // this works
        var f = R.find(function (task) { return task.id === 1; });
        var b = f(tasks); // this doesn't work works`
    });
    (function () {
        var xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
        var a = R.findIndex(R.propEq('a', 2));
        var b = a(xs); //=> 1
        R.findIndex(R.propEq('a', 4))(xs); //=> -1
        R.findIndex(function (x) { return x === 1; }, [1, 2, 3]);
    });
    (function () {
        var xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
        R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
        R.findLast(R.propEq('a', 4))(xs); //=> undefined
    });
    (function () {
        var xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
        R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
        R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
        R.findLastIndex(function (x) { return x === 1; }, [1, 2, 3]);
    });
    (function () {
        var user1 = { address: { zipCode: 90210 } };
        var user2 = { address: { zipCode: 55555 } };
        var user3 = { name: 'Bob' };
        var users = [user1, user2, user3];
        var isFamous = R.pathEq(['address', 'zipCode'], 90210);
        var a = R.filter(isFamous, users); //=> [ user1 ]
    });
    (function () {
        var xs = { a: '1', b: '0' };
        R.propEq('a', '1', xs); //=> true
        R.propEq('a', '4', xs); //=> false
    });
    (function () {
        var xs = { a: 1, b: 0 };
        R.propEq('a', 1, xs); //=> true
        R.propEq('a', 4, xs); //=> false
    });
    (function () {
        var xs = { a: '1', b: '0' };
        R.propEq('a', '1', xs); //=> true
        R.propEq('a', '4', xs); //=> false
    });
    (function () {
        var xs = { a: 1, b: 0 };
        R.propEq('a', 1, xs); //=> true
        R.propEq('a', 4, xs); //=> false
    });
    ;
    (function () {
        var xs = { a: 1, b: 0 };
        R.propEq('a', 1, xs); //=> true
        R.propEq('a', 4, xs); //=> false
    });
    (function () {
        var printXPlusFive = function (x) { console.log(x + 5); };
        R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
        R.forEach(printXPlusFive)([1, 2, 3]); //=> [1, 2, 3]
        //-> 6
        //-> 7
        //-> 8
    });
    (function () {
        var plusFive = function (num, idx, list) { list[idx] = num + 5; };
        R.addIndex(R.forEach)(plusFive)([1, 2, 3]); //=> [6, 7, 8]
    });
    (function () {
        var byGrade = R.groupBy(function (student) {
            var score = student.score;
            return score < 65 ? 'F' :
                score < 70 ? 'D' :
                    score < 80 ? 'C' :
                        score < 90 ? 'B' : 'A';
        });
        var students = [{ name: 'Abby', score: 84 },
            { name: 'Eddy', score: 58 },
            { name: 'Jack', score: 69 }];
        byGrade(students);
    });
    (function () {
        R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
        // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]
        R.groupWith(function (a, b) { return a % 2 === b % 2; }, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
        // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
        var isVowel = function (a) { return R.contains(a, 'aeiou') ? a : ''; };
        R.groupWith(R.eqBy(isVowel), 'aestiou');
        // ['ae', 'st', 'iou']
    });
    (function () {
        R.head(['fi', 'fo', 'fum']); //=> 'fi'
        R.head([10, 'ten']); // => 10
        R.head(['10', 10]); // => '10'
    });
    (function () {
        var list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];
        var a1 = R.indexBy(R.prop('id'), list);
        var a2 = R.indexBy(R.prop('id'))(list);
        var a3 = R.indexBy(R.prop('id'))(list);
    });
    (function () {
        R.indexOf(3, [1, 2, 3, 4]); //=> 2
        R.indexOf(10)([1, 2, 3, 4]); //=> -1
    });
    (function () {
        R.init(['fi', 'fo', 'fum']); //=> ['fi', 'fo']
    });
    (function () {
        R.insert(2, 5, [1, 2, 3, 4]); //=> [1,2,5,3,4]
        R.insert(2)(5, [1, 2, 3, 4]); //=> [1,2,5,3,4]
        R.insert(2, 5)([1, 2, 3, 4]); //=> [1,2,5,3,4]
        R.insert(2)(5)([1, 2, 3, 4]); //=> [1,2,5,3,4]
    });
    (function () {
        var a1 = R.insertAll(2, [10, 11, 12], [1, 2, 3, 4]);
        var a2 = R.insertAll(2)([10, 11, 12], [1, 2, 3, 4]);
        var a3 = R.insertAll(2, [10, 11, 12])([1, 2, 3, 4]);
        var a4 = R.insertAll(2)([10, 11, 12])([1, 2, 3, 4]);
    });
    (function () {
        var a1 = R.intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [4, 3]
        var a2 = R.intersection([1, 2, 3, 4])([7, 6, 5, 4, 3]); //=> [4, 3]
    });
    (function () {
        var buffaloSpringfield = [
            { id: 824, name: 'Richie Furay' },
            { id: 956, name: 'Dewey Martin' },
            { id: 313, name: 'Bruce Palmer' },
            { id: 456, name: 'Stephen Stills' },
            { id: 177, name: 'Neil Young' }
        ];
        var csny = [
            { id: 204, name: 'David Crosby' },
            { id: 456, name: 'Stephen Stills' },
            { id: 539, name: 'Graham Nash' },
            { id: 177, name: 'Neil Young' }
        ];
        var a = R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
        //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    });
    (function () {
        R.intersection([1, 2, 4], [1, 2, 3]); // => [1,2]
        R.intersection([1, 2, 4])([1, 2, 3]); // => [1,2]
    });
    (function () {
        var buffaloSpringfield = [
            { id: 824, name: 'Richie Furay' },
            { id: 956, name: 'Dewey Martin' },
            { id: 313, name: 'Bruce Palmer' },
            { id: 456, name: 'Stephen Stills' },
            { id: 177, name: 'Neil Young' }
        ];
        var csny = [
            { id: 204, name: 'David Crosby' },
            { id: 456, name: 'Stephen Stills' },
            { id: 539, name: 'Graham Nash' },
            { id: 177, name: 'Neil Young' }
        ];
        R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
        //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
        R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield, csny);
        R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny);
    });
    (function () {
        var numbers = [1, 2, 3, 4];
        var transducer = R.compose(R.map(R.add(1)), R.take(2));
        R.into([], transducer, numbers); //=> [2, 3]
        R.into([])(transducer, numbers); //=> [2, 3]
        R.into([], transducer)(numbers); //=> [2, 3]
        var intoArray = R.into([]);
        intoArray(transducer, numbers); //=> [2, 3]
        intoArray(transducer)(numbers); //=> [2, 3]
    });
    (function () {
        var spacer = R.join(' ');
        spacer(['a', 2, 3.4]); //=> 'a 2 3.4'
        R.join('|', [1, 2, 3]); //=> '1|2|3'
    });
    (function () {
        R.last(['fi', 'fo', 'fum']); //=> 'fum'
    });
    (function () {
        R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); //=> 6
        R.lastIndexOf(10, [1, 2, 3, 4]); //=> -1
        R.lastIndexOf(10)([1, 2, 3, 4]); //=> -1
    });
    (function () {
        R.length([]); //=> 0
        R.length([1, 2, 3]); //=> 3
    });
    (function () {
        var headLens = R.lensIndex(0);
        headLens([10, 20, 30, 40]); //=> 10
        headLens.set('mu', [10, 20, 30, 40]); //=> ['mu', 20, 30, 40]
        R.view(headLens, ['a', 'b', 'c']); //=> 'a'
        R.set(headLens, 'x', ['a', 'b', 'c']); //=> ['x', 'b', 'c']
        R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
    });
    (function () {
        var double = function (x) {
            return x * 2;
        };
        R.map(double, [1, 2, 3]); //=> [2, 4, 6]
        // functor
        // I'm sorry, I have no clue how to make this example work with proper functor typing
        // const stringFunctor = {
        //     map: (fn: (c: number) => number) => {
        //         var chars = "Ifmmp!Xpsme".split("");
        //         return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join("");
        //     }
        // };
        // R.map((x: number) => x-1, stringFunctor); // => "Hello World"
    });
    (function () {
        var digits = ['1', '2', '3', '4'];
        var append = function (a, b) {
            return [a + b, a + b];
        };
        R.mapAccum(append, '0', digits); //=> ['01234', ['01', '012', '0123', '01234']]
        R.mapAccum(append)('0', digits); //=> ['01234', ['01', '012', '0123', '01234']]
        R.mapAccum(append, '0')(digits); //=> ['01234', ['01', '012', '0123', '01234']]
        R.mapAccum(append)('0')(digits); //=> ['01234', ['01', '012', '0123', '01234']]
    });
    (function () {
        var digits = ['1', '2', '3', '4'];
        var append = function (a, b) {
            return [a + b, a + b];
        };
        R.mapAccumRight(append, '0', digits); //=> ['04321', ['04321', '0432', '043', '04']]
        R.mapAccumRight(append)('0', digits); //=> ['04321', ['04321', '0432', '043', '04']]
        R.mapAccumRight(append, '0')(digits); //=> ['04321', ['04321', '0432', '043', '04']]
        R.mapAccumRight(append)('0')(digits); //=> ['04321', ['04321', '0432', '043', '04']]
    });
    (function () {
        var squareEnds = function (elt, idx, list) {
            if (idx === 0 || idx === list.length - 1) {
                return elt * elt;
            }
            return elt;
        };
        R.addIndex(R.map)(squareEnds, [8, 5, 3, 0, 9]); //=> [64, 5, 3, 0, 81]
        R.addIndex(R.map)(squareEnds)([8, 5, 3, 0, 9]); //=> [64, 5, 3, 0, 81]
    });
    (function () {
        R.none(R.isNaN, [1, 2, 3]); //=> true
        R.none(R.isNaN, [1, 2, 3, NaN]); //=> false
        R.none(R.isNaN)([1, 2, 3, NaN]); //=> false
    });
    (function () {
        var list = ['foo', 'bar', 'baz', 'quux'];
        R.nth(1, list); //=> 'bar'
        R.nth(-1, list); //=> 'quux'
        R.nth(-99, list); //=> undefined
        R.nth(-99)(list); //=> undefined
    });
    (function () {
        R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
        R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
        R.partition(function (x) { return x > 2; }, [1, 2, 3, 4]);
        R.partition(function (x) { return x > 2; })([1, 2, 3, 4]);
        R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' }); // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
    });
    (function () {
        var a1 = R.pluck('a', [{ a: 1 }, { a: 2 }]); //=> [1, 2]
        var b1 = R.pluck(0, [[1, 2], [3, 4]]); //=> [1, 3]
        var a2 = R.pluck('a')([{ a: 1 }, { a: 2 }]); //=> [1, 2]
        var b2 = R.pluck(0)([[1, 2], [3, 4]]); //=> [1, 3]
    });
    (function () {
        R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
        R.prepend('fee')(['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
    });
    (function () {
        R.range(1, 5); //=> [1, 2, 3, 4]
        R.range(50)(53); //=> [50, 51, 52]
    });
    (function () {
        var numbers = [1, 2, 3];
        var add = function (a, b) {
            return a + b;
        };
        R.reduce(add, 10, numbers); //=> 16
        R.reduce(add)(10, numbers); //=> 16
        R.reduce(add, 10)(numbers); //=> 16
    });
    (function () {
        var reduceToNamesBy = R.reduceBy(function (acc, student) { return acc.concat(student.name); }, []);
        var namesByGrade = reduceToNamesBy(function (student) {
            var score = student.score;
            return score < 65 ? 'F' :
                score < 70 ? 'D' :
                    score < 80 ? 'C' :
                        score < 90 ? 'B' : 'A';
        });
        var students = [{ name: 'Lucy', score: 92 },
            { name: 'Drew', score: 85 },
            { name: 'Bart', score: 62 }];
        var names = namesByGrade(students);
        // {
        //   'A': ['Lucy'],
        //   'B': ['Drew']
        //   'F': ['Bart']
        // }
    });
    (function () {
        var reduceIndexed = R.addIndex(R.reduce);
        var letters = ['a', 'b', 'c'];
        var objectify = function (accObject, elem, idx, list) {
            accObject[elem] = idx;
            return accObject;
        };
        reduceIndexed(objectify, {}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
        reduceIndexed(objectify)({}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
        reduceIndexed(objectify, {})(letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
    });
    (function () {
        var pairs = [['a', 1], ['b', 2], ['c', 3]];
        var flattenPairs = function (acc, pair) {
            return acc.concat(pair);
        };
        R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
        R.reduceRight(flattenPairs, [])(pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
        R.reduceRight(flattenPairs)([], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
    });
    (function () {
        var isOdd = function (n) {
            return n % 2 === 1;
        };
        var a1 = R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
        var a2 = R.reject(isOdd);
        var a3 = R.reject(isOdd)([1, 2, 3, 4]); //=> [2, 4]
    });
    (function () {
        var lastTwo = function (val, idx, list) {
            return list.length - idx <= 2;
        };
        var rejectIndexed = R.addIndex(R.reject);
        var a1 = rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
        var a2 = rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
    });
    (function () {
        R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
        R.remove(2, 3)([1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
        R.remove(2)(3, [1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
    });
    (function () {
        R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
        var obj = {};
        var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
        repeatedObjs[0] === repeatedObjs[1]; //=> true
    });
    (function () {
        R.reverse([1, 2, 3]); //=> [3, 2, 1]
        R.reverse([1, 2]); //=> [2, 1]
        R.reverse([1]); //=> [1]
        R.reverse([]); //=> []
    });
    (function () {
        var numbers = [1, 2, 3, 4];
        R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
        R.scan(R.multiply, 1)(numbers); //=> [1, 1, 2, 6, 24]
        R.scan(R.multiply)(1, numbers); //=> [1, 1, 2, 6, 24]
    });
    (function () {
        var xs = R.range(0, 10);
        R.slice(2, 5, xs); //=> [2, 3, 4]
        R.slice(2, 5)(xs); //=> [2, 3, 4]
        R.slice(2)(5, xs); //=> [2, 3, 4]
        var str = 'Hello World';
        R.slice(2, 5, str); //=> 'llo'
        R.slice(2, 5)(str); //=> 'llo'
        R.slice(2)(5, str); //=> 'llo'
    });
    (function () {
        var diff = function (a, b) { return a - b; };
        R.sort(diff, [4, 2, 7, 5]); //=> [2, 4, 5, 7]
        R.sort(diff)([4, 2, 7, 5]); //=> [2, 4, 5, 7]
    });
    (function () {
        var fn = R.cond([
            [R.equals(0), R.always('water freezes at 0°C')],
            [R.equals(100), R.always('water boils at 100°C')],
            [R.T, function (temp) { return 'nothing special happens at ' + temp + '°C'; }]
        ]);
        var a = fn(0); //=> 'water freezes at 0°C'
        var b = fn(50); //=> 'nothing special happens at 50°C'
        var c = fn(100); //=> 'water boils at 100°C'
    });
    (function () {
        R.tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
        R.tail([1, 2, 3]); //=> [2, 3]
    });
    (function () {
        R.take(3, [1, 2, 3, 4, 5]); //=> [1,2,3]
        var members = ["Paul Desmond", "Bob Bates", "Joe Dodge", "Ron Crotty", "Lloyd Davis", "Joe Morello", "Norman Bates",
            "Eugene Wright", "Gerry Mulligan", "Jack Six", "Alan Dawson", "Darius Brubeck", "Chris Brubeck",
            "Dan Brubeck", "Bobby Militello", "Michael Moore", "Randy Jones"];
        var takeFive = R.take(5);
        takeFive(members); //=> ["Paul Desmond","Bob Bates","Joe Dodge","Ron Crotty","Lloyd Davis"]
    });
    (function () {
        R.take(3, "Example"); //=> "Exa"
        var takeThree = R.take(3);
        takeThree("Example"); //=> "Exa"
    });
    (function () {
        var a = R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
        var b = R.takeLast(2)(['foo', 'bar', 'baz']); //=> ['bar', 'baz']
        var c = R.takeLast(3, 'ramda'); //=> 'mda'
        var d = R.takeLast(3)('ramda'); //=> 'mda'
    });
    (function () {
        var isNotOne = function (x) { return x !== 1; };
        var a = R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
        var b = R.takeLastWhile(isNotOne)([1, 2, 3, 4]); //=> [2, 3, 4]
    });
    (function () {
        var isNotFour = function (x) {
            return !(x === 4);
        };
        R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
        R.takeWhile(isNotFour)([1, 2, 3, 4]); //=> [1, 2, 3]
    });
    (function () {
        var sayX = function (x) { return console.log('x is ' + x); };
        var a = R.tap(sayX, 100); //=> 100
    });
    (function () {
        var a = R.test(/^x/, 'xyz'); //=> true
        var b = R.test(/^y/)('xyz'); //=> false
    });
    (function () {
        var a1 = R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
        var a2 = R.times(R.identity)(5); //=> [0, 1, 2, 3, 4]
    });
    (function () {
        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
                this.x = x;
                this.y = y;
            }
            Point.prototype.toStringn = function () {
                return 'new Point(' + this.x + ', ' + this.y + ')';
            };
            return Point;
        }());
        ;
        R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
        R.toString(42); //=> '42'
        R.toString('abc'); //=> '"abc"'
        R.toString([1, 2, 3]); //=> '[1, 2, 3]'
        R.toString({ foo: 1, bar: 2, baz: 3 }); //=> '{"bar": 2, "baz": 3, "foo": 1}'
        R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
    });
    (function () {
        var numbers = [1, 2, 3, 4];
        var transducer = R.compose(R.map(R.add(1)), R.take(2));
        var fn = R.flip(R.append);
        R.transduce(transducer, fn, [], numbers); //=> [2, 3]
        R.transduce(transducer, fn, [])(numbers); //=> [2, 3]
        R.transduce(transducer, fn)([], numbers); //=> [2, 3]
        R.transduce(transducer)(fn, [], numbers); //=> [2, 3]
    });
    // () => {
    //     // Returns `Nothing` if the given divisor is `0`
    //     safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
    //
    //     R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
    //     R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
    // }
    (function () {
        var a = R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]); //=> [[1, 2, 3], ['a', 'b', 'c']]
        var b = R.transpose([[1, 2, 3], ['a', 'b', 'c']]); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
        var c = R.transpose([[10, 11], [20], [], [30, 31, 32]]); //=> [[10, 20, 30], [11, 31], [32]]
    });
    (function () {
        var x = R.prop('x');
        var a = R.tryCatch(R.prop('x'), R.F)({ x: true }); //=> true
        var b = R.tryCatch(R.prop('x'), R.F)(null); //=> false
    });
    (function () {
        R.uniq([1, 1, 2, 1]); //=> [1, 2]
        R.uniq([{}, {}]); //=> [{}, {}]
        R.uniq([1, '1']); //=> [1, '1']
    });
    (function () {
        var strEq = function (a, b) { return String(a) === String(b); };
        R.uniqWith(strEq, [1, '1', 2, 1]); //=> [1, 2]
        R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
        R.uniqWith(strEq)([{}, {}]); //=> [{}]
        R.uniqWith(strEq)([1, '1', 1]); //=> [1]
        R.uniqWith(strEq)(['1', 1, 1]); //=> ['1']
    });
    (function () {
        R.equals(R.unnest([1, [2], [[3]]]), [1, 2, [3]]); //=> true
        R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]); //=> true
    });
    (function () {
        R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
        R.xprod([1, 2])(['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
    });
    (function () {
        R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
        R.zip([1, 2, 3])(['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
    });
    (function () {
        R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
        R.zipObj(['a', 'b', 'c'])([1, 2, 3]); //=> {a: 1, b: 2, c: 3}
    });
    (function () {
        var f = function (x, y) {
            // ...
        };
        R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
        R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
        R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    });
    /*****************************************************************
     * Object category
     */
    (function () {
        var a = R.assoc('c', 3, { a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
        var b = R.assoc('c')(3, { a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
        var c = R.assoc('c', 3)({ a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
    });
    (function () {
        var a1 = R.dissoc('b', { a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}
        var a2 = R.dissoc('b', { a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}
        var a4 = R.dissoc('b')({ a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}
    });
    (function () {
        var a = R.assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 } } }); //=> {a: {b: {c: 42}}}
        var b = R.assocPath(['a', 'b', 'c'])(42, { a: { b: { c: 0 } } }); //=> {a: {b: {c: 42}}}
        var c = R.assocPath(['a', 'b', 'c'], 42)({ a: { b: { c: 0 } } }); //=> {a: {b: {c: 42}}}
    });
    (function () {
        var a1 = R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 } } }); //=> {a: {b: {}}}
        // optionally specify return type
        var a2 = R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 } } }); //=> {a: {b: {}}}
        var a3 = R.dissocPath(['a', 'b', 'c'])({ a: { b: { c: 42 } } }); //=> {a: {b: {}}}
    });
    (function () {
        var obj1 = [{}, {}, {}];
        var obj2 = [{ a: 1 }, { a: 2 }, { a: 3 }];
        var a1 = R.clone(obj1);
        var a2 = R.clone(obj2);
        var a3 = R.clone({});
        var a4 = R.clone(10);
        var a5 = R.clone('foo');
        var a6 = R.clone(Date.now());
    });
    (function () {
        var o1 = { a: 1, b: 2, c: 3, d: 4 };
        var o2 = { a: 10, b: 20, c: 3, d: 40 };
        var a1 = R.eqProps('a', o1, o2); //=> false
        var a2 = R.eqProps('c', o1, o2); //=> true
        var a3 = R.eqProps('c');
        var a4 = R.eqProps('c', o1);
    });
    (function () {
        var a1 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) }, { name: 'Tomato', elapsed: 100, remaining: 1400 });
        var a2 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) })({ name: 'Tomato', elapsed: 100, remaining: 1400 });
        ;
        var test = { a: 1, b: 2 };
        var a3 = R.evolve({ a: R.add(1) }, test);
    });
    (function () {
        var tomato = { firstName: 'Tomato ', data: { elapsed: 100, remaining: 1400 }, id: 123 };
        var transformations = {
            firstName: R.trim,
            lastName: R.trim,
            data: { elapsed: R.add(1), remaining: R.add(-1) }
        };
        var a = R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
        var b = R.evolve(transformations)(tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
    });
    (function () {
        var hasName = R.has('name');
        var a1 = hasName({ name: 'alice' }); //=> true
        var a2 = hasName({ name: 'bob' }); //=> true
        var a3 = hasName({}); //=> false
        var point = { x: 0, y: 0 };
        var pointHas = R.flip(R.has)(point);
        var b1 = pointHas('x'); //=> true
        var b2 = pointHas('y'); //=> true
        var b3 = pointHas('z'); //=> false
    });
    var Rectangle = (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.area = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    ;
    (function () {
        var square = new Rectangle(2, 2);
        R.hasIn('width', square); //=> true
        R.hasIn('area', square); //=> true
        R.flip(R.hasIn)(square)('area'); //=> true
    });
    (function () {
        var raceResultsByFirstName = {
            first: 'alice',
            second: 'jake',
            third: 'alice'
        };
        R.invert(raceResultsByFirstName);
        //=> { 'alice': ['first', 'third'], 'jake':['second'] }
    });
    (function () {
        var raceResults0 = {
            first: 'alice',
            second: 'jake'
        };
        R.invertObj(raceResults0);
        //=> { 'alice': 'first', 'jake':'second' }
        // Alternatively:
        var raceResults1 = ['alice', 'jake'];
        R.invertObj(raceResults1);
        //=> { 'alice': '0', 'jake':'1' }
    });
    (function () {
        R.keys({ a: 1, b: 2, c: 3 }); //=> ['a', 'b', 'c']
    });
    (function () {
        var f = new F();
        R.keysIn(f); //=> ['x', 'y']
    });
    (function () {
        var xLens = R.lens(R.prop('x'), R.assoc('x'));
        R.view(xLens, { x: 1, y: 2 }); //=> 1
        R.set(xLens, 4, { x: 1, y: 2 }); //=> {x: 4, y: 2}
        R.set(xLens)(4, { x: 1, y: 2 }); //=> {x: 4, y: 2}
        R.set(xLens, 4)({ x: 1, y: 2 }); //=> {x: 4, y: 2}
        R.over(xLens, R.negate, { x: 1, y: 2 }); //=> {x: -1, y: 2}
        R.over(xLens, R.negate)({ x: 1, y: 2 }); //=> {x: -1, y: 2}
        R.over(xLens)(R.negate, { x: 1, y: 2 }); //=> {x: -1, y: 2}
    });
    (function () {
        var headLens = R.lensIndex(0);
        R.view(headLens, ['a', 'b', 'c']); //=> 'a'
        R.set(headLens, 'x', ['a', 'b', 'c']); //=> ['x', 'b', 'c']
        R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
    });
    (function () {
        var xLens = R.lensProp('x');
        R.view(xLens, { x: 1, y: 2 }); //=> 1
        R.set(xLens, 4, { x: 1, y: 2 }); //=> {x: 4, y: 2}
        R.over(xLens, R.negate, { x: 1, y: 2 }); //=> {x: -1, y: 2}
    });
    (function () {
        var xyLens = R.lensPath(['x', 'y']);
        R.view(xyLens, { x: { y: 2, z: 3 } }); //=> 2
        R.set(xyLens, 4, { x: { y: 2, z: 3 } }); //=> {x: {y: 4, z: 3}}
        R.over(xyLens, R.negate, { x: { y: 2, z: 3 } }); //=> {x: {y: -2, z: 3}}
    });
    (function () {
        R.keys({ a: 1, b: 2, c: 3 }); //=> ['a', 'b', 'c']
    });
    (function () {
        var f = new F();
        R.keysIn(f); //=> ['x', 'y']
    });
    (function () {
        var headLens = R.lens(function get(arr) { return arr[0]; }, function set(val, arr) { return [val].concat(arr.slice(1)); });
        headLens([10, 20, 30, 40]); //=> 10
        // headLens.set('mu', [10, 20, 30, 40]); //=> ['mu', 20, 30, 40] // errors: [ts] Argument of type '"mu"' is not assignable to parameter of type 'number'.
        var phraseLens = R.lens(function get(obj) { return obj.phrase; }, function set(val, obj) {
            var out = R.clone(obj);
            out.phrase = val;
            return out;
        });
        var obj1 = { phrase: 'Absolute filth . . . and I LOVED it!' };
        var obj2 = { phrase: "What's all this, then?" };
        phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
        phraseLens(obj2); // => "What's all this, then?"
        phraseLens.set('Ooh Betty', obj1); //=> { phrase: 'Ooh Betty'}
    });
    (function () {
        var phraseLens = R.lensProp('phrase');
        var obj1 = { phrase: 'Absolute filth . . . and I LOVED it!' };
        var obj2 = { phrase: "What's all this, then?" };
        phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
        phraseLens(obj2); // => "What's all this, then?"
        phraseLens.set('Ooh Betty', obj1); //=> { phrase: 'Ooh Betty'}
    });
    (function () {
        R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
        //=> { 'name': 'fred', 'age': 40 }
        var resetToDefault = R.flip(R.merge)({ x: 0 });
        resetToDefault({ x: 5, y: 2 }); //=> {x: 0, y: 2}
    });
    (function () {
        var a = R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]); //=> {foo:1,bar:2,baz:3}
        var b = R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]); //=> {foo:2,bar:2}
    });
    (function () {
        var a = R.mergeWith(R.concat, { a: true, values: [10, 20] }, { b: true, values: [15, 35] });
        //=> { a: true, b: true, values: [10, 20, 15, 35] }
    });
    (function () {
        var concatValues = function (k, l, r) { return k == 'values' ? R.concat(l, r) : r; };
        R.mergeWithKey(concatValues, { a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] });
        var merge = R.mergeWithKey(concatValues);
        merge({ a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] });
    });
    (function () {
        var a1 = R.pathOr('N/A', ['a', 'b'], { a: { b: 2 } }); //=> 2
        var a2 = R.pathOr('N/A', ['a', 'b'])({ a: { b: 2 } }); //=> 2
        var a3 = R.pathOr('N/A', ['a', 'b'], { c: { b: 2 } }); //=> "N/A"
        var a4 = R.pathOr({ c: 2 })(['a', 'b'], { c: { b: 2 } }); //=> "N/A"
    });
    (function () {
        var a1 = R.pathSatisfies(function (a) { return a === 'foo'; }, ['a', 'b', 'c'], { a: { b: { c: 'foo' } } }); //=> true
        var a2 = R.pathSatisfies(function (a) { return a === 'bar'; }, ['a', 'b', 'c'], { a: { b: { c: 'foo' } } }); //=> false
        var a3 = R.pathSatisfies(function (a) { return a === 1; }, ['a', 'b', 'c'], { a: { b: { c: 1 } } }); //=> true
        var a4 = R.pathSatisfies(function (a) { return a !== 1; }, ['a', 'b', 'c'], { a: { b: { c: 2 } } }); //=> true
        var a5 = R.pathSatisfies(function (a) { return a === 1; })(['a', 'b', 'c'], { a: { b: { c: 1 } } }); //=> true
        var a6 = R.pathSatisfies(function (a) { return a === 1; }, ['a', 'b', 'c'])({ a: { b: { c: 1 } } }); //=> true
        var a7 = R.pathSatisfies(function (a) { return a === 1; })(['a', 'b', 'c'])({ a: { b: { c: 1 } } }); //=> true
    });
    (function () {
        var isPositive = function (n) {
            return n > 0;
        };
        var a1 = R.pickBy(isPositive, { a: 1, b: 2, c: -1, d: 0, e: 5 }); //=> {a: 1, b: 2, e: 5}
        var containsBackground = function (val) {
            return val.bgcolor;
        };
        var colors = { 1: { color: 'read' }, 2: { color: 'black', bgcolor: 'yellow' } };
        R.pickBy(containsBackground, colors); //=> {2: {color: 'black', bgcolor: 'yellow'}}
        var isUpperCase = function (val, key) { return key.toUpperCase() === key; };
        R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); //=> {A: 3, B: 4}
    });
    (function () {
        var a1 = R.pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
        // the following should errror: e/f are not keys in these objects
        // const a2 = R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
        // const a3 = R.pick(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
        // const a4 = R.pick(['a', 'e', 'f'], [1, 2, 3, 4]); //=> {a: 1}
    });
    (function () {
        var matchPhrases = R.compose(R.objOf('must'), R.map(R.objOf('match_phrase')));
        matchPhrases(['foo', 'bar', 'baz']);
    });
    (function () {
        R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, c: 3}
        R.omit(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, c: 3}
    });
    (function () {
        R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
    });
    (function () {
        R.pair('foo', 'bar'); //=> ['foo', 'bar']
        var p = R.pair('foo', 1); //=> ['foo', 'bar']
        var x = p[0];
        var y = p[1];
    });
    (function () {
        var headLens = R.lensIndex(0);
        R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
    });
    (function () {
        R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
        R.pickAll(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
        R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, e: undefined, f: undefined}
        R.pickAll(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, e: undefined, f: undefined}
    });
    (function () {
        var isUpperCase = function (val, key) { return key.toUpperCase() === key; };
        R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); //=> {A: 3, B: 4}
    });
    (function () {
        var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
        var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
        var kids = [abby, fred];
        R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
    });
    (function () {
        var x = R.prop('x', { x: 100 }); //=> 100
        // errors: `Argument of type '"x"' is not assignable to parameter of type 'never'.` cuz no 'x' in {}
        // const a = R.prop('x', {}); //=> undefined
    });
    (function () {
        var alice = {
            name: 'ALICE',
            age: 101
        };
        var favorite = R.prop('favoriteLibrary');
        var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
        var s1 = favorite(alice); //=> undefined
        var s2 = favoriteWithDefault(alice); //=> 'Ramda'
    });
    (function () {
        var a = R.propSatisfies(function (x) { return x > 0; }, 'x', { x: 1, y: 2 }); //=> true
        var b = R.propSatisfies(function (x) { return x > 0; }, 'x')({ x: 1, y: 2 }); //=> true
        var c = R.propSatisfies(function (x) { return x > 0; })('x')({ x: 1, y: 2 }); //=> true
    });
    (function () {
        R.props(['x', 'y'], { x: 1, y: 2 }); //=> [1, 2]
        R.props(['c', 'a', 'b'], { b: 2, a: 1 }); //=> [undefined, 1, 2]
        var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
        fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }); //=> 'Tony Bullet-Tooth'
    });
    (function () {
        var a = R.toPairs({ a: 1, b: 2, c: 3 }); //=> [['a', 1], ['b', 2], ['c', 3]]
    });
    (function () {
        var f = new F();
        var a1 = R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
        var a2 = R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
    });
    (function () {
        var a = R.values({ a: 1, b: 2, c: 3 }); //=> [1, 2, 3]
    });
    (function () {
        var f = new F();
        var a = R.valuesIn(f); //=> ['X', 'Y']
    });
    (function () {
        var spec = { x: 2 };
        var x1 = R.where(spec, { w: 10, x: 2, y: 300 }); //=> true
        var x2 = R.where(spec, { x: 1, y: 'moo', z: true }); //=> false
        var x3 = R.where(spec)({ w: 10, x: 2, y: 300 }); //=> true
        var x4 = R.where(spec)({ x: 1, y: 'moo', z: true }); //=> false
        // There's no way to represent the below functionality in typescript
        // per http://stackoverflow.com/a/29803848/632495
        // will need a work around.
        var spec2 = { x: function (val, obj) { return val + obj.y > 10; } };
        R.where(spec2, { x: 2, y: 7 }); //=> false
        R.where(spec2, { x: 3, y: 8 }); //=> true
        var xs = [{ x: 2, y: 1 }, { x: 10, y: 2 }, { x: 8, y: 3 }, { x: 10, y: 4 }];
        R.filter(R.where({ x: 10 }), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
        R.filter(R.where({ x: 10 }))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
    });
    (function () {
        // pred :: Object -> Boolean
        var pred = R.whereEq({ a: 1, b: 2 });
        pred({ a: 1 }); //=> false
        pred({ a: 1, b: 2 }); //=> true
        pred({ a: 1, b: 2, c: 3 }); //=> true
        pred({ a: 1, b: 1 }); //=> false
        R.whereEq({ a: 'one' }, { a: 'one' }); // => true
    });
    (function () {
        var a = R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
    });
    (function () {
        var mapIndexed = R.addIndex(R.map);
        var a0 = mapIndexed(function (val, idx) { return idx + '-' + val; })(['f', 'o', 'o', 'b', 'a', 'r']);
        var a1 = R.mapIndexed(function (val, idx) { return idx + '-' + val; })(['f', 'o', 'o', 'b', 'a', 'r']);
        //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
        var a2 = R.mapIndexed(function (rectangle, idx) { return rectangle.area() * idx; }, [new Rectangle(1, 2), new Rectangle(4, 7)]);
        //=> [2, 56]
    });
    (function () {
        var reduceIndexed = R.addIndex(R.reduce);
        reduceIndexed(function (acc, val, idx) {
            return acc + ',' + idx + '-' + val;
        }, '', ['f', 'o', 'o', 'b', 'a', 'r']);
        //=> ['0-f,1-o,2-o,3-b,4-a,5-r']
    });
    (function () {
        var t = R.always('Tee');
        var x = t(); //=> 'Tee'
    });
    (function () {
        var x = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); //=> [2, 4, 6, 4, 5, 6]
        var y = R.ap([R.multiply(2), R.add(3)])([1, 2, 3]); //=> [2, 4, 6, 4, 5, 6]
    });
    (function () {
        var nums = [1, 2, 3, -99, 42, 6, 7];
        R.apply(Math.max, nums); //=> 42
        R.apply(Math.max)(nums); //=> 42
    });
    (function () {
        var getMetrics = R.applySpec({
            sum: R.add, nested: { mul: R.multiply }
        });
        var result = getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
    });
    (function () {
        var takesThreeArgs = function (a, b, c) {
            return [a, b, c];
        };
        takesThreeArgs.length; //=> 3
        takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
        var takesTwoArgs = R.binary(takesThreeArgs);
        takesTwoArgs.length; //=> 2
        // Only 2 arguments are passed to the wrapped function
        // errors: "Supplied parameters do not match any signature of call target." (can only use 2 arguments now)
        // takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
    });
    (function () {
        var f = R.pipe(Math.pow, R.negate, R.inc);
        f(3, 4); // -(3^4) + 1
    });
    (function () {
        var cmp = R.comparator(function (a, b) {
            return a.age < b.age;
        });
        var people = [
            { name: 'Agy', age: 33 }, { name: 'Bib', age: 15 }, { name: 'Cari', age: 16 }
        ];
        R.sort(cmp, people);
    });
    (function () {
        var add = function (a, b) { return a + b; };
        var multiply = function (a, b) { return a * b; };
        var subtract = function (a, b) { return a - b; };
        //≅ multiply( add(1, 2), subtract(1, 2) );
        var x = R.converge(multiply, [add, subtract])(1, 2); //=> -3
        var add3 = function (a, b, c) { return a + b + c; };
        var y = R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4
    });
    (function () {
        var f0 = R.compose(Math.pow);
        var f1 = R.compose(R.negate, Math.pow);
        var f2 = R.compose(R.inc, R.negate, Math.pow);
        var f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
        var f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
        var f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
        var x0 = f0(3, 4); // -(3^4) + 1
        var x1 = f1(3, 4); // -(3^4) + 1
        var x2 = f2(3, 4); // -(3^4) + 1
        var x3 = f3(3, 4); // -(3^4) + 1
        var x4 = f4(3, 4); // -(3^4) + 1
        var x5 = f5(3, 4); // -(3^4) + 1
    });
    (function () {
        var fn = function (a, b, c) {
            return [a, b, c];
        };
        var gn = R.compose(R.length, fn);
        var x = gn('Hello', 4, "world");
    });
    (function () {
        var Circle = function (r) {
            this.r = r;
            this.colors = Array.prototype.slice.call(arguments, 1);
        };
        Circle.prototype.area = function () { return Math.PI * Math.pow(this.r, 2); };
        var circleN = R.constructN(2, Circle);
        var c1 = circleN(1, 'red');
        var circle = R.construct(Circle);
        var c1 = circle(1, 'red');
    })();
    /*****************************************************************
     * Relation category
     */
    (function () {
        var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
        var letters = R.split('', 'abcABCaaaBBc');
        R.countBy(Math.floor)(numbers); //=> {'1': 3, '2': 2, '3': 1}
        R.countBy(R.toLower)(letters); //=> {'a': 5, 'b': 4, 'c': 3}
    });
    (function () {
        R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2]
        R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); //=> [7,6,5]
    });
    (function () {
        function cmp(x, y) { return x.a === y.a; }
        var l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
        var l2 = [{ a: 3 }, { a: 4 }];
        var a1 = R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
        var a2 = R.differenceWith(cmp)(l1, l2); //=> [{a: 1}, {a: 2}]
        var a3 = R.differenceWith(cmp)(l1)(l2); //=> [{a: 1}, {a: 2}]
    });
    (function () {
        R.equals(1, 1); //=> true
        R.equals('2', '1'); //=> false
        R.equals([1, 2, 3], [1, 2, 3]); //=> true
        var a = {};
        a.v = a;
        var b = {};
        b.v = b;
        R.equals(a, b); //=> true
    });
    (function () {
        var a1 = R.identity(1); //=> 1
        var obj = {};
        var a2 = R.identity([1, 2, 3]);
        var a3 = R.identity(['a', 'b', 'c']);
        var a4 = R.identity(obj) === obj; //=> true
    });
    (function () {
        var o = {};
        R.identical(o, o); //=> true
        R.identical(1, 1); //=> true
        R.identical('2', '1'); //=> false
        R.identical([], []); //=> false
        R.identical(0, -0); //=> false
        R.identical(NaN, NaN); //=> true
    });
    (function () {
        R.path(['a', 'b'], { a: { b: 2 } }); //=> 2
        R.path(['a', 'b'])({ a: { b: 2 } }); //=> 2
    });
    (function () {
        var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
        var alice = {
            name: 'ALICE',
            age: 101
        };
        var bob = {
            name: 'Bob',
            age: -10
        };
        var clara = {
            name: 'clara',
            age: 314.159
        };
        var people = [clara, bob, alice];
        sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
    });
    (function () {
        var a = R.splitAt(1, [1, 2, 3]); //=> [[1], [2, 3]]
        var b = R.splitAt(1)([1, 2, 3]); //=> [[1], [2, 3]]
        var c = R.splitAt(5, 'hello world'); //=> ['hello', ' world']
        var d = R.splitAt(-1, 'foobar'); //=> ['fooba', 'r']
    });
    (function () {
        var a = R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]); //=> [[1], [2, 3, 1, 2, 3]]
        var b = R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]); //=> [[1], [2, 3, 1, 2, 3]]
    });
    (function () {
        R.add(2, 3); //=>  5
        R.add(7)(10); //=> 17
    });
    (function () {
        R.dec(42); //=> 41
    });
    (function () {
        R.divide(71, 100); //=> 0.71
        var half = R.flip(R.divide)(2);
        half(42); //=> 21
        var reciprocal = R.divide(1);
        reciprocal(4); //=> 0.25
    });
    (function () {
        R.gt(2, 6); //=> false
        R.gt(2, 0); //=> true
        R.gt(2, 2); //=> false
        R.flip(R.gt)(2)(10); //=> true
        R.gt(2)(10); //=> false
    });
    (function () {
        R.gte(2, 6); //=> false
        R.gte(2, 0); //=> true
        R.gte(2, 2); //=> false
        R.flip(R.gte)(2)(10); //=> true
        R.gte(2)(10); //=> false
    });
    (function () {
        R.isNaN(NaN); //=> true
        R.isNaN(undefined); //=> false
        R.isNaN({}); //=> false
    });
    (function () {
        R.lt(2, 6); //=> true
        R.lt(2, 0); //=> false
        R.lt(2, 2); //=> false
        R.lt(5)(10); //=> true
        R.flip(R.lt)(5)(10); //=> false // right-sectioned currying
    });
    (function () {
        R.lte(2, 6); //=> true
        R.lte(2, 0); //=> false
        R.lte(2, 2); //=> true
        R.flip(R.lte)(2)(1); //=> true
        R.lte(2)(10); //=> true
    });
    (function () {
        R.mathMod(-17, 5); //=> 3
        R.mathMod(17, 5); //=> 2
        R.mathMod(17, -5); //=> NaN
        R.mathMod(17, 0); //=> NaN
        R.mathMod(17.2, 5); //=> NaN
        R.mathMod(17, 5.3); //=> NaN
        var clock = R.flip(R.mathMod)(12);
        clock(15); //=> 3
        clock(24); //=> 0
        var seventeenMod = R.mathMod(17);
        seventeenMod(3); //=> 2
    });
    (function () {
        var x = R.max(7, 3); //=> 7
        var y = R.max('a', 'z'); //=> 'z'
    });
    (function () {
        function cmp(obj) { return obj.x; }
        var a = { x: 1 }, b = { x: 2 }, c = { x: 3 }, d = { x: "a" }, e = { x: "z" };
        R.maxBy(cmp, a, c); //=> {x: 3}
        R.maxBy(cmp)(a, c); //=> {x: 3}
        R.maxBy(cmp)(a)(b);
        R.maxBy(cmp)(d)(e);
    });
    (function () {
        var a = R.mean([2, 7, 9]); //=> 6
        var b = R.mean([]); //=> NaN
    });
    (function () {
        var a = R.median([7, 2, 10, 9]); //=> 8
        var b = R.median([]); //=> NaN
    });
    (function () {
        var x = R.min(9, 3); //=> 3
        var y = R.min('a', 'z'); //=> 'a'
    });
    (function () {
        function cmp(obj) { return obj.x; }
        var a = { x: 1 }, b = { x: 2 }, c = { x: 3 }, d = { x: "a" }, e = { x: "z" };
        R.minBy(cmp, a, b); //=> {x: 1}
        R.minBy(cmp)(a, b); //=> {x: 1}
        R.minBy(cmp)(a)(c);
        R.minBy(cmp, d, e);
    });
    (function () {
        R.modulo(17, 3); //=> 2
        // JS behavior:
        R.modulo(-17, 3); //=> -2
        R.modulo(17, -3); //=> 2
        var isOdd = R.flip(R.modulo)(2);
        isOdd(42); //=> 0
        isOdd(21); //=> 1
    });
    (function () {
        var double = R.multiply(2);
        var triple = R.multiply(3);
        double(3); //=>  6
        triple(4); //=> 12
        R.multiply(2, 5); //=> 10
    });
    (function () {
        R.negate(42); //=> -42
    });
    (function () {
        R.product([2, 4, 6, 8, 100, 1]); //=> 38400
    });
    (function () {
        R.subtract(10, 8); //=> 2
        var minus5 = R.flip(R.subtract)(5);
        minus5(17); //=> 12
        var complementaryAngle = R.subtract(90);
        complementaryAngle(30); //=> 60
        complementaryAngle(72); //=> 18
    });
    (function () {
        R.sum([2, 4, 6, 8, 100, 1]); //=> 121
    });
    (function () {
        var a = R.symmetricDifference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2,7,6,5]
        var b = R.symmetricDifference([7, 6, 5, 4, 3])([1, 2, 3, 4]); //=> [7,6,5,1,2]
    });
    (function () {
        var eqA = R.eqBy(R.prop('a'));
        var l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
        var l2 = [{ a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];
        R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
        R.symmetricDifferenceWith(eqA)(l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
        var c = R.symmetricDifferenceWith(eqA)(l1); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
    });
    /*****************************************************************
     * String category
     */
    (function () {
        R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
        R.replace('foo', 'bar')('foo foo foo'); //=> 'bar foo foo'
        R.replace('foo')('bar')('foo foo foo'); //=> 'bar foo foo'
        R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
        // Use the "g" (global) flag to replace all occurrences:
        R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
        R.replace(/foo/g, 'bar')('foo foo foo'); //=> 'bar bar bar'
        R.replace(/foo/g)('bar')('foo foo foo'); //=> 'bar bar bar'
    });
    /*****************************************************************
     * Is category
     */
    (function () {
        R.is(Object, {}); //=> true
        R.is(Object)({}); //=> true
        R.is(Number, 1); //=> true
        R.is(Number)(1); //=> true
        R.is(Object, 1); //=> false
        R.is(Object)(1); //=> false
        R.is(String, 's'); //=> true
        R.is(String)('s'); //=> true
        R.is(String, new String('')); //=> true
        R.is(String)(new String('')); //=> true
        R.is(Object, new String('')); //=> true
        R.is(Object)(new String('')); //=> true
        R.is(Object, 's'); //=> false
        R.is(Object)('s'); //=> false
        R.is(Number, {}); //=> false
        R.is(Number)({}); //=> false
    });
    /*****************************************************************
     * Logic category
     */
    (function () {
        var gt10 = function (x) { return x > 10; };
        var even = function (x) { return x % 2 === 0; };
        var f = R.allPass([gt10, even]);
        f(11); //=> false
        f(12); //=> true
    });
    (function () {
        R.and(false, true); //=> false
        R.and(0, []); //=> 0
        R.and(0)([]); //=> 0
        R.and(null, ''); //=> null
        var Why = (function (val) {
            var why;
            why.val = val;
            why.and = function (x) {
                return this.val && x;
            };
            return Why;
        })(true);
        var why = new Why(true);
        R.and(why, false); // false
    });
    (function () {
        var gt10 = function (x) { return x > 10; };
        var even = function (x) { return x % 2 === 0; };
        var f = R.anyPass([gt10, even]);
        f(11); //=> true
        f(8); //=> true
        f(9); //=> false
    });
    (function () {
        var gt10 = function (x) { return x > 10; };
        var even = function (x) { return x % 2 === 0; };
        var f = R.both(gt10, even);
        var g = R.both(gt10)(even);
        f(100); //=> true
        f(101); //=> false
    });
    (function () {
        var isEven = function (n) { return n % 2 === 0; };
        var isOdd = R.complement(isEven);
        isOdd(21); //=> true
        isOdd(42); //=> false
    });
    (function () {
        R.eqBy(Math.abs, 5, -5); //=> true
        R.eqBy(Math.abs)(5, -5); //=> true
        R.eqBy(Math.abs, 5)(-5); //=> true
    });
    (function () {
        var defaultTo42 = R.defaultTo(42);
        defaultTo42(null); //=> 42
        defaultTo42(undefined); //=> 42
        defaultTo42('Ramda'); //=> 'Ramda'
    });
    (function () {
        var gt10 = function (x) { return x > 10; };
        var even = function (x) { return x % 2 === 0; };
        var f = R.either(gt10, even);
        var g = R.either(gt10)(even);
        f(101); //=> true
        f(8); //=> true
    });
    (function () {
        // Flatten all arrays in the list but leave other values alone.
        var flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));
        flattenArrays([[0], [[10], [8]], 1234, {}]); //=> [[0], [10, 8], 1234, {}]
        flattenArrays([[[10], 123], [8, [10]], "hello"]); //=> [[10, 123], [8, 10], "hello"]
    });
    (function () {
        R.isEmpty([1, 2, 3]); //=> false
        R.isEmpty([]); //=> true
        R.isEmpty(''); //=> true
        R.isEmpty(null); //=> false
        R.isEmpty({}); //=>true
        R.isEmpty({ a: 1 }); //=> false
    });
    (function () {
        R.not(true); //=> false
        R.not(false); //=> true
        R.not(0); // => true
        R.not(1); // => false
    });
    var Why = (function () {
        function Why(val) {
            this.val = val;
        }
        Why.prototype.or = function (x) {
            return this.val && x;
        };
        return Why;
    }());
    (function () {
        var x0 = R.or(false, true); //=> false
        var x1 = R.or(0, []); //=> []
        var x2 = R.or(0)([]); //=> []
        var x3 = R.or(null, ''); //=> ''
        var why = new Why(true);
        why.or(true);
        var x4 = R.or(why, false); // false
    });
    (function () {
        R.intersperse(',', ['foo', 'bar']); //=> ['foo', ',', 'bar']
        R.intersperse(0, [1, 2]); //=> [1, 0, 2]
        R.intersperse(0, [1]); //=> [1]
    });
    (function () {
        // #109
        function grepSomethingRecursively(grepPatterns) {
            if (R.is(Array, grepPatterns)) {
                R.forEach(function () { }, grepPatterns);
            }
        }
    });
    (function () {
        // #90
        var map = function (func) {
            return func('xx')(1);
        };
        var map2 = function (func) {
            return func('xx', 'x');
        };
        // will work only with proposed changes
        map(R.assoc('xxx'));
        map2(R.assoc('xxx'));
    });
});
// UNRESOLVED:
/*

() => {
    // #29
    const letters: string[] = R.pipe(R.append("a"), R.uniq)(["a", "b", "c"]);

    const strArrArr: string[][] = R.pipe(
        R.split(''),
        R.map(letter => ([ letter ]))
    )("dave");

    const b: number = R.pipe(
        R.prop<string>('name'),
        R.length
    )({ name: 'dave' });

    let build: string;
    let mapPackages = R.partial(R.map, [test => test.package]);
    let filterBuild = R.partial(R.filter, [test => test.build === build]);
    let getPackages = R.compose(R.uniq, mapPackages, filterBuild);
    this.packages = getPackages(this._tests);
    // ^ expected: ??

    interface Foo {
        build: string,
        package: string
    }
    const build2 = 'dev';
    let mapPackages2 = R.map((test: Foo) => test.package);
    let filterBuild2 = R.filter((test: Foo) => test.build === build2);
    let getPackages2 = R.compose(R.uniq, mapPackages2, filterBuild2);
    let foos = [{
        build: 'dev',
        package: 'devPackage'
    }, {
        build: 'prod',
        package: 'prodPackage'
    }, {
        build: 'dev',
        package: 'devPackage'
    }];
    let foosFiltered = getPackages2(foos);
    // ^ expected: ??
}

() => {
    // #69
    const sectioneditems = { sections: [
        {items: []},
        {items: []}
    ]}
    const elem = "Hello"
    R.over(R.compose(R.lensProp("sections"), R.lensIndex(sectioneditems.sections.length - 1), R.lensProp("items")), R.append(elem), sectioneditems)
}

() => {
    // #73
    let filterMatrix = function (v: number, m: Array<Array<number>>): Array<number> {
    return R.chain(R.filter((c) => c == v), m)
    }
    let b = [
        [0, 1],
        [1, 0]
    ]
    console.log(filterMatrix(1, b)) // --> [1, 1]

    // compiles
    let filterMatrix2 = function (v: number, m: Array<Array<number>>): Array<number> {
        return R.chain((r) => R.filter((c) => c == v, r), m)
    }

    // also compiles
    let mapMatrix3 = function (fn, m: Array<Array<number>>): Array<number> {
    return R.chain(R.map((c) => fn(c)), m)
    }
}

() => {
    // #78: curry loses generics
    // : <T>R.CurriedFn3<R.Pred<T>, T, T[], T[]>
    // : R.CurriedFn3<R.Pred<any>, any, any[], any[]>
    let updateBy = R.curry(<T>(pred: R.Pred<T>, val: T, array: T[]): T[] => {
        let i = R.findIndex(pred, array);
        if (i >= 0) {
            return R.update(i, val, array);
        } else {
            return array;
        }
    });
    let res: number[] = updateBy((n: number) => n > 1, 0, [1,2,3]);
}

() => {
    // #86
    let a: { [index: string]: string } = R.fromPairs([['1','A'], ['2','B'], ['3','C']])
    let b: { [index: string]: string } = R.compose(R.fromPairs)([[1,'A'], [2,'B'], [3,'C']])
    let c: { [index: string]: string } = R.compose(R.fromPairs)([['1','A'], ['2','B'], ['3','C']])
}

() => {
    // #92: lose generics in compose
    const x: <T>(v: T) => T = R.cond([
        [R.F, R.F],
        [R.T, R.identity]
    ]);
    // ^ also can't infer cond paths
    const y: R.CurriedFn1<number, number> = R.compose(x, R.inc);
}

() => {
    // #101: compose can't guess types for generic functions
    interface SomeStruct {
        a: number[];
        b: string[];
        c: { [index: string]: string };
    }
    const x: SomeStruct = {
        'a': [],
        'b': [],
        'c': {},
    };
    // const fun = <(y: SomeStruct) => SomeStruct>R.compose(        // annotated: works
    const fun = R.compose(
        R.assoc('a', [1, 2, 3]),
        R.assoc('b', ['a', 'b', 'c']),
        R.assoc('c', { 'k': 'v'})
    );
    let struct: SomeStruct = fun(x);
}

() => {
    // #118: flatten
    let numbers: number[] = R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
    //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}
*/
