import * as R from './index';

declare var console: any
var s: string;
var b: boolean;
var n: number;
var sr: string[];
var br: boolean[];
var nr: number[];
var or: Object[];
var ar: any[];
var no: R.Dictionary<number>;
var so: R.Dictionary<string>;
var ao: R.Dictionary<any>;
var u: undefined;

let double = (x: number): number => x + x;

var shout = function(x: number): string {
    return x >= 10
        ? 'big'
        : 'small'
};

// check type information is not lost for lists
var onlyNumberList = function(xs: number[]): number[] {
  return xs;
}

// check type information is not lost for simple objects
var onlyNumberObj = function(xs: {[key:string]: number}): {[key:string]: number} {
  return xs;
}


class F {
    x = 'X';
    y = 'Y';
}
class F2 {
    a = 100;
    y = 1;
    x(){};
    z() {};
}

// isArrayLike
() => {
    var b = R.isArrayLike('a');
    var b = R.isArrayLike([1,2,3]);
    var b = R.isArrayLike([]);
};

// propIs
(() => {
    var b = R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
    var b = R.propIs(Number, 'x')({x: 1, y: 2});  //=> true
    var b = R.propIs(Number)('x', {x: 1, y: 2});  //=> true
    var b = R.propIs(Number)('x')({x: 1, y: 2});  //=> true
    var b = R.propIs(Number, 'x', {x: 'foo'});    //=> false
    // v errors with `Argument of type '"x"' is not assignable to parameter of type 'never'.`, because 'x' is not in `{}`.
    // var b = R.propIs(Number, 'x', {});            //=> false
});

// type
(() => {
    var s = R.type({}); //=> "Object"
    var s = R.type(1); //=> "Number"
    var s = R.type(false); //=> "Boolean"
    var s = R.type('s'); //=> "String"
    var s = R.type(null); //=> "Null"
    var s = R.type([]); //=> "Array"
    var s = R.type(/[A-z]/); //=> "RegExp"
});

// curry
() => {
    const takeTwo = R.curry((x: number, y: number) => x + y)
    const a: (y: number) => number = takeTwo(3);
}

// unary, binary, nAry
() => {
    var takesNoArg = function() { return true; };
    var takesOneArg = function(a: number) { return [a]; };
    var takesTwoArgs = function(a: number, b: number) { return [a, b]; };
    var takesThreeArgs = function(a: number, b: number, c: number) { return [a, b, c]; };

    var addFourNumbers = function(a: number, b: number, c: number, d: number): number {
      return a + b + c + d;
    };

    const curriedFourNumbers = R.curry(addFourNumbers);
    var x1: R.CurriedFunction4<number, number, number, number, number> = curriedFourNumbers
    var x2: R.CurriedFunction3<number, number, number, number> = curriedFourNumbers(1)
    var x3: R.CurriedFunction2<number, number, number> = curriedFourNumbers(1)(2)
    var x4: <T1,R>(t1: T1) => R = curriedFourNumbers(1)(2)(3)
    var x5: <T1,R>(t1: T1) => R = curriedFourNumbers(1,2,4)
    var y1: number = curriedFourNumbers(1)(2)(3)(4)
    var y2: number = curriedFourNumbers(1,2)(3,4)
    var y3: number = curriedFourNumbers(1,2,3)(4)

    R.nAry(0, takesNoArg);
    R.nAry(0, takesOneArg);
    R.nAry(1, takesTwoArgs);
    R.nAry(1, takesThreeArgs);

    var u1: {(a: any): any} = R.unary(takesOneArg);
    var u2: {(a: any): any} = R.unary(takesTwoArgs);
    var u3: {(a: any): any} = R.unary(takesThreeArgs);

    R.binary(takesTwoArgs);
    R.binary(takesThreeArgs);

    var addTwoNumbers = function(a:number, b:number) { return a + b; }
    var addTwoNumbersCurried = R.curry(addTwoNumbers);

    var inc = addTwoNumbersCurried(1);
    var z1:number = inc(2);
    var z2:number = addTwoNumbersCurried(2,3);
}

// uncurry
() => {
    const addFour = (a:number) => (b:number) => (c:number) => (d:number) => a + b + c + d;
    const uncurriedAddFour = R.uncurryN<number>(4, addFour);
    const res: number = uncurriedAddFour(1, 2, 3, 4); //=> 10
}

// unless
() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless(R.isArrayLike, R.of);
    const a: number[] = coerceArray([1, 2, 3]); //=> [1, 2, 3]
    const b: number[] = coerceArray(1);         //=> [1]
}

// nthArg
(() => {
    var s = R.nthArg(1)('a', 'b', 'c'); //=> 'b'
    var s = R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
});

// unapply
() => {
    const fn: (...args: string[])=>string = R.unapply(JSON.stringify);
    const res: string = R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
}

// until
() => {
    var n = R.until(R.flip(R.gt)(100), R.multiply(2))(1) // => 128
}

// propSatisfies
() => {
    const truncate = R.when(
        R.propSatisfies(R.flip(R.gt)(10), 'length'),
        R.pipe(R.take(10), R.append('…'), R.join(''))
    );
    var s = truncate('12345');         //=> '12345'
    var s = truncate('0123456789ABC'); //=> '0123456789…'
}

/* compose */
() => {
    var limit10 = function(x: number): boolean {
        return x >= 10
    }
    var func: (x: number) => boolean = R.compose(limit10, double)
    var res: boolean = R.compose(limit10, double)(10)

    const f0 = (s: string) => +s;      // string -> number
    const f1 = (n: number) => n === 1; // number -> boolean
    const f2 = R.compose(f1, f0);      // string -> boolean

    // akward example that bounces types between number and string
    const g0 = (list: number[]) => R.map(R.inc, list);
    const g1 = R.dropWhile(R.gt(10));
    const g2 = R.map((i: number) => i > 5 ? 'bigger' : 'smaller');
    const g3 = R.all((i: string) => i === 'smaller');
    const g: (list: number[]) => boolean = R.compose(g3, g2, g1, g0);
    var b = g([1, 2, 10, 13]);
}

/* pipe */
() => {
    var func: (x: number) => string = R.pipe(double, double, shout)
    var s = R.pipe(double, double, shout)(10);

    const capitalize = (str: string) => R.pipe(
        R.split(''),
        R.adjust(R.toUpper, 0),
        R.join('')
    )(str);

    var f = R.pipe(Math.pow, R.negate, R.inc);
    var n = f(3, 4); // -(3^4) + 1
}

/* pipeP */
() => {
    const res: Promise<number> = R.pipeP(
        (m: number) => Promise.resolve(R.multiply(2, m)),
        m => Promise.resolve(m / 2),
        R.multiply(2)
    )(10)
}

// invoker
() => {
    R.invoker(0, 'charAt', String.prototype);
    R.invoker(1, 'charAt', String.prototype, 1);
}

// juxt
(() => {
    const range = R.juxt([Math.min, Math.max]);
    let r: number[] = range(3, 4, 9, -3); //=> [-3, 9]

    const chopped = R.juxt([R.head, R.last]);
    var sr = chopped('longstring'); // => ["l", "g"]
});

// useWith
(() => {
    var square = function(x: number) { return x * x; };
    var add = function(a: number, b: number) { return a + b; };
    // Adds any number of arguments together
    var addAll = function() {
      return 0;
    };

    // Basic example
    R.useWith(addAll, [ double, square ]);
});

// clone
(() => {
  var printXPlusFive = function(x: number) { console.log(x + 5); };
  R.forEach(printXPlusFive, [1, 2, 3]);
  let or: Object[] = R.clone([{},{},{}])
  var nr = R.clone([1,2,3]);
})();

// forEach
// (() => {
//   var printXPlusFive = function(x, i) { console.log(i + 5); };
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

// times
(() => {
    var i = function(x: number) {return x;};
    R.times(i, 5);
})();

// pipe
(() => {
  var triple = function(x: number): number { return x * 3; };
  var square = function(x: number): number { return x * x; };
  var squareThenDoubleThenTriple = R.pipe(square, double, triple);
  var n = squareThenDoubleThenTriple(5); //=> 150
})();

// partial
(() => {
    var multiply = function(a: number, b: number) { return a * b; };
    var double = R.partial(multiply, [2]);
    double(2); //=> 4

    var greet = function(salutation: string, title: string, firstName: string, lastName: string) {
      return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
    };
    var sayHello = R.partial(greet, ['Hello']);
    var sayHelloToMs = R.partial(sayHello, ['Ms.']);
    var s = sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'

    var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
    var s = greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
})();

// memoize
(() => {
    var numberOfCalls = 0;
    var trackedAdd = function(a: number, b: number) {
      numberOfCalls += 1;
      return a + b;
    };
    var memoTrackedAdd = R.memoize(trackedAdd);

    var n = memoTrackedAdd(1, 2); //=> 3
    var n = numberOfCalls; //=> 1
    var n = memoTrackedAdd(1, 2); //=> 3
    var n = numberOfCalls; //=> 1
    var n = memoTrackedAdd(2, 3); //=> 5
    var n = numberOfCalls; //=> 2

    // Note that argument order matters
    var n = memoTrackedAdd(2, 1); //=> 3
    var n = numberOfCalls; //=> 3
})();

// once
(() => {
    let x: number;
    var addOneOnce = R.once(function(x: number){ return x + 1; });
    var n = addOneOnce(10); //=> 11
    var n = addOneOnce(addOneOnce(50)); //=> 11
})();

// wrap
(() => {
    var slashify = R.wrap(R.flip(R.add)('/'), function(f: Function, x: string) {
      return R.match(/\/$/, x) ? x : f(x);
    });

    var s = slashify('a');  //=> 'a/'
    var s = slashify('a/'); //=> 'a/'
})();

// match
() => {
    var sr = R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
    var sr = R.match(/a/, 'b'); //=> []
    // var sr = R.match(/a/, null); // error with strict null checks: Argument of type 'null' is not assignable to parameter of type 'string'.
}

// reduce
(() => {
    var numbers = [1, 2, 3];
    var add = function(a: number, b: number) {
        return a + b
    };
    var n = R.reduce(add, 10, numbers); //=> 16;
})();

// add
(() => {
    var plus3 = R.add(3);
})();

// reduceRight
(() => {
    var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
    var flattenPairs = function(acc: [string, number], pair: [string, number]) {
      return acc.concat(pair);
    };
    let res: Array<number|string> = R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
})();

// reduceWhile
() => {
    var isOdd = (x: number, acc: number) => x % 2 === 1;
    var xs = [1, 3, 5, 60, 777, 800];
    var n = R.reduceWhile(isOdd, R.add, 0, xs); //=> 9

    var ys = [2, 4, 6]
    var n = R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
}

// mapObjIndexed
(() => {
    var values = { x: 1, y: 2, z: 3 };
    var prependKeyAndDouble = function(num: number, key: string, obj: any) {
        return key + (num * 2);
    };
    let res: R.Dictionary<string> = R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
});

// ap, of
(() => {
    var nr = R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
    const b: number[][] = R.of([1]); //=> [[1]]
    var nr = R.of(1);
});

// empty
() => {
    var nr = R.empty([1,2,3,4,5]); //=> []
    var nr = R.empty([1, 2, 3]);     //=> []
    var s = R.empty('unicorns');    //=> ''
    const a4: {} = R.empty({x: 1, y: 2});  //=> {}
}

// length
(() => {
    var n = R.length([1, 2, 3]); //=> 3
});

// addIndex, filter, reject
(() => {
    const isEven = function(n: number) {
        return n % 2 === 0;
    };
    const filterIndexed = R.addIndex(R.filter);

    var nr = R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]

    var lastTwo = function(val: number, idx: number, list: number[]) {
      return list.length - idx <= 2;
    };
    var nr = filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]

    var isOdd = function(n: number) {
      return n % 2 === 1;
    };
    var nr = R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
});

// take, takeWhile
(() => {
    var isNotFour = function(x: number) {
      return !(x === 4);
    };
    var nr = R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
    var nr = R.take(2, [1, 2, 3, 4]); //=> [1, 2]
});

// unfold
(() => {
    var f = function(n: number) { return n > 50 ? false : [-n, n + 10] };
    var nr = R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
    let b = R.unfold(f); //=> [-10, -20, -30, -40, -50]
    var nr = b(10);
});

/*****************************************************************
 * Function category
 */

// flip
() => {
    var mergeThree = function(a: number, b: number, c: number): number[] {
      return ([] as number[]).concat(a, b, c);  // strictNullChecks: must cast array to right type
    };
    var nr = mergeThree(1, 2, 3); //=> [1, 2, 3]
    var flipped = R.flip(mergeThree);
    var nr = flipped(1, 2, 3); //=> [2, 1, 3]
 }

/*********************
 * List category
 ********************/

// all
() => {
    var lessThan2 = R.flip(R.lt)(2);
    var lessThan3 = R.flip(R.lt)(3);
    var b = R.all(lessThan2)([1, 2]); //=> false
    var b = R.all(lessThan3)([1, 2]); //=> true
}

// any
() => {
    let b: boolean;
    var lessThan0 = R.flip(R.lt)(0);
    var lessThan2 = R.flip(R.lt)(2);
    var b = R.any(lessThan0)([1, 2]); //=> false
    var b = R.any(lessThan2)([1, 2]); //=> true
}

// aperture
() => {
    let ns: number[][];
    ns = R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
    ns = R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    ns = R.aperture(7, [1, 2, 3, 4, 5]); //=> []
    ns = R.aperture(7)([1, 2, 3, 4, 5]); //=> []
}

// append
() => {
    var sr = R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
    var sr = R.append('tests')(['write', 'more']); //=> ['write', 'more', 'tests']
    var sr = R.append('tests', []); //=> ['tests']
    let srr: Array<string[]|string>;
    srr = R.append<string, string[]>(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
    srr = R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
    srr = R.append<string[]>(['tests'])(['write', 'more']); //=> ['write', 'more', ['tests']]
    srr = R.append(['tests'])(['write', 'more']); //=> ['write', 'more', ['tests']]
}

// chain
() => {
    var duplicate = function(n: number) {
        return [n, n];
    };
    var nr = R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
    var nr = R.chain(duplicate)([1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
}

// clamp
() => {
    var n = R.clamp(1, 10, -1) // => 1
    var n = R.clamp(1, 10)(11) // => 10
    var n = R.clamp(1)(10, 4)  // => 4
    var s = R.clamp('a', 'd', 'e')  // => 'd'
}

// concat
() => {
    R.concat([], []); //=> []   // let r: [] =
    var nr = R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
    var nr = R.concat([4, 5, 6])([1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
    var s = R.concat('ABC')('DEF'); // 'ABCDEF'
}

// contains
() => {
    var b = R.contains(3)([1, 2, 3]); //=> true
    var b = R.contains(3, [1, 2, 3]); //=> true
    var b = R.contains(4)([1, 2, 3]); //=> false
    var b = R.contains({})([{}, {}]); //=> false
    var obj = {};
    var b = R.contains(obj)([{}, obj, {}]); //=> true
}

// drop
() => {
    let nr: number[];
    var nr = R.drop(3, [1,2,3,4,5,6,7]); //=> [4,5,6,7]
    var nr = R.drop(3)([1,2,3,4,5,6,7]); //=> [4,5,6,7]
    var s = R.drop(3, 'ramda'); //=> 'ram'
    var s = R.drop(3)('ramda'); //=> 'ram'
}

// dropLast
(() => {
    var sr = R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
    var sr = R.dropLast(2)(['foo', 'bar', 'baz']); //=> ['foo']
    var s = R.dropLast(3, 'ramda');               //=> 'ra'
    var s = R.dropLast(3)('ramda');               //=> 'ra'
});

// dropLastWhile
(() => {
    var lteThree = (x: number) => x <= 3;
    var nr = R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
});

// dropWhile
() => {
    var lteTwo = function(x: number) {
        return x <= 2;
    };
    var nr = R.dropWhile(lteTwo, [1, 2, 3, 4]); //=> [3, 4]
    var nr = R.dropWhile(lteTwo)([1, 2, 3, 4]); //=> [3, 4]
}

// filter
() => {
    var isEven = function(n: number) {
        return n % 2 === 0;
    };
    // filter works with lists...
    var nr = R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
    var isEvenFn = R.filter(isEven);
    isEvenFn([1, 2, 3, 4]);
    // ... but also objects
    var no = R.filter(isEven, {a:1, b:2, c:3, d:4}); //=> {b:2, d:4}
    var isEvenFnObj = R.filter(isEven);
    // see that we did not break anything
    // and we kept type information
    var nr = onlyNumberList(R.filter(isEven,[1,2,3,4]));
    var no = onlyNumberObj(R.filter(isEven, {a:1, b:2, c:3, d:4})); // strictNullChecks: Partial fails, consider Pick
}

// addIndex
() => {
    var lastTwo = function(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    };
    var filterIndexed = R.addIndex(R.filter);

    var nr = filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
    var lastTwoFn = filterIndexed(lastTwo);
    var nr = lastTwoFn([8, 6, 7, 5, 3, 0, 9]);
}

// find, propEq
() => {
    var xs = [{a: 1}, {a: 2}, {a: 3}];
    var no = R.find(R.propEq('a', 2))(xs); //=> {a: 2}
    u = R.find(R.propEq('a', 4))(xs); //=> undefined
}

// find
() => {
    type Task = {id: number}
    let tasks: Task[] = []
    const a = R.find(task => task.id === 1, tasks) // this works
    const f: (list: Task[]) => Task = R.find<Task>(task => task.id === 1)
    const b: Task = f(tasks) // works
}

// findIndex
() => {
    type Task = {a: number}
    let xs = [{a: 1}, {a: 2}, {a: 3}];
    const a: (list: Task[]) => number = R.findIndex(R.propEq('a', 2))
    const b: number = a(xs); //=> 1
    var n = R.findIndex(R.propEq('a', 4))(xs); //=> -1

    var n = R.findIndex((x: number) => x === 1, [1, 2, 3]);
}

// findLast
() => {
    let xs = [{a: 1, b: 0}, {a:1, b: 1}];
    var no = R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
    u = R.findLast(R.propEq('a', 4))(xs); //=> undefined
}

// findLastIndex
() => {
    let xs = [{a: 1, b: 0}, {a:1, b: 1}];
    var n = R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
    var n = R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
    var nr = R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
}

// pathEq
() => {
    var user1 = { address: { zipCode: 90210 } };
    var user2 = { address: { zipCode: 55555 } };
    var user3 = { name: 'Bob' };
    var users = [ user1, user2, user3 ];
    var isFamous = R.pathEq(['address', 'zipCode'], 90210);
    const a: Object[] = R.filter(isFamous, users); //=> [ user1 ]
}

// propEq
() => {
    var xs: {[key:string]: string} = {a: '1', b: '0'};
    var b = R.propEq('a', '1', xs);//=> true
    var b = R.propEq('a', '4', xs); //=> false
}
() => {
    var xs: {[key:string]: number} = {a: 1, b: 0};
    var b = R.propEq('a', 1, xs);//=> true
    var b = R.propEq('a', 4, xs); //=> false
}
() => {
    var xs = {a: '1', b: '0'};
    var b = R.propEq('a', '1', xs);//=> true
    var b = R.propEq('a', '4', xs); //=> false
}
() => {
    var xs = {a: 1, b: 0};
    var b = R.propEq('a', 1, xs);//=> true
    var b = R.propEq('a', 4, xs); //=> false
}
interface Obj { a: number; b: number };
() => {
    var xs: Obj = {a: 1, b: 0};
    R.propEq('a', 1, xs);//=> true
    R.propEq('a', 4, xs); //=> false
}

// forEach
() => {
    var printXPlusFive = function(x: number) { console.log(x + 5); };
    R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
    R.forEach(printXPlusFive)([1, 2, 3]); //=> [1, 2, 3]
    //-> 6
    //-> 7
    //-> 8
}

// addIndex?
() => {
    var plusFive = function(num: number, idx: number, list: number[]) { list[idx] = num + 5 };
    var nr = R.addIndex(R.forEach)(plusFive)([1, 2, 3]); //=> [6, 7, 8]
}

// groupBy
() => {
    var byGrade = R.groupBy(function(student: {score: number; name: string}) {
        var score = student.score;
        return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
    });
    var students = [{name: 'Abby', score: 84},
      {name: 'Eddy', score: 58},
      {name: 'Jack', score: 69}];
    let res: R.Dictionary<Object[]> = byGrade(students);
}

// groupWith
() => {
    let nrr: number[][];
    nrr = R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

    nrr = R.groupWith((a: number, b: number) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

    const isVowel = (a: string) => R.contains(a, 'aeiou') ? a : '';
    var sr = R.groupWith(R.eqBy<string>(isVowel), 'aestiou')
    // ['ae', 'st', 'iou']
}

// head
() => {
    var s = R.head(['fi', 'fo', 'fum']); //=> 'fi'
    var n = R.head([10, 'ten']); // => 10
    var s = R.head(['10', 10]); // => '10'
}

// indexBy
(() => {
    let res: R.Dictionary<Object>;
    let list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    res = R.indexBy(R.prop('id'), list);
    res = R.indexBy(R.prop('id'))(list);
    res = R.indexBy<{id:string}>(R.prop('id'))(list);
});

// indexOf
() => {
    var n = R.indexOf(3, [1,2,3,4]); //=> 2
    var n = R.indexOf(10)([1,2,3,4]); //=> -1
}

// init
() => {
    var sr = R.init(['fi', 'fo', 'fum']); //=> ['fi', 'fo']
}

// insert
() => {
    var nr = R.insert(2, 5, [1,2,3,4]); //=> [1,2,5,3,4]
    var nr = R.insert(2)(5, [1,2,3,4]); //=> [1,2,5,3,4]
    var nr = R.insert(2, 5)([1,2,3,4]); //=> [1,2,5,3,4]
    var nr = R.insert(2)(5)([1,2,3,4]); //=> [1,2,5,3,4]
}

// insertAll
() => {
    var nr = R.insertAll(2, [10,11,12], [1,2,3,4]);
    var nr = R.insertAll(2)([10,11,12], [1,2,3,4]);
    var nr = R.insertAll(2, [10,11,12])([1,2,3,4]);
    var nr = R.insertAll(2)([10,11,12])([1,2,3,4]);
}

// intersection
() => {
    var nr = R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
    var nr = R.intersection([1,2,3,4])([7,6,5,4,3]); //=> [4, 3]
    var nr = R.intersection([1,2,4], [1,2,3]); // => [1,2]
    var nr = R.intersection([1,2,4])([1,2,3]); // => [1,2]
}

// intersectionWith
() => {
    var buffaloSpringfield = [
      {id: 824, name: 'Richie Furay'},
      {id: 956, name: 'Dewey Martin'},
      {id: 313, name: 'Bruce Palmer'},
      {id: 456, name: 'Stephen Stills'},
      {id: 177, name: 'Neil Young'}
    ];
    var csny = [
      {id: 204, name: 'David Crosby'},
      {id: 456, name: 'Stephen Stills'},
      {id: 539, name: 'Graham Nash'},
      {id: 177, name: 'Neil Young'}
    ];

    let res: { id: number, name: string }[];
    res = R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
    //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    res = R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
        //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    res = R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield, csny);
    res = R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny);
}

// into
() => {
    var numbers = [1, 2, 3, 4];
    var transducer = R.compose(R.map(R.add(1)), R.take(2));

    var nr = R.into([], transducer, numbers); //=> [2, 3]
    var nr = R.into([])(transducer, numbers); //=> [2, 3]
    var nr = R.into([], transducer)(numbers); //=> [2, 3]

    var intoArray = R.into([]);
    var nr = intoArray(transducer, numbers); //=> [2, 3]
    var nr = intoArray(transducer)(numbers); //=> [2, 3]
}

// join
() => {
    var spacer = R.join(' ');
    var s = spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
    var s = R.join('|', [1, 2, 3]);    //=> '1|2|3'
}

// last
() => {
    R.last(['fi', 'fo', 'fum']); //=> 'fum'
}

// lastIndexOf
() => {
    R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
    R.lastIndexOf(10, [1,2,3,4]); //=> -1
    R.lastIndexOf(10)([1,2,3,4]); //=> -1
}

// length
() => {
    var n = R.length([]); //=> 0
    var n = R.length([1, 2, 3]); //=> 3
}

// lensIndex, set, view, over
() => {
    var headLens = R.lensIndex(0);
    var n = headLens([10, 20, 30, 40]); //=> 10
    let res: Array<number|string> = headLens.set('mu', [10, 20, 30, 40]); //=> ['mu', 20, 30, 40]   // wrong, currently naively assumes number[], yet no error...
    var s = R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
    var sr = R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
    var sr = R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
}

// map
() => {
    let arrayify = <T>(v: T): T[] => [v];
    // homogeneous array
    var nr = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
    var nr = R.map(double)([1, 2, 3]); //=> [2, 4, 6]
    // homogeneous object
    var no = R.map(double, { a: 1, b: 2, c: 3 }); //=> { a: 2, b: 4, c: 6 }
    var no = R.map(double)({ a: 1, b: 2, c: 3 }); //=> { a: 2, b: 4, c: 6 }
    // heterogeneous array
    let res1: [number[], string[]] = R.map(arrayify, [1, 'a']); //=> [[1], ['a']]
    let res2: [number[], string[]] = R.map(arrayify)([1, 'a']); //=> [[1], ['a']]
    // heterogeneous object
    let res3: { a: number[], b: string[] } = R.map(arrayify, { a: 1, b: 'c' }); //=> { a: [1], b: ['c'] }
    let res4: { a: number[], b: string[] } = R.map(arrayify)({ a: 1, b: 'c' }); //=> { a: [1], b: ['c'] }

    // functor
    // I'm sorry, I have no clue how to make this example work with proper functor typing
    // const stringFunctor = {
    //     map: (fn: (c: number) => number) => {
    //         var chars = "Ifmmp!Xpsme".split("");
    //         return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join("");
    //     }
    // };
    // var s = R.map((x: number) => x-1, stringFunctor); // => "Hello World"
}

// mapAccum
() => {
    let srr: Array<string[]|string>;
    var digits = ['1', '2', '3', '4'];
    var append = function(a: string, b: string): [string, string]{
        return [a + b, a + b];
    }
    srr = R.mapAccum(append, '0', digits); //=> ['01234', ['01', '012', '0123', '01234']]
    srr = R.mapAccum(append)('0', digits); //=> ['01234', ['01', '012', '0123', '01234']]
    srr = R.mapAccum(append, '0')(digits); //=> ['01234', ['01', '012', '0123', '01234']]
    srr = R.mapAccum(append)('0')(digits); //=> ['01234', ['01', '012', '0123', '01234']]
}

// mapAccumRight
() => {
    let srr: Array<string[]|string>;
    var digits = ['1', '2', '3', '4'];
    var append = function(a: string, b: string): [string, string] {
        return [a + b, a + b];
    }
    srr = R.mapAccumRight(append, '0', digits); //=> ['04321', ['04321', '0432', '043', '04']]
    srr = R.mapAccumRight(append)('0', digits); //=> ['04321', ['04321', '0432', '043', '04']]
    srr = R.mapAccumRight(append, '0')(digits); //=> ['04321', ['04321', '0432', '043', '04']]
    srr = R.mapAccumRight(append)('0')(digits); //=> ['04321', ['04321', '0432', '043', '04']]
}

// addIndex
() => {
    var squareEnds = function(elt: number, idx: number, list: number[]) {
        if (idx === 0 || idx === list.length - 1) {
            return elt * elt;
        }
        return elt;
    };
    var nr = R.addIndex(R.map)(squareEnds, [8, 5, 3, 0, 9]); //=> [64, 5, 3, 0, 81]
    var nr = R.addIndex(R.map)(squareEnds)([8, 5, 3, 0, 9]); //=> [64, 5, 3, 0, 81]
}

// none
() => {
    var b = R.none(R.isNaN, [1, 2, 3]); //=> true
    var b = R.none(R.isNaN, [1, 2, 3, NaN]); //=> false
    var b = R.none(R.isNaN)([1, 2, 3, NaN]); //=> false
}

// nth
() => {
    var list = ['foo', 'bar', 'baz', 'quux'];
    var s = R.nth(1, list); //=> 'bar'
    var s = R.nth(-1, list); //=> 'quux'
    u = R.nth(-99, list); //=> undefined
    u = R.nth(-99)(list); //=> undefined
}

// partition, contains
() => {
    let r1: [string[], string[]] = R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
    let r2: [string[], string[]] = R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
    let r3: [number[], number[]] = R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    let r4: [number[], number[]] = R.partition((x: number) => x > 2)([1, 2, 3, 4]);
    let r5: Object[] = R.partition(R.contains('s'),{ a: 'sss', b: 'ttt', foo: 'bars' }); // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
}

// pluck
() => {
    var nr = R.pluck('a', [{a: 1}, {a: 2}]); //=> [1, 2]
    var nr = R.pluck(0, [[1, 2], [3, 4]]);   //=> [1, 3]
    var nr = R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
    var nr = R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
}

// prepend
() => {
    var sr = R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
    var sr = R.prepend('fee')(['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
}

// range
() => {
    var nr = R.range(1, 5);    //=> [1, 2, 3, 4]
    var nr = R.range(50)(53);  //=> [50, 51, 52]
}

// reduce
() => {
    var numbers = [1, 2, 3];
    var add = function(a: number, b: number) {
        return a + b;
    };
    var n = R.reduce(add, 10, numbers); //=> 16
    var n = R.reduce(add)(10, numbers); //=> 16
    var n = R.reduce(add, 10)(numbers); //=> 16
}

// reduceBy

interface Student {
    name: string;
    score: number;
}
() => {
    const reduceToNamesBy = R.reduceBy((acc: string[], student: Student) => acc.concat(student.name), []);
    const namesByGrade = reduceToNamesBy(function(student) {
          let score = student.score;
          return score < 65 ? 'F' :
                 score < 70 ? 'D' :
                 score < 80 ? 'C' :
                 score < 90 ? 'B' : 'A';
    });
    let students = [{name: 'Lucy', score: 92},
                    {name: 'Drew', score: 85},
                    {name: 'Bart', score: 62}];
    const names: R.Dictionary<string[]> = namesByGrade(students);
    // {
    //   'A': ['Lucy'],
    //   'B': ['Drew']
    //   'F': ['Bart']
    // }
}

// addIndex
() => {
    var reduceIndexed = R.addIndex(R.reduce);
    var letters = ['a', 'b', 'c'];
    var objectify = function(accObject: {[elem:string]: number}, elem: string, idx: number, list: string[]) {
        accObject[elem] = idx;
        return accObject;
    };
    var no = reduceIndexed(objectify, {}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
    var no = reduceIndexed(objectify)({}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
    var no = reduceIndexed(objectify, {})(letters); //=> { 'a': 0, 'b': 1, 'c': 2 }
}

// reduceRight
interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }
type Pair = KeyValuePair<string, number>;
() => {
    let mixed: Array<string|number>;
    var pairs: Pair[] = [ ['a', 1], ['b', 2], ['c', 3] ];
    var flattenPairs = function(acc: Pair[], pair: Pair): Pair[] {
        return acc.concat(pair);
    };
    mixed = R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
    mixed = R.reduceRight(flattenPairs, [])(pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
    mixed = R.reduceRight(flattenPairs)([], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
}

// reject
() => {
    var isOdd = function(n: number) {
        return n % 2 === 1;
    };
    var nr = R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
    const a2 = R.reject(isOdd);
    var nr = R.reject(isOdd)([1, 2, 3, 4]); //=> [2, 4]
}

// rejectIndexed
() => {
    const lastTwo = function(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    };
    const rejectIndexed = R.addIndex(R.reject);
    var nr = rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
    var nr = rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
}

// remove
() => {
    var nr = R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
    var nr = R.remove(2, 3)([1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
    var nr = R.remove(2)(3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
}

// repeat
() => {
    var sr = R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
    var obj = {};
    var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
    var b = repeatedObjs[0] === repeatedObjs[1]; //=> true
}

// reverse
() => {
    var nr = R.reverse([1, 2, 3]);  //=> [3, 2, 1]
    var nr = R.reverse([1, 2]);     //=> [2, 1]
    var nr = R.reverse([1]);        //=> [1]
    var nr = R.reverse([]);         //=> []
}

// scan
() => {
    var numbers = [1, 2, 3, 4];
    var nr = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
    var nr = R.scan(R.multiply, 1)(numbers); //=> [1, 1, 2, 6, 24]
    var nr = R.scan(R.multiply)(1, numbers); //=> [1, 1, 2, 6, 24]
}

// slice
() => {
    var xs = R.range(0, 10);
    var nr = R.slice(2, 5, xs); //=> [2, 3, 4]
    var nr = R.slice(2, 5)(xs); //=> [2, 3, 4]
    var nr = R.slice(2)(5, xs); //=> [2, 3, 4]

    var str = 'Hello World';
    var s = R.slice(2, 5, str); //=> 'llo'
    var s = R.slice(2, 5)(str); //=> 'llo'
    var s = R.slice(2)(5, str); //=> 'llo'
}

// sort
() => {
    var diff = function(a: number, b: number) { return a - b; };
    var nr = R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
    var nr = R.sort(diff)([4,2,7,5]); //=> [2, 4, 5, 7]
}

// cond, equals, always
() => {
    const fn = R.cond([
        [R.equals(0),   R.always('water freezes at 0°C')],
        [R.equals(100), R.always('water boils at 100°C')],
        [R.T,           (temp: number) => 'nothing special happens at ' + temp + '°C']
    ]);
    var s = fn(0); //=> 'water freezes at 0°C'
    var s = fn(50); //=> 'nothing special happens at 50°C'
    var s = fn(100); //=> 'water boils at 100°C'
}

// tail
() => {
    var sr = R.tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
    var nr = R.tail([1, 2, 3]); //=> [2, 3]
}

// take
() => {
    var nr = R.take(3,[1,2,3,4,5]); //=> [1,2,3]

    var members= [ "Paul Desmond","Bob Bates","Joe Dodge","Ron Crotty","Lloyd Davis","Joe Morello","Norman Bates",
    "Eugene Wright","Gerry Mulligan","Jack Six","Alan Dawson","Darius Brubeck","Chris Brubeck",
    "Dan Brubeck","Bobby Militello","Michael Moore","Randy Jones"];
    var takeFive = R.take(5);
    var sr = takeFive(members); //=> ["Paul Desmond","Bob Bates","Joe Dodge","Ron Crotty","Lloyd Davis"]
}
() => {
    var s = R.take(3,"Example"); //=> "Exa"

    var takeThree = R.take(3);
    var s = takeThree("Example"); //=> "Exa"
}

// takeLast
() => {
	  var sr = R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
    var sr = R.takeLast(2)(['foo', 'bar', 'baz']); //=> ['bar', 'baz']
    var s = R.takeLast(3, 'ramda');               //=> 'mda'
    var s = R.takeLast(3)('ramda');               //=> 'mda'
}

// takeLastWhile
() => {
	const isNotOne = (x: number) => x !== 1;
	var nr = R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	var nr = R.takeLastWhile(isNotOne)([1, 2, 3, 4]); //=> [2, 3, 4]
}

// takeWhile
() => {
    var isNotFour = function(x: number) {
        return !(x === 4);
    };
    var nr = R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
    var nr = R.takeWhile(isNotFour)([1, 2, 3, 4]); //=> [1, 2, 3]
}

// tap
() => {
	  const sayX = (x: number) => console.log('x is ' + x);
    var n = R.tap(sayX, 100); //=> 100
}

// test
() => {
	  var b = R.test(/^x/, 'xyz'); //=> true
    var b = R.test(/^y/)('xyz'); //=> false
}

// times
() => {
    var nr = R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
    var nr = R.times(R.identity)(5); //=> [0, 1, 2, 3, 4]
}

// toString
() => {
	class Point {
		constructor(public x: number, public y: number) {
    		this.x = x;
        	this.y = y;
		}
		toStringn() {
        	return 'new Point(' + this.x + ', ' + this.y + ')';
		}
    };
    var s = R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
    var s = R.toString(42); //=> '42'
    var s = R.toString('abc'); //=> '"abc"'
    var s = R.toString([1, 2, 3]); //=> '[1, 2, 3]'
    var s = R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
    var s = R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
}

// transduce
() => {
    var numbers = [1, 2, 3, 4];
    var transducer = R.compose(R.map(R.add(1)), R.take(2));
    var fn = R.flip<number, number[], number[]>(R.append);
    var nr = R.transduce(transducer, fn, [] as number[], numbers); //=> [2, 3]   // strictNullChecks: must annotate empty array type
    var nr = R.transduce(transducer, fn, [] as number[])(numbers); //=> [2, 3]
    var nr = R.transduce(transducer, fn)([] as number[], numbers); //=> [2, 3]
    var nr = R.transduce(transducer)(fn, [] as number[], numbers); //=> [2, 3]
}

// // traverse
// () => {
//     // Returns `Nothing` if the given divisor is `0`
//     safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
//
//     R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
//     R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
// }

// transpose
() => {
    const a: any[][] = R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
    const b: any[][] = R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
    const c: number[][] = R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
}

// tryCatch
() => {
    const x = R.prop('x');
    var b = R.tryCatch<boolean>(R.prop('x'), R.F)({x: true}); //=> true
    var b = R.tryCatch<boolean>(R.prop('x'), R.F)(null);      //=> false
}

// uniq
() => {
    var nr = R.uniq([1, 1, 2, 1]); //=> [1, 2]
    let r2: Object[] = R.uniq([{}, {}]);     //=> [{}, {}]
    let r3: any[] = R.uniq([1, '1']);     //=> [1, '1']
}

// uniqWith
() => {
    var strEq = function(a: any, b: any) { return String(a) === String(b); };
    var nr = R.uniqWith(strEq, [1, '1', 2, 1]); //=> [1, 2]
    var nr = R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
    var or = R.uniqWith(strEq)([{}, {}]);       //=> [{}]
    var nr = R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
    var sr = R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
}

// unnest, equals
() => {
    var b = R.equals(R.unnest([1, [2], [[3]]]), [1,2,[3]]); //=> true
    var b = R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]),[1,2,3,4,5,6]); //=> true
}

// xprod
() => {
    let pairs: [number, string][];
    pairs = R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
    pairs = R.xprod([1, 2])(['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
}

// zip
() => {
    let pairs: [number, string][];
    pairs = R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
    pairs = R.zip([1, 2, 3])(['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
}

// zipObj
() => {
    var no = R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
    var no = R.zipObj(['a', 'b', 'c'])([1, 2, 3]); //=> {a: 1, b: 2, c: 3}
}

// zipWith
() => {
    var f = function(x:number, y:string) {
        // ...
    };
    var ar = R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    var ar = R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    var ar = R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
}

/*****************************************************************
 * Object category
 */

// assoc
() => {
    var no = R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
    var no = R.assoc('c')(3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
    var no = R.assoc('c', 3)({a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
}

// dissoc
() => {
    var no = R.dissoc<{a:number, c:number}>('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
    var no = R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
    var no = R.dissoc('b')<{a:number, c:number}>({a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
}

// assocPath
() => {
    let abcn: {a:{b:{c:number}}};
    abcn = R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
    abcn = R.assocPath(['a', 'b', 'c'])(42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
    abcn = R.assocPath(['a', 'b', 'c'], 42)({a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
}

// dissocPath
() => {
    let abo: {a:{b:{}}};
    abo = R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
    // optionally specify return type
    abo = R.dissocPath<{a :{ b: number}}>(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
    abo = R.dissocPath(['a', 'b', 'c'])({a: {b: {c: 42}}}); //=> {a: {b: {}}}
}

// clone
() => {
    var obj1 = [{}, {}, {}];
    var obj2 = [{a:1}, {a:2}, {a:3}];
    var ar = R.clone(obj1);
    const a2: {a: number}[] = R.clone(obj2);
    const a3: Object = R.clone({});
    var n = R.clone(10);
    var s = R.clone('foo');
    var n = R.clone(Date.now());
}

// eqProps
() => {
    var o1 = { a: 1, b: 2, c: 3, d: 4 };
    var o2 = { a: 10, b: 20, c: 3, d: 40 };
    var b = R.eqProps('a', o1, o2); //=> false
    var b = R.eqProps('c', o1, o2); //=> true
    const a3: {<T,U>(obj1: T, obj2: U): boolean} = R.eqProps('c');
    const a4: {<U>(obj2: U): boolean} = R.eqProps('c', o1);
}

// evolve
() => {
    var tomato = {firstName: 'Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
    var transformations = {
        firstName: R.trim,
        lastName: R.trim, // Will not get invoked.
        data: {elapsed: R.add(1), remaining: R.add(-1)}
    };
    const a: typeof tomato = R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
    const b: typeof tomato = R.evolve(transformations)(tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
}

// has
() => {
    const hasName = R.has('name');
    var b = hasName({name: 'alice'});   //=> true
    var b = hasName({name: 'bob'});     //=> true
    var b = hasName({});                //=> false

    const point = {x: 0, y: 0};
    const pointHas = R.flip(R.has)(point);
    var b = pointHas('x');  //=> true
    var b = pointHas('y');  //=> true
    var b = pointHas('z');  //=> false
}

// hasIn
class Rectangle {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }
    area():number {
        return this.width * this.height;
    }
};
() => {
    var square = new Rectangle(2, 2);
    var b = R.hasIn('width', square);  //=> true
    var b = R.hasIn('area', square);  //=> true
    var b = R.flip(R.hasIn)(square)('area');  //=> true
}

// invert
() => {
    var raceResultsByFirstName = {
      first: 'alice',
      second: 'jake',
      third: 'alice',
    };
    let res: R.Dictionary<string[]> = R.invert(raceResultsByFirstName);
    //=> { 'alice': ['first', 'third'], 'jake':['second'] }
}

// invertObj
() => {
    let raceResults0 = {
      first: 'alice',
      second: 'jake'
    };
    var so = R.invertObj(raceResults0);
    //=> { 'alice': 'first', 'jake':'second' }

    // Alternatively:
    let raceResults1 = ['alice', 'jake'];
    var so = R.invertObj(raceResults1);
    //=> { 'alice': '0', 'jake':'1' }
}

// keys
() => {
    var sr = R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
}

// keysIn
() => {
    var f = new F();
    var sr = R.keysIn(f); //=> ['x', 'y']
}

// lens
() => {
    interface xy {
      x: number;
      y: number;
    }
    let z: xy;
    // var xLens = R.lens(R.prop('x'), R.assoc('x'));
    // var xLens = R.lens<number, xy>(R.prop('x'), R.assoc('x'));
    var xLens = R.lens<number>(R.prop('x'))(R.assoc('x'));
    // ^ works with only 1 generic, for curried version managed to split the inferred generic from the manual generic
    var n = R.view(xLens, {x: 1, y: 2});            //=> 1
    z = R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
    z = R.set(xLens)(4, {x: 1, y: 2});          //=> {x: 4, y: 2}
    z = R.set(xLens, 4)({x: 1, y: 2});          //=> {x: 4, y: 2}
    z = R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
    z = R.over(xLens, R.negate)({x: 1, y: 2});  //=> {x: -1, y: 2}
    z = R.over(xLens)(R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
}

// lensIndex
() => {
    var headLens = R.lensIndex(0);
    var s = R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
    var sr = R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
    var sr = R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
}

// lensProp
() => {
    var xLens = R.lensProp('x');
    var n = R.view(xLens, {x: 1, y: 2});            //=> 1
    var no = R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
    var no = R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
}

// lensPath
() => {
  let res: R.Dictionary<R.Dictionary<number>>;
  const xyLens = R.lensPath(['x', 'y']);
  var n = R.view(xyLens, {x: {y: 2, z: 3}});            //=> 2
  res = R.set(xyLens, 4, {x: {y: 2, z: 3}});          //=> {x: {y: 4, z: 3}}
  res = R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  //=> {x: {y: -2, z: 3}}
}

// keys
() => {
    var sr = R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
}

// keysIn
() => {
    var f = new F();
    var sr = R.keysIn(f); //=> ['x', 'y']
}

// lens
() => {
    var headLens = R.lens(
      function get(arr: number[]) { return arr[0]; },
      function set(val: number, arr: number[]) { return [val].concat(arr.slice(1)); }
    );
    headLens([10, 20, 30, 40]); //=> 10
    // headLens.set('mu', [10, 20, 30, 40]); //=> ['mu', 20, 30, 40] // errors: [ts] Argument of type '"mu"' is not assignable to parameter of type 'number'.

    var phraseLens = R.lens(
      function get(obj: any) { return obj.phrase; },
      function set(val: string, obj: any) {
        var out = R.clone(obj);
        out.phrase = val;
        return out;
      }
    );
    var obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
    var obj2 = { phrase: "What's all this, then?"};
    var s = phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
    var s = phraseLens(obj2); // => "What's all this, then?"
    var so = phraseLens.set('Ooh Betty', obj1); //=> { phrase: 'Ooh Betty'}
}

// lensProp
() => {
    var phraseLens = R.lensProp('phrase');
    var obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
    var obj2 = { phrase: "What's all this, then?"};
    var s = phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
    var s = phraseLens(obj2); // => "What's all this, then?"
    var so = phraseLens.set('Ooh Betty', obj1); //=> { phrase: 'Ooh Betty'}
}

// merge
() => {
    var ao = R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
    //=> { 'name': 'fred', 'age': 40 }
    var resetToDefault = R.flip(R.merge)({x: 0});
    var no = resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
}

// megeAll
() => {
    var no = R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
    var no = R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
}

// mergeWith
() => {
    let res: { a: boolean, b: boolean, values: number[] };
    res = R.mergeWith(R.concat,
        { a: true, values: [10, 20] },
        { b: true, values: [15, 35] });
        //=> { a: true, b: true, values: [10, 20, 15, 35] }
}

// mergeWithKey
() => {
    let concatValues = (k:string, l: string, r: string) => k == 'values' ? R.concat(l, r) : r;
    R.mergeWithKey(concatValues,
        { a: true, thing: 'foo', values: [10, 20] },
        { b: true, thing: 'bar', values: [15, 35] });
    const merge = R.mergeWithKey(concatValues);
    let res: { a: boolean, b: boolean, values: number[], thing: string } = merge({ a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] });
}

// pathOr
() => {
    var n = R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
    var n = R.pathOr('N/A', ['a', 'b'])({a: {b: 2}}); //=> 2
    var n = R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
    var n = R.pathOr({c:2})(['a', 'b'], {c: {b: 2}}); //=> "N/A"
}

// pathSatisfies
() => {
    var b = R.pathSatisfies(a => a === 'foo', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); //=> true
    var b = R.pathSatisfies(a => a === 'bar', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); //=> false
    var b = R.pathSatisfies(a => a === 1, ['a', 'b', 'c'], {a: {b: {c: 1}}}); //=> true
    var b = R.pathSatisfies(a => a !== 1, ['a', 'b', 'c'], {a: {b: {c: 2}}}); //=> true
    var b = R.pathSatisfies(a => a === 1)(['a', 'b', 'c'], {a: {b: {c: 1}}}); //=> true
    var b = R.pathSatisfies(a => a === 1, ['a', 'b', 'c'])({a: {b: {c: 1}}}); //=> true
    var b = R.pathSatisfies(a => a === 1)(['a', 'b', 'c'])({a: {b: {c: 1}}}); //=> true
}

// pickBy
() => {
    var isPositive = function(n: number) {
        return n > 0;
    };
    var no = R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); //=> {a: 1, b: 2, e: 5}
    var containsBackground = function(val: any) {
        return val.bgcolor;
    };
    var colors = {1: {color: 'read'}, 2: {color: 'black', bgcolor: 'yellow'}};
    let res: { 2: R.Dictionary<string> } = R.pickBy(containsBackground, colors); //=> {2: {color: 'black', bgcolor: 'yellow'}}

    var isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; }
    var no = R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
}


// pick
() => {
    var no = R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
    // the following should errror: e/f are not keys in these objects
    // var no = R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
    // var no = R.pick(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
    // var no = R.pick(['a', 'e', 'f'], [1, 2, 3, 4]); //=> {a: 1}
}

// objOf
() => {
    let matchPhrases = R.compose(
      R.objOf('must'),
      R.map(R.objOf('match_phrase'))
    );
    let res: { must: { match_phrase: string }[] } = matchPhrases(['foo', 'bar', 'baz']);
}

// omit
() => {
    var no = R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
    var no = R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
}

// fromPairs
() => {
    var no = R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
}

// pair
() => {
    R.pair('foo', 'bar'); //=> ['foo', 'bar']
    let p = R.pair('foo', 1); //=> ['foo', 'bar']
    var s = p[0];
    var n = p[1];
}

// over, lensIndex
() => {
    var headLens = R.lensIndex(0);
    var sr = R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
}

// pickAll
() => {
    var no = R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
    var no = R.pickAll(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
    var no = R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
    var no = R.pickAll(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}    // why does this pass while the above fails?
}

// pickBy
() => {
    var isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; }
    var no = R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
}

// project
() => {
    let x: { name: string, grade: number }[];
    var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
    var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
    var kids = [abby, fred];
    x = R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
}

// prop
() => {
    var n = R.prop('x', {x: 100}); //=> 100
    // errors: `Argument of type '"x"' is not assignable to parameter of type 'never'.` cuz no 'x' in {}
    // u = R.prop('x', {}); //=> undefined
}

// propOr
() => {
    var alice = {
      name: 'ALICE',
      age: 101
    };
    var favorite = R.prop('favoriteLibrary');
    var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

    // u = favorite(alice);  //=> undefined  // now errors
    var s = favoriteWithDefault(alice);  //=> 'Ramda'
}

// propSatisfies
() => {
    var b = R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
    var b = R.propSatisfies(x => x > 0, 'x')({x: 1, y: 2}); //=> true
    var b = R.propSatisfies(x => x > 0)('x')({x: 1, y: 2}); //=> true
}

// props
() => {
    var nr = R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
    let res: Array<number|undefined> = R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]

    var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
    var s = fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
}

// toPairs
() => {
    const a: [string, number][] = R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
}

// toPairsIn
() => {
    var f = new F();
    const a1: [string, string][] = R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
    const a2: [string, string][] = R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
}

// values
() => {
    var nr = R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
}

// valuesIn
() => {
    var f = new F();
    var sr = R.valuesIn(f); //=> ['X', 'Y']
}

// where
() => {
    var spec = {x: 2};
    var b = R.where(spec, {w: 10, x: 2, y: 300}); //=> true
    var b = R.where(spec, {x: 1, y: 'moo', z: true}); //=> false
    var b = R.where(spec)({w: 10, x: 2, y: 300}); //=> true
    var b = R.where(spec)({x: 1, y: 'moo', z: true}); //=> false

    // There's no way to represent the below functionality in typescript
    // per http://stackoverflow.com/a/29803848/632495
    // will need a work around.

    var spec2 = {x: function(val: number, obj: any) { return  val + obj.y > 10; }};
    var b = R.where(spec2, {x: 2, y: 7}); //=> false
    var b = R.where(spec2, {x: 3, y: 8}); //=> true

    let xys: { x: number, y: number }[];
    var xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
    xys = R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
    xys = R.filter(R.where({x: 10}))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
}

// whereEq
() => {
    // pred :: Object -> Boolean
    var pred = R.whereEq({a: 1, b: 2});
    var b = pred({a: 1});              //=> false
    var b = pred({a: 1, b: 2});        //=> true
    var b = pred({a: 1, b: 2, c: 3});  //=> true
    var b = pred({a: 1, b: 1});        //=> false
    var b = R.whereEq({a: 'one'}, {a: 'one'}); // => true
}

// without
() => {
    var nr = R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
}

// mapIndexed, addIndex
() => {
    var mapIndexed = R.addIndex<string,string>(R.map);
    var sr = mapIndexed(function(val: string, idx: number) {return idx + '-' + val;})(['f', 'o', 'o', 'b', 'a', 'r']);
    var sr = R.mapIndexed(function(val: string, idx: number) {return idx + '-' + val;})(['f', 'o', 'o', 'b', 'a', 'r']);
      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
    var nr = R.mapIndexed((rectangle: Rectangle, idx: number):number => rectangle.area()*idx, [new Rectangle(1,2), new Rectangle(4,7)]);
      //=> [2, 56]
}

// addIndex
() => {
    var reduceIndexed = R.addIndex(R.reduce);
    var sr = reduceIndexed(function(acc: string, val: string, idx: number) {
          return acc + ',' + idx + '-' + val;
      }
      ,''
      ,['f', 'o', 'o', 'b', 'a', 'r']
    );
    //=> ['0-f,1-o,2-o,3-b,4-a,5-r']
}

// always
() => {
    var t = R.always('Tee');
    var s = t(); //=> 'Tee'
}

// ap
() => {
    var nr = R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
    var nr = R.ap([R.multiply(2), R.add(3)])([1,2,3]); //=> [2, 4, 6, 4, 5, 6]
}

// apply
() => {
    var nums = [1, 2, 3, -99, 42, 6, 7];
    var n = R.apply(Math.max, nums); //=> 42
    var n = R.apply(Math.max)(nums); //=> 42
}

// applySpec
() => {
    type T = {sum: number, nested: {mul: number}};
    const getMetrics = R.applySpec<T>({
        sum: R.add, nested: { mul: R.multiply }
    });
    const result: T = getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
}

// binary
() => {
    var takesThreeArgs = function(a: number, b: number, c: number) {
        return [a, b, c];
    };
    var n = takesThreeArgs.length; //=> 3
    var nr = takesThreeArgs(1, 2, 3); //=> [1, 2, 3]

    var takesTwoArgs = R.binary(takesThreeArgs);
    var n = takesTwoArgs.length; //=> 2
    // Only 2 arguments are passed to the wrapped function
    // errors: "Supplied parameters do not match any signature of call target." (can only use 2 arguments now)
    // var nr = takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
}

// pipe, inc, negate
() => {
    const f = R.pipe(Math.pow, R.negate, R.inc);
    var n = f(3, 4); // -(3^4) + 1
}

// comparator
() => {
    type T = {age: number};
    var cmp = R.comparator(function(a: T, b: T) {
      return a.age < b.age;
    });
    var people = [
      {name: 'Agy', age:33}, {name: 'Bib', age: 15}, {name: 'Cari', age: 16}
    ];
    let res: { age: number, name: string }[] = R.sort(cmp, people);
}

// converge
() => {
    var add = function(a: number, b: number) { return a + b; };
    var multiply = function(a: number, b: number) { return a * b; };
    var subtract = function(a: number, b: number) { return a - b; };

    //≅ multiply( add(1, 2), subtract(1, 2) );
    var n = R.converge(multiply, [ add, subtract ])(1, 2); //=> -3

    var add3 = function(a: number, b: number, c: number) { return a + b + c; };
    var n = R.converge(add3, [ multiply, add, subtract ])(1, 2); //=> 4
}

// compose
() => {
    const f0 = R.compose(Math.pow);
    const f1 = R.compose(R.negate, Math.pow);
    const f2 = R.compose(R.inc, R.negate, Math.pow);
    const f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
    const f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    const f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    var n = f0(3, 4); // -(3^4) + 1
    var n = f1(3, 4); // -(3^4) + 1
    var n = f2(3, 4); // -(3^4) + 1
    var n = f3(3, 4); // -(3^4) + 1
    var n = f4(3, 4); // -(3^4) + 1
    var n = f5(3, 4); // -(3^4) + 1
}

// compose
() => {
    const fn = function(a: string, b: number, c: string) {
        return [a,b,c];
    }
    const gn = R.compose(R.length, fn);
    var n = gn('Hello', 4, "world");
}

// construct, constructN
(() => {
    type circle = { r: number, colors: string[] };
    var Circle = function(r: number) {
        this.r = r;
        this.colors = Array.prototype.slice.call(arguments, 1);
    };
    Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};
    var circleN = R.constructN(2, Circle);
    var c1: circle = circleN(1, 'red');
    var circle = R.construct(Circle);
    var c1: circle = circle(1, 'red');
})();

/*****************************************************************
 * Relation category
 */

// countBy
() => {
    var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
    var letters = R.split('', 'abcABCaaaBBc');
    var no = R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
    var no = R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
}

// difference
() => {
    var nr = R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
    var nr = R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
}

// differenceWith
() => {
    let res: {a:number}[];
    function cmp(x: any, y: any) { return x.a === y.a; }
    var l1 = [{a: 1}, {a: 2}, {a: 3}];
    var l2 = [{a: 3}, {a: 4}];
    res = R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
    res = R.differenceWith(cmp)(l1, l2); //=> [{a: 1}, {a: 2}]
    res = R.differenceWith(cmp)(l1)(l2); //=> [{a: 1}, {a: 2}]
}

// equals
() => {
    var b = R.equals(1, 1); //=> true
    var b = R.equals('2', '1'); //=> false
    var b = R.equals([1, 2, 3], [1, 2, 3]); //=> true

    var a: any = {}; a.v = a;
    var b: any = {}; b.v = b;
    var b = R.equals(a, b); //=> true
}

// identity
() => {
    const a1 = R.identity(1); //=> 1
    let obj = {};
    var nr = R.identity([1,2,3]);
    var sr = R.identity(['a','b','c']);
    var b = R.identity(obj) === obj; //=> true
}

// identical
() => {
    var o = {};
    var b = R.identical(o, o); //=> true
    var b = R.identical(1, 1); //=> true
    var b = R.identical('2', '1'); //=> false
    var b = R.identical([], []); //=> false
    var b = R.identical(0, -0); //=> false
    var b = R.identical(NaN, NaN); //=> true
}

// path
() => {
    var n = R.path(['a', 'b'], {a: {b: 2}}); //=> 2
    var n = R.path(['a', 'b'])({a: {b: 2}}); //=> 2
}

// sortBy
() => {
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
    let res: { name: string, age: number }[] = sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
}

// splitAt
() => {
    const a: number[][] = R.splitAt(1, [1, 2, 3]);        //=> [[1], [2, 3]]
    const b: number[][] = R.splitAt(1)([1, 2, 3]);        //=> [[1], [2, 3]]
    var sr = R.splitAt(5, 'hello world');      //=> ['hello', ' world']
    var sr = R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
}

// splitWhen
() => {
	const a: number[][] = R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
	const b: number[][] = R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
}

// add
() => {
    var n = R.add(2, 3);       //=>  5
    var n = R.add(7)(10);      //=> 17
}

// dec
() => {
    var n = R.dec(42); //=> 41
}

// divide
() => {
    var n = R.divide(71, 100); //=> 0.71

    var half = R.flip(R.divide)(2);
    var n = half(42); //=> 21

    var reciprocal = R.divide(1);
    var n = reciprocal(4);   //=> 0.25
}

// gt
() => {
    var b = R.gt(2, 6); //=> false
    var b = R.gt(2, 0); //=> true
    var b = R.gt(2, 2); //=> false
    var b = R.flip(R.gt)(2)(10); //=> true
    var b = R.gt(2)(10); //=> false
}

// gte
() => {
    var b = R.gte(2, 6); //=> false
    var b = R.gte(2, 0); //=> true
    var b = R.gte(2, 2); //=> false
    var b = R.flip(R.gte)(2)(10); //=> true
    var b = R.gte(2)(10); //=> false
}

// isNaN
() => {
    var b = R.isNaN(NaN);        //=> true
    var b = R.isNaN(undefined);  //=> false
    var b = R.isNaN({});         //=> false
}

// lt
() => {
    var b = R.lt(2, 6); //=> true
    var b = R.lt(2, 0); //=> false
    var b = R.lt(2, 2); //=> false
    var b = R.lt(5)(10); //=> true
    var b = R.flip(R.lt)(5)(10); //=> false // right-sectioned currying
}

// lte
() => {
    var b = R.lte(2, 6); //=> true
    var b = R.lte(2, 0); //=> false
    var b = R.lte(2, 2); //=> true
    var b = R.flip(R.lte)(2)(1); //=> true
    var b = R.lte(2)(10); //=> true
}

// mathMod
() => {
    var n = R.mathMod(-17, 5);  //=> 3
    var n = R.mathMod(17, 5);   //=> 2
    var n = R.mathMod(17, -5);  //=> NaN
    var n = R.mathMod(17, 0);   //=> NaN
    var n = R.mathMod(17.2, 5); //=> NaN
    var n = R.mathMod(17, 5.3); //=> NaN

    var clock = R.flip(R.mathMod)(12);
    var n = clock(15); //=> 3
    var n = clock(24); //=> 0

    var seventeenMod = R.mathMod(17);
    var n = seventeenMod(3);  //=> 2
}

// max
() => {
    var n = R.max(7, 3); //=> 7
    var s = R.max('a', 'z'); //=> 'z'
}

// maxBy
() => {
    let res: { x: number };
    function cmp(obj: typeof res) { return obj.x; }
    var a = {x: 1}, var b = {x: 2}, c = {x: 3}, d = {x: "a"}, e = {x:"z"};
    res = R.maxBy(cmp, a, c); //=> {x: 3}
    res = R.maxBy(cmp)(a, c); //=> {x: 3}
    res = R.maxBy(cmp)(a)(b);
    res = R.maxBy(cmp)(d)(e);
}

// mean
() => {
    var n = R.mean([2, 7, 9]); //=> 6
    var n = R.mean([]); //=> NaN
}

// median
() => {
    var n = R.median([7, 2, 10, 9]); //=> 8
    var n = R.median([]); //=> NaN
}

// min
() => {
    var n = R.min(9, 3); //=> 3
    var s = R.min('a', 'z'); //=> 'a'
}

// minBy
() => {
    let res: { x: number };
    function cmp(obj: {x: typeof res}) { return obj.x; }
    var a = {x: 1}, var b = {x: 2}, c = {x: 3}, d = {x: "a"}, e = {x: "z"};
    res = R.minBy(cmp, a, b); //=> {x: 1}
    res = R.minBy(cmp)(a, b); //=> {x: 1}
    res = R.minBy(cmp)(a)(c);
    res = R.minBy(cmp, d, e);
}

// modulo
() => {
    var n = R.modulo(17, 3); //=> 2
    // JS behavior:
    var n = R.modulo(-17, 3); //=> -2
    var n = R.modulo(17, -3); //=> 2

    var isOdd = R.flip(R.modulo)(2);
    var n = isOdd(42); //=> 0
    var n = isOdd(21); //=> 1
}

// multiply
() => {
    var double = R.multiply(2);
    var triple = R.multiply(3);
    var n = double(3);       //=>  6
    var n = triple(4);       //=> 12
    var n = R.multiply(2, 5);  //=> 10
}

// negate
() => {
    var n = R.negate(42); //=> -42
}

// product
() => {
    var n = R.product([2,4,6,8,100,1]); //=> 38400
}

// subtract
() => {
    var n = R.subtract(10, 8); //=> 2

    var minus5 = R.flip(R.subtract)(5);
    var n = minus5(17); //=> 12

    var complementaryAngle = R.subtract(90);
    var n = complementaryAngle(30); //=> 60
    var n = complementaryAngle(72); //=> 18
}

// sum
() => {
    var n = R.sum([2,4,6,8,100,1]); //=> 121
}

// symmetricDifference
() => {
	var nr = R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
	var nr = R.symmetricDifference([7,6,5,4,3])([1,2,3,4]); //=> [7,6,5,1,2]
}

// symmetricDifferenceWith
() => {
  let res: { a: number }[];
	const eqA = R.eqBy(R.prop('a'));
	const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
	const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
	res = R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	res = R.symmetricDifferenceWith(eqA)(l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	const c: (a: any[]) => any[] = R.symmetricDifferenceWith(eqA)(l1); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
}

/*****************************************************************
 * String category
 */

// replace
() => {
    var s = R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
    var s = R.replace('foo', 'bar')('foo foo foo'); //=> 'bar foo foo'
    var s = R.replace('foo')('bar')('foo foo foo'); //=> 'bar foo foo'
    var s = R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'

    // Use the "g" (global) flag to replace all occurrences:
    var s = R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
    var s = R.replace(/foo/g, 'bar')('foo foo foo'); //=> 'bar bar bar'
    var s = R.replace(/foo/g)('bar')('foo foo foo'); //=> 'bar bar bar'
}

/*****************************************************************
 * Is category
 */

() => {
    var b = R.is(Object, {}); //=> true
    var b = R.is(Object)({}); //=> true
    var b = R.is(Number, 1); //=> true
    var b = R.is(Number)(1); //=> true
    var b = R.is(Object, 1); //=> false
    var b = R.is(Object)(1); //=> false
    var b = R.is(String, 's'); //=> true
    var b = R.is(String)('s'); //=> true
    var b = R.is(String, new String('')); //=> true
    var b = R.is(String)(new String('')); //=> true
    var b = R.is(Object, new String('')); //=> true
    var b = R.is(Object)(new String('')); //=> true
    var b = R.is(Object, 's'); //=> false
    var b = R.is(Object)('s'); //=> false
    var b = R.is(Number, {}); //=> false
    var b = R.is(Number)({}); //=> false
}

/*****************************************************************
 * Logic category
 */

// allPass
() => {
    var gt10 = function(x: number) { return x > 10; };
    var even = function(x: number) { return x % 2 === 0};
    var f = R.allPass([gt10, even]);
    var b = f(11); //=> false
    var b = f(12); //=> true
}

// and
() => {
    var b = R.and(false, true); //=> false
    var n = R.and(0, []); //=> 0
    var n = R.and(0)([]); //=> 0
    let res: null = R.and(null, ''); //=> null
    var Why: any = (function(val: boolean) {
        var why: any;
        why.val = val;
        why.and = function(x: boolean) {
            return this.val && x;
        }
        return Why;
    })(true);
    var why = new Why(true);
    var b = R.and(why, false); // false
}

// anyPass
() => {
    var gt10 = function(x: number) { return x > 10; };
    var even = function(x: number) { return x % 2 === 0};
    var f = R.anyPass([gt10, even]);
    var b = f(11); //=> true
    var b = f(8); //=> true
    var b = f(9); //=> false
}

// both
() => {
    var gt10 = function(x: number) { return x > 10; };
    var even = function(x: number) { return x % 2 === 0 };
    var f = R.both(gt10, even);
    var g = R.both(gt10)(even);
    var b = f(100); //=> true
    var b = f(101); //=> false
}

// complement
() => {
    var isEven = function(n: number) { return n % 2 === 0; };
    var isOdd = R.complement(isEven);
    var b = isOdd(21); //=> true
    var b = isOdd(42); //=> false
}

// eqBy
(() => {
    var b = R.eqBy(Math.abs, 5, -5); //=> true
    var b = R.eqBy(Math.abs)(5, -5); //=> true
    var b = R.eqBy(Math.abs, 5)(-5); //=> true
});

// defaultTo
() => {
    var defaultTo42 = R.defaultTo(42);
    var n = defaultTo42(null);  //=> 42
    var n = defaultTo42(undefined);  //=> 42
    var s = defaultTo42('Ramda');  //=> 'Ramda'
}

// either
() => {
    var gt10 = function(x: number) { return x > 10; };
    var even = function(x: number) { return x % 2 === 0 };
    var f = R.either(gt10, even);
    var g = R.either(gt10)(even);
    var b = f(101); //=> true
    var b = f(8); //=> true
}

// ifElse
() => {
    // Flatten all arrays in the list but leave other values alone.
    var flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

    let r1: any[] = flattenArrays([[0], [[10], [8]], 1234, {}]); //=> [[0], [10, 8], 1234, {}]
    let r2: any[] = flattenArrays([[[10], 123], [8, [10]], "hello"]); //=> [[10, 123], [8, 10], "hello"]
}

// isEmpty
() => {
    var b = R.isEmpty([1, 2, 3]); //=> false
    var b = R.isEmpty([]); //=> true
    var b = R.isEmpty(''); //=> true
    var b = R.isEmpty(null); //=> false
    var b = R.isEmpty({}); //=>true
    var b = R.isEmpty({a:1}); //=> false
}

// not
() => {
    var b = R.not(true); //=> false
    var b = R.not(false); //=> true
    var b = R.not(0); // => true
    var b = R.not(1); // => false
}

class Why {
    val: boolean;
    constructor(val: boolean) {
        this.val = val;
    }
    or(x: boolean) {
        return this.val && x;
    }
}

// or
() => {
    const x0: boolean = R.or(false, true); //=> false
    const x1: number|any[] = R.or(0, []); //=> []
    const x2: number|any[] = R.or(0)([]); //=> []
    // const x3: string = R.or(null, ''); //=> ''   // errors with strict null checks

    var why = new Why(true);
    why.or(true)
    const x4: Why|boolean = R.or(why, false); // false
}

// intersperse
() => {
    var sr = R.intersperse(',', ['foo', 'bar']); //=> ['foo', ',', 'bar']
    var nr = R.intersperse(0, [1, 2]); //=> [1, 0, 2]
    var nr = R.intersperse(0, [1]); //=> [1]
}

// ISSUES:

// RESOLVED ISSUES:

() => {
    // #65, evolve issue
    const a1 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) }, { name: 'Tomato', elapsed: 100, remaining: 1400 });
    const a2 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) })({ name: 'Tomato', elapsed: 100, remaining: 1400 });
    interface xpto  { a: number, b: number };
    var test: xpto = { a: 1, b: 2};
    const a3: xpto = R.evolve({ a: R.add(1)}, test );
}

() => {
    // #73
    let filterMatrix = function (v: number, m: Array<Array<number>>): Array<number> {
      return R.chain(R.filter((c: number) => c == v), m)
      // return R.chain(R.filter(R.equals(v)), m)
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
    let mapMatrix3 = function(fn: (v: number) => number, m: Array<Array<number>>): Array<number> {
      return R.chain(R.map((c: number) => fn(c)), m)
    }
}

() => {
    // #109
    function grepSomethingRecursively(grepPatterns: string | string[]) {
        if (R.is(Array, grepPatterns)) {
            R.forEach(() => {}, grepPatterns)
        }
    }
}

// UNRESOLVED ISSUES:

// /*

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
    // #69: lens composition
    const sectioneditems = { sections: [
        {items: []},
        {items: []}
    ]}
    const elem = "Hello"
    R.over(R.compose(R.lensProp("sections"), R.lensIndex(sectioneditems.sections.length - 1), R.lensProp("items")), R.append(elem), sectioneditems)
}

() => {
    // #78: curry loses generics
    // : <T>R.CurriedFunction3<R.Pred<T>, T, T[], T[]>
    // : R.CurriedFunction3<R.Pred<any>, any, any[], any[]>
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
    // #86: lose generics in compose
    type var so = { [index: string]: string };
    let pairs =                         [['1','A'], ['2','B'], ['3','C']];
    let a1: var so =           R.fromPairs ([['1','A'], ['2','B'], ['3','C']])
    let a2: var so =           R.fromPairs (pairs);   // fails -- variable reduced to string[][], killing tuples
    let b1: var so = R.pipe   (R.fromPairs)([['1','A'], ['2','B'], ['3','C']])  // fails, generics turn to {} => {}
    let c1: var so = R.compose(R.fromPairs)([['1','A'], ['2','B'], ['3','C']])  // fails, generics turn to {} => {}

    // generics in pipe loses generics
    R.pipe(R.identity)
}

() => {
    // #90: curried function loses generics
    const map = (func: (some: string) => (x: number) => 1) => {
    return func('xx')(1)
    }
    const map2 = (func: (some: string, other: string) => '1') => {
    return func('xx', 'x')
    }
    // will work only with proposed changes
    map(R.assoc('xxx'))
    map2(R.assoc('xxx'))
}

() => {
    // #92: lose generics in compose

    // can't infer cond paths, must annotate:
    const x: <T>(v: T) => T = R.cond([
        [R.F, R.F],
        [R.T, R.identity]
    ]);
    // argument order matters for some reason...
    const y: (v: number) => number = R.pipe   (R.inc, x); // ok
    const z: (v: number) => number = R.compose(x, R.inc); // boom

    // don't use generics in pipe/compose/curry if it can't resolve them right away:
    let pipeF0 = R.pipe   (R.identity);         // : (v: {}) => {}
    let compF0 = R.compose(R.identity);         // : (v: {}) => {}

    // argument order matters too:
    let pipeF1 = R.pipe   (R.inc, R.identity);  // : (v: number) => number
    let compF1 = R.compose(R.identity, R.inc);  // : (v: number) => {}
    let res2a: number = compF1(1);          // uh-oh, fails

    // also can't reason backward:
    let compF2 = R.compose(R.inc, R.identity);  // : (v: {}) => number
    let res3b: number = compF2('foo');      // uh-oh, passes
    let pipeF2 = R.pipe   (R.identity, R.inc);  // : (v: {}) => number
    let res4b: number = pipeF2('foo');      // uh-oh, passes
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

() => {
  // #119: path
  var n = R.path(['a', 'b', 'c'], {a: {b: {c: 2}}})
  let a2: null = R.path(['a', 'b', 'c'], {a: {b: 2}})   // still fails
  // var n = R.path(['a', '0', 'c'], {a: [{c: 2}] })
  var n = R.path(['a', 0, 'c'], {a: [{c: 2}] })
}

// */
