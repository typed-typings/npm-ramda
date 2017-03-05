import * as R from '../index';

declare let console: any;

let double = (x: number): number => x + x;

let shout = function(x: number): string {
    return x >= 10
        ? 'big'
        : 'small';
};

// check type information is not lost for lists
let onlyNumberList = function(xs: number[]): number[] {
  return xs;
};

// check type information is not lost for simple objects
let onlyNumberObj = function(xs: {[key: string]: number}): {[key: string]: number} {
  return xs;
};


class F {
    x = 'X';
    y = 'Y';
}
class F2 {
    a = 100;
    y = 1;
    x() {};
    z() {};
}

// isArrayLike
() => {
    R.isArrayLike('a'); // $ExpectType boolean
    R.isArrayLike([1,2,3]); // $ExpectType boolean
    R.isArrayLike([]); // $ExpectType boolean
};

// propIs
(() => {
    R.propIs(Number, 'x', {x: 1, y: 2});  // => true // $ExpectType boolean
    R.propIs(Number, 'x')({x: 1, y: 2});  // => true // $ExpectType boolean
    R.propIs(Number)('x', {x: 1, y: 2});  // => true // $ExpectType boolean
    R.propIs(Number)('x')({x: 1, y: 2});  // => true // $ExpectType boolean
    R.propIs(Number, 'x', {x: 'foo'});    // => false // $ExpectType boolean
    R.propIs(Number, 'x', {});            // => false // $ExpectError Argument of type 'x' is not assignable to parameter of type 'never'.`, because 'x' is not in `{}`.
});

// type
(() => {
    R.type({}); // => 'Object' // $ExpectType string
    R.type(1); // => 'Number' // $ExpectType string
    R.type(false); // => 'Boolean' // $ExpectType string
    R.type('s'); // => 'String' // $ExpectType string
    R.type(null); // => 'Null' // $ExpectType string
    R.type([]); // => 'Array' // $ExpectType string
    R.type(/[A-z]/); // => 'RegExp' // $ExpectType string
});

// curry
() => {
    const takeTwo = R.curry((x: number, y: number) => x + y);
    takeTwo(3); // $ExpectType (t2: number) => number
};

// unary, binary, nAry
() => {
    let takesNoArg = function() { return true; };
    let takesOneArg = function(a: number) { return [a]; };
    let takesTwoArgs = function(a: number, b: number) { return [a, b]; };
    let takesThreeArgs = function(a: number, b: number, c: number) { return [a, b, c]; };

    let addFourNumbers = function(a: number, b: number, c: number, d: number): number {
      return a + b + c + d;
    };

    const curriedFourNumbers = R.curry(addFourNumbers);
    curriedFourNumbers; // $ExpectType CurriedFunction4<number, number, number, number, number>
    curriedFourNumbers(1); // $ExpectType CurriedFunction3<number, number, number, number>
    curriedFourNumbers(1)(2); // $ExpectType (t2: number) => number // CurriedFunction2<number, number, number>
    curriedFourNumbers(1)(2)(3); // $ExpectType <T1,R>(t1: T1) => R
    curriedFourNumbers(1,2,4); // $ExpectType <T1,R>(t1: T1) => R
    curriedFourNumbers(1)(2)(3)(4); // $ExpectType number
    curriedFourNumbers(1,2)(3,4); // $ExpectType number
    curriedFourNumbers(1,2,3)(4); // $ExpectType number

    R.nAry(0, takesNoArg); // $ExpectType () => boolean
    R.nAry(0, takesOneArg); // $ExpectType () => number[]
    R.nAry(1, takesTwoArgs); // $ExpectType (a: number) => number[]
    R.nAry(1, takesThreeArgs); // $ExpectType (a: number) => number[]

    R.unary(takesOneArg); // $ExpectType (a: number) => number[]
    R.unary(takesTwoArgs); // $ExpectType (a: number) => number[]
    R.unary(takesThreeArgs); // $ExpectType (a: number) => number[]

    R.binary(takesTwoArgs); // $ExpectType (a: number, b: number) => number[]
    R.binary(takesThreeArgs); // $ExpectType (a: number, b: number) => number[]

    let addTwoNumbers = function(a: number, b: number) { return a + b; };
    let addTwoNumbersCurried = R.curry(addTwoNumbers); // $ExpectType CurriedFunction2<number, number, number>

    let inc = addTwoNumbersCurried(1);
    inc(2); // $ExpectType number
    addTwoNumbersCurried(2,3); // $ExpectType number
};

// uncurry
() => {
    const addFour = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
    const uncurriedAddFour = R.uncurryN<number>(4, addFour);
    uncurriedAddFour(1, 2, 3, 4); // => 10 // $ExpectType number
};

// unless
() => {
    const coerceArray = R.unless(R.isArrayLike, R.of); // $ExpectType <a>(v: a|[a]) => [a]
    coerceArray([1, 2, 3]); // => [1, 2, 3] // $ExpectType number[]
    coerceArray(1);         // => [1] // $ExpectType number[]
};

// nthArg
(() => {
    R.nthArg(1)('a', 'b', 'c'); // => 'b' // $ExpectType string
    R.nthArg(-1)('a', 'b', 'c'); // => 'c' // $ExpectType string
});

// unapply
() => {
    R.unapply(JSON.stringify); // $ExpectType (...args: string[])=>string
    R.unapply(JSON.stringify)(1, 2, 3); // => '[1,2,3]' // $ExpectType string
};

// until
() => {
    R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128 // $ExpectType number
};

// propSatisfies
() => {
    const truncate = R.when(
        R.propSatisfies(R.flip(R.gt)(10), 'length'),
        R.pipe(R.take(10), R.append('…'), R.join(''))
    );
    truncate('12345');         // => '12345' // $ExpectType string
    truncate('0123456789ABC'); // => '0123456789…' // $ExpectType string
};

/* compose */
() => {
    let limit10 = function(x: number): boolean {
        return x >= 10;
    };
    R.compose(limit10, double); // $ExpectType (x0: number) => boolean
    R.compose(limit10, double)(10); // $ExpectType boolean

    const f0 = (s: string) => +s;      // string -> number
    const f1 = (n: number) => n === 1; // number -> boolean
    const f2 = R.compose(f1, f0);      // string -> boolean

    // akward example that bounces types between number and string
    const g0 = (list: number[]) => R.map(R.inc, list);
    const g1 = R.dropWhile(R.gt(10));
    const g2 = R.map((i: number) => i > 5 ? 'bigger' : 'smaller');
    const g3 = R.all((i: string) => i === 'smaller');
    const g = R.compose(g3, g2, g1, g0); // $ExpectType (list: number[]) => boolean
    g([1, 2, 10, 13]); // $ExpectType boolean
};

/* pipe */
() => {
    R.pipe(double, double, shout); // $ExpectType (x0: number) => string
    R.pipe(double, double, shout)(10); // $ExpectType string

    // $ExpectType string
    const capitalize = (str: string) => R.pipe(
        R.split(''),
        R.adjust(R.toUpper, 0),
        R.join('')
    )(str);

    let f = R.pipe(Math.pow, R.negate, R.inc);
    f(3, 4); // -(3^4) + 1 // $ExpectType number
};

/* pipeP */
() => {
    // $ExpectType Promise<number>
    R.pipeP(
        (m: number) => Promise.resolve(R.multiply(2, m)),
        (m: number) => Promise.resolve(m / 2),
        R.multiply(2)
    )(10);
};

// TODO: pipeK

// invoker
() => {
    R.invoker<string>(0, 'charAt', 'foo'); // $ExpectType string
    R.invoker<string>(1, 'charAt', 'foo', 1); // $ExpectType string
};

// juxt
(() => {
    const range = R.juxt([Math.min, Math.max]);
    range(3, 4, 9, -3); // => [-3, 9] // $ExpectType number[]

    const chopped = R.juxt([R.head, R.last]);
    chopped('longstring'); // => ['l', 'g'] // $ExpectType string[]
});

// useWith
(() => {
    let square = function(x: number) { return x * x; };
    let add = function(a: number, b: number) { return a + b; };
    // Adds any number of arguments together
    let addAll = function() {
      return 0;
    };

    // Basic example
    R.useWith(addAll, [ double, square ]);
});

// clone
(() => {
  let printXPlusFive = function(x: number) { console.log(x + 5); };
  R.forEach(printXPlusFive, [1, 2, 3]);
  R.clone([{},{},{}]); // $ExpectType Object[]
  R.clone([1,2,3]); // $ExpectType number[]
})();

// forEach
// (() => {
//   let printXPlusFive = function(x, i) { console.log(i + 5); };
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

// times
(() => {
    let i = function(x: number) {return x;};
    R.times(i, 5); // $ExpectType number[]
})();

// pipe
(() => {
  let triple = function(x: number): number { return x * 3; };
  let square = function(x: number): number { return x * x; };
  let squareThenDoubleThenTriple = R.pipe(square, double, triple);
  squareThenDoubleThenTriple(5); // => 150 // $ExpectType number
})();

// partial
(() => {
    let multiply = function(a: number, b: number) { return a * b; };
    let double = R.partial(multiply, [2]);
    double(2); // => 4 // $ExpectType number

    let greet = function(salutation: string, title: string, firstName: string, lastName: string) {
      return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
    };
    let sayHello = R.partial(greet, ['Hello']);
    let sayHelloToMs = R.partial(sayHello, ['Ms.']);
    sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!' // $ExpectType string

    let greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
    greetMsJaneJones('Hello'); // => 'Hello, Ms. Jane Jones!' // $ExpectType string
})();

// memoize
(() => {
    let numberOfCalls = 0;
    let trackedAdd = function(a: number, b: number) {
      numberOfCalls += 1;
      return a + b;
    };
    let memoTrackedAdd = R.memoize(trackedAdd);

    memoTrackedAdd(1, 2); // => 3 // $ExpectType number
    numberOfCalls;        // => 1 // $ExpectType number
    memoTrackedAdd(1, 2); // => 3 // $ExpectType number
    numberOfCalls;        // => 1 // $ExpectType number
    memoTrackedAdd(2, 3); // => 5 // $ExpectType number
    numberOfCalls;        // => 2 // $ExpectType number

    // Note that argument order matters
    memoTrackedAdd(2, 1); // => 3 // $ExpectType number
    numberOfCalls; // => 3 // $ExpectType number
})();

// once
(() => {
    let x: number;
    let addOneOnce = R.once(function(x: number){ return x + 1; });
    addOneOnce(10); // => 11 // $ExpectType number
    addOneOnce(addOneOnce(50)); // => 11 // $ExpectType number
})();

// match
() => {
    R.match(/([a-z]a)/g, 'bananas'); // => ['ba', 'na', 'na'] // $ExpectType string[]
    R.match(/a/, 'b'); // => [] // $ExpectType string[]
    let sr = R.match(/a/, null); // error with strict null checks // $ExpectError Argument of type 'null' is not assignable to parameter of type 'string'.
};

// reduce
(() => {
    let numbers = [1, 2, 3];
    let add = function(a: number, b: number) {
        return a + b;
    };
    R.reduce(add, 10, numbers); // => 16; // $ExpectType number
})();

// add
(() => {
    let plus3 = R.add(3);
    plus3(5); // $ExpectType number
})();

// reduceRight
(() => {
    let pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
    let flattenPairs = function(acc: [string, number], pair: [string, number]) {
      return acc.concat(pair);
    };
    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ] // $ExpectType Array<number|string>
})();

// reduceWhile
() => {
    let isOdd = (x: number, acc: number) => x % 2 === 1;
    let xs = [1, 3, 5, 60, 777, 800];
    R.reduceWhile(isOdd, R.add, 0, xs); // => 9 // $ExpectType number

    let ys = [2, 4, 6];
    R.reduceWhile(isOdd, R.add, 111, ys); // => 111 // $ExpectType number
};

// mapObjIndexed
(() => {
    let values = { x: 1, y: 2, z: 3 };
    let prependKeyAndDouble = function(num: number, key: string, obj: any) {
        return key + (num * 2);
    };
    R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' } // $ExpectType Dictionary<string>
});

// ap, of
(() => {
    R.ap([R.multiply(2), R.add(3)], [1,2,3]); // => [2, 4, 6, 4, 5, 6] // $ExpectType number[]
    R.of([1]); // => [[1]] // $ExpectType number[][]
    R.of(1); // $ExpectType number[]
});

// empty
() => {
    R.empty([1,2,3,4,5]); // => [] // $ExpectType number[]
    R.empty([1, 2, 3]);     // => [] // $ExpectType number[]
    R.empty('unicorns');    // => '' // $ExpectType string
    R.empty({x: 1, y: 2});  // => {} // $ExpectType {}
};

// length
(() => {
    R.length([1, 2, 3]); // => 3 // $ExpectType number
});

// addIndex, filter, reject
(() => {
    const isEven = function(n: number) {
        return n % 2 === 0;
    };
    const filterIndexed = R.addIndex(R.filter);

    R.filter(isEven, [1, 2, 3, 4]); // => [2, 4] // $ExpectType number[]

    let lastTwo = function(val: number, idx: number, list: number[]) {
      return list.length - idx <= 2;
    };
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9] // $ExpectType number[]

    let isOdd = function(n: number) {
      return n % 2 === 1;
    };
    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4] // $ExpectType number[]
});

// take, takeWhile
(() => {
    let isNotFour = function(x: number) {
      return !(x === 4);
    };
    R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3] // $ExpectType number[]
    R.take(2, [1, 2, 3, 4]); // => [1, 2] // $ExpectType number[]
});

// unfold
(() => {
    let f = function(n: number) { return n > 50 ? false : [-n, n + 10]; };
    R.unfold(f, 10); // => [-10, -20, -30, -40, -50] // $ExpectType number[]
    let b = R.unfold(f); // => [-10, -20, -30, -40, -50]
    b(10); // $ExpectType number[]
});

/*****************************************************************
 * Function category
 */

// flip
() => {
    let mergeThree = function(a: number, b: number, c: number): number[] {
      return ([] as number[]).concat(a, b, c);  // strictNullChecks: must cast array to right type
    };
    mergeThree(1, 2, 3); // => [1, 2, 3] // $ExpectType number[]
    let flipped = R.flip(mergeThree);
    flipped(1, 2, 3); // => [2, 1, 3] // $ExpectType number[]
 };

/*********************
 * List category
 ********************/

// all
() => {
    let lessThan2 = R.flip(R.lt)(2);
    let lessThan3 = R.flip(R.lt)(3);
    R.all(lessThan2)([1, 2]); // => false // $ExpectType boolean
    R.all(lessThan3)([1, 2]); // => true // $ExpectType boolean
};

// any
() => {
    let lessThan0 = R.flip(R.lt)(0);
    let lessThan2 = R.flip(R.lt)(2);
    R.any(lessThan0)([1, 2]); // => false // $ExpectType boolean
    R.any(lessThan2)([1, 2]); // => true // $ExpectType boolean
};

// ascend
() => {
  let byAge = R.ascend(R.prop('age'));
  let alice = {
    name: 'ALICE',
    age: 101
  };
  let bob = {
    name: 'Bob',
    age: -10
  };
  let clara = {
    name: 'clara',
    age: 314.159
  };
  let people = [clara, bob, alice];
  let peopleByYoungestFirst = R.sort(byAge, people); // $ExpectType typeof people
};

// aperture
() => {
    R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]] // $ExpectType number[][]
    R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]] // $ExpectType number[][]
    R.aperture(7, [1, 2, 3, 4, 5]); // => [] // $ExpectType number[][]
    R.aperture(7)([1, 2, 3, 4, 5]); // => [] // $ExpectType number[][]
};

// append
() => {
    R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests'] // $ExpectType string[]
    R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests'] // $ExpectType string[]
    R.append('tests', []); // => ['tests'] // $ExpectType string[]
    R.append<string, string[]>(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']] // $ExpectType Array<string[]|string>
    R.append(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']]                   // $ExpectType Array<string[]|string>
    R.append<string[]>(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]         // $ExpectType Array<string[]|string>
    R.append(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]                   // $ExpectType Array<string[]|string>
};

// chain
() => {
    let duplicate = function(n: number) {
        return [n, n];
    };
    R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3] // $ExpectType number[]
    R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3] // $ExpectType number[]
    R.chain(R.append, R.head)([1, 2, 3]); // => [1, 2, 3, 1] // $ExpectType number[]
    R.chain(R.append)(R.head)([1, 2, 3]); // => [1, 2, 3, 1] // $ExpectType number[]
};

// clamp
() => {
    R.clamp(1, 10, -1); // => 1  // $ExpectType number
    R.clamp(1, 10)(11); // => 10 // $ExpectType number
    R.clamp(1)(10, 4);  // => 4  // $ExpectType number
    R.clamp('a', 'd', 'e');  // => 'd' // $ExpectType string
};

// concat
() => {
    R.concat([], []); // => []   // let r: [] =
    R.concat([4, 5, 6], [1, 2, 3]); // => [4, 5, 6, 1, 2, 3] // $ExpectType number[]
    R.concat([4, 5, 6])([1, 2, 3]); // => [4, 5, 6, 1, 2, 3] // $ExpectType number[]
    R.concat('ABC')('DEF'); // 'ABCDEF'                      // $ExpectType string
};

// contains
() => {
    R.contains(3)([1, 2, 3]); // => true // $ExpectType boolean
    R.contains(3, [1, 2, 3]); // => true // $ExpectType boolean
    R.contains(4)([1, 2, 3]); // => false // $ExpectType boolean
    R.contains({})([{}, {}]); // => false // $ExpectType boolean
    let obj = {};
    R.contains(obj)([{}, obj, {}]); // => true // $ExpectType boolean
};

// descend
() => {
  let byAge = R.descend(R.prop('age'));
  let alice = {
    name: 'ALICE',
    age: 101
  };
  let bob = {
    name: 'Bob',
    age: -10
  };
  let clara = {
    name: 'clara',
    age: 314.159
  };
  let people = [clara, bob, alice];
  let peopleByOldestFirst = R.sort(byAge, people); // $ExpectType typeof people
};

// drop
() => {
    R.drop(3, [1,2,3,4,5,6,7]); // => [4,5,6,7] // $ExpectType number[]
    R.drop(3)([1,2,3,4,5,6,7]); // => [4,5,6,7] // $ExpectType number[]
    R.drop(3, 'ramda'); // => 'ram' // $ExpectType string
    R.drop(3)('ramda'); // => 'ram' // $ExpectType string
};

// dropLast
(() => {
    R.dropLast(1, ['foo', 'bar', 'baz']); // => ['foo', 'bar'] // $ExpectType string[]
    R.dropLast(2)(['foo', 'bar', 'baz']); // => ['foo'] // $ExpectType string[]
    R.dropLast(3, 'ramda');               // => 'ra' // $ExpectType string
    R.dropLast(3)('ramda');               // => 'ra' // $ExpectType string
});

// dropLastWhile
(() => {
    let lteThree = (x: number) => x <= 3;
    R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // => [1, 2, 3, 4] // $ExpectType number[]
});

// dropWhile
() => {
    let lteTwo = function(x: number) {
        return x <= 2;
    };
    R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4] // $ExpectType number[]
    R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4] // $ExpectType number[]
};

// filter
() => {
    let isEven = function(n: number) {
        return n % 2 === 0;
    };
    // filter works with lists...
    R.filter(isEven, [1, 2, 3, 4]); // => [2, 4] // $ExpectType number[]
    let isEvenFn = R.filter(isEven);
    isEvenFn([1, 2, 3, 4]);
    // ... but also objects
    R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, d: 4} // $ExpectType Dictionary<number>
    let isEvenFnObj = R.filter(isEven);
    // see that we did not break anything
    // and we kept type information
    onlyNumberList(R.filter(isEven,[1,2,3,4])); // $ExpectType number[]
    onlyNumberObj(R.filter(isEven, {a: 1, b: 2, c: 3, d: 4})); // strictNullChecks: Partial fails, consider Pick // $ExpectType Dictionary<number>
};

// addIndex
() => {
    let lastTwo = function(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    };
    let filterIndexed = R.addIndex(R.filter);

    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9] // $ExpectType number[]
    let lastTwoFn = filterIndexed(lastTwo);
    lastTwoFn([8, 6, 7, 5, 3, 0, 9]); // $ExpectType number[]
};

// find, propEq
() => {
    let xs = [{a: 1}, {a: 2}, {a: 3}];
    R.find(R.propEq('a', 2))(xs); // => {a: 2} // $ExpectType Dictionary<number>
    R.find(R.propEq('a', 4))(xs); // => undefined // $ExpectType undefined
};

// find
() => {
    type Task = {id: number};
    let tasks: Task[] = [];
    const a = R.find((task: Task) => task.id === 1, tasks); // this works
    const f: (list: Task[]) => Task = R.find<Task>((task: Task) => task.id === 1);
    f(tasks); // works // $ExpectType Task
};

// findIndex
() => {
    type Task = {a: number};
    let xs = [{a: 1}, {a: 2}, {a: 3}];
    const a: (list: Task[]) => number = R.findIndex(R.propEq('a', 2));
    a(xs); // => 1 // $ExpectType number
    R.findIndex(R.propEq('a', 4))(xs); // => -1 // $ExpectType number

    R.findIndex((x: number) => x === 1, [1, 2, 3]); // $ExpectType number
};

// findLast
() => {
    let xs = [{a: 1, b: 0}, {a: 1, b: 1}];
    R.findLast(R.propEq('a', 1))(xs); // => {a: 1, b: 1} // $ExpectType Dictionary<number>
    R.findLast(R.propEq('a', 4))(xs); // => undefined // $ExpectType undefined
};

// findLastIndex
() => {
    let xs = [{a: 1, b: 0}, {a: 1, b: 1}];
    R.findLastIndex(R.propEq('a', 1))(xs); // => 1 // $ExpectType number
    R.findLastIndex(R.propEq('a', 4))(xs); // => -1 // $ExpectType number
    R.findLastIndex((x: number) => x === 1, [1, 2, 3]); // $ExpectType number[]
};

// pathEq
() => {
    let user1 = { address: { zipCode: 90210 } };
    let user2 = { address: { zipCode: 55555 } };
    let user3 = { name: 'Bob' };
    let users = [ user1, user2, user3 ];
    let isFamous = R.pathEq(['address', 'zipCode'], 90210);
    R.filter(isFamous, users); // => [ user1 ] // $ExpectType Object[]
};

// propEq
() => {
    let xs: {[key: string]: string} = {a: '1', b: '0'};
    R.propEq('a', '1', xs);// => true // $ExpectType boolean
    R.propEq('a', '4', xs); // => false // $ExpectType boolean
};
() => {
    let xs: {[key: string]: number} = {a: 1, b: 0};
    R.propEq('a', 1, xs);// => true // $ExpectType boolean
    R.propEq('a', 4, xs); // => false // $ExpectType boolean
};
() => {
    let xs = {a: '1', b: '0'};
    R.propEq('a', '1', xs);// => true // $ExpectType boolean
    R.propEq('a', '4', xs); // => false // $ExpectType boolean
};
() => {
    let xs = {a: 1, b: 0};
    R.propEq('a', 1, xs);// => true // $ExpectType boolean
    R.propEq('a', 4, xs); // => false // $ExpectType boolean
};
interface Obj { a: number; b: number; };
() => {
    let xs: Obj = {a: 1, b: 0};
    R.propEq('a', 1, xs);// => true // $ExpectType boolean
    R.propEq('a', 4, xs); // => false // $ExpectType boolean
};

// forEach
() => {
    let printXPlusFive = function(x: number) { console.log(x + 5); };
    R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3] // $ExpectType number[]
    R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3] // $ExpectType number[]
    // => 6
    // => 7
    // => 8
};

// forEach
() => {
    let printKeyConcatValue = (value: any, key: string, obj: any) => console.log(key + ':' + value);
    R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); // $ExpectType {x: 1, y: 2}
    R.forEachObjIndexed(printKeyConcatValue)({x: 1, y: 2}); // $ExpectType {x: 1, y: 2}
    R.forEachObjIndexed(printKeyConcatValue, [1, 2]); // $ExpectType [1, 2]
    R.forEachObjIndexed(printKeyConcatValue)([1, 2]); // $ExpectType [1, 2]
};

// addIndex?
() => {
    let plusFive = function(num: number, idx: number, list: number[]) { list[idx] = num + 5; };
    R.addIndex(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8] // $ExpectType number[]
};

// groupBy
() => {
    let byGrade = R.groupBy(function(student: {score: number; name: string}) {
        let score = student.score;
        return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
    });
    let students = [{name: 'Abby', score: 84},
      {name: 'Eddy', score: 58},
      {name: 'Jack', score: 69}];
    byGrade(students); // $ExpectType Dictionary<Object[]>
};

// groupWith
() => {
    R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]); // $ExpectType number[][]
    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

    R.groupWith((a: number, b: number) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]); // $ExpectType number[][]
    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

    const isVowel = (a: string) => R.contains(a, 'aeiou') ? a : '';
    R.groupWith(R.eqBy<string>(isVowel), 'aestiou'); // $ExpectType string[]
    // ['ae', 'st', 'iou']
};

// head
() => {
    R.head(['fi', 'fo', 'fum']); // => 'fi' // $ExpectType string
    R.head([10, 'ten']); // => 10 // $ExpectType number
    R.head(['10', 10]); // => '10' // $ExpectType string
};

// indexBy
(() => {
    let list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    R.indexBy(R.prop('id'), list); // $ExpectType Dictionary<Object>
    R.indexBy(R.prop('id'))(list); // $ExpectType Dictionary<Object>
    R.indexBy<{id: string}>(R.prop('id'))(list); // $ExpectType Dictionary<Object>
});

// indexOf
() => {
    R.indexOf(3, [1,2,3,4]); // => 2 // $ExpectType number
    R.indexOf(10)([1,2,3,4]); // => -1 // $ExpectType number
};

// init
() => {
    R.init(['fi', 'fo', 'fum']); // => ['fi', 'fo'] // $ExpectType string[]
};

// insert
() => {
    R.insert(2, 5, [1,2,3,4]); // => [1,2,5,3,4] // $ExpectType number[]
    R.insert(2)(5, [1,2,3,4]); // => [1,2,5,3,4] // $ExpectType number[]
    R.insert(2, 5)([1,2,3,4]); // => [1,2,5,3,4] // $ExpectType number[]
    R.insert(2)(5)([1,2,3,4]); // => [1,2,5,3,4] // $ExpectType number[]
};

// insertAll
() => {
    R.insertAll(2, [10,11,12], [1,2,3,4]); // $ExpectType number[]
    R.insertAll(2)([10,11,12], [1,2,3,4]); // $ExpectType number[]
    R.insertAll(2, [10,11,12])([1,2,3,4]); // $ExpectType number[]
    R.insertAll(2)([10,11,12])([1,2,3,4]); // $ExpectType number[]
};

// intersection
() => {
    R.intersection([1,2,3,4], [7,6,5,4,3]); // => [4, 3] // $ExpectType number[]
    R.intersection([1,2,3,4])([7,6,5,4,3]); // => [4, 3] // $ExpectType number[]
    R.intersection([1,2,4], [1,2,3]); // => [1,2] // $ExpectType number[]
    R.intersection([1,2,4])([1,2,3]); // => [1,2] // $ExpectType number[]
};

// intersectionWith
() => {
    let buffaloSpringfield = [
      {id: 824, name: 'Richie Furay'},
      {id: 956, name: 'Dewey Martin'},
      {id: 313, name: 'Bruce Palmer'},
      {id: 456, name: 'Stephen Stills'},
      {id: 177, name: 'Neil Young'}
    ];
    let csny = [
      {id: 204, name: 'David Crosby'},
      {id: 456, name: 'Stephen Stills'},
      {id: 539, name: 'Graham Nash'},
      {id: 177, name: 'Neil Young'}
    ];

    R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny); // $ExpectType { id: number, name: string }[]
    // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny); // $ExpectType { id: number, name: string }[]
        // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield, csny); // $ExpectType { id: number, name: string }[]
    R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny); // $ExpectType { id: number, name: string }[]
};

// into
() => {
    let numbers = [1, 2, 3, 4];
    let a  = R.map(R.add(1), R.take(2, numbers));
    let b = R.take<string>(2);
    let transducer = R.compose(R.map(R.add(1)), R.take<number>(2));


    R.into([], transducer, numbers); // => [2, 3] // $ExpectType number[]
    R.into([])(transducer, numbers); // => [2, 3] // $ExpectType number[]
    R.into([], transducer)(numbers); // => [2, 3] // $ExpectType number[]

    let intoArray = R.into([]);
    intoArray(transducer, numbers); // => [2, 3] // $ExpectType number[]
    intoArray(transducer)(numbers); // => [2, 3] // $ExpectType number[]
};

// join
() => {
    let spacer = R.join(' ');
    spacer(['a', 2, 3.4]);   // => 'a 2 3.4' // $ExpectType string
    R.join('|', [1, 2, 3]);    // => '1|2|3' // $ExpectType string
};

// last
() => {
    R.last(['fi', 'fo', 'fum']); // => 'fum' // $ExpectType string
};

// lastIndexOf
() => {
    R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); // => 6
    R.lastIndexOf(10, [1,2,3,4]); // => -1
    R.lastIndexOf(10)([1,2,3,4]); // => -1
};

// length
() => {
    R.length([]); // => 0 // $ExpectType number
    R.length([1, 2, 3]); // => 3 // $ExpectType number
};

// lensIndex, set, view, over
() => {
    let headLens = R.lensIndex(0);
    headLens([10, 20, 30, 40]); // => 10 // $ExpectType number
    headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40] // $ExpectType Array<number|string>
    R.view(headLens, ['a', 'b', 'c']);            // => 'a' // $ExpectType string
    R.set(headLens, 'x', ['a', 'b', 'c']);        // => ['x', 'b', 'c'] // $ExpectType string[]
    R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c'] // $ExpectType string[]
};

// map
() => {
    let arrayify = <T>(v: T): T[] => [v];
    // homogeneous array
    R.map(double, [1, 2, 3]); // => [2, 4, 6] // $ExpectType number[]
    R.map(double)([1, 2, 3]); // => [2, 4, 6] // $ExpectType number[]
    // homogeneous object
    R.map(double, { a: 1, b: 2, c: 3 }); // => { a: 2, b: 4, c: 6 } // $ExpectType Dictionary<number>
    R.map(double)({ a: 1, b: 2, c: 3 }); // => { a: 2, b: 4, c: 6 } // $ExpectType Dictionary<number>
    // heterogeneous array
    R.map(arrayify, [1, 'a']); // => [[1], ['a']] // $ExpectType [number[], string[]]
    R.map(arrayify)([1, 'a']); // => [[1], ['a']] // $ExpectType [number[], string[]]
    // heterogeneous object
    R.map(arrayify, { a: 1, b: 'c' }); // => { a: [1], b: ['c'] } // $ExpectType { a: number[], b: string[] }
    R.map(arrayify)({ a: 1, b: 'c' }); // => { a: [1], b: ['c'] } // $ExpectType { a: number[], b: string[] }

    // functor
    // I'm sorry, I have no clue how to make this example work with proper functor typing
    // const stringFunctor = {
    //     map: (fn: (c: number) => number) => {
    //         let chars = 'Ifmmp!Xpsme'.split('');
    //         return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join('');
    //     }
    // };
    // let s = R.map((x: number) => x-1, stringFunctor); // => 'Hello World'
};

// mapAccum
() => {
    let digits = ['1', '2', '3', '4'];
    let append = function(a: string, b: string): [string, string]{
        return [a + b, a + b];
    };
    R.mapAccum(append, '0', digits); // => ['01234', ['01', '012', '0123', '01234']] // $ExpectType Array<string[]|string>
    R.mapAccum(append)('0', digits); // => ['01234', ['01', '012', '0123', '01234']] // $ExpectType Array<string[]|string>
    R.mapAccum(append, '0')(digits); // => ['01234', ['01', '012', '0123', '01234']] // $ExpectType Array<string[]|string>
    R.mapAccum(append)('0')(digits); // => ['01234', ['01', '012', '0123', '01234']] // $ExpectType Array<string[]|string>
};

// mapAccumRight
() => {
    let digits = ['1', '2', '3', '4'];
    let append = function(a: string, b: string): [string, string] {
        return [a + b, a + b];
    };
    R.mapAccumRight(append, '0', digits); // => ['04321', ['04321', '0432', '043', '04']] // $ExpectType Array<string|string[]>
    R.mapAccumRight(append)('0', digits); // => ['04321', ['04321', '0432', '043', '04']] // $ExpectType Array<string|string[]>
    R.mapAccumRight(append, '0')(digits); // => ['04321', ['04321', '0432', '043', '04']] // $ExpectType Array<string|string[]>
    R.mapAccumRight(append)('0')(digits); // => ['04321', ['04321', '0432', '043', '04']] // $ExpectType Array<string|string[]>
};

// addIndex
() => {
    let squareEnds = function(elt: number, idx: number, list: number[]) {
        if (idx === 0 || idx === list.length - 1) {
            return elt * elt;
        }
        return elt;
    };
    R.addIndex(R.map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81] // $ExpectType number[]
    R.addIndex(R.map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81] // $ExpectType number[]
};

// none
() => {
    R.none(R.isNaN, [1, 2, 3]); // => true // $ExpectType boolean
    R.none(R.isNaN, [1, 2, 3, NaN]); // => false // $ExpectType boolean
    R.none(R.isNaN)([1, 2, 3, NaN]); // => false // $ExpectType boolean
};

// nth
() => {
    let list = ['foo', 'bar', 'baz', 'quux'];
    R.nth(1, list); // => 'bar' // $ExpectType string
    R.nth(-1, list); // => 'quux' // $ExpectType string
    R.nth(-99, list); // => undefined // $ExpectType undefined
    R.nth(-99)(list); // => undefined // $ExpectType undefined
};

// partition, contains
() => {
    R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']); // $ExpectType [string[], string[]]
    R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']); // $ExpectType [string[], string[]]
    R.partition((x: number) => x > 2, [1, 2, 3, 4]); // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2)([1, 2, 3, 4]); // $ExpectType [number[], number[]]
    R.partition(R.contains('s'),{ a: 'sss', b: 'ttt', foo: 'bars' }); // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ] // $ExpectType Object[]
};

// pluck
() => {
    R.pluck('a', [{a: 1}, {a: 2}]); // => [1, 2] // $ExpectType number[]
    R.pluck(0, [[1, 2], [3, 4]]);   // => [1, 3] // $ExpectType number[]
    R.pluck('a')([{a: 1}, {a: 2}]); // => [1, 2] // $ExpectType number[]
    R.pluck(0)([[1, 2], [3, 4]]);   // => [1, 3] // $ExpectType number[]
};

// prepend
() => {
    R.prepend('fee', ['fi', 'fo', 'fum']); // => ['fee', 'fi', 'fo', 'fum'] // $ExpectType string[]
    R.prepend('fee')(['fi', 'fo', 'fum']); // => ['fee', 'fi', 'fo', 'fum'] // $ExpectType string[]
};

// range
() => {
    R.range(1, 5);    // => [1, 2, 3, 4] // $ExpectType number[]
    R.range(50)(53);  // => [50, 51, 52] // $ExpectType number[]
};

// reduce
() => {
    let numbers = [1, 2, 3];
    let add = function(a: number, b: number) {
        return a + b;
    };
    R.reduce(add, 10, numbers); // => 16 // $ExpectType number
    R.reduce(add)(10, numbers); // => 16 // $ExpectType number
    R.reduce(add, 10)(numbers); // => 16 // $ExpectType number
};

// reduceBy

interface Student {
    name: string;
    score: number;
}
() => {
    const reduceToNamesBy = R.reduceBy((acc: string[], student: Student) => acc.concat(student.name), []);
    const namesByGrade = reduceToNamesBy(function(student: Student) {
          let score = student.score;
          return score < 65 ? 'F' :
                 score < 70 ? 'D' :
                 score < 80 ? 'C' :
                 score < 90 ? 'B' : 'A';
    });
    let students = [{name: 'Lucy', score: 92},
                    {name: 'Drew', score: 85},
                    {name: 'Bart', score: 62}];
    namesByGrade(students); // $ExpectType Dictionary<string[]>
    // {
    //   'A': ['Lucy'],
    //   'B': ['Drew']
    //   'F': ['Bart']
    // }
};

// addIndex
() => {
    let reduceIndexed = R.addIndex(R.reduce);
    let letters = ['a', 'b', 'c'];
    let objectify = function(accObject: {[elem: string]: number}, elem: string, idx: number, list: string[]) {
        accObject[elem] = idx;
        return accObject;
    };
    reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 } // $ExpectType Dictionary<number>
    reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 } // $ExpectType Dictionary<number>
    reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 } // $ExpectType Dictionary<number>
};

// reduceRight
interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }
type Pair = KeyValuePair<string, number>;
() => {
    let pairs: Pair[] = [ ['a', 1], ['b', 2], ['c', 3] ];
    let flattenPairs = function(pair: Pair, acc: Pair[]): Pair[] {
        return acc.concat(pair);
    };
    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ] // $ExpectType Array<string[]|string>
    R.reduceRight(flattenPairs, [])(pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ] // $ExpectType Array<string[]|string>
    R.reduceRight(flattenPairs)([], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ] // $ExpectType Array<string[]|string>
};

// reject
() => {
    let isOdd = function(n: number) {
        return n % 2 === 1;
    };
    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4] // $ExpectType number[]
    const a2 = R.reject(isOdd);
    R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4] // $ExpectType number[]
};

// rejectIndexed
() => {
    const lastTwo = function(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    };
    const rejectIndexed = R.addIndex(R.reject);
    rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3] // $ExpectType number[]
    rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3] // $ExpectType number[]
};

// remove
() => {
    R.remove(2, 3, [1,2,3,4,5,6,7,8]); // => [1,2,6,7,8] // $ExpectType number[]
    R.remove(2, 3)([1,2,3,4,5,6,7,8]); // => [1,2,6,7,8] // $ExpectType number[]
    R.remove(2)(3, [1,2,3,4,5,6,7,8]); // => [1,2,6,7,8] // $ExpectType number[]
};

// repeat
() => {
    R.repeat('hi', 5); // => ['hi', 'hi', 'hi', 'hi', 'hi'] // $ExpectType string[]
    let obj = {};
    let repeatedObjs = R.repeat(obj, 5); // => [{}, {}, {}, {}, {}]
    repeatedObjs[0] === repeatedObjs[1]; // => true // $ExpectType boolean
};

// reverse
() => {
    R.reverse([1, 2, 3]);  // => [3, 2, 1] // $ExpectType number[]
    R.reverse([1, 2]);     // => [2, 1] // $ExpectType number[]
    R.reverse([1]);        // => [1] // $ExpectType number[]
    R.reverse([]);         // => [] // $ExpectType number[]
};

// scan
() => {
    let numbers = [1, 2, 3, 4];
    R.scan(R.multiply, 1, numbers); // => [1, 1, 2, 6, 24] // $ExpectType number[]
    R.scan(R.multiply, 1)(numbers); // => [1, 1, 2, 6, 24] // $ExpectType number[]
    R.scan(R.multiply)(1, numbers); // => [1, 1, 2, 6, 24] // $ExpectType number[]
};

// slice
() => {
    let xs = R.range(0, 10);
    R.slice(2, 5, xs); // => [2, 3, 4] // $ExpectType number[]
    R.slice(2, 5)(xs); // => [2, 3, 4] // $ExpectType number[]
    R.slice(2)(5, xs); // => [2, 3, 4] // $ExpectType number[]

    let str = 'Hello World';
    R.slice(2, 5, str); // => 'llo' // $ExpectType string
    R.slice(2, 5)(str); // => 'llo' // $ExpectType string
    R.slice(2)(5, str); // => 'llo' // $ExpectType string
};

// sort
() => {
    let diff = function(a: number, b: number) { return a - b; };
    R.sort(diff, [4,2,7,5]); // => [2, 4, 5, 7] // $ExpectType number[]
    R.sort(diff)([4,2,7,5]); // => [2, 4, 5, 7] // $ExpectType number[]
};

// cond, equals, always
() => {
    const fn = R.cond([
        [R.equals(0),   R.always('water freezes at 0°C')],
        [R.equals(100), R.always('water boils at 100°C')],
        [R.T,           (temp: number) => 'nothing special happens at ' + temp + '°C']
    ]);
    fn(0); // => 'water freezes at 0°C' // $ExpectType string
    fn(50); // => 'nothing special happens at 50°C' // $ExpectType string
    fn(100); // => 'water boils at 100°C' // $ExpectType string
};

// tail
() => {
    R.tail(['fi', 'fo', 'fum']); // => ['fo', 'fum'] // $ExpectType string[]
    R.tail([1, 2, 3]); // => [2, 3] // $ExpectType number[]
};

// take
() => {
    R.take(3,[1,2,3,4,5]); // => [1,2,3] // $ExpectType number[]

    let members= [ 'Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis','Joe Morello','Norman Bates',
    'Eugene Wright','Gerry Mulligan','Jack Six','Alan Dawson','Darius Brubeck','Chris Brubeck',
    'Dan Brubeck','Bobby Militello','Michael Moore','Randy Jones'];
    let takeFive = R.take(5);
    takeFive(members); // => ['Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis'] // $ExpectType string[]
};
() => {
    R.take(3,'Example'); // => 'Exa' // $ExpectType string

    let takeThree = R.take(3);
    takeThree('Example'); // => 'Exa' // $ExpectType string
};

// takeLast
() => {
    R.takeLast(1, ['foo', 'bar', 'baz']); // => ['baz'] // $ExpectType string[]
    R.takeLast(2)(['foo', 'bar', 'baz']); // => ['bar', 'baz'] // $ExpectType string[]
    R.takeLast(3, 'ramda');               // => 'mda' // $ExpectType string
    R.takeLast(3)('ramda');               // => 'mda' // $ExpectType string
};

// takeLastWhile
() => {
  const isNotOne = (x: number) => x !== 1;
  R.takeLastWhile(isNotOne, [1, 2, 3, 4]); // => [2, 3, 4] // $ExpectType number[]
  R.takeLastWhile(isNotOne)([1, 2, 3, 4]); // => [2, 3, 4] // $ExpectType number[]
};

// takeWhile
() => {
    let isNotFour = function(x: number) {
        return !(x === 4);
    };
    R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3] // $ExpectType number[]
    R.takeWhile(isNotFour)([1, 2, 3, 4]); // => [1, 2, 3] // $ExpectType number[]
};

// tap
() => {
    const sayX = (x: number) => console.log('x is ' + x);
    R.tap(sayX, 100); // => 100 // $ExpectType number
};

// test
() => {
    R.test(/^x/, 'xyz'); // => true // $ExpectType boolean
    R.test(/^y/)('xyz'); // => false // $ExpectType boolean
};

// times
() => {
    R.times(R.identity, 5); // => [0, 1, 2, 3, 4] // $ExpectType number[]
    R.times(R.identity)(5); // => [0, 1, 2, 3, 4] // $ExpectType number[]
};

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
    R.toString(new Point(1, 2)); // => 'new Point(1, 2)' // $ExpectType string
    R.toString(42); // => '42' // $ExpectType string
    R.toString('abc'); // => ''abc'' // $ExpectType string
    R.toString([1, 2, 3]); // => '[1, 2, 3]' // $ExpectType string
    R.toString({foo: 1, bar: 2, baz: 3}); // => '{'bar': 2, 'baz': 3, 'foo': 1}' // $ExpectType string
    R.toString(new Date('2001-02-03T04: 05: 06Z')); // => 'new Date('2001-02-03T04: 05: 06.000Z')' // $ExpectType string
};

// transduce
() => {
    let numbers = [1, 2, 3, 4];
    let transducer = R.compose(R.map(R.add(1)), R.take(2));
    let fn = R.flip<number, number[], number[]>(R.append);
    R.transduce(transducer, fn, [] as number[], numbers); // => [2, 3]   // strictNullChecks: must annotate empty array type // $ExpectType number[]
    R.transduce(transducer, fn, [] as number[])(numbers); // => [2, 3] // $ExpectType number[]
    R.transduce(transducer, fn)([] as number[], numbers); // => [2, 3] // $ExpectType number[]
    R.transduce(transducer)(fn, [] as number[], numbers); // => [2, 3] // $ExpectType number[]
};

// // traverse
// () => {
//     // Returns `Nothing` if the given divisor is `0`
//     safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
//
//     R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); // => Just([5, 2.5, 2])
//     R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); // => Nothing
// }

// transpose
() => {
    R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]); // => [[1, 2, 3], ['a', 'b', 'c']] // $ExpectType any[][]
    R.transpose([[1, 2, 3], ['a', 'b', 'c']]); // => [[1, 'a'], [2, 'b'], [3, 'c']] // $ExpectType any[][]
    R.transpose([[10, 11], [20], [], [30, 31, 32]]); // => [[10, 20, 30], [11, 31], [32]] // $ExpectType number[][]
};

// tryCatch
() => {
    const x = R.prop('x');
    R.tryCatch<boolean>(R.prop('x'), R.F)({x: true}); // => true // $ExpectType boolean
    R.tryCatch<boolean>(R.prop('x'), R.F)(null);      // => false // $ExpectType boolean
};

// uniq
() => {
    R.uniq([1, 1, 2, 1]); // => [1, 2]   // $ExpectType number[]
    R.uniq([{}, {}]);     // => [{}, {}] // $ExpectType Object[]
    R.uniq([1, '1']);     // => [1, '1'] // $ExpectType any[]
};

// uniqWith
() => {
    let strEq = function(a: any, b: any) { return String(a) === String(b); };
    R.uniqWith(strEq, [1, '1', 2, 1]); // => [1, 2] // $ExpectType number[]
    R.uniqWith(strEq)([1, '1', 2, 1]); // => [1, 2] // $ExpectType number[]
    R.uniqWith(strEq)([{}, {}]);       // => [{}]   // $ExpectType Object[]
    R.uniqWith(strEq)([1, '1', 1]);    // => [1]    // $ExpectType number[]
    R.uniqWith(strEq)(['1', 1, 1]);    // => ['1']  // $ExpectType string[]
};

// unnest, equals
() => {
    R.equals(R.unnest([1, [2], [[3]]]), [1,2,[3]]); // => true // $ExpectType boolean
    R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]),[1,2,3,4,5,6]); // => true // $ExpectType boolean
};

// xprod
() => {
    R.xprod([1, 2], ['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']] // $ExpectType [number, string][]
    R.xprod([1, 2])(['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']] // $ExpectType [number, string][]
};

// zip
() => {
    R.zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']] // $ExpectType [number, string][]
    R.zip([1, 2, 3])(['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']] // $ExpectType [number, string][]
};

// zipObj
() => {
    R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3} // $ExpectType Dictionary<number>
    R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3} // $ExpectType Dictionary<number>
};

// zipWith
() => {
    let f = function(x: number, y: string) {
        // ...
    };
    R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')] // $ExpectType any[]
    R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')] // $ExpectType any[]
    R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')] // $ExpectType any[]
};

/*****************************************************************
 * Object category
 */

// assoc
() => {
    R.assoc('c', 3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3} // $ExpectType Dictionary<number>
    R.assoc('c')(3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3} // $ExpectType Dictionary<number>
    R.assoc('c', 3)({a: 1, b: 2}); // => {a: 1, b: 2, c: 3} // $ExpectType Dictionary<number>
};

// dissoc
() => {
    R.dissoc<{a: number, c: number}>('b', {a: 1, b: 2, c: 3}); // => {a: 1, c: 3} // $ExpectType Dictionary<number>
    R.dissoc('b', {a: 1, b: 2, c: 3});                         // => {a: 1, c: 3} // $ExpectType Dictionary<number>
    R.dissoc('b')<{a: number, c: number}>({a: 1, b: 2, c: 3}); // => {a: 1, c: 3} // $ExpectType Dictionary<number>
};

// assocPath
() => {
    R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}} // $ExpectType {a: {b: {c: number}}}
    R.assocPath(['a', 'b', 'c'])(42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}} // $ExpectType {a: {b: {c: number}}}
    R.assocPath(['a', 'b', 'c'], 42)({a: {b: {c: 0}}}); // => {a: {b: {c: 42}}} // $ExpectType {a: {b: {c: number}}}
};

// dissocPath
() => {
    R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}} // $ExpectType {a: {b: {}}}
    // optionally specify return type
    R.dissocPath<{a : { b: number}}>(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}} // $ExpectType {a: {b: {}}}
    R.dissocPath(['a', 'b', 'c'])({a: {b: {c: 42}}}); // => {a: {b: {}}} // $ExpectType {a: {b: {}}}
};

// clone
() => {
    let obj1 = [{}, {}, {}];
    let obj2 = [{a: 1}, {a: 2}, {a: 3}];
    R.clone(obj1); // $ExpectType any[]
    R.clone(obj2); // $ExpectType {a: number}[]
    R.clone({}); // $ExpectType Object
    R.clone(10); // $ExpectType 10
    R.clone('foo'); // $ExpectType "foo"
    R.clone(Date.now()); // $ExpectType number
};

// eqProps
() => {
    let o1 = { a: 1, b: 2, c: 3, d: 4 };
    let o2 = { a: 10, b: 20, c: 3, d: 40 };
    R.eqProps('a', o1, o2); // => false // $ExpectType boolean
    R.eqProps('c', o1, o2); // => true // $ExpectType boolean
    R.eqProps('c'); // $ExpectType {<T,U>(obj1: T, obj2: U): boolean}
    R.eqProps('c', o1); // $ExpectType {<U>(obj2: U): boolean}
};

// evolve
() => {
    let tomato = {firstName: 'Tomato ', data: {elapsed: 100, remaining: 1400}, id: 123};
    let transformations = {
        firstName: R.trim,
        lastName: R.trim, // Will not get invoked.
        data: {elapsed: R.add(1), remaining: R.add(-1)}
    };
    const a: typeof tomato = R.evolve(transformations, tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123} // $ExpectType typeof tomato
    const b: typeof tomato = R.evolve(transformations)(tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123} // $ExpectType typeof tomato
};

// has
() => {
    const hasName = R.has('name');
    hasName({name: 'alice'});   // => true  // $ExpectType boolean
    hasName({name: 'bob'});     // => true  // $ExpectType boolean
    hasName({});                // => false // $ExpectType boolean

    const point = {x: 0, y: 0};
    const pointHas = R.flip(R.has)(point);
    pointHas('x');  // => true  // $ExpectType boolean
    pointHas('y');  // => true  // $ExpectType boolean
    pointHas('z');  // => false // $ExpectType boolean
};

// hasIn
class Rectangle {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
};
() => {
    let square = new Rectangle(2, 2);
    R.hasIn('width', square);  // => true // $ExpectType boolean
    R.hasIn('area', square);  // => true // $ExpectType boolean
    R.flip(R.hasIn)(square)('area');  // => true // $ExpectType boolean
};

// invert
() => {
    let raceResultsByFirstName = {
      first: 'alice',
      second: 'jake',
      third: 'alice'
    };
    R.invert(raceResultsByFirstName); // $ExpectType Dictionary<string[]>
    // => { 'alice': ['first', 'third'], 'jake': ['second'] }
};

// invertObj
() => {
    let raceResults0 = {
      first: 'alice',
      second: 'jake'
    };
    R.invertObj(raceResults0); // $ExpectType Dictionary<string>
    // => { 'alice': 'first', 'jake': 'second' }

    // Alternatively:
    let raceResults1 = ['alice', 'jake'];
    R.invertObj(raceResults1); // $ExpectType Dictionary<string>
    // => { 'alice': '0', 'jake': '1' }
};

// keys
() => {
    R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c'] // $ExpectType string[]
};

// keysIn
() => {
    let f = new F();
    R.keysIn(f); // => ['x', 'y'] // $ExpectType string[]
};

// lens
() => {
    interface xy {
      x: number;
      y: number;
    }
    // let xLens = R.lens(R.prop('x'), R.assoc('x'));
    // let xLens = R.lens<number, xy>(R.prop('x'), R.assoc('x'));
    let xLens = R.lens<number>(R.prop('x'))(R.assoc('x'));
    // ^ works with only 1 generic, for curried version managed to split the inferred generic from the manual generic
    R.view(xLens, {x: 1, y: 2});            // => 1 // $ExpectType number
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2} // $ExpectType { x: number, y: number }
    R.set(xLens)(4, {x: 1, y: 2});          // => {x: 4, y: 2} // $ExpectType { x: number, y: number }
    R.set(xLens, 4)({x: 1, y: 2});          // => {x: 4, y: 2} // $ExpectType { x: number, y: number }
    R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2} // $ExpectType { x: number, y: number }
    R.over(xLens, R.negate)({x: 1, y: 2});  // => {x: -1, y: 2} // $ExpectType { x: number, y: number }
    R.over(xLens)(R.negate, {x: 1, y: 2});  // => {x: -1, y: 2} // $ExpectType { x: number, y: number }
};

// lensIndex
() => {
    let headLens = R.lensIndex(0);
    R.view(headLens, ['a', 'b', 'c']);            // => 'a' // $ExpectType string
    R.set(headLens, 'x', ['a', 'b', 'c']);        // => ['x', 'b', 'c'] // $ExpectType string[]
    R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c'] // $ExpectType string[]
};

// lensProp
() => {
    let xLens = R.lensProp('x');
    R.view(xLens, {x: 1, y: 2});            // => 1 // $ExpectType number
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2} // $ExpectType Dictionary<number>
    R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2} // $ExpectType Dictionary<number>
};

// lensPath
() => {
  const xyLens = R.lensPath(['x', 'y']);
  R.view(xyLens, {x: {y: 2, z: 3}});            // => 2 // $ExpectType number
  R.set(xyLens, 4, {x: {y: 2, z: 3}});          // => {x: {y: 4, z: 3}} // $ExpectType { [s: string]: { [s: string]: number } }
  R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  // => {x: {y: -2, z: 3}} // $ExpectType { [s: string]: { [s: string]: number } }
};

// keys
() => {
    R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c'] // $ExpectType string[]
};

// keysIn
() => {
    let f = new F();
    R.keysIn(f); // => ['x', 'y'] // $ExpectType string[]
};

// lens
() => {
    let headLens = R.lens(
      function get(arr: number[]) { return arr[0]; },
      function set(val: number, arr: number[]) { return [val].concat(arr.slice(1)); }
    );
    headLens([10, 20, 30, 40]); // => 10
    // headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40] // $ExpectError Argument of type 'mu' is not assignable to parameter of type 'number'.

    let phraseLens = R.lens(
      function get(obj: any) { return obj.phrase; },
      function set(val: string, obj: any) {
        let out = R.clone(obj);
        out.phrase = val;
        return out;
      }
    );
    let obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
    let obj2 = { phrase: "What's all this, then?"};
    phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!' // $ExpectType string
    phraseLens(obj2); // => "What's all this, then?" // $ExpectType string
    phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'} // $ExpectType Dictionary<string>
};

// lensProp
() => {
    let phraseLens = R.lensProp('phrase');
    let obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
    let obj2 = { phrase: "What's all this, then?"};
    phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!' // $ExpectType string
    phraseLens(obj2); // => 'What's all this, then?' // $ExpectType string
    phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'} // $ExpectType Dictionary<string>
};

// merge
() => {
    R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }); // $ExpectType Dictionary<any>
    // => { 'name': 'fred', 'age': 40 }
    let resetToDefault = R.flip(R.merge)({x: 0});
    resetToDefault({x: 5, y: 2}); // => {x: 0, y: 2} // $ExpectType Dictionary<number>
};

// megeAll
() => {
    R.mergeAll([{foo: 1},{bar: 2},{baz: 3}]); // => {foo: 1,bar: 2,baz: 3} // $ExpectType Dictionary<number>
    R.mergeAll([{foo: 1},{foo: 2},{bar: 2}]); // => {foo: 2,bar: 2} // $ExpectType Dictionary<number>
};

// mergeWith
() => {
    // $ExpectType { a: boolean, b: boolean, values: number[] }
    R.mergeWith(R.concat,
        { a: true, values: [10, 20] },
        { b: true, values: [15, 35] });
        // => { a: true, b: true, values: [10, 20, 15, 35] }
};

// mergeWithKey
() => {
    let concatValues = (k: string, l: string, r: string) => k === 'values' ? R.concat(l, r) : r;
    R.mergeWithKey(concatValues,
        { a: true, thing: 'foo', values: [10, 20] },
        { b: true, thing: 'bar', values: [15, 35] });
    const merge = R.mergeWithKey(concatValues);
    // $ExpectType { a: boolean, b: boolean, values: number[], thing: string }
    merge({ a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] });
};

// pathOr
() => {
    R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); // => 2 // $ExpectType number
    R.pathOr('N/A', ['a', 'b'])({a: {b: 2}}); // => 2 // $ExpectType number
    R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); // => 'N/A' // $ExpectType number
    R.pathOr({c: 2})(['a', 'b'], {c: {b: 2}}); // => 'N/A' // $ExpectType number
};

// pathSatisfies
() => {
    R.pathSatisfies((a: any) => a === 'foo', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); // => true // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 'bar', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); // => false // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'], {a: {b: {c: 1}}}); // => true // $ExpectType boolean
    R.pathSatisfies((a: any) => a !== 1, ['a', 'b', 'c'], {a: {b: {c: 2}}}); // => true // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'], {a: {b: {c: 1}}}); // => true // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'])({a: {b: {c: 1}}}); // => true // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'])({a: {b: {c: 1}}}); // => true // $ExpectType boolean
};

// pickBy
() => {
    let isPositive = function(n: number) {
        return n > 0;
    };
    // $ExpectType Dictionary<number>
    R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); // => {a: 1, b: 2, e: 5}
    let containsBackground = function(val: any) {
        return val.bgcolor;
    };
    let colors = {1: {color: 'read'}, 2: {color: 'black', bgcolor: 'yellow'}};
    // $ExpectType { 2: R.Dictionary<string> }
    R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

    let isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; };
    R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4} // $ExpectType Dictionary<number>
};


// pick
() => {
    R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4} // $ExpectType Dictionary<number>
    // the following should errror: e/f are not keys in these objects
    let no1 = R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1} // $ExpectError not keys
    let no2 = R.pick(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1} // $ExpectError not keys
    let no3 = R.pick(['a', 'e', 'f'], [1, 2, 3, 4]);             // => {a: 1} // $ExpectError not keys
};

// objOf
() => {
    let matchPhrases = R.compose(
      R.objOf('must'),
      R.map(R.objOf('match_phrase'))
    );
    matchPhrases(['foo', 'bar', 'baz']); // $ExpectType { must: { match_phrase: string }[] }
};

// omit
() => {
    R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3} // $ExpectType Dictionary<number>
    R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3} // $ExpectType Dictionary<number>
};

// fromPairs
() => {
    R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); // => {a: 1, b: 2, c: 3} // $ExpectType Dictionary<number>
};

// pair
() => {
    R.pair('foo', 'bar'); // => ['foo', 'bar']
    let p = R.pair('foo', 1); // => ['foo', 'bar']
    p[0]; // $ExpectType string
    p[1]; // $ExpectType number
};

// over, lensIndex
() => {
    let headLens = R.lensIndex(0);
    R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); // => ['FOO', 'bar', 'baz'] // $ExpectType string[]
};

// pickAll
() => {
    R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4} // $ExpectType Dictionary<number>
    R.pickAll(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4} // $ExpectType Dictionary<number>
    R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined} // $ExpectType Dictionary<number>
    R.pickAll(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}    // why does this pass while the above fails? // $ExpectType Dictionary<number>
};

// pickBy
() => {
    let isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; };
    R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4} // $ExpectType Dictionary<number>
};

// project
() => {
    let abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
    let fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
    let kids = [abby, fred];
    R.project(['name', 'grade'], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}] // $ExpectType { name: string, grade: number }[]
};

// prop
() => {
    R.prop('x', {x: 100}); // => 100 // $ExpectType number
    R.prop('x', {}); // => undefined // $ExpectError Argument of type 'x' is not assignable to parameter of type 'never'.
};

// propOr
() => {
    let alice = {
      name: 'ALICE',
      age: 101
    };
    let favorite = R.prop('favoriteLibrary');
    let favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

    favorite(alice);  // => undefined // $ExpectType undefined
    favoriteWithDefault(alice);  // => 'Ramda' // $ExpectType string
};

// propSatisfies
() => {
    R.propSatisfies((x: number) => x > 0, 'x', {x: 1, y: 2}); // => true // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0, 'x')({x: 1, y: 2}); // => true // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0)('x')({x: 1, y: 2}); // => true // $ExpectType boolean
};

// props
() => {
    R.props(['x', 'y'], {x: 1, y: 2}); // => [1, 2] // $ExpectType number[]
    R.props(['c', 'a', 'b'], {b: 2, a: 1}); // => [undefined, 1, 2] // $ExpectType Array<number|undefined>

    let fullName = R.compose(R.join(' '), R.props(['first', 'last']));
    fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); // => 'Tony Bullet-Tooth' // $ExpectType string
};

// toPairs
() => {
    R.toPairs({a: 1, b: 2, c: 3}); // => [['a', 1], ['b', 2], ['c', 3]] // $ExpectType [string, number][]
};

// toPairsIn
() => {
    let f = new F();
    R.toPairsIn(f); // => [['x','X'], ['y','Y']] // $ExpectType [string, string][]
    R.toPairsIn(f); // => [['x','X'], ['y','Y']] // $ExpectType [string, string][]
};

// values
() => {
    R.values({a: 1, b: 2, c: 3}); // => [1, 2, 3] // $ExpectType number[]
};

// valuesIn
() => {
    let f = new F();
    R.valuesIn(f); // => ['X', 'Y'] // $ExpectType string[]
};

// where
() => {
    let spec = {x: 2};
    R.where(spec, {w: 10, x: 2, y: 300}); // => true      // $ExpectType boolean
    R.where(spec, {x: 1, y: 'moo', z: true}); // => false // $ExpectType boolean
    R.where(spec)({w: 10, x: 2, y: 300}); // => true      // $ExpectType boolean
    R.where(spec)({x: 1, y: 'moo', z: true}); // => false // $ExpectType boolean

    // There's no way to represent the below functionality in typescript
    // per http: //stackoverflow.com/a/29803848/632495
    // will need a work around.

    let spec2 = {x: function(val: number, obj: any) { return  val + obj.y > 10; }};
    R.where(spec2, {x: 2, y: 7}); // => false // $ExpectType boolean
    R.where(spec2, {x: 3, y: 8}); // => true  // $ExpectType boolean

    let xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
    R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}] // $ExpectType { x: number, y: number }[]
    R.filter(R.where({x: 10}))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}] // $ExpectType { x: number, y: number }[]
};

// whereEq
() => {
    let pred = R.whereEq({a: 1, b: 2});     // $ExpectType (v: Object) => Boolean
    pred({a: 1});              // => false  // $ExpectType boolean
    pred({a: 1, b: 2});        // => true   // $ExpectType boolean
    pred({a: 1, b: 2, c: 3});  // => true   // $ExpectType boolean
    pred({a: 1, b: 1});        // => false  // $ExpectType boolean
    R.whereEq({a: 'one'}, {a: 'one'}); // => true // $ExpectType boolean
};

// without
() => {
    R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4] // $ExpectType number[]
};

// mapIndexed, addIndex
() => {
    let mapIndexed = R.addIndex<string,string>(R.map);
    mapIndexed(function(val: string, idx: number) {return idx + '-' + val;})(['f', 'o', 'o', 'b', 'a', 'r']); // $ExpectType string[]
    R.mapIndexed(function(val: string, idx: number) {return idx + '-' + val;})(['f', 'o', 'o', 'b', 'a', 'r']); // $ExpectType string[]
    // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
    R.mapIndexed((rectangle: Rectangle, idx: number): number => rectangle.area()*idx, [new Rectangle(1,2), new Rectangle(4,7)]); // $ExpectType number[]
    // => [2, 56]
};

// addIndex
() => {
    let reduceIndexed = R.addIndex(R.reduce);
    // $ExpectType string[]
    reduceIndexed(
      (acc: string, val: string, idx: number) => acc + ',' + idx + '-' + val
      ,''
      ,['f', 'o', 'o', 'b', 'a', 'r']
    );
    // => ['0-f,1-o,2-o,3-b,4-a,5-r']
};

// always
() => {
    let t = R.always('Tee');
    t(); // => 'Tee' // $ExpectType string
};

// ap
() => {
    R.ap([R.multiply(2), R.add(3)], [1,2,3]); // => [2, 4, 6, 4, 5, 6] // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)])([1,2,3]); // => [2, 4, 6, 4, 5, 6] // $ExpectType number[]
};

// apply
() => {
    let nums = [1, 2, 3, -99, 42, 6, 7];
    R.apply(Math.max, nums); // => 42 // $ExpectType number
    R.apply(Math.max)(nums); // => 42 // $ExpectType number
};

// applySpec
() => {
    type T = {sum: number, nested: {mul: number}};
    const getMetrics = R.applySpec<T>({
        sum: R.add, nested: { mul: R.multiply }
    });
    getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } } // $ExpectType T
};

// binary
() => {
    let takesThreeArgs = function(a: number, b: number, c: number) {
        return [a, b, c];
    };
    takesThreeArgs.length; // => 3 // $ExpectType number
    takesThreeArgs(1, 2, 3); // => [1, 2, 3] // $ExpectType number[]

    let takesTwoArgs = R.binary(takesThreeArgs);
    takesTwoArgs.length; // => 2 // $ExpectType number
    // Only 2 arguments are passed to the wrapped function
    // $ExpectError Supplied parameters do not match any signature of call target.
    takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
};

// pipe, inc, negate
() => {
    const f = R.pipe(Math.pow, R.negate, R.inc);
    f(3, 4); // -(3^4) + 1 // $ExpectType number
};

// comparator
() => {
    type T = {age: number};
    let cmp = R.comparator(function(a: T, b: T) {
      return a.age < b.age;
    });
    let people = [
      {name: 'Agy', age: 33}, {name: 'Bib', age: 15}, {name: 'Cari', age: 16}
    ];
    R.sort(cmp, people); // $ExpectType { age: number, name: string }[]
};

// converge
() => {
    let add = function(a: number, b: number) { return a + b; };
    let multiply = function(a: number, b: number) { return a * b; };
    let subtract = function(a: number, b: number) { return a - b; };

    // ≅ multiply( add(1, 2), subtract(1, 2) );
    R.converge(multiply, [ add, subtract ])(1, 2); // => -3 // $ExpectType number

    let add3 = function(a: number, b: number, c: number) { return a + b + c; };
    R.converge(add3, [ multiply, add, subtract ])(1, 2); // => 4 // $ExpectType number
};

// compose
() => {
    const f0 = R.compose(Math.pow);
    const f1 = R.compose(R.negate, Math.pow);
    const f2 = R.compose(R.inc, R.negate, Math.pow);
    const f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
    const f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    const f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    f0(3, 4); // -(3^4) + 1 // $ExpectType number
    f1(3, 4); // -(3^4) + 1 // $ExpectType number
    f2(3, 4); // -(3^4) + 1 // $ExpectType number
    f3(3, 4); // -(3^4) + 1 // $ExpectType number
    f4(3, 4); // -(3^4) + 1 // $ExpectType number
    f5(3, 4); // -(3^4) + 1 // $ExpectType number
};

// compose
() => {
    const fn = function(a: string, b: number, c: string) {
        return [a,b,c];
    };
    const gn = R.compose(R.length, fn);
    gn('Hello', 4, 'world'); // $ExpectType number
};

// TODO: composeP

// TODO: composeK

// construct, constructN
(() => {
    type circle = { r: number, colors: string[] };
    let Circle = function(r: number) {
        this.r = r;
        this.colors = Array.prototype.slice.call(arguments, 1);
    };
    Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};
    let circleN = R.constructN(2, Circle);
    circleN(1, 'red'); // $ExpectType circle
    let circle = R.construct(Circle);
    circle(1, 'red'); // $ExpectType circle
})();

/*****************************************************************
 * Relation category
 */

// countBy
() => {
    let numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
    let letters = R.split('', 'abcABCaaaBBc');
    R.countBy(Math.floor)(numbers);    // => {'1': 3, '2': 2, '3': 1} // $ExpectType Dictionary<number>
    R.countBy(R.toLower)(letters);   // => {'a': 5, 'b': 4, 'c': 3} // $ExpectType Dictionary<number>
};

// difference
() => {
    R.difference([1,2,3,4], [7,6,5,4,3]); // => [1,2] // $ExpectType number[]
    R.difference([7,6,5,4,3], [1,2,3,4]); // => [7,6,5] // $ExpectType number[]
};

// differenceWith
() => {
    function cmp(x: any, y: any) { return x.a === y.a; }
    let l1 = [{a: 1}, {a: 2}, {a: 3}];
    let l2 = [{a: 3}, {a: 4}];
    R.differenceWith(cmp, l1, l2); // => [{a: 1}, {a: 2}] // $ExpectType {a: number}[]
    R.differenceWith(cmp)(l1, l2); // => [{a: 1}, {a: 2}] // $ExpectType {a: number}[]
    R.differenceWith(cmp)(l1)(l2); // => [{a: 1}, {a: 2}] // $ExpectType {a: number}[]
};

// equals
() => {
    R.equals(1, 1);     // => true // $ExpectType boolean
    R.equals('2', '1'); // => false // $ExpectType boolean
    R.equals([1, 2, 3], [1, 2, 3]); // => true // $ExpectType boolean

    let a: any = {}; a.v = a;
    let b: any = {}; b.v = b;
    R.equals(a, b); // => true // $ExpectType boolean
};

// identity
() => {
    const a1 = R.identity(1); // => 1
    let obj = {};
    R.identity([1,2,3]); // $ExpectType number[]
    R.identity(['a','b','c']); // $ExpectType string[]
    R.identity(obj) === obj; // => true // $ExpectType boolean
};

// identical
() => {
    let o = {};
    R.identical(o, o); // => true // $ExpectType boolean
    R.identical(1, 1); // => true // $ExpectType boolean
    R.identical('2', '1'); // => false // $ExpectType boolean
    R.identical([], []); // => false // $ExpectType boolean
    R.identical(0, -0); // => false // $ExpectType boolean
    R.identical(NaN, NaN); // => true // $ExpectType boolean
};

// path
() => {
    R.path(['a', 'b'], {a: {b: 2}}); // => 2 // $ExpectType number
    R.path(['a', 'b'])({a: {b: 2}}); // => 2 // $ExpectType number
};

// sortBy
() => {
    let sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
    let alice = {
      name: 'ALICE',
      age: 101
    };
    let bob = {
      name: 'Bob',
      age: -10
    };
    let clara = {
      name: 'clara',
      age: 314.159
    };
    let people = [clara, bob, alice];
    sortByNameCaseInsensitive(people); // => [alice, bob, clara] // $ExpectType { name: string, age: number }[]
};

// sortWith
() => {
  let alice = {
    name: 'alice',
    age: 40
  };
  let bob = {
    name: 'bob',
    age: 30
  };
  let clara = {
    name: 'clara',
    age: 40
  };
  let people = [clara, bob, alice];
  // $ExpectType typeof people
  R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name'))
  ], people);
  let ageNameSort = R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name'))
  ]);
  // $ExpectType typeof people
  ageNameSort(people);
  // => [alice, clara, bob]
};

// splitAt
() => {
    R.splitAt(1, [1, 2, 3]);        // => [[1], [2, 3]] // $ExpectType number[][]
    R.splitAt(1)([1, 2, 3]);        // => [[1], [2, 3]] // $ExpectType number[][]
    R.splitAt(5, 'hello world');    // => ['hello', ' world'] // $ExpectType string[]
    R.splitAt(-1, 'foobar');        // => ['fooba', 'r'] // $ExpectType string[]
};

// splitWhen
() => {
  R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   // => [[1], [2, 3, 1, 2, 3]] // $ExpectType number[][]
  R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]);   // => [[1], [2, 3, 1, 2, 3]] // $ExpectType number[][]
};

// add
() => {
    R.add(2, 3);       // =>  5 // $ExpectType number
    R.add(7)(10);      // => 17 // $ExpectType number
};

// dec
() => {
    R.dec(42); // => 41 // $ExpectType number
};

// divide
() => {
    R.divide(71, 100); // => 0.71 // $ExpectType number

    let half = R.flip(R.divide)(2);
    half(42); // => 21 // $ExpectType number

    let reciprocal = R.divide(1);
    reciprocal(4);   // => 0.25 // $ExpectType number
};

// gt
() => {
    R.gt(2, 6); // => false // $ExpectType boolean
    R.gt(2, 0); // => true // $ExpectType boolean
    R.gt(2, 2); // => false // $ExpectType boolean
    R.flip(R.gt)(2)(10); // => true // $ExpectType boolean
    R.gt(2)(10); // => false // $ExpectType boolean
};

// gte
() => {
    R.gte(2, 6); // => false // $ExpectType boolean
    R.gte(2, 0); // => true // $ExpectType boolean
    R.gte(2, 2); // => false // $ExpectType boolean
    R.flip(R.gte)(2)(10); // => true // $ExpectType boolean
    R.gte(2)(10); // => false // $ExpectType boolean
};

// isNaN
() => {
    R.isNaN(NaN);        // => true // $ExpectType boolean
    R.isNaN(undefined);  // => false // $ExpectType boolean
    R.isNaN({});         // => false // $ExpectType boolean
};

// lt
() => {
    R.lt(2, 6); // => true // $ExpectType boolean
    R.lt(2, 0); // => false // $ExpectType boolean
    R.lt(2, 2); // => false // $ExpectType boolean
    R.lt(5)(10); // => true // $ExpectType boolean
    R.flip(R.lt)(5)(10); // => false // right-sectioned currying // $ExpectType boolean
};

// lte
() => {
    R.lte(2, 6); // => true // $ExpectType boolean
    R.lte(2, 0); // => false // $ExpectType boolean
    R.lte(2, 2); // => true // $ExpectType boolean
    R.flip(R.lte)(2)(1); // => true // $ExpectType boolean
    R.lte(2)(10); // => true // $ExpectType boolean
};

// mathMod
() => {
    R.mathMod(-17, 5);  // => 3 // $ExpectType number
    R.mathMod(17, 5);   // => 2 // $ExpectType number
    R.mathMod(17, -5);  // => NaN // $ExpectType number
    R.mathMod(17, 0);   // => NaN // $ExpectType number
    R.mathMod(17.2, 5); // => NaN // $ExpectType number
    R.mathMod(17, 5.3); // => NaN // $ExpectType number

    let clock = R.flip(R.mathMod)(12);
    clock(15); // => 3 // $ExpectType number
    clock(24); // => 0 // $ExpectType number

    let seventeenMod = R.mathMod(17);
    seventeenMod(3);  // => 2 // $ExpectType number
};

// max
() => {
    R.max(7, 3); // => 7 // $ExpectType number
    R.max('a', 'z'); // => 'z' // $ExpectType string
};

// maxBy
() => {
    function cmp(obj: { x: number }) { return obj.x; }
    let a = {x: 1};
    let b = {x: 2};
    let c = {x: 3};
    let d = {x: 'a'};
    let e = {x: 'z'};
    R.maxBy(cmp, a, c); // => {x: 3} // $ExpectType { x: number; }
    R.maxBy(cmp)(a, c); // => {x: 3} // $ExpectType { x: number; }
    R.maxBy(cmp)(a)(b); // $ExpectType { x: number; }
    R.maxBy(cmp)(d)(e); // $ExpectError Argument of type '{ x: string; }' is not assignable to parameter of type '{ x: number; }'
};

// mean
() => {
    R.mean([2, 7, 9]); // => 6 // $ExpectType number
    R.mean([]); // => NaN // $ExpectType number
};

// median
() => {
    R.median([7, 2, 10, 9]); // => 8 // $ExpectType number
    R.median([]); // => NaN // $ExpectType number
};

// min
() => {
    R.min(9, 3); // => 3 // $ExpectType number
    R.min('a', 'z'); // => 'a' // $ExpectType string
};

// minBy
() => {
    function cmp(obj: { x: number }) { return obj.x; }
    let a = {x: 1};
    let b = {x: 2};
    let c = {x: 3};
    let d = {x: 'a'};
    let e = {x: 'z'};
    R.minBy(cmp, a, b); // => {x: 1} // $ExpectType { x: number }
    R.minBy(cmp)(a, b); // => {x: 1} // $ExpectType { x: number }
    R.minBy(cmp)(a)(c); // $ExpectType { x: number }
    R.minBy(cmp, d, e); // $ExpectError Argument of type '{ x: string; }' is not assignable to parameter of type '{ x: number; }'
};

// modulo
() => {
    R.modulo(17, 3); // => 2 // $ExpectType number
    // JS behavior:
    R.modulo(-17, 3); // => -2 // $ExpectType number
    R.modulo(17, -3); // => 2 // $ExpectType number

    let isOdd = R.flip(R.modulo)(2);
    isOdd(42); // => 0 // $ExpectType number
    isOdd(21); // => 1 // $ExpectType number
};

// multiply
() => {
    let double = R.multiply(2);
    let triple = R.multiply(3);
    double(3);       // =>  6 // $ExpectType number
    triple(4);       // => 12 // $ExpectType number
    R.multiply(2, 5);  // => 10 // $ExpectType number
};

// negate
() => {
    R.negate(42); // => -42 // $ExpectType number
};

// product
() => {
    R.product([2,4,6,8,100,1]); // => 38400 // $ExpectType number
};

// subtract
() => {
    R.subtract(10, 8); // => 2 // $ExpectType number

    let minus5 = R.flip(R.subtract)(5);
    minus5(17); // => 12 // $ExpectType number

    let complementaryAngle = R.subtract(90);
    complementaryAngle(30); // => 60 // $ExpectType number
    complementaryAngle(72); // => 18 // $ExpectType number
};

// sum
() => {
    R.sum([2,4,6,8,100,1]); // => 121 // $ExpectType number
};

// symmetricDifference
() => {
  R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); // => [1,2,7,6,5] // $ExpectType number[]
  R.symmetricDifference([7,6,5,4,3])([1,2,3,4]); // => [7,6,5,1,2] // $ExpectType number[]
};

// symmetricDifferenceWith
() => {
  const eqA = R.eqBy(R.prop('a'));
  const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  R.symmetricDifferenceWith(eqA, l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}] // $ExpectType { a: number }[]
  R.symmetricDifferenceWith(eqA)(l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}] // $ExpectType { a: number }[]
  R.symmetricDifferenceWith(eqA)(l1); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}] // $ExpectType (a: any[]) => any[]
};

/*****************************************************************
 * String category
 */

// replace
() => {
    R.replace('foo', 'bar', 'foo foo foo'); // => 'bar foo foo' // $ExpectType string
    R.replace('foo', 'bar')('foo foo foo'); // => 'bar foo foo' // $ExpectType string
    R.replace('foo')('bar')('foo foo foo'); // => 'bar foo foo' // $ExpectType string
    R.replace(/foo/, 'bar', 'foo foo foo'); // => 'bar foo foo' // $ExpectType string

    // Use the 'g' (global) flag to replace all occurrences:
    R.replace(/foo/g, 'bar', 'foo foo foo'); // => 'bar bar bar' // $ExpectType string
    R.replace(/foo/g, 'bar')('foo foo foo'); // => 'bar bar bar' // $ExpectType string
    R.replace(/foo/g)('bar')('foo foo foo'); // => 'bar bar bar' // $ExpectType string
};

/*****************************************************************
 * Is category
 */

() => {
    R.is(Object, {}); // => true // $ExpectType boolean
    R.is(Object)({}); // => true // $ExpectType boolean
    R.is(Number, 1); // => true // $ExpectType boolean
    R.is(Number)(1); // => true // $ExpectType boolean
    R.is(Object, 1); // => false // $ExpectType boolean
    R.is(Object)(1); // => false // $ExpectType boolean
    R.is(String, 's'); // => true // $ExpectType boolean
    R.is(String)('s'); // => true // $ExpectType boolean
    R.is(String, ''); // => true // $ExpectType boolean
    R.is(String)(''); // => true // $ExpectType boolean
    R.is(Object, new Object()); // => true // $ExpectType boolean
    R.is(Object)(new Object()); // => true // $ExpectType boolean
    R.is(Object, 's'); // => false // $ExpectType boolean
    R.is(Object)('s'); // => false // $ExpectType boolean
    R.is(Number, {}); // => false // $ExpectType boolean
    R.is(Number)({}); // => false // $ExpectType boolean
};

/*****************************************************************
 * Logic category
 */

// allPass
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0;};
    let f = R.allPass([gt10, even]);
    f(11); // => false // $ExpectType boolean
    f(12); // => true // $ExpectType boolean
};

// and
() => {
    R.and(false, true); // => false // $ExpectType boolean
    R.and(0, []); // => 0 // $ExpectType number
    R.and(0)([]); // => 0 // $ExpectType number
    R.and(null, ''); // => null // $ExpectType null
    let Why: any = (function(val: boolean) {
        let why: any;
        why.val = val;
        why.and = function(x: boolean) {
            return this.val && x;
        };
        return Why;
    })(true);
    let why = new Why(true);
    R.and(why, false); // false // $ExpectType boolean
};

// anyPass
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0;};
    let f = R.anyPass([gt10, even]);
    f(11); // => true // $ExpectType boolean
    f(8); // => true // $ExpectType boolean
    f(9); // => false // $ExpectType boolean
};

// both
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0; };
    let f = R.both(gt10, even);
    let g = R.both(gt10)(even);
    f(100); // => true // $ExpectType boolean
    f(101); // => false // $ExpectType boolean
};

// complement
() => {
    let isEven = function(n: number) { return n % 2 === 0; };
    let isOdd = R.complement(isEven);
    isOdd(21); // => true // $ExpectType boolean
    isOdd(42); // => false // $ExpectType boolean
};

// eqBy
(() => {
    R.eqBy(Math.abs, 5, -5); // => true // $ExpectType boolean
    R.eqBy(Math.abs)(5, -5); // => true // $ExpectType boolean
    R.eqBy(Math.abs, 5)(-5); // => true // $ExpectType boolean
});

// defaultTo
() => {
    let defaultTo42 = R.defaultTo(42);
    defaultTo42(null);  // => 42 // $ExpectType number
    defaultTo42(undefined);  // => 42 // $ExpectType number
    defaultTo42('Ramda');  // => 'Ramda' // $ExpectType string
};

// either
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0; };
    let f = R.either(gt10, even);
    let g = R.either(gt10)(even);
    f(101); // => true // $ExpectType boolean
    f(8); // => true // $ExpectType boolean
};

// ifElse
() => {
    // Flatten all arrays in the list but leave other values alone.
    let flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

    flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}] // $ExpectType any[]
    flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], 'hello'] // $ExpectType any[]
};

// isEmpty
() => {
    R.isEmpty([1, 2, 3]); // => false // $ExpectType boolean
    R.isEmpty([]); // => true // $ExpectType boolean
    R.isEmpty(''); // => true // $ExpectType boolean
    R.isEmpty(null); // => false // $ExpectType boolean
    R.isEmpty({}); // =>true // $ExpectType boolean
    R.isEmpty({a: 1}); // => false // $ExpectType boolean
};

// not
() => {
    R.not(true); // => false // $ExpectType boolean
    R.not(false); // => true // $ExpectType boolean
    R.not(0); // => true // $ExpectType boolean
    R.not(1); // => false // $ExpectType boolean
};

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
    R.or(false, true); // => false // $ExpectType boolean
    R.or(0, []); // => [] // $ExpectType number|any[]
    R.or(0)([]); // => [] // $ExpectType number|any[]
    R.or(null, ''); // => '' // $ExpectType string

    let why = new Why(true);
    why.or(true);
    R.or(why, false); // false // $ExpectType Why|boolean
};

// intersperse
() => {
    R.intersperse(',', ['foo', 'bar']); // => ['foo', ',', 'bar'] // $ExpectType string[]
    R.intersperse(0, [1, 2]); // => [1, 0, 2] // $ExpectType number[]
    R.intersperse(0, [1]); // => [1] // $ExpectType number[]
};

// ISSUES:

// RESOLVED ISSUES:

() => {
    // #65, evolve issue
    const a1 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) }, { name: 'Tomato', elapsed: 100, remaining: 1400 });
    const a2 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) })({ name: 'Tomato', elapsed: 100, remaining: 1400 });
    let test = { a: 1, b: 2};
    R.evolve({ a: R.add(1)}, test ); // $ExpectType { a: number, b: number }
};

() => {
    // #73
    let filterMatrix = function (v: number, m: Array<Array<number>>): Array<number> {
      return R.chain(R.filter((c: number) => c === v), m);
      // return R.chain(R.filter(R.equals(v)), m)
    };
    let b = [
        [0, 1],
        [1, 0]
    ];
    filterMatrix(1, b); // --> [1, 1] // $ExpectType number[]

    // compiles
    let filterMatrix2 = function (v: number, m: Array<Array<number>>): Array<number> {
        return R.chain((r: number[]) => R.filter((c: number) => c === v, r), m);
    };

    // also compiles
    let mapMatrix3 = function(fn: (v: number) => number, m: Array<Array<number>>): Array<number> {
      return R.chain(R.map((c: number) => fn(c)), m);
    };
};

() => {
    // #109
    function grepSomethingRecursively(grepPatterns: string | string[]) {
        if (R.is(Array, grepPatterns)) {
            R.forEach(() => {}, grepPatterns);
        }
    }
};

// UNRESOLVED ISSUES:

// /*

() => {
    // #29
    R.pipe(R.append('a'), R.uniq)(['a', 'b', 'c']); // $ExpectType string[]
    R.pipe( // $ExpectType string[][]
        R.split(''),
        R.map((letter: string) => ([ letter ]))
    )('dave');

    R.pipe( // $ExpectType number
        R.prop<string>('name'),
        R.length
    )({ name: 'dave' });

    let build: string;
    let mapPackages = R.partial(R.map, [(test: any) => test.package]);
    let filterBuild = R.partial(R.filter, [(test: any) => test.build === build]);
    let getPackages = R.compose(R.uniq, mapPackages, filterBuild);
    this.packages = getPackages(this._tests);
    // ^ expected: ??

    interface Foo {
        build: string;
        package: string;
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
};

() => {
    // #69: lens composition
    const sectioneditems = { sections: [
        {items: []},
        {items: []}
    ]};
    const elem = 'Hello';
    R.over(R.compose(R.lensProp('sections'), R.lensIndex(sectioneditems.sections.length - 1), R.lensProp('items')), R.append(elem), sectioneditems);
};

() => {
    // #78: curry loses generics
    // : <T>R.CurriedFunction3<R.Pred<T>, T, T[], T[]>
    // : R.CurriedFunction3<R.Pred<any>, any, any[], any[]>
    let updateBy = R.curry(<T>(pred: (v: T) => boolean, val: T, array: T[]): T[] => {
        let i = R.findIndex(pred, array);
        if (i >= 0) {
            return R.update(i, val, array);
        } else {
            return array;
        }
    });
    updateBy((n: number) => n > 1, 0, [1,2,3]); // $ExpectType number[]
};

() => {
    // #86: lose generics in compose
    let pairs = [['1','A'], ['2','B'], ['3','C']];
    R.fromPairs ([['1','A'], ['2','B'], ['3','C']]); // $ExpectType { [index: string]: string }
    R.fromPairs (pairs);   // fails -- variable reduced to string[][], killing tuples // $ExpectType { [index: string]: string }
    R.pipe   (R.fromPairs)([['1','A'], ['2','B'], ['3','C']]);  // fails, generics turn to {} => {} // $ExpectType { [index: string]: string }
    R.compose(R.fromPairs)([['1','A'], ['2','B'], ['3','C']]);  // fails, generics turn to {} => {} // $ExpectType { [index: string]: string }

    // generics in pipe loses generics
    R.pipe(R.identity);
};

() => {
    // #90: curried function loses generics
    const map = (func: (some: string) => (x: number) => 1) => {
      return func('xx')(1);
    };
    const map2 = (func: (some: string, other: string) => '1') => {
      return func('xx', 'x');
    };
    // will work only with proposed changes
    map(R.assoc('xxx'));
    map2(R.assoc('xxx'));
};

() => {
    // #92: lose generics in compose

    // can't infer cond paths, must annotate:
    const x = R.cond([ // $ExpectType <T>(v: T) => T
        [R.F, R.F],
        [R.T, R.identity]
    ]);
    // argument order matters for some reason...
    R.pipe   (R.inc, x); // ok   // $ExpectType (v: number) => number
    R.compose(x, R.inc); // boom // $ExpectType (v: number) => number

    // don't use generics in pipe/compose/curry if it can't resolve them right away:
    let pipeF0 = R.pipe   (R.identity);         // : (v: {}) => {}
    let compF0 = R.compose(R.identity);         // : (v: {}) => {}

    // argument order matters too:
    let pipeF1 = R.pipe   (R.inc, R.identity);  // : (v: number) => number
    let compF1 = R.compose(R.identity, R.inc);  // : (v: number) => {}
    compF1(1);          // uh-oh, fails // $ExpectType number

    // also can't reason backward:
    let compF2 = R.compose(R.inc, R.identity);  // : (v: {}) => number
    compF2('foo');      // uh-oh, passes // $ExpectType number
    let pipeF2 = R.pipe   (R.identity, R.inc);  // : (v: {}) => number
    pipeF2('foo');      // uh-oh, passes // $ExpectType number
};

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
        'c': {}
    };
    // const fun = <(y: SomeStruct) => SomeStruct>R.compose(        // annotated: works
    const fun = R.compose(
        R.assoc('a', [1, 2, 3]),
        R.assoc('b', ['a', 'b', 'c']),
        R.assoc('c', { 'k': 'v'})
    );
    let struct: SomeStruct = fun(x);

    let a = R.assoc('a', 2, {z:3});
    let b = R.assoc('b', 2);
};

() => {
    // #118: flatten
    R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]); // $ExpectType number[]
    // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

() => {
  // #119: path
  R.path(['a', 'b', 'c'], {a: {b: {c: 2}}}); // $ExpectType number
  R.path(['a', 'b', 'c'], {a: {b: 2}});   // still fails // $ExpectType null
  // let n = R.path(['a', '0', 'c'], {a: [{c: 2}] })
  R.path(['a', 0, 'c'], {a: [{c: 2}] }); // $ExpectType number
};

() => {
  // #129: nested evolve
  type FormState = { index: number };
  function ramdaIssue(state: FormState): FormState {
    return R.evolve({
        index: R.inc
    }, state);
  }
};

// */
