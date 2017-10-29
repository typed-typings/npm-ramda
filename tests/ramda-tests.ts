import * as R from '../ramda/dist/index';

/**
 * @dts-jest enable:test-value
 */

// regex literal is not available due to https://github.com/Microsoft/TypeScript/issues/18071 (fixed in v2.6)

// tslint:disable max-file-line-count comment-format naming-convention

// @dts-jest:group __
(() => {
  const greet = R.replace('{name}', R.__, 'Hello, {name}!');
  // @dts-jest:pass:snap
  greet('Alice'); //=> 'Hello, Alice!'
})();

// @dts-jest:group add
(() => {
  // @dts-jest:pass:snap
  R.add(2, 3); //=> 5
  // @dts-jest:pass:snap
  R.add(7)(10); //=> 17
})();

// @dts-jest:group addIndex
(() => {
  (() => {
    const lastTwo = (_val: number, idx: number, list: number[]) =>
      list.length - idx <= 2;
    const filterIndexed = R.addIndex<number, boolean, number[], number[]>(
      R.filter,
    );

    // @dts-jest:pass:snap
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
    // @dts-jest:pass:snap
    filterIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]
  })();
  (() => {
    const plusFive = (num: number, idx: number, list: number[]) => {
      list[idx] = num + 5;
    };

    // @dts-jest:pass:snap
    R.addIndex<number, void, number[], number[]>(R.forEach)(plusFive)([
      1,
      2,
      3,
    ]); //=> [6, 7, 8]
  })();
  (() => {
    const squareEnds = (elt: number, idx: number, list: number[]) =>
      idx === 0 || idx === list.length - 1 ? elt * elt : elt;

    // @dts-jest:pass:snap
    R.addIndex<number, number, number[], number[]>(R.map)(squareEnds, [
      8,
      5,
      3,
      0,
      9,
    ]); //=> [64, 5, 3, 0, 81]
    // @dts-jest:pass:snap
    R.addIndex<number, number, number[], number[]>(R.map)(squareEnds)([
      8,
      5,
      3,
      0,
      9,
    ]); //=> [64, 5, 3, 0, 81]
  })();
  (() => {
    const reduceIndexed = R.addIndex<
      Record<string, number>,
      string,
      Record<string, number>,
      Record<string, number>,
      string[],
      Record<string, number>
    >(R.reduce);
    const objectify = (
      accObject: Record<string, number>,
      elem: string,
      idx: number,
      _list: string[],
    ) => {
      accObject[elem] = idx;
      return accObject;
    };

    // @dts-jest:pass:snap
    reduceIndexed(objectify, {}, ['a', 'b', 'c']); //=> {a: 0, b: 1, c: 2}
    // @dts-jest:pass:snap
    reduceIndexed(objectify)({}, ['a', 'b', 'c']); //=> {a: 0, b: 1, c: 2}
    // @dts-jest:pass:snap
    reduceIndexed(objectify, {})(['a', 'b', 'c']); //=> {a: 0, b: 1, c: 2}
  })();
  (() => {
    const reduceIndexed = R.addIndex<'1', 'v2x1'>()(R.reduce);

    // @dts-jest:pass:snap
    reduceIndexed(
      (acc: string, val: string, idx: number) => `${acc},${idx}-${val}`,
      '',
      ['f', 'o', 'o', 'b', 'a', 'r'],
    ); //=> ',0-f,1-o,2-o,3-b,4-a,5-r'
  })();
})();

// @dts-jest:group adjust
(() => {
  // @dts-jest:pass:snap
  R.adjust(R.add(10), 1, [1, 2, 3]); //=> [1, 12, 3]
  // @dts-jest:pass:snap
  R.adjust(R.add(10))(1)([1, 2, 3]); //=> [1, 12, 3]
})();

// @dts-jest:group all
(() => {
  const lessThan2 = R.flip(R.lt)(2);
  const lessThan3 = R.flip(R.lt)(3);

  // @dts-jest:pass:snap
  R.all(lessThan2)([1, 2]); //=> false
  // @dts-jest:pass:snap
  R.all(lessThan3)([1, 2]); //=> true
})();

// @dts-jest:group allPass
(() => {
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;

  // @dts-jest:pass:snap
  R.allPass([gt10, even])(11); //=> false
  // @dts-jest:pass:snap
  R.allPass([gt10, even])(12); //=> true
})();

// @dts-jest:group always
(() => {
  // @dts-jest:pass:snap
  R.always('Tee')(); //=> 'Tee'
})();

// @dts-jest:group and
(() => {
  // @dts-jest:pass:snap
  R.and(false, true); //=> false
  // @dts-jest:pass:snap
  R.and(0, []); //=> 0
  // @dts-jest:pass:snap
  R.and(0)([]); //=> 0
  // @dts-jest:pass:snap
  R.and(null, ''); //=> null
})();

// @dts-jest:group any
(() => {
  const lessThan0 = R.flip(R.lt)(0);
  const lessThan2 = R.flip(R.lt)(2);

  // @dts-jest:pass:snap
  R.any(lessThan0)([1, 2]); //=> false
  // @dts-jest:pass:snap
  R.any(lessThan2)([1, 2]); //=> true
})();

// @dts-jest:group anyPass
(() => {
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;

  // @dts-jest:pass:snap
  R.anyPass([gt10, even])(11); //=> true
  // @dts-jest:pass:snap
  R.anyPass([gt10, even])(8); //=> true
  // @dts-jest:pass:snap
  R.anyPass([gt10, even])(9); //=> false
})();

// @dts-jest:group ap
(() => {
  // @dts-jest:pass:snap
  R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); //=> [2, 4, 6, 4, 5, 6]
  // @dts-jest:pass:snap
  R.ap([R.multiply(2), R.add(3)])([1, 2, 3]); //=> [2, 4, 6, 4, 5, 6]
})();

// @dts-jest:group aperture
(() => {
  // @dts-jest:pass:snap
  R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
  // @dts-jest:pass:snap
  R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
  // @dts-jest:pass:snap
  R.aperture(7, [1, 2, 3, 4, 5]); //=> []
  // @dts-jest:pass:snap
  R.aperture(7)([1, 2, 3, 4, 5]); //=> []
})();

// @dts-jest:group append
(() => {
  // @dts-jest:pass:snap
  R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
  // @dts-jest:pass:snap
  R.append('tests')(['write', 'more']); //=> ['write', 'more', 'tests']
  // @dts-jest:pass:snap
  R.append('tests', []); //=> ['tests']
  // @dts-jest:pass:snap
  R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
  // @dts-jest:pass:snap
  R.append(['tests'])(['write', 'more']); //=> ['write', 'more', ['tests']]
})();

// @dts-jest:group apply
(() => {
  const nums = [1, 2, 3, -99, 42, 6, 7];

  // @dts-jest:pass:snap
  R.apply(Math.max, nums); //=> 42
  // @dts-jest:pass:snap
  R.apply(Math.max)(nums); //=> 42
})();

// @dts-jest:group applySpec
(() => {
  interface T {
    sum: number;
    nested: {
      mul: number;
    };
  }
  const getMetrics = R.applySpec<T>({
    sum: R.add,
    nested: {
      mul: R.multiply,
    },
  });
  // @dts-jest:pass:snap
  getMetrics(2, 4); //=> {sum: 6, nested: {mul: 8}}
})();

// @dts-jest:group ascend
(() => {
  const byAge = R.ascend(R.prop('age'));
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];

  // @dts-jest:pass:snap
  R.sort(byAge, people);
  // @dts-jest:pass:snap
  R.sort(R.__, people)(byAge);
})();

// @dts-jest:group assoc
(() => {
  // @dts-jest:pass:snap
  R.assoc('c', 3, { a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
  // @dts-jest:pass:snap
  R.assoc('c')(3, { a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
  // @dts-jest:pass:snap
  R.assoc('c', 3)({ a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
  // @dts-jest:fail:snap
  R.assoc(1, [], 2);
})();

// @dts-jest:group assocPath
(() => {
  // @dts-jest:pass:snap
  R.assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 } } }); //=> {a: {b: {c: 42}}}
  // @dts-jest:pass:snap
  R.assocPath(['a', 'b', 'c'])(42, { a: { b: { c: 0 } } }); //=> {a: {b: {c: 42}}}
  // @dts-jest:pass:snap
  R.assocPath(['a', 'b', 'c'], 42)({ a: { b: { c: 0 } } }); //=> {a: {b: {c: 42}}}
})();

// @dts-jest:group binary
(() => {
  const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];
  const takesTwoArgs = R.binary(takesThreeArgs);

  // @dts-jest:pass:snap
  takesThreeArgs.length; //=> 3
  // @dts-jest:pass:snap
  takesThreeArgs(1, 2, 3); //=> [1, 2, 3]

  // @dts-jest:pass:snap
  takesTwoArgs.length; //=> 2
  // @dts-jest:fail:snap
  takesTwoArgs(1, 2, 3);
})();

// @dts-jest:group bind
(() => {
  // @dts-jest:pass:snap
  R.bind(console.log, console);
})();

// @dts-jest:group both
(() => {
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;

  // @dts-jest:pass:snap
  R.both(gt10, even)(100); //=> true
  // @dts-jest:pass:snap
  R.both(gt10)(even)(101); //=> false
})();

// @dts-jest:group call
(() => {
  // @dts-jest:pass:snap
  R.call(R.add<'11'>(), 1, 2); //=> 3
})();

// @dts-jest:group chain
(() => {
  const duplicate = (n: number) => [n, n];

  // @dts-jest:pass:snap
  R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
  // @dts-jest:pass:snap
  R.chain(duplicate)([1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
  // @dts-jest:pass:snap
  R.chain<number, number[], number | undefined>(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
  // @dts-jest:pass:snap
  R.chain<number, number[], number | undefined>(R.append)(R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
})();

// @dts-jest:group clamp
(() => {
  // @dts-jest:pass:snap
  R.clamp(1, 10, -1); //=> 1
  // @dts-jest:pass:snap
  R.clamp(1)(10)(-1); //=> 1
  // @dts-jest:pass:snap
  R.clamp(1, 10)(11); //=> 10
  // @dts-jest:pass:snap
  R.clamp(1)(10, 4); //=> 4
  // @dts-jest:pass:snap
  R.clamp('a', 'd', 'e'); //=> 'd'
  // @dts-jest:pass:snap
  R.clamp('a')('d')('e'); //=> 'd'
  // @dts-jest:fail:snap
  R.clamp(1, 'str', true);
  // @dts-jest:fail:snap
  R.clamp(1)('str')(true);
  // @dts-jest:pass:snap
  R.clamp(new Date(0), new Date(1), new Date(2)); //=> new Date(1)
  // @dts-jest:pass:snap
  R.clamp(new Date(0))(new Date(1))(new Date(2)); //=> new Date(1)
})();

// @dts-jest:group clone
(() => {
  const obj1 = [{}, {}, {}];
  const obj2 = [{ a: 1 }, { a: 2 }, { a: 3 }];

  // @dts-jest:pass:snap
  R.clone(obj1);
  // @dts-jest:pass:snap
  R.clone(obj2);

  // @dts-jest:pass:snap
  R.clone([{}, {}, {}]);
  // @dts-jest:pass:snap
  R.clone([1, 2, 3]);
  // @dts-jest:pass:snap
  R.clone({});
  // @dts-jest:pass:snap
  R.clone(10);
  // @dts-jest:pass:snap
  R.clone('foo');
  // @dts-jest:pass:snap
  R.clone(Date.now());
})();

// @dts-jest:group comparator
(() => {
  interface Person {
    age: number;
    name: string;
  }
  const people = [
    { name: 'Agy', age: 33 },
    { name: 'Bib', age: 15 },
    { name: 'Cari', age: 16 },
  ];

  // @dts-jest:pass:snap
  R.sort(R.comparator((a: Person, b: Person) => a.age < b.age), people);
})();

// @dts-jest:group complement
(() => {
  const isEven = (n: number) => n % 2 === 0;

  // @dts-jest:pass:snap
  R.complement(isEven)(21); //=> true
  // @dts-jest:pass:snap
  R.complement(isEven)(42); //=> false
})();

// @dts-jest:group compose
(() => {
  const double = (x: number): number => x + x;
  (() => {
    const f0 = R.compose(Math.pow);
    const f1 = R.compose(R.negate, Math.pow);
    const f2 = R.compose(R.inc, R.negate, Math.pow);
    const f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
    const f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    const f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);

    // @dts-jest:pass:snap
    f0(3, 4); // -(3^4) + 1
    // @dts-jest:pass:snap
    f1(3, 4); // -(3^4) + 1
    // @dts-jest:pass:snap
    f2(3, 4); // -(3^4) + 1
    // @dts-jest:pass:snap
    f3(3, 4); // -(3^4) + 1
    // @dts-jest:pass:snap
    f4(3, 4); // -(3^4) + 1
    // @dts-jest:pass:snap
    f5(3, 4); // -(3^4) + 1
  })();
  (() => {
    // @dts-jest:pass:snap
    R.compose<number, number, number>(double, R.identity);
  })();
  (() => {
    const fn = (a: string, b: number, c: string) => [a, b, c];
    const gn = R.compose(R.length, fn);

    // @dts-jest:pass:snap
    gn('Hello', 4, 'world');
  })();
  (() => {
    const limit10 = (x: number): boolean => x >= 10;
    // @dts-jest:pass:snap
    R.compose(limit10, double);
    // @dts-jest:pass:snap
    R.compose(limit10, double)(10);

    // akward example that bounces types between number and string
    const g0 = (list: number[]) => R.map(R.inc, list);
    const g1 = R.dropWhile(R.gt(10));
    const g2 = R.map((i: number) => (i > 5 ? 'bigger' : 'smaller'));
    const g3 = R.all((i: string) => i === 'smaller');
    const g = R.compose<number[], number[], number[], string[], boolean>(
      g3,
      g2,
      g1,
      g0,
    );

    // @dts-jest:pass:snap
    g;
    // @dts-jest:pass:snap
    g([1, 2, 10, 13]);
  })();
})();

// @dts-jest:group:skip composeK
(() => {
  // TODO
})();

// @dts-jest:group composeP
(() => {
  interface User {
    name: string;
    followers: string[];
  }
  interface DateBase {
    users: {
      [userId: string]: User;
    };
  }
  const db: DateBase = {
    users: {
      JOE: {
        name: 'Joe',
        followers: ['STEVE', 'SUZY'],
      },
    },
  };

  const lookupUser = (userId: string) => Promise.resolve(db.users[userId]);
  const lookupFollowers = (user: User) => Promise.resolve(user.followers);

  // @dts-jest:pass:snap
  R.composeP(lookupFollowers, lookupUser);
  // @dts-jest:pass:snap
  R.composeP(lookupFollowers, lookupUser)('JOE');
})();

// @dts-jest:group concat
(() => {
  // @dts-jest:pass:snap
  R.concat([], []); //=> []
  // @dts-jest:pass:snap
  R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
  // @dts-jest:pass:snap
  R.concat([4, 5, 6])([1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
  // @dts-jest:pass:snap
  R.concat('ABC')('DEF'); // 'ABCDEF'
})();

// @dts-jest:group cond
(() => {
  const fn = R.cond([
    [R.equals(0), R.always('water freezes at 0°C')],
    [R.equals(100), R.always('water boils at 100°C')],
    [R.T, (temp: number) => `nothing special happens at ${temp}°C`],
  ]);

  // @dts-jest:pass:snap
  fn(0); //=> 'water freezes at 0°C'
  // @dts-jest:pass:snap
  fn(50); //=> 'nothing special happens at 50°C'
  // @dts-jest:pass:snap
  fn(100); //=> 'water boils at 100°C'
})();

// @dts-jest:group construct
(() => {
  // tslint:disable-next-line:no-unnecessary-class
  class Circle {
    // tslint:disable-next-line:no-empty
    constructor(_r: number, ..._colors: string[]) {}
  }
  // @dts-jest:pass:snap
  R.construct<'1', 'variadic'>()(Circle)(1, 'red');
})();

// @dts-jest:group constructN
(() => {
  // tslint:disable-next-line:no-unnecessary-class
  class Circle {
    // tslint:disable-next-line:no-empty
    constructor(_r: number, ..._colors: string[]) {}
  }
  // @dts-jest:pass:snap
  R.constructN(2, Circle)(1, 'red');
})();

// @dts-jest:group contains
(() => {
  const obj = {};

  // @dts-jest:pass:snap
  R.contains(obj)([{}, obj, {}]); //=> true
  // @dts-jest:pass:snap
  R.contains(3)([1, 2, 3]); //=> true
  // @dts-jest:pass:snap
  R.contains(3, [1, 2, 3]); //=> true
  // @dts-jest:pass:snap
  R.contains(4)([1, 2, 3]); //=> false
  // @dts-jest:pass:snap
  R.contains({})([{}, {}]); //=> true
})();

// @dts-jest:group converge
(() => {
  const add = (a: number, b: number) => a + b;
  const add3 = (a: number, b: number, c: number) => a + b + c;

  const subtract = (a: number, b: number) => a - b;
  const multiply = (a: number, b: number) => a * b;

  // @dts-jest:pass:snap
  R.converge(multiply, [add, subtract])(1, 2); //=> -3

  // @dts-jest:pass:snap
  R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4
})();

// @dts-jest:group countBy
(() => {
  const numbers = [1, 1.1, 1.2, 2, 3, 2.2];
  const letters = R.split('', 'abcABCaaaBBc');
  // @dts-jest:pass:snap
  R.countBy(Math.floor)(numbers); //=> {'1': 3, '2': 2, '3': 1}
  // @dts-jest:pass:snap
  R.countBy(R.toLower)(letters); //=> {'a': 5, 'b': 4, 'c': 3}
})();

// @dts-jest:group curry
(() => {
  const addTwo = R.curry((x: number, y: number) => x + y);
  // @dts-jest:pass:snap
  addTwo(3);
  // @dts-jest:pass:snap
  addTwo(3)(1);

  const addThree = R.curry((x: number, y: number, z: number) => x + y + z);
  // @dts-jest:pass:snap
  addThree(3, 2, 1);
  // @dts-jest:pass:snap
  addThree(3)(2)(1);
  // @dts-jest:pass:snap
  addThree(3, 2);
  // @dts-jest:pass:snap
  addThree(3)(2);
  // @dts-jest:pass:snap
  addThree(3);

  const xy = R.curry(<X, Y>(x: X, y: Y) => ({ x, y }));

  // @dts-jest:skip <Y>(v2: Y) => { x: number; y: Y; }
  xy(3);
  // @dts-jest:skip { x: number; y: number; }
  xy(3)(1);

  const xyz = R.curry(<X, Y, Z>(x: X, y: Y, z: Z) => ({ x, y, z }));
  // @dts-jest:skip { x: number; y: number; z: number; }
  xyz(3, 2, 1);
  // @dts-jest:skip { x: number; y: number; z: number; }
  xyz(3)(2)(1);
  // @dts-jest:skip <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
  xyz(3, 2);
  // @dts-jest:skip <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
  xyz(3)(2);
  // @dts-jest:skip <Y, Z>(v2: Y, v3: Z) => ({ x: number; y: Y; z: Z; })
  xyz(3);
})();

// @dts-jest:group curryN
(() => {
  const sumArgs = (...args: number[]) => R.sum(args);
  const curriedAddFourNumbers = R.curryN(4, sumArgs);

  // @dts-jest:pass:snap
  curriedAddFourNumbers;
  // @dts-jest:pass:snap
  curriedAddFourNumbers(1, 2)(3)(4); //=> 10
})();

// @dts-jest:group dec
(() => {
  // @dts-jest:pass:snap
  R.dec(42); //=> 41
})();

// @dts-jest:group defaultTo
(() => {
  const defaultTo42 = R.defaultTo(42);
  // @dts-jest:pass:snap
  defaultTo42(null); //=> 42
  // @dts-jest:pass:snap
  defaultTo42(undefined); //=> 42
  // @dts-jest:pass:snap
  defaultTo42('Ramda'); //=> 'Ramda'
})();

// @dts-jest:group descend
(() => {
  const byAge = R.descend(R.prop('age'));
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];
  // @dts-jest:pass:snap
  R.sort(byAge, people);
  // @dts-jest:pass:snap
  R.sort(R.__, people)(byAge);
})();

// @dts-jest:group difference
(() => {
  // @dts-jest:pass:snap
  R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2]
  // @dts-jest:pass:snap
  R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); //=> [7,6,5]
})();

// @dts-jest:group differenceWith
(() => {
  function cmp(x: { a: number }, y: { a: number }) {
    return x.a === y.a;
  }
  const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
  const l2 = [{ a: 3 }, { a: 4 }];
  // @dts-jest:pass:snap
  R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
  // @dts-jest:pass:snap
  R.differenceWith(cmp)(l1, l2); //=> [{a: 1}, {a: 2}]
  // @dts-jest:pass:snap
  R.differenceWith(cmp)(l1)(l2); //=> [{a: 1}, {a: 2}]
})();

// @dts-jest:group dissoc
(() => {
  // @dts-jest:pass:snap
  R.dissoc('b', { a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}
  // @dts-jest:pass:snap
  R.dissoc('b')({ a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}
})();

// @dts-jest:group dissocPath
(() => {
  // @dts-jest:pass:snap
  R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 } } }); //=> {a: {b: {}}}
  // @dts-jest:pass:snap
  R.dissocPath(['a', 'b', 'c'])({ a: { b: { c: 42 } } }); //=> {a: {b: {}}}
})();

// @dts-jest:group divide
(() => {
  // @dts-jest:pass:snap
  R.divide(71, 100); //=> 0.71
  // @dts-jest:pass:snap
  R.flip(R.divide)(2)(42); //=> 21
  // @dts-jest:pass:snap
  R.divide(1)(4); //=> 0.25
})();

// @dts-jest:group drop
(() => {
  // @dts-jest:pass:snap
  R.drop(3, [1, 2, 3, 4, 5, 6, 7]); //=> [4,5,6,7]
  // @dts-jest:pass:snap
  R.drop(3)([1, 2, 3, 4, 5, 6, 7]); //=> [4,5,6,7]
  // @dts-jest:pass:snap
  R.drop(3, 'ramda'); //=> 'da'
  // @dts-jest:pass:snap
  R.drop(3)('ramda'); //=> 'da'
})();

// @dts-jest:group dropLast
(() => {
  // @dts-jest:pass:snap
  R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
  // @dts-jest:pass:snap
  R.dropLast(2)(['foo', 'bar', 'baz']); //=> ['foo']
  // @dts-jest:pass:snap
  R.dropLast(3, 'ramda'); //=> 'ra'
  // @dts-jest:pass:snap
  R.dropLast(3)('ramda'); //=> 'ra'
})();

// @dts-jest:group dropLastWhile
(() => {
  const lteThree = (x: number) => x <= 3;
  // @dts-jest:pass:snap
  R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
})();

// @dts-jest:group dropRepeats
(() => {
  // @dts-jest:pass:snap
  R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
})();

// @dts-jest:group dropRepeatsWith
(() => {
  const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
  // @dts-jest:pass:snap
  R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
})();

// @dts-jest:group dropWhile
(() => {
  const lteTwo = (x: number) => x <= 2;
  // @dts-jest:pass:snap
  R.dropWhile(lteTwo, [1, 2, 3, 4]); //=> [3, 4]
  // @dts-jest:pass:snap
  R.dropWhile(lteTwo)([1, 2, 3, 4]); //=> [3, 4]
})();

// @dts-jest:group either
(() => {
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;
  // @dts-jest:pass:snap
  R.either(gt10, even)(101); //=> true
  // @dts-jest:pass:snap
  R.either(gt10)(even)(8); //=> true
})();

// @dts-jest:group empty
(() => {
  // @dts-jest:pass:snap
  R.empty([1, 2, 3, 4, 5]); //=> []
  // @dts-jest:pass:snap
  R.empty([1, 2, 3]); //=> []
  // @dts-jest:pass:snap
  R.empty('unicorns'); //=> ''
  // @dts-jest:pass:snap
  R.empty({ x: 1, y: 2 }); //=> {}
})();

// @dts-jest:group endsWith
(() => {
  // @dts-jest:pass:snap
  R.endsWith('c', 'abc'); //=> true
  // @dts-jest:pass:snap
  R.endsWith('b', 'abc'); //=> false
  // @dts-jest:pass:snap
  R.endsWith(['c'], ['a', 'b', 'c']); //=> true
  // @dts-jest:pass:snap
  R.endsWith(['b'], ['a', 'b', 'c']); //=> false
})();

// @dts-jest:group eqBy
(() => {
  // @dts-jest:pass:snap
  R.eqBy(Math.abs, 5, -5); //=> true
  // @dts-jest:pass:snap
  R.eqBy(Math.abs)(5, -5); //=> true
  // @dts-jest:pass:snap
  R.eqBy(Math.abs, 5)(-5); //=> true
})();

// @dts-jest:group eqProps
(() => {
  const o1 = { a: 1, b: 2, c: 3, d: 4 };
  const o2 = { a: 10, b: 20, c: 3, d: 40 };
  // @dts-jest:pass:snap
  R.eqProps('a', o1, o2); //=> false
  // @dts-jest:pass:snap
  R.eqProps('c', o1, o2); //=> true
  // @dts-jest:pass:snap
  R.eqProps('c')(o1);
  // @dts-jest:pass:snap
  R.eqProps('c', o1);
})();

// @dts-jest:group equals
(() => {
  // @dts-jest:pass:snap
  R.equals(1, 1); //=> true
  // @dts-jest:pass:snap
  R.equals('2', '1'); //=> false
  // @dts-jest:pass:snap
  R.equals([1, 2, 3], [1, 2, 3]); //=> true

  const a: any = {};
  a.v = a;
  const b: any = {};
  b.v = b;
  // @dts-jest:pass:snap
  R.equals(a, b); //=> true
})();

// @dts-jest:group evolve
(() => {
  const tomato = {
    firstName: 'Tomato ',
    data: { elapsed: 100, remaining: 1400 },
    id: 123,
  };
  const transformations = {
    firstName: R.trim,
    data: { elapsed: R.add(1), remaining: R.add(-1) },
  };
  // @dts-jest:pass:snap
  R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123}
  // @dts-jest:pass:snap
  R.evolve(transformations)(tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123}
})();

// @dts-jest:group F
(() => {
  // @dts-jest:pass:snap
  R.F();
})();

// @dts-jest:group filter
(() => {
  const isEven = (n: number) => n % 2 === 0;

  // @dts-jest:pass:snap
  R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
  // @dts-jest:pass:snap
  R.filter(isEven)([1, 2, 3, 4]);
  // @dts-jest:pass:snap
  R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, d: 4}
  // @dts-jest:pass:snap
  R.filter(isEven)({ a: 1, b: 2, c: 3, d: 4 });
})();

// @dts-jest:group find
(() => {
  interface Task {
    id: number;
  }
  const tasks: Task[] = [];

  // @dts-jest:pass:snap
  R.find((task: Task) => task.id === 1)(tasks);
})();

// @dts-jest:group findIndex
(() => {
  interface Task {
    a: number;
  }
  const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
  const a: (list: Task[]) => number = R.findIndex(R.propEq('a', 2));
  // @dts-jest:pass:snap
  a(xs); //=> 1
  // @dts-jest:pass:snap
  R.findIndex(R.propEq('a', 4))(xs); //=> -1

  // @dts-jest:pass:snap
  R.findIndex((x: number) => x === 1, [1, 2, 3]);
})();

// @dts-jest:group findLast
(() => {
  const xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
  // @dts-jest:pass:snap
  R.findLast<typeof xs[number]>(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
  // @dts-jest:pass:snap
  R.findLast(R.__, xs)(R.propEq('a', 4)); //=> undefined
})();

// @dts-jest:group findLastIndex
(() => {
  const xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
  // @dts-jest:pass:snap
  R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
  // @dts-jest:pass:snap
  R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
  // @dts-jest:pass:snap
  R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
})();

// @dts-jest:group flatten
(() => {
  // @dts-jest:pass:snap
  R.flatten([1, 2, [3, 4], 5]); //=> [1, 2, 3, 4, 5]
  // @dts-jest:pass:snap
  R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]) as number[]; //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
})();

// @dts-jest:group flip
(() => {
  const mergeThree = (
    a: boolean,
    b: number,
    c: string,
  ): [boolean, number, string] => [a, b, c];

  // @dts-jest:pass:snap
  mergeThree(true, 1, 'str'); //=> [true, 1, 'str']

  // @dts-jest:pass:snap
  R.flip(mergeThree)(1, true, 'str'); //=> [true, 1, 'str']
})();

// @dts-jest:group forEach
(() => {
  const printXPlusFive = (_x: number) => {
    /* console.log(x + 5); */
  };
  // @dts-jest:pass:snap
  R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
  // @dts-jest:pass:snap
  R.forEach(printXPlusFive)([1, 2, 3]); //=> [1, 2, 3]
})();

// @dts-jest:group forEachObjIndexed
(() => {
  const printKeyConcatValue = (_value: number, _key: string) => {
    /* console.log(`${key}:${value}`); */
  };
  // @dts-jest:pass:snap
  R.forEachObjIndexed(printKeyConcatValue, { x: 1, y: 2 });
  // @dts-jest:pass:snap
  R.forEachObjIndexed(printKeyConcatValue)({ x: 1, y: 2 });
})();

// @dts-jest:group fromPairs
(() => {
  // @dts-jest:pass:snap
  R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
})();

// @dts-jest:group groupBy
(() => {
  const byGrade = R.groupBy((student: { score: number; name: string }) => {
    const score = student.score;
    return score < 65
      ? 'F'
      : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A';
  });
  const students = [
    { name: 'Abby', score: 84 },
    { name: 'Eddy', score: 58 },
    { name: 'Jack', score: 69 },
  ];
  // @dts-jest:pass:snap
  byGrade(students);
})();

// @dts-jest:group groupWith
(() => {
  // @dts-jest:pass:snap
  R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
  // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

  // @dts-jest:pass:snap
  R.groupWith((a: number, b: number) => a % 2 === b % 2, [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
  ]);
  // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

  const isVowel = (a: string) => (R.contains(a, 'aeiou') ? a : '');
  // @dts-jest:pass:snap
  R.groupWith(R.eqBy<string>(isVowel), 'aestiou');
  // ['ae', 'st', 'iou']
})();

// @dts-jest:group gt
(() => {
  // @dts-jest:pass:snap
  R.gt(2, 6); //=> false
  // @dts-jest:pass:snap
  R.gt(2, 0); //=> true
  // @dts-jest:pass:snap
  R.gt(2, 2); //=> false
  // @dts-jest:pass:snap
  R.flip(R.gt)(2)(10); //=> true
  // @dts-jest:pass:snap
  R.gt(2)(10); //=> false
})();

// @dts-jest:group gte
(() => {
  // @dts-jest:pass:snap
  R.gte(2, 6); //=> false
  // @dts-jest:pass:snap
  R.gte(2, 0); //=> true
  // @dts-jest:pass:snap
  R.gte(2, 2); //=> true
  // @dts-jest:pass:snap
  R.flip(R.gte)(2)(10); //=> true
  // @dts-jest:pass:snap
  R.gte(2)(10); //=> false
})();

// @dts-jest:group has
(() => {
  const hasName = R.has('name');
  // @dts-jest:pass:snap
  hasName({ name: 'alice' }); //=> true
  // @dts-jest:pass:snap
  hasName({ name: 'bob' }); //=> true
  // @dts-jest:pass:snap
  hasName({}); //=> false

  const point = { x: 0, y: 0 };
  const pointHas = R.flip(R.has)(point);
  // @dts-jest:pass:snap
  pointHas('x'); //=> true
  // @dts-jest:pass:snap
  pointHas('y'); //=> true
  // @dts-jest:pass:snap
  pointHas('z'); //=> false
})();

// @dts-jest:group hasIn
(() => {
  class Rectangle {
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    public area(): number {
      return this.width * this.height;
    }
  }
  const square = new Rectangle(2, 2);
  // @dts-jest:pass:snap
  R.hasIn('width', square); //=> true
  // @dts-jest:pass:snap
  R.hasIn('area', square); //=> true
  // @dts-jest:pass:snap
  R.flip(R.hasIn)(square)('area'); //=> true
})();

// @dts-jest:group head
(() => {
  // @dts-jest:pass:snap
  R.head(['fi', 'fo', 'fum']); //=> 'fi'
  // @dts-jest:pass:snap
  R.head([10, 'ten']); //=> 10
  // @dts-jest:pass:snap
  R.head(['10', 10]); //=> '10'

  const ids = ['id1', 'id2', 'id3'];
  // @dts-jest:pass:snap
  R.head(ids); //=> 'id1'
})();

// @dts-jest:group identical
(() => {
  const o = {};
  // @dts-jest:pass:snap
  R.identical(o, o); //=> true
  // @dts-jest:pass:snap
  R.identical(1, 1); //=> true
  // @dts-jest:pass:snap
  R.identical('2', '1'); //=> false
  // @dts-jest:pass:snap
  R.identical([], []); //=> false
  // @dts-jest:pass:snap
  R.identical(0, -0); //=> false
  // @dts-jest:pass:snap
  R.identical(NaN, NaN); //=> true
})();

// @dts-jest:group identity
(() => {
  const obj = {};

  // @dts-jest:pass:snap
  R.identity(obj) === obj; //=> true
  // @dts-jest:pass:snap
  R.identity(1); //=> 1
  // @dts-jest:pass:snap
  R.identity([1, 2, 3]);
  // @dts-jest:pass:snap
  R.identity(['a', 'b', 'c']);
})();

// @dts-jest:group ifElse
(() => {
  // Flatten all arrays in the list but leave other values alone.
  const flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

  // @dts-jest:pass:snap
  flattenArrays([[0], [[10], [8]], 1234, {}]); //=> [[0], [10, 8], 1234, {}]
  // @dts-jest:pass:snap
  flattenArrays([[[10], 123], [8, [10]], 'hello']); //=> [[10, 123], [8, 10], 'hello']
})();

// @dts-jest:group inc
(() => {
  const f = R.pipe(Math.pow, R.negate, R.inc);
  // @dts-jest:pass:snap
  f(3, 4); // -(3^4) + 1
})();

// @dts-jest:group indexBy
(() => {
  const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];
  // @dts-jest:pass:snap
  R.indexBy(R.prop('id'), list);
  // @dts-jest:pass:snap
  R.indexBy(R.prop('id'))(list);
  // @dts-jest:pass:snap
  R.indexBy<{ id: string }>(R.prop('id'))(list);
})();

// @dts-jest:group indexOf
(() => {
  // @dts-jest:pass:snap
  R.indexOf(3, [1, 2, 3, 4]); //=> 2
  // @dts-jest:pass:snap
  R.indexOf(10)([1, 2, 3, 4]); //=> -1
})();

// @dts-jest:group init
(() => {
  // @dts-jest:pass:snap
  R.init(['fi', 'fo', 'fum']); //=> ['fi', 'fo']
})();

// @dts-jest:group innerJoin
(() => {
  interface Data {
    id: number;
    name: string;
  }
  // @dts-jest:pass:snap
  R.innerJoin(
    (data: Data, id: number) => data.id === id,
    [
      { id: 824, name: 'Richie Furay' },
      { id: 956, name: 'Dewey Martin' },
      { id: 313, name: 'Bruce Palmer' },
      { id: 456, name: 'Stephen Stills' },
      { id: 177, name: 'Neil Young' },
    ],
    [177, 456, 999],
  ); //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
})();

// @dts-jest:group insert
(() => {
  // @dts-jest:pass:snap
  R.insert(2, 5, [1, 2, 3, 4]); //=> [1,2,5,3,4]
  // @dts-jest:pass:snap
  R.insert(2)(5, [1, 2, 3, 4]); //=> [1,2,5,3,4]
  // @dts-jest:pass:snap
  R.insert(2, 5)([1, 2, 3, 4]); //=> [1,2,5,3,4]
  // @dts-jest:pass:snap
  R.insert(2)(5)([1, 2, 3, 4]); //=> [1,2,5,3,4]
})();

// @dts-jest:group insertAll
(() => {
  // @dts-jest:pass:snap
  R.insertAll(2, [10, 11, 12], [1, 2, 3, 4]);
  // @dts-jest:pass:snap
  R.insertAll(2)([10, 11, 12], [1, 2, 3, 4]);
  // @dts-jest:pass:snap
  R.insertAll(2, [10, 11, 12])([1, 2, 3, 4]);
  // @dts-jest:pass:snap
  R.insertAll(2)([10, 11, 12])([1, 2, 3, 4]);
})();

// @dts-jest:group intersection
(() => {
  // @dts-jest:pass:snap
  R.intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [3, 4]
  // @dts-jest:pass:snap
  R.intersection([1, 2, 3, 4])([7, 6, 5, 4, 3]); //=> [3, 4]
  // @dts-jest:pass:snap
  R.intersection([1, 2, 4], [1, 2, 3]); //=> [1,2]
  // @dts-jest:pass:snap
  R.intersection([1, 2, 4])([1, 2, 3]); //=> [1,2]
})();

// @dts-jest:group intersectionWith
(() => {
  interface Field {
    id: number;
    name: string;
  }
  const buffaloSpringfield = [
    { id: 824, name: 'Richie Furay' },
    { id: 956, name: 'Dewey Martin' },
    { id: 313, name: 'Bruce Palmer' },
    { id: 456, name: 'Stephen Stills' },
    { id: 177, name: 'Neil Young' },
  ];
  const csny = [
    { id: 204, name: 'David Crosby' },
    { id: 456, name: 'Stephen Stills' },
    { id: 539, name: 'Graham Nash' },
    { id: 177, name: 'Neil Young' },
  ];

  // @dts-jest:pass:snap
  R.intersectionWith<Field>(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
  // @dts-jest:pass:snap
  R.intersectionWith<Field>(R.eqBy(R.prop('id')))(buffaloSpringfield, csny);
  // @dts-jest:pass:snap
  R.intersectionWith<Field>(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny); //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
})();

// @dts-jest:group intersperse
(() => {
  // @dts-jest:pass:snap
  R.intersperse(',', ['foo', 'bar']); //=> ['foo', ',', 'bar']
  // @dts-jest:pass:snap
  R.intersperse(0, [1, 2]); //=> [1, 0, 2]
  // @dts-jest:pass:snap
  R.intersperse(0, [1]); //=> [1]
})();

// @dts-jest:group into
(() => {
  const numbers = [1, 2, 3, 4];
  const transducer = R.compose<number[], number[], number[]>(
    R.map(R.add(1))<'1', 'list'>(),
    R.take(2),
  );

  // @dts-jest:pass:snap
  R.into([], transducer, numbers); //=> [2, 3]
  // @dts-jest:pass:snap
  R.into<number[]>([])(transducer, numbers); //=> [2, 3]
  // @dts-jest:pass:snap
  R.into([], transducer)(numbers); //=> [2, 3]

  const intoArray = R.into<number[]>([]);
  // @dts-jest:pass:snap
  intoArray(transducer, numbers); //=> [2, 3]
  // @dts-jest:pass:snap
  intoArray(transducer)(numbers); //=> [2, 3]
})();

// @dts-jest:group invert
(() => {
  const raceResultsByFirstName = {
    first: 'alice',
    second: 'jake',
    third: 'alice',
  };
  // @dts-jest:pass:snap
  R.invert(raceResultsByFirstName); //=> { 'alice': ['first', 'third'], 'jake': ['second'] }
})();

// @dts-jest:group invertObj
(() => {
  const raceResults0 = {
    first: 'alice',
    second: 'jake',
  };
  // @dts-jest:pass:snap
  R.invertObj(raceResults0); //=> { 'alice': 'first', 'jake': 'second' }

  // Alternatively:
  const raceResults1 = ['alice', 'jake'];
  // @dts-jest:pass:snap
  R.invertObj(raceResults1); //=> { 'alice': '0', 'jake': '1' }
})();

// @dts-jest:group invoker
(() => {
  // @dts-jest:pass:snap
  R.invoker<'toUpperCase', string, string>(0, 'toUpperCase')('foo'); //=> 'FOO'
  // @dts-jest:pass:snap
  R.invoker<'charAt', string, number, string>(1, 'charAt')(1, 'foo'); //=> 'o'
})();

// @dts-jest:group is
(() => {
  // @dts-jest:pass:snap
  R.is(Object, {}); //=> true
  // @dts-jest:pass:snap
  R.is(Object)({}); //=> true
  // @dts-jest:pass:snap
  R.is(Number, 1); //=> true
  // @dts-jest:pass:snap
  R.is(Number)(1); //=> true
  // @dts-jest:pass:snap
  R.is(Object, 1); //=> false
  // @dts-jest:pass:snap
  R.is(Object)(1); //=> false
  // @dts-jest:pass:snap
  R.is(String, 's'); //=> true
  // @dts-jest:pass:snap
  R.is(String)('s'); //=> true
  // @dts-jest:pass:snap
  R.is(String, ''); //=> true
  // @dts-jest:pass:snap
  R.is(String)(''); //=> true
  // @dts-jest:pass:snap
  R.is(Object, new Object()); //=> true
  // @dts-jest:pass:snap
  R.is(Object)(new Object()); //=> true
  // @dts-jest:pass:snap
  R.is(Object, 's'); //=> false
  // @dts-jest:pass:snap
  R.is(Object)('s'); //=> false
  // @dts-jest:pass:snap
  R.is(Number, {}); //=> false
  // @dts-jest:pass:snap
  R.is(Number)({}); //=> false
})();

// @dts-jest:group isEmpty
(() => {
  // @dts-jest:pass:snap
  R.isEmpty([1, 2, 3]); //=> false
  // @dts-jest:pass:snap
  R.isEmpty([]); //=> true
  // @dts-jest:pass:snap
  R.isEmpty(''); //=> true
  // @dts-jest:pass:snap
  R.isEmpty(null); //=> false
  // @dts-jest:pass:snap
  R.isEmpty({}); //=>true
  // @dts-jest:pass:snap
  R.isEmpty({ a: 1 }); //=> false
})();

// @dts-jest:group isNil
(() => {
  // @dts-jest:pass:snap
  R.isNil(null); //=> true
  // @dts-jest:pass:snap
  R.isNil(undefined); //=> true
  // @dts-jest:pass:snap
  R.isNil(0); //=> false
  // @dts-jest:pass:snap
  R.isNil([]); //=> false
})();

// @dts-jest:group join
(() => {
  const spacer = R.join(' ');
  // @dts-jest:pass:snap
  spacer(['a', 2, 3.4]); //=> 'a 2 3.4'
  // @dts-jest:pass:snap
  R.join('|', [1, 2, 3]); //=> '1|2|3'
})();

// @dts-jest:group juxt
(() => {
  const range = R.juxt([Math.min, Math.max]);
  // @dts-jest:pass:snap
  range(3, 4, 9, -3); //=> [-3, 9]

  const chopped = R.juxt<string, string>([R.head, R.last]);
  // @dts-jest:pass:snap
  chopped('longstring'); //=> ['l', 'g']
})();

// @dts-jest:group keys
(() => {
  // @dts-jest:pass:snap
  R.keys({ a: 1, b: 2, c: 3 }); //=> ['a', 'b', 'c']
})();

// @dts-jest:group keysIn
(() => {
  class F {
    public x = 'x';
    public y = 'y';
  }
  const f = new F();
  // @dts-jest:pass:snap
  R.keysIn(f); //=> ['x', 'y']
})();

// @dts-jest:group last
(() => {
  // @dts-jest:pass:snap
  R.last(['fi', 'fo', 'fum']); //=> 'fum'
})();

// @dts-jest:group lastIndexOf
(() => {
  // @dts-jest:pass:snap
  R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); //=> 6
  // @dts-jest:pass:snap
  R.lastIndexOf(10, [1, 2, 3, 4]); //=> -1
  // @dts-jest:pass:snap
  R.lastIndexOf(10)([1, 2, 3, 4]); //=> -1
})();

// @dts-jest:group length
(() => {
  // @dts-jest:pass:snap
  R.length([]); //=> 0
  // @dts-jest:pass:snap
  R.length([1, 2, 3]); //=> 3
})();

// @dts-jest:group lens
(() => {
  interface XY {
    x: number;
    y: number;
  }
  const xLens = R.lens<XY['x'], XY>(R.prop('x'))(R.assoc('x'));

  // @dts-jest:pass:snap
  R.view(xLens, { x: 1, y: 2 }); //=> 1
  // @dts-jest:pass:snap
  R.set(xLens, 4, { x: 1, y: 2 }); //=> {x: 4, y: 2}
  // @dts-jest:pass:snap
  R.set(xLens)(4, { x: 1, y: 2 }); //=> {x: 4, y: 2}
  // @dts-jest:pass:snap
  R.set(xLens, 4)({ x: 1, y: 2 }); //=> {x: 4, y: 2}
  // @dts-jest:pass:snap
  R.over(xLens, R.negate, { x: 1, y: 2 }); //=> {x: -1, y: 2}
  // @dts-jest:pass:snap
  R.over(xLens, R.negate)({ x: 1, y: 2 }); //=> {x: -1, y: 2}
  // @dts-jest:pass:snap
  R.over(xLens)(R.negate, { x: 1, y: 2 }); //=> {x: -1, y: 2}
})();

// @dts-jest:group lensIndex
(() => {
  const headLens = R.lensIndex(0);
  // @dts-jest:pass:snap
  R.view(headLens, ['a', 'b', 'c']); //=> 'a'

  // @dts-jest:pass:snap
  R.set(headLens, 'x', ['a', 'b', 'c']); //=> ['x', 'b', 'c']
  // @dts-jest:pass:snap
  R.set(R.__, 'x', ['a', 'b', 'c'])(headLens); //=> ['x', 'b', 'c']

  // @dts-jest:pass:snap
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
  // @dts-jest:pass:snap
  R.over(R.__, R.toUpper, ['a', 'b', 'c'])(headLens); //=> ['A', 'b', 'c']
})();

// @dts-jest:group lensPath
(() => {
  interface XYZ {
    x: {
      y: number;
      z: number;
    };
  }
  const xyLens = R.lensPath<XYZ['x']['y'], XYZ>(['x', 'y']);
  // @dts-jest:pass:snap
  R.view(xyLens, { x: { y: 2, z: 3 } }); //=> 2
  // @dts-jest:pass:snap
  R.set(xyLens, 4, { x: { y: 2, z: 3 } }); //=> {x: {y: 4, z: 3}}
  // @dts-jest:pass:snap
  R.over(xyLens, R.negate, { x: { y: 2, z: 3 } }); //=> {x: {y: -2, z: 3}}
})();

// @dts-jest:group lensProp
(() => {
  const phraseLens = R.lensProp<string, { phrase: string }>('phrase');
  const obj1 = { phrase: 'Absolute filth . . . and I LOVED it!' };
  const obj2 = { phrase: "What's all this, then?" };
  // @dts-jest:pass:snap
  R.view(phraseLens, obj1); //=> 'Absolute filth . . . and I LOVED it!'
  // @dts-jest:pass:snap
  R.view(phraseLens, obj2); //=> "What's all this, then?"
  // @dts-jest:pass:snap
  R.set(phraseLens, 'Ooh Betty', obj1); //=> { phrase: 'Ooh Betty'}
})();

// @dts-jest:group lift
(() => {
  const madd3 = R.lift((a: number, b: number, c: number) => a + b + c);
  const madd5 = R.lift(
    (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e,
  );

  // @dts-jest:pass:snap
  madd3([1, 2, 3], [1, 2, 3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
  // @dts-jest:pass:snap
  madd5([1, 2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
})();

// @dts-jest:group liftN
(() => {
  const madd3 = R.liftN(3, (...args: number[]) => R.sum(args));
  // @dts-jest:pass:snap
  madd3([1, 2, 3], [1, 2, 3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
})();

// @dts-jest:group lt
(() => {
  // @dts-jest:pass:snap
  R.lt(2, 6); //=> true
  // @dts-jest:pass:snap
  R.lt(2, 0); //=> false
  // @dts-jest:pass:snap
  R.lt(2, 2); //=> false
  // @dts-jest:pass:snap
  R.lt(5)(10); //=> true
  // @dts-jest:pass:snap
  R.flip(R.lt)(5)(10); //=> false
})();

// @dts-jest:group lte
(() => {
  // @dts-jest:pass:snap
  R.lte(2, 6); //=> true
  // @dts-jest:pass:snap
  R.lte(2, 0); //=> false
  // @dts-jest:pass:snap
  R.lte(2, 2); //=> true
  // @dts-jest:pass:snap
  R.lte(2)(10); //=> true
  // @dts-jest:pass:snap
  R.flip(R.lte)(2)(1); //=> true
})();

// @dts-jest:group map
(() => {
  const double = (x: number): number => x + x;
  const arrayify = <T>(v: T): T[] => [v];
  // homogeneous array
  // @dts-jest:pass:snap
  R.map(double, [1, 2, 3]); //=> [2, 4, 6]
  // @dts-jest:pass:snap
  R.map(double)([1, 2, 3]); //=> [2, 4, 6]
  // homogeneous object
  // @dts-jest:pass:snap
  R.map(double, { a: 1, b: 2, c: 3 }); //=> { a: 2, b: 4, c: 6 }
  // @dts-jest:pass:snap
  R.map(double)({ a: 1, b: 2, c: 3 }); //=> { a: 2, b: 4, c: 6 }

  // heterogeneous array
  // @dts-jest:skip [number[], string[]]
  R.map(arrayify, [1, 'a']); //=> [[1], ['a']]
  // @dts-jest:skip [number[], string[]]
  R.map(arrayify)([1, 'a']); //=> [[1], ['a']]
  // heterogeneous object
  // @dts-jest:skip { a: number[], b: string[] }
  R.map(arrayify, { a: 1, b: 'c' }); //=> { a: [1], b: ['c'] }
  // @dts-jest:skip { a: number[], b: string[] }
  R.map(arrayify)({ a: 1, b: 'c' }); //=> { a: [1], b: ['c'] }
})();

// @dts-jest:group mapAccum
(() => {
  const digits = ['1', '2', '3', '4'];
  const append = (a: string, b: string): [string, string] => [a + b, a + b];
  // @dts-jest:pass:snap
  R.mapAccum(append, '0', digits); //=> ['01234', ['01', '012', '0123', '01234']]
  // @dts-jest:pass:snap
  R.mapAccum(append)('0', digits); //=> ['01234', ['01', '012', '0123', '01234']]
  // @dts-jest:pass:snap
  R.mapAccum(append, '0')(digits); //=> ['01234', ['01', '012', '0123', '01234']]
  // @dts-jest:pass:snap
  R.mapAccum(append)('0')(digits); //=> ['01234', ['01', '012', '0123', '01234']]
})();

// @dts-jest:group mapAccumRight
(() => {
  const digits = ['1', '2', '3', '4'];
  const append = (a: string, b: string): [string, string] => [a + b, a + b];
  // @dts-jest:pass:snap
  R.mapAccumRight(append, '0', digits); //=> [["12340", "2340", "340", "40"], "12340"]
  // @dts-jest:pass:snap
  R.mapAccumRight(append)('0', digits); //=> [["12340", "2340", "340", "40"], "12340"]
  // @dts-jest:pass:snap
  R.mapAccumRight(append, '0')(digits); //=> [["12340", "2340", "340", "40"], "12340"]
  // @dts-jest:pass:snap
  R.mapAccumRight(append)('0')(digits); //=> [["12340", "2340", "340", "40"], "12340"]
})();

// @dts-jest:group mapObjIndexed
(() => {
  const values = { x: 1, y: 2, z: 3 };
  const prependKeyAndDouble = (num: number, key: string, _obj: any) =>
    key + (num * 2).toString();
  // @dts-jest:pass:snap
  R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
})();

// @dts-jest:group match
(() => {
  // @dts-jest:pass:snap
  R.match(new RegExp('([a-z]a)', 'g'), 'bananas'); //=> ['ba', 'na', 'na']
  // @dts-jest:pass:snap
  R.match(new RegExp('a'), 'b'); //=> []
  // @dts-jest:fail:snap
  R.match(new RegExp('a'), null); //=> :error
})();

// @dts-jest:group mathMod
(() => {
  // @dts-jest:pass:snap
  R.mathMod(-17, 5); //=> 3
  // @dts-jest:pass:snap
  R.mathMod(17, 5); //=> 2
  // @dts-jest:pass:snap
  R.mathMod(17, -5); //=> NaN
  // @dts-jest:pass:snap
  R.mathMod(17, 0); //=> NaN
  // @dts-jest:pass:snap
  R.mathMod(17.2, 5); //=> NaN
  // @dts-jest:pass:snap
  R.mathMod(17, 5.3); //=> NaN

  const clock = R.flip(R.mathMod)(12);
  // @dts-jest:pass:snap
  clock(15); //=> 3
  // @dts-jest:pass:snap
  clock(24); //=> 0

  const seventeenMod = R.mathMod(17);
  // @dts-jest:pass:snap
  seventeenMod(3); //=> 2
})();

// @dts-jest:group max
(() => {
  // @dts-jest:pass:snap
  R.max(7, 3); //=> 7
  // @dts-jest:pass:snap
  R.max('a', 'z'); //=> 'z'
})();

// @dts-jest:group maxBy
(() => {
  function cmp(obj: { x: number }) {
    return obj.x;
  }
  const a = { x: 1 };
  const b = { x: 2 };
  const c = { x: 3 };
  const d = { x: 'a' };
  const e = { x: 'z' };
  // @dts-jest:pass:snap
  R.maxBy(cmp, a, c); //=> {x: 3}
  // @dts-jest:pass:snap
  R.maxBy(cmp)(a, c); //=> {x: 3}
  // @dts-jest:pass:snap
  R.maxBy(cmp)(a)(b);
  // @dts-jest:fail:snap
  R.maxBy(cmp)(d)(e);
})();

// @dts-jest:group mean
(() => {
  // @dts-jest:pass:snap
  R.mean([2, 7, 9]); //=> 6
  // @dts-jest:pass:snap
  R.mean([]); //=> NaN
})();

// @dts-jest:group median
(() => {
  // @dts-jest:pass:snap
  R.median([7, 2, 10, 9]); //=> 8
  // @dts-jest:pass:snap
  R.median([]); //=> NaN
})();

// @dts-jest:group memoize
(() => {
  // tslint:disable-next-line:no-unused
  let numberOfCalls = 0;
  const trackedAdd = (a: number, b: number) => {
    numberOfCalls += 1;
    return a + b;
  };
  const memoTrackedAdd = R.memoize(trackedAdd);

  // @dts-jest:pass:snap
  memoTrackedAdd(1, 2); //=> 3
  // @dts-jest:pass:snap
  numberOfCalls; //=> 1
  // @dts-jest:pass:snap
  memoTrackedAdd(1, 2); //=> 3
  // @dts-jest:pass:snap
  numberOfCalls; //=> 1
  // @dts-jest:pass:snap
  memoTrackedAdd(2, 3); //=> 5
  // @dts-jest:pass:snap
  numberOfCalls; //=> 2

  // Note that argument order matters
  // @dts-jest:pass:snap
  memoTrackedAdd(2, 1); //=> 3
  // @dts-jest:pass:snap
  numberOfCalls; //=> 3
})();

// @dts-jest:group memoizeWith
(() => {
  // tslint:disable-next-line:no-unused
  let count = 0;
  const factorial = R.memoizeWith(R.identity, (n: number) => {
    count += 1;
    return R.product(R.range(1, n + 1));
  });
  // @dts-jest:pass:snap
  factorial(5); //=> 120
  // @dts-jest:pass:snap
  factorial(5); //=> 120
  // @dts-jest:pass:snap
  factorial(5); //=> 120
  // @dts-jest:pass:snap
  count; //=> 1
})();

// @dts-jest:group merge
(() => {
  // @dts-jest:pass:snap
  R.merge({ name: 'fred', age: 10 }, { age: 40 }); //=> { 'name': 'fred', 'age': 40 }

  const resetToDefault = R.flip(R.merge)({ x: 0 });
  // @dts-jest:skip Dictionary<number>
  resetToDefault({ x: 5, y: 2 }); //=> {x: 0, y: 2}
})();

// @dts-jest:group mergeAll
(() => {
  // @dts-jest:pass:snap
  R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]); //=> {foo: 1,bar: 2,baz: 3}
  // @dts-jest:pass:snap
  R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]); //=> {foo: 2,bar: 2}
})();

// @dts-jest:group mergeDeepLeft
(() => {
  // @dts-jest:pass:snap
  R.mergeDeepLeft(
    { name: 'fred', age: 10, contact: { email: 'moo@example.com' } },
    { age: 40, contact: { email: 'baa@example.com' } },
  ); //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
})();

// @dts-jest:group mergeDeepRight
(() => {
  // @dts-jest:pass:snap
  R.mergeDeepRight(
    { name: 'fred', age: 10, contact: { email: 'moo@example.com' } },
    { age: 40, contact: { email: 'baa@example.com' } },
  ); //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
})();

// @dts-jest:group mergeDeepWith
(() => {
  // @dts-jest:pass:snap
  R.mergeDeepWith(
    R.concat,
    { a: true, c: { values: [10, 20] } },
    { b: true, c: { values: [15, 35] } },
  ); //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
})();

// @dts-jest:group mergeDeepWithKey
(() => {
  const concatValues = (k: string, l: number[], r: number[]) =>
    k === 'values' ? R.concat(l, r) : r;
  // @dts-jest:pass:snap
  R.mergeDeepWithKey(
    concatValues,
    { a: true, c: { thing: 'foo', values: [10, 20] } },
    { b: true, c: { thing: 'bar', values: [15, 35] } },
  ); //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
})();

// @dts-jest:group mergeWith
(() => {
  // @dts-jest:pass:snap
  R.mergeWith(
    R.concat,
    { a: true, values: [10, 20] },
    { b: true, values: [15, 35] },
  ); //=> { a: true, b: true, values: [10, 20, 15, 35] }
})();

// @dts-jest:group mergeWithKey
(() => {
  const concatValues = (
    k: string,
    l: string | number[],
    r: string | number[],
  ) => (k === 'values' ? R.concat(l, r) : r);
  // @dts-jest:pass:snap
  R.mergeWithKey(
    concatValues,
    { a: true, thing: 'foo', values: [10, 20] },
    { b: true, thing: 'bar', values: [15, 35] },
  ); //=> { a: true, b: true, values: [10, 20, 15, 35], thing: 'bar' }
  // @dts-jest:pass:snap
  R.mergeWithKey(concatValues)(
    { a: true, thing: 'foo', values: [10, 20] },
    { b: true, thing: 'bar', values: [15, 35] },
  ); //=> { a: true, b: true, values: [10, 20, 15, 35], thing: 'bar' }
})();

// @dts-jest:group min
(() => {
  // @dts-jest:pass:snap
  R.min(9, 3); //=> 3
  // @dts-jest:pass:snap
  R.min('a', 'z'); //=> 'a'
})();

// @dts-jest:group minBy
(() => {
  function cmp(obj: { x: number }) {
    return obj.x;
  }
  const a = { x: 1 };
  const b = { x: 2 };
  const c = { x: 3 };
  const d = { x: 'a' };
  const e = { x: 'z' };
  // @dts-jest:pass:snap
  R.minBy(cmp, a, b); //=> {x: 1}
  // @dts-jest:pass:snap
  R.minBy(cmp)(a, b); //=> {x: 1}
  // @dts-jest:pass:snap
  R.minBy(cmp)(a)(c);
  // @dts-jest:fail:snap
  R.minBy(cmp, d, e);
})();

// @dts-jest:group modulo
(() => {
  // @dts-jest:pass:snap
  R.modulo(17, 3); //=> 2
  // JS behavior:
  // @dts-jest:pass:snap
  R.modulo(-17, 3); //=> -2
  // @dts-jest:pass:snap
  R.modulo(17, -3); //=> 2

  const isOdd = R.flip(R.modulo)(2);
  // @dts-jest:pass:snap
  isOdd(42); //=> 0
  // @dts-jest:pass:snap
  isOdd(21); //=> 1
})();

// @dts-jest:group multiply
(() => {
  // @dts-jest:pass:snap
  R.multiply(2)(3); //=> 6
  // @dts-jest:pass:snap
  R.multiply(3)(4); //=> 12
  // @dts-jest:pass:snap
  R.multiply(2, 5); //=> 10
})();

// @dts-jest:group nAry
(() => {
  const takesNoArg = () => true;
  const takesOneArg = (a: number) => [a];
  const takesTwoArgs = (a: number, b: number) => [a, b];
  const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];

  // @dts-jest:pass:snap
  R.nAry(0, takesNoArg);
  // @dts-jest:pass:snap
  R.nAry(0, takesOneArg);
  // @dts-jest:pass:snap
  R.nAry(1, takesTwoArgs);
  // @dts-jest:pass:snap
  R.nAry(1, takesThreeArgs);
})();

// @dts-jest:group negate
(() => {
  // @dts-jest:pass:snap
  R.negate(42); //=> -42
})();

// @dts-jest:group none
(() => {
  // @dts-jest:pass:snap boolean
  R.none(isNaN, [1, 2, 3]); //=> true
  // @dts-jest:pass:snap boolean
  R.none(isNaN, [1, 2, 3, NaN]); //=> false
  // @dts-jest:pass:snap boolean
  R.none(isNaN)([1, 2, 3, NaN]); //=> false
})();

// @dts-jest:group not
(() => {
  // @dts-jest:pass:snap
  R.not(true); //=> false
  // @dts-jest:pass:snap
  R.not(false); //=> true
  // @dts-jest:pass:snap
  R.not(0); //=> true
  // @dts-jest:pass:snap
  R.not(1); //=> false
})();

// @dts-jest:group nth
(() => {
  const list = ['foo', 'bar', 'baz', 'quux'];
  // @dts-jest:pass:snap
  R.nth(1, list); //=> 'bar'
  // @dts-jest:pass:snap
  R.nth(-1, list); //=> 'quux'
  // @dts-jest:pass:snap
  R.nth(-99, list); //=> undefined
  // @dts-jest:pass:snap
  R.nth(-99)(list); //=> undefined
})();

// @dts-jest:group nthArg
(() => {
  // @dts-jest:pass:snap
  R.nthArg(1)('a', 'b', 'c'); //=> 'b'
  // @dts-jest:pass:snap
  R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
})();

// @dts-jest:group o
(() => {
  interface Name {
    first: string;
    last: string;
  }
  const classyGreeting = (name: Name) =>
    `The name's ${name.last}, ${name.first} ${name.last}`;
  const yellGreeting = R.o(R.toUpper, classyGreeting);

  // @dts-jest:pass:snap
  yellGreeting({ first: 'James', last: 'Bond' }); //=> "THE NAME'S BOND, JAMES BOND"
  // @dts-jest:pass:snap
  R.o(R.multiply(10), R.add(10))(-4); //=> 60
})();

// @dts-jest:group objOf
(() => {
  const matchPhrases = R.compose(
    R.objOf('must'),
    R.map(R.objOf('match_phrase')),
  );
  // @dts-jest:pass:snap
  matchPhrases(['foo', 'bar', 'baz']);
})();

// @dts-jest:group of
(() => {
  // @dts-jest:pass:snap
  R.of([1]); //=> [[1]]
  // @dts-jest:pass:snap
  R.of(1);
})();

// @dts-jest:group omit
(() => {
  // @dts-jest:pass:snap
  R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, c: 3}
  // @dts-jest:pass:snap
  R.omit(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, c: 3}
  // @dts-jest:fail:snap
  R.omit('ad', { a: 1, b: 2, c: 3, d: 4 });
})();

// @dts-jest:group once
(() => {
  const addOneOnce = R.once((x: number) => x + 1);
  // @dts-jest:pass:snap
  addOneOnce(10); //=> 11
  // @dts-jest:pass:snap
  addOneOnce(addOneOnce(50)); //=> 11
})();

// @dts-jest:group or
(() => {
  // @dts-jest:pass:snap
  R.or(false, true); //=> true
  // @dts-jest:pass:snap
  R.or(0, []); //=> []
  // @dts-jest:pass:snap
  R.or(0)([]); //=> []
  // @dts-jest:pass:snap
  R.or(null, ''); //=> ''
})();

// @dts-jest:group over
(() => {
  const headLens = R.lensIndex(0);
  // @dts-jest:pass:snap
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
})();

// @dts-jest:group pair
(() => {
  // @dts-jest:pass:snap
  R.pair('foo', 'bar'); //=> ['foo', 'bar']

  const p = R.pair('foo', 1);
  // @dts-jest:pass:snap
  p[0]; //=> 'foo'
  // @dts-jest:pass:snap
  p[1]; //=> 1
})();

// @dts-jest:group partial
(() => {
  const multiply = (a: number, b: number) => a * b;

  // @dts-jest:pass:snap
  R.partial(multiply, [2])(2); //=> 4

  const greet = (
    salutation: string,
    title: string,
    firstName: string,
    lastName: string,
  ) => `${salutation}, ${title} ${firstName} ${lastName}!`;
  const sayHello = R.partial(greet, ['Hello']);
  const sayHelloToMs = R.partial(sayHello, ['Ms.']);

  // @dts-jest:pass:snap
  sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
})();

// @dts-jest:group partialRight
(() => {
  const greet = (
    salutation: string,
    title: string,
    firstName: string,
    lastName: string,
  ) => `${salutation}, ${title} ${firstName} ${lastName}!`;
  const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);

  // @dts-jest:pass:snap
  greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
})();

// @dts-jest:group partition
(() => {
  // @dts-jest:pass:snap
  R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
  // @dts-jest:pass:snap
  R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
  // @dts-jest:pass:snap
  R.partition((x: number) => x > 2, [1, 2, 3, 4]);
  // @dts-jest:pass:snap
  R.partition((x: number) => x > 2)([1, 2, 3, 4]);
  // @dts-jest:pass:snap
  R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' }); //=> [ { a: 'sss', foo: 'bars' }, { b: 'ttt' } ]
})();

// @dts-jest:group path
(() => {
  // @dts-jest:pass:snap
  R.path(['a', 'b'], { a: { b: 2 } }); //=> 2
  // @dts-jest:pass:snap
  R.path(['a', 'b'])({ a: { b: 2 } }); //=> 2
})();

// @dts-jest:group pathEq
(() => {
  interface User {
    address?: { zipCode: number };
    name?: string;
  }
  const user1 = { address: { zipCode: 90210 } };
  const user2 = { address: { zipCode: 55555 } };
  const user3 = { name: 'Bob' };
  const users = [user1, user2, user3];
  const isFamous = R.pathEq(['address', 'zipCode'], 90210);
  // @dts-jest:pass:snap
  R.filter<User>(isFamous, users); //=> [ user1 ]
})();

// @dts-jest:group pathOr
(() => {
  // @dts-jest:pass:snap
  R.pathOr('N/A', ['a', 'b'])({ a: { b: 2 } }); //=> 2
  // @dts-jest:pass:snap
  R.pathOr('N/A')(['a', 'b'], { a: { b: 2 } }); //=> 2
})();

// @dts-jest:group pathSatisfies
(() => {
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a === 'foo', ['a', 'b', 'c'], {
    a: { b: { c: 'foo' } },
  }); //=> true
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a === 'bar', ['a', 'b', 'c'], {
    a: { b: { c: 'foo' } },
  }); //=> false
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'], { a: { b: { c: 1 } } }); //=> true
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a !== 1, ['a', 'b', 'c'], { a: { b: { c: 2 } } }); //=> true
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'], { a: { b: { c: 1 } } }); //=> true
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'])({ a: { b: { c: 1 } } }); //=> true
  // @dts-jest:pass:snap
  R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'])({ a: { b: { c: 1 } } }); //=> true
})();

// @dts-jest:group pick
(() => {
  // @dts-jest:pass:snap
  R.pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1}
  // @dts-jest:fail:snap
  R.pick(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); // runtime correct but type error => {a: 1}
  // @dts-jest:pass:snap
  R.pick(['a', 'e', 'f'], [1, 2, 3, 4]); //=> {}
  // @dts-jest:pass:snap
  R.pick(['a', 'c', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, c: 3, d: 4}
  // @dts-jest:pass:snap
  R.pick(['0', '2', '3'], [1, 2, 3, 4]); //=> {0: 1, 2: 3, 3: 4}
})();

// @dts-jest:group pickAll
(() => {
  // @dts-jest:pass:snap
  R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
  // @dts-jest:pass:snap
  R.pickAll(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
  // @dts-jest:pass:snap
  R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, e: undefined, f: undefined}
  // @dts-jest:pass:snap
  R.pickAll(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, e: undefined, f: undefined}
})();

// @dts-jest:group pickBy
(() => {
  const colors = {
    1: { color: 'read' },
    2: { color: 'black', bgcolor: 'yellow' },
  };
  const isPositive = (n: number) => n > 0;
  const containsBackground = (val: any) => val.bgcolor;
  const isUpperCase = (_val: number, key: string) => key.toUpperCase() === key;

  // @dts-jest:pass:snap
  R.pickBy(isPositive, { a: 1, b: 2, c: -1, d: 0, e: 5 }); //=> {a: 1, b: 2, e: 5}
  // @dts-jest:pass:snap
  R.pickBy(containsBackground, colors); //=> {2: {color: 'black', bgcolor: 'yellow'}}
  // @dts-jest:pass:snap
  R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); //=> {A: 3, B: 4}
})();

// @dts-jest:group pipe
(() => {
  (() => {
    const shout = (x: number): string => (x >= 10 ? 'big' : 'small');
    const double = (x: number): number => x + x;
    // @dts-jest:pass:snap
    R.pipe(double, double, shout);
    // @dts-jest:pass:snap
    R.pipe(double, double, shout)(10);

    // @dts-jest:pass:snap
    R.pipe(R.split(''), R.adjust(R.toUpper, 0), R.join(''))('str');

    const f = R.pipe(Math.pow, R.negate, R.inc);
    // @dts-jest:pass:snap
    f(3, 4); // -(3^4) + 1

    // test for type degeneration if the first function has generics
    // @dts-jest:skip (x0: number) => number
    R.pipe(R.identity, double);
  })();
  (() => {
    const double = (x: number): number => x + x;
    const triple = (x: number): number => x * 3;
    const square = (x: number): number => x * x;
    const squareThenDoubleThenTriple = R.pipe(square, double, triple);
    // @dts-jest:pass:snap
    squareThenDoubleThenTriple(5); //=> 150
  })();
})();

// @dts-jest:group:skip pipeK
(() => {
  // TODO
})();

// @dts-jest:group pipeP
(() => {
  // @dts-jest:pass:snap
  R.pipeP(
    (m: number) => Promise.resolve(R.multiply(2, m)),
    (m: number) => Promise.resolve(m / 2),
  )(10);
  // @dts-jest:pass:snap
  R.pipeP(
    (m: number) => Promise.resolve(R.multiply(2, m)),
    (m: number) => Promise.resolve(m / 2),
    R.multiply(5),
  )(10);
})();

// @dts-jest:group pluck
(() => {
  // @dts-jest:pass:snap
  R.pluck('a', [{ a: 1 }, { a: 2 }]); //=> [1, 2]
  // @dts-jest:pass:snap
  R.pluck(0, [[1, 2], [3, 4]]); //=> [1, 3]
  // @dts-jest:pass:snap
  R.pluck('a')([{ a: 1 }, { a: 2 }]); //=> [1, 2]
  // @dts-jest:pass:snap
  R.pluck(0)([[1, 2], [3, 4]]); //=> [1, 3]
  // @dts-jest:pass:snap
  R.pluck(
    'value',
    R.pick(['a'])({
      a: { value: 'some_value' },
      b: { value: 'some_value' },
    }),
  ); //=> { a: 'some_value' }
  // @dts-jest:pass:snap
  R.pluck('value', {
    a: { value: 'some_value' },
    b: { value: 123 },
  }); //=> { a: 'some_value', b: 123 }
})();

// @dts-jest:group prepend
(() => {
  // @dts-jest:pass:snap
  R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
  // @dts-jest:pass:snap
  R.prepend('fee')(['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
})();

// @dts-jest:group product
(() => {
  // @dts-jest:pass:snap
  R.product([2, 4, 6, 8, 100, 1]); //=> 38400
})();

// @dts-jest:group project
(() => {
  const abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
  const fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
  const kids = [abby, fred];
  // @dts-jest:pass:snap
  R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
})();

// @dts-jest:group prop
(() => {
  // @dts-jest:pass:snap
  R.prop('x', { x: 100 }); //=> 100
  // @dts-jest:pass:snap
  R.prop('x', {}); //=> undefined
})();

// @dts-jest:group propEq
(() => {
  (() => {
    const xs: { [key: string]: string } = { a: '1', b: '0' };
    // @dts-jest:pass:snap
    R.propEq('a', '1', xs); //=> true
    // @dts-jest:pass:snap
    R.propEq('a', '4', xs); //=> false
  })();
  (() => {
    const xs: { [key: string]: number } = { a: 1, b: 0 };
    // @dts-jest:pass:snap
    R.propEq('a', 1, xs); //=> true
    // @dts-jest:pass:snap
    R.propEq('a', 4, xs); //=> false
  })();
  (() => {
    const xs = { a: '1', b: '0' };
    // @dts-jest:pass:snap
    R.propEq('a', '1', xs); //=> true
    // @dts-jest:pass:snap
    R.propEq('a', '4', xs); //=> false
  })();
  (() => {
    const xs = { a: 1, b: 0 };
    // @dts-jest:pass:snap
    R.propEq('a', 1, xs); //=> true
    // @dts-jest:pass:snap
    R.propEq('a', 4, xs); //=> false
  })();
  (() => {
    interface Obj {
      a: number;
      b: number;
    }
    const xs: Obj = { a: 1, b: 0 };
    // @dts-jest:pass:snap
    R.propEq('a', 1, xs); //=> true
    // @dts-jest:pass:snap
    R.propEq('a', 4, xs); //=> false
  })();
})();

// @dts-jest:group propIs
(() => {
  // @dts-jest:pass:snap
  R.propIs(Number, 'x', { x: 1, y: 2 }); //=> true
  // @dts-jest:pass:snap
  R.propIs(Number, 'x')({ x: 1, y: 2 }); //=> true
  // @dts-jest:pass:snap
  R.propIs(Number)('x', { x: 1, y: 2 }); //=> true
  // @dts-jest:pass:snap
  R.propIs(Number)('x')({ x: 1, y: 2 }); //=> true
  // @dts-jest:pass:snap
  R.propIs(Number, 'x', { x: 'foo' }); //=> false
  // @dts-jest:pass:snap
  R.propIs(Number, 'x', {}); //=> false
})();

// @dts-jest:group propOr
(() => {
  interface Person {
    name: string;
    age: number;
    favoriteLibrary?: string;
  }
  const alice: Person = {
    name: 'ALICE',
    age: 101,
  };

  // @dts-jest:pass:snap
  R.prop('favoriteLibrary', alice); //=> undefined
  // @dts-jest:skip string
  R.propOr('Ramda', 'favoriteLibrary', alice); //=> 'Ramda'

  // @dts-jest:pass:snap
  R.propOr([], 'detail', undefined); //=> []
})();

// @dts-jest:group propSatisfies
(() => {
  interface XY {
    x: number;
    y: number;
  }

  // @dts-jest:pass:snap
  R.propSatisfies((x: number) => x > 0, 'x', { x: 1, y: 2 }); //=> true
  // @dts-jest:pass:snap
  R.propSatisfies<'x', XY>((x: number) => x > 0, 'x')({ x: 1, y: 2 }); //=> true
  // @dts-jest:pass:snap
  R.propSatisfies<'x', XY>((x: number) => x > 0)('x')({ x: 1, y: 2 }); //=> true
})();

// @dts-jest:group props
(() => {
  // @dts-jest:pass:snap
  R.props(['x', 'y'], { x: 1, y: 2 }); //=> [1, 2]
  // @dts-jest:pass:snap
  R.props(['c', 'a', 'b'], { b: 2, a: 1 }); //=> [undefined, 1, 2]

  const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
  // @dts-jest:pass:snap
  fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }); //=> 'Tony Bullet-Tooth'
})();

// @dts-jest:group range
(() => {
  // @dts-jest:pass:snap
  R.range(1, 5); //=> [1, 2, 3, 4]
  // @dts-jest:pass:snap
  R.range(50)(53); //=> [50, 51, 52]
})();

// @dts-jest:group reduce
(() => {
  const numbers = [1, 2, 3];
  const add = (a: number, b: number) => a + b;
  // @dts-jest:pass:snap
  R.reduce(add, 10, numbers); //=> 16
})();

// @dts-jest:group reduce
(() => {
  const numbers = [1, 2, 3];
  const add = (a: number, b: number) => a + b;
  // @dts-jest:pass:snap
  R.reduce(add, 10, numbers); //=> 16
  // @dts-jest:pass:snap
  R.reduce(add)(10, numbers); //=> 16
  // @dts-jest:pass:snap
  R.reduce(add, 10)(numbers); //=> 16
})();

// @dts-jest:group reduceBy
(() => {
  interface Student {
    name: string;
    score: number;
  }
  const reduceToNamesBy = R.reduceBy(
    (acc: string[], student: Student) => acc.concat(student.name),
    [],
  );
  const namesByGrade = reduceToNamesBy((student: Student) => {
    const score = student.score;
    return score < 65
      ? 'F'
      : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A';
  });
  const students = [
    { name: 'Lucy', score: 92 },
    { name: 'Drew', score: 85 },
    { name: 'Bart', score: 62 },
  ];
  // @dts-jest:pass:snap
  namesByGrade(students);
  // {
  //   'A': ['Lucy'],
  //   'B': ['Drew']
  //   'F': ['Bart']
  // }
})();

// @dts-jest:group reduced
(() => {
  // @dts-jest:pass:snap
  R.reduced(123);
})();

// @dts-jest:group reduceRight
(() => {
  interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
  }
  type Pair = KeyValuePair<string, number>;
  const pairs: Pair[] = [['a', 1], ['b', 2], ['c', 3]];
  const flattenPairs = (pair: Pair, acc: Pair[]): Pair[] => acc.concat(pair);
  // @dts-jest:pass:snap
  R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
  // @dts-jest:pass:snap
  R.reduceRight(flattenPairs, [])(pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
  // @dts-jest:pass:snap
  R.reduceRight(flattenPairs)([], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
})();

// @dts-jest:group reduceWhile
(() => {
  const isOdd = (_acc: number, x: number) => x % 2 === 1;
  const xs = [1, 3, 5, 60, 777, 800];
  // @dts-jest:pass:snap
  R.reduceWhile(isOdd, R.add, 0, xs); //=> 9

  const ys = [2, 4, 6];
  // @dts-jest:pass:snap
  R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
})();

// @dts-jest:group reject
(() => {
  const isOdd = (n: number) => n % 2 === 1;
  // @dts-jest:pass:snap
  R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
  // @dts-jest:pass:snap
  R.reject(isOdd)([1, 2, 3, 4]); //=> [2, 4]

  const lastTwo = (_val: number, idx: number, list: number[]) =>
    list.length - idx <= 2;
  const rejectIndexed = R.addIndex<boolean, number[], number[]>(
    R.reject<'11', 'list'>(),
  );
  // @dts-jest:pass:snap
  rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
  // @dts-jest:pass:snap
  rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]
})();

// @dts-jest:group remove
(() => {
  // @dts-jest:pass:snap
  R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
  // @dts-jest:pass:snap
  R.remove(2, 3)([1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
  // @dts-jest:pass:snap
  R.remove(2)(3, [1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
})();

// @dts-jest:group repeat
(() => {
  // @dts-jest:pass:snap
  R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
  const obj = {};
  const repeatedObjs = R.repeat(obj, 5);
  // @dts-jest:pass:snap
  repeatedObjs; //=> [{}, {}, {}, {}, {}]
  // @dts-jest:pass:snap
  repeatedObjs[0] === repeatedObjs[1]; //=> true
})();

// @dts-jest:group replace
(() => {
  // @dts-jest:pass:snap
  R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
  // @dts-jest:pass:snap
  R.replace('foo', 'bar')('foo foo foo'); //=> 'bar foo foo'
  // @dts-jest:pass:snap
  R.replace('foo')('bar')('foo foo foo'); //=> 'bar foo foo'
  // @dts-jest:pass:snap
  R.replace(new RegExp('foo'), 'bar', 'foo foo foo'); //=> 'bar foo foo'

  // Use the 'g' (global) flag to replace all occurrences:
  // @dts-jest:pass:snap
  R.replace(new RegExp('foo', 'g'), 'bar', 'foo foo foo'); //=> 'bar bar bar'
  // @dts-jest:pass:snap
  R.replace(new RegExp('foo', 'g'), 'bar')('foo foo foo'); //=> 'bar bar bar'
  // @dts-jest:pass:snap
  R.replace(new RegExp('foo', 'g'))('bar')('foo foo foo'); //=> 'bar bar bar'
})();

// @dts-jest:group reverse
(() => {
  // @dts-jest:pass:snap
  R.reverse([1, 2, 3]); //=> [3, 2, 1]
  // @dts-jest:pass:snap
  R.reverse([1, 2]); //=> [2, 1]
  // @dts-jest:pass:snap
  R.reverse([1]); //=> [1]
  // @dts-jest:pass:snap
  R.reverse([]); //=> []
})();

// @dts-jest:group scan
(() => {
  const numbers = [1, 2, 3, 4];
  // @dts-jest:pass:snap
  R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
  // @dts-jest:pass:snap
  R.scan(R.multiply, 1)(numbers); //=> [1, 1, 2, 6, 24]
  // @dts-jest:pass:snap
  R.scan(R.multiply)(1, numbers); //=> [1, 1, 2, 6, 24]
})();

// @dts-jest:group:skip sequence
(() => {
  // TODO
})();

// @dts-jest:group set
(() => {
  const headLens = R.lensIndex(0);
  // @dts-jest:pass:snap
  R.set(headLens, 'x', ['a', 'b', 'c']); //=> ['x', 'b', 'c']
})();

// @dts-jest:group slice
(() => {
  const xs = R.range(0, 10);
  // @dts-jest:pass:snap
  R.slice(2, 5, xs); //=> [2, 3, 4]
  // @dts-jest:pass:snap
  R.slice(2, 5)(xs); //=> [2, 3, 4]
  // @dts-jest:pass:snap
  R.slice(2)(5, xs); //=> [2, 3, 4]

  const str = 'Hello World';
  // @dts-jest:pass:snap
  R.slice(2, 5, str); //=> 'llo'
  // @dts-jest:pass:snap
  R.slice(2, 5)(str); //=> 'llo'
  // @dts-jest:pass:snap
  R.slice(2)(5, str); //=> 'llo'
})();

// @dts-jest:group sort
(() => {
  const diff = (a: number, b: number) => a - b;
  // @dts-jest:pass:snap
  R.sort(diff, [4, 2, 7, 5]); //=> [2, 4, 5, 7]
  // @dts-jest:pass:snap
  R.sort(diff)([4, 2, 7, 5]); //=> [2, 4, 5, 7]
})();

// @dts-jest:group sortBy
(() => {
  interface Person {
    name: string;
    age: number;
  }
  const sortByNameCaseInsensitive = R.sortBy<Person>(
    R.compose(R.toLower, R.prop('name')),
  );
  const sortByAgeDescending = R.sortBy<Person>(
    R.compose(R.negate, R.prop('age')),
  );
  const sortByAgeAscending = R.sortBy<Person>(R.prop('age'));
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];
  // @dts-jest:pass:snap
  sortByAgeDescending(people); //=> [clara, alice, bob]
  // @dts-jest:pass:snap
  sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
  // @dts-jest:pass:snap
  sortByAgeAscending(people); //=> [bob, alice, clara]
})();

// @dts-jest:group sortWith
(() => {
  interface Person {
    name: string;
    age: number;
  }
  const alice = {
    name: 'alice',
    age: 40,
  };
  const bob = {
    name: 'bob',
    age: 30,
  };
  const clara = {
    name: 'clara',
    age: 40,
  };
  const people = [clara, bob, alice];
  // @dts-jest:pass:snap
  R.sortWith<Person>(
    [R.descend(R.prop('age')), R.ascend(R.prop('name'))],
    people,
  );
  const ageNameSort = R.sortWith<Person>([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name')),
  ]);
  // @dts-jest:pass:snap
  ageNameSort(people); //=> [alice, clara, bob]
})();

// @dts-jest:group split
(() => {
  const pathComponents = R.split('/');

  // @dts-jest:pass:snap
  R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
  // @dts-jest:pass:snap
  R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
})();

// @dts-jest:group splitAt
(() => {
  // @dts-jest:pass:snap
  R.splitAt(1, [1, 2, 3]); //=> [[1], [2, 3]]
  // @dts-jest:pass:snap
  R.splitAt(1)([1, 2, 3]); //=> [[1], [2, 3]]
  // @dts-jest:pass:snap
  R.splitAt(5, 'hello world'); //=> ['hello', ' world']
  // @dts-jest:pass:snap
  R.splitAt(-1, 'foobar'); //=> ['fooba', 'r']
})();

// @dts-jest:group splitEvery
(() => {
  // @dts-jest:pass:snap
  R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
  // @dts-jest:pass:snap
  R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
})();

// @dts-jest:group splitWhen
(() => {
  // @dts-jest:pass:snap
  R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]); //=> [[1], [2, 3, 1, 2, 3]]
  // @dts-jest:pass:snap
  R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]); //=> [[1], [2, 3, 1, 2, 3]]
})();

// @dts-jest:group startsWith
(() => {
  // @dts-jest:pass:snap
  R.startsWith('a', 'abc'); //=> true
  // @dts-jest:pass:snap
  R.startsWith('b', 'abc'); //=> false
  // @dts-jest:pass:snap
  R.startsWith(['a'], ['a', 'b', 'c']); //=> true
  // @dts-jest:pass:snap
  R.startsWith(['b'], ['a', 'b', 'c']); //=> false
})();

// @dts-jest:group subtract
(() => {
  // @dts-jest:pass:snap
  R.subtract(10, 8); //=> 2

  const minus5 = R.flip(R.subtract)(5);
  // @dts-jest:pass:snap
  minus5(17); //=> 12

  const complementaryAngle = R.subtract(90);
  // @dts-jest:pass:snap
  complementaryAngle(30); //=> 60
  // @dts-jest:pass:snap
  complementaryAngle(72); //=> 18
})();

// @dts-jest:group sum
(() => {
  // @dts-jest:pass:snap
  R.sum([2, 4, 6, 8, 100, 1]); //=> 121
})();

// @dts-jest:group symmetricDifference
(() => {
  // @dts-jest:pass:snap
  R.symmetricDifference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2,7,6,5]
  // @dts-jest:pass:snap
  R.symmetricDifference([7, 6, 5, 4, 3])([1, 2, 3, 4]); //=> [7,6,5,1,2]
})();

// @dts-jest:group symmetricDifferenceWith
(() => {
  interface A {
    a: number;
  }
  const eqA = R.eqBy(R.prop('a'));
  const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
  const l2 = [{ a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];
  // @dts-jest:pass:snap
  R.symmetricDifferenceWith<A>(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
  // @dts-jest:pass:snap
  R.symmetricDifferenceWith<A>(eqA)(l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
  // @dts-jest:pass:snap
  R.symmetricDifferenceWith<A>(eqA)(l1)(l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
})();

// @dts-jest:group T
(() => {
  // @dts-jest:pass:snap
  R.T();
})();

// @dts-jest:group tail
(() => {
  // @dts-jest:pass:snap
  R.tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
  // @dts-jest:pass:snap
  R.tail([1, 2, 3]); //=> [2, 3]
})();

// @dts-jest:group take
(() => {
  // @dts-jest:pass:snap
  R.take(3, [1, 2, 3, 4, 5]); //=> [1,2,3]

  const members = [
    'Paul Desmond',
    'Bob Bates',
    'Joe Dodge',
    'Ron Crotty',
    'Lloyd Davis',
    'Joe Morello',
    'Norman Bates',
    'Eugene Wright',
    'Gerry Mulligan',
    'Jack Six',
    'Alan Dawson',
    'Darius Brubeck',
    'Chris Brubeck',
    'Dan Brubeck',
    'Bobby Militello',
    'Michael Moore',
    'Randy Jones',
  ];
  const takeFive = R.take(5);
  // @dts-jest:pass:snap
  takeFive(members); //=> ['Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis']

  // @dts-jest:pass:snap
  R.take(3, 'Example'); //=> 'Exa'

  const takeThree = R.take(3);
  // @dts-jest:pass:snap
  takeThree('Example'); //=> 'Exa'
})();

// @dts-jest:group takeLast
(() => {
  // @dts-jest:pass:snap
  R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
  // @dts-jest:pass:snap
  R.takeLast(2)(['foo', 'bar', 'baz']); //=> ['bar', 'baz']
  // @dts-jest:pass:snap
  R.takeLast(3, 'ramda'); //=> 'mda'
  // @dts-jest:pass:snap
  R.takeLast(3)('ramda'); //=> 'mda'
})();

// @dts-jest:group takeLastWhile
(() => {
  const isNotOne = (x: number) => x !== 1;
  // @dts-jest:pass:snap
  R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
  // @dts-jest:pass:snap
  R.takeLastWhile(isNotOne)([1, 2, 3, 4]); //=> [2, 3, 4]
})();

// @dts-jest:group takeWhile
(() => {
  const isNotFour = (x: number) => !(x === 4);
  // @dts-jest:pass:snap
  R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
  // @dts-jest:pass:snap
  R.takeWhile(isNotFour)([1, 2, 3, 4]); //=> [1, 2, 3]
})();

// @dts-jest:group tap
(() => {
  const sayX = (_x: number) => {
    /* console.log(`x is ${x}` */
  };
  // @dts-jest:pass:snap
  R.tap(sayX, 100); //=> 100
})();

// @dts-jest:group test
(() => {
  // @dts-jest:pass:snap
  R.test(new RegExp('^x'), 'xyz'); //=> true
  // @dts-jest:pass:snap
  R.test(new RegExp('^y'))('xyz'); //=> false
})();

// @dts-jest:group times
(() => {
  const i = (x: number) => x;
  // @dts-jest:pass:snap
  R.times(i, 5);
  // @dts-jest:pass:snap
  R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
  // @dts-jest:pass:snap
  R.times(R.identity)(5); //=> [0, 1, 2, 3, 4]
})();

// @dts-jest:group toLower
(() => {
  // @dts-jest:pass:snap
  R.toLower('XYZ'); //=> 'xyz'
})();

// @dts-jest:group toPairs
(() => {
  // @dts-jest:pass:snap
  R.toPairs({ a: 1, b: 2, c: 3 }); //=> [['a', 1], ['b', 2], ['c', 3]]
})();

// @dts-jest:group toPairsIn
(() => {
  class F {
    public x = 'X';
    public y = 'Y';
  }
  const f = new F();
  // @dts-jest:pass:snap
  R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
  // @dts-jest:pass:snap
  R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
})();

// @dts-jest:group toString
(() => {
  class Point {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    public toString() {
      return `new Point(${this.x}, ${this.y})`;
    }
  }
  // @dts-jest:pass:snap
  R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
  // @dts-jest:pass:snap
  R.toString(42); //=> '42'
  // @dts-jest:pass:snap
  R.toString('abc'); //=> '"abc"'
  // @dts-jest:pass:snap
  R.toString([1, 2, 3]); //=> '[1, 2, 3]'
  // @dts-jest:pass:snap
  R.toString({ foo: 1, bar: 2, baz: 3 }); //=> '{"bar": 2, "baz": 3, "foo": 1}'
  // @dts-jest:pass:snap
  R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
})();

// @dts-jest:group toUpper
(() => {
  // @dts-jest:pass:snap
  R.toUpper('abc'); //=> 'ABC'
})();

// @dts-jest:group transduce
(() => {
  const numbers = [1, 2, 3, 4];
  const transducer = R.compose<number[], number[], number[]>(
    R.map(R.add(1)),
    R.take(2),
  );
  const fn = R.flip<number, number[], number[]>(R.append);
  // @dts-jest:pass:snap
  R.transduce(transducer, fn, [] as number[], numbers); //=> [2, 3] // strictNullChecks: must annotate empty array type
  // @dts-jest:pass:snap
  R.transduce(transducer, fn, [] as number[])(numbers); //=> [2, 3]
  // @dts-jest:pass:snap
  R.transduce(transducer, fn)([] as number[], numbers); //=> [2, 3]
  // @dts-jest:pass:snap
  R.transduce(transducer)(fn, [] as number[], numbers); //=> [2, 3]
})();

// @dts-jest:group transpose
(() => {
  // @dts-jest:pass:snap
  R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]); //=> [[1, 2, 3], ['a', 'b', 'c']]
  // @dts-jest:pass:snap
  R.transpose<string | number>([[1, 2, 3], ['a', 'b', 'c']]); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
  // @dts-jest:pass:snap
  R.transpose([[10, 11], [20], [], [30, 31, 32]]); //=> [[10, 20, 30], [11, 31], [32]]
})();

// @dts-jest:group:skip traverse
(() => {
  // TODO
})();

// @dts-jest:group trim
(() => {
  // @dts-jest:pass:snap
  R.trim('   xyz  '); //=> 'xyz'
  // @dts-jest:pass:snap
  R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
})();

// @dts-jest:group tryCatch
(() => {
  // @dts-jest:pass:snap
  R.tryCatch(R.prop('x'), R.F)({ x: true }); //=> true
  // @dts-jest:pass:snap
  R.tryCatch<any>(R.prop('x'), R.F)(null); //=> false
})();

// @dts-jest:group type
(() => {
  // @dts-jest:pass:snap
  R.type({}); //=> 'Object'
  // @dts-jest:pass:snap
  R.type(1); //=> 'Number'
  // @dts-jest:pass:snap
  R.type(false); //=> 'Boolean'
  // @dts-jest:pass:snap
  R.type('s'); //=> 'String'
  // @dts-jest:pass:snap
  R.type(null); //=> 'Null'
  // @dts-jest:pass:snap
  R.type([]); //=> 'Array'
  // @dts-jest:pass:snap
  R.type(new RegExp('[A-z]')); //=> 'RegExp'
})();

// @dts-jest:group unapply
(() => {
  // @dts-jest:pass:snap
  R.unapply(JSON.stringify);
  // @dts-jest:pass:snap
  R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
})();

// @dts-jest:group unary
(() => {
  const takesOneArg = (a: number) => [a];
  const takesTwoArgs = (a: number, b: number) => [a, b];
  const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];

  // @dts-jest:pass:snap
  R.unary(takesOneArg);
  // @dts-jest:pass:snap
  R.unary(takesTwoArgs);
  // @dts-jest:pass:snap
  R.unary(takesThreeArgs);
})();

// @dts-jest:group uncurryN
(() => {
  const addFour = (a: number) => (b: number) => (c: number) => (d: number) =>
    a + b + c + d;
  const uncurriedAddFour = R.uncurryN<number>(4, addFour);
  // @dts-jest:pass:snap
  uncurriedAddFour(1, 2, 3, 4); //=> 10
})();

// @dts-jest:group unfold
(() => {
  const f = (n: number) => (n > 50 ? false : [-n, n + 10] as [number, number]);
  // @dts-jest:pass:snap
  R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
  const b = R.unfold(f);
  // @dts-jest:pass:snap
  b;
  // @dts-jest:pass:snap
  b(10); //=> [-10, -20, -30, -40, -50]
})();

// @dts-jest:group union
(() => {
  // @dts-jest:pass:snap
  R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
})();

// @dts-jest:group unionWith
(() => {
  interface A {
    a: number;
  }
  const l1 = [{ a: 1 }, { a: 2 }];
  const l2 = [{ a: 1 }, { a: 4 }];
  // @dts-jest:pass:snap
  R.unionWith<A>(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
})();

// @dts-jest:group uniq
(() => {
  // @dts-jest:pass:snap
  R.uniq([1, 1, 2, 1]); //=> [1, 2]
  // @dts-jest:pass:snap
  R.uniq([{}, {}]); //=> [{}]
  // @dts-jest:pass:snap
  R.uniq([1, '1']); //=> [1, '1']
})();

// @dts-jest:group uniqBy
(() => {
  // @dts-jest:pass:snap
  R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
})();

// @dts-jest:group uniqWith
(() => {
  const strEq = (a: any, b: any) => String(a) === String(b);
  // @dts-jest:pass:snap
  R.uniqWith<string | number>(strEq, [1, '1', 2, 1]); //=> [1, 2]
  // @dts-jest:pass:snap
  R.uniqWith<string | number>(strEq)([1, '1', 2, 1]); //=> [1, 2]
  // @dts-jest:pass:snap
  R.uniqWith<{}>(strEq)([{}, {}]); //=> [{}]
  // @dts-jest:pass:snap
  R.uniqWith<string | number>(strEq)([1, '1', 1]); //=> [1]
  // @dts-jest:pass:snap
  R.uniqWith<string | number>(strEq)(['1', 1, 1]); //=> ['1']
})();

// @dts-jest:group unless
(() => {
  // @dts-jest:pass:snap
  R.unless(R.gt(R.__, 100), R.multiply(2))(1); //=> 2

  function isArrayLike(x: any): x is R.List<any> {
    return x && typeof x.length === 'number';
  }

  const coerceArray = R.unless(isArrayLike, R.of);
  // @dts-jest:pass:snap
  coerceArray([1, 2, 3]); //=> [1, 2, 3]
  // @dts-jest:pass:snap
  coerceArray(1); //=> [1]
})();

// @dts-jest:group unnest
(() => {
  // @dts-jest:pass:snap
  R.equals(R.unnest([1, [2], [[3]]]), [1, 2, [3]]); //=> true
  // @dts-jest:pass:snap
  R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]); //=> true
})();

// @dts-jest:group until
(() => {
  // @dts-jest:pass:snap
  R.until(R.gt(R.__, 100), R.multiply(2))(1); //=> 128
})();

// @dts-jest:group update
(() => {
  // @dts-jest:pass:snap
  R.update(1, 11, [0, 1, 2]); //=> [0, 11, 2]
  // @dts-jest:pass:snap
  R.update(1)(11)([0, 1, 2]); //=> [0, 11, 2]
})();

// @dts-jest:group useWith
(() => {
  // @dts-jest:pass:snap
  R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
  // @dts-jest:pass:snap
  R.useWith<'11', '2arity'>()(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
  // @dts-jest:pass:snap
  R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
  // @dts-jest:pass:snap
  R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
})();

// @dts-jest:group values
(() => {
  // @dts-jest:pass:snap
  R.values({ a: 1, b: 2, c: 3 }); //=> [1, 2, 3]
})();

// @dts-jest:group valuesIn
(() => {
  class F {
    public x = 'X';
    public y = 'Y';
  }
  const f = new F();
  // @dts-jest:pass:snap
  R.valuesIn(f); //=> ['X', 'Y']
})();

// @dts-jest:group view
(() => {
  const headLens = R.lensIndex(0);
  // @dts-jest:pass:snap
  R.view(headLens, ['a', 'b', 'c']); //=> 'a'
})();

// @dts-jest:group when
(() => {
  const truncate = R.when<string, string>(
    R.propSatisfies(R.gt(R.__, 10), 'length'),
    R.pipe(R.take(10), R.append('…'), R.join('')),
  );
  // @dts-jest:pass:snap
  truncate('12345'); //=> '12345'
  // @dts-jest:pass:snap
  truncate('0123456789ABC'); //=> '0123456789…'
})();

// @dts-jest:group where
(() => {
  const spec = { x: R.equals(2) };
  // @dts-jest:pass:snap
  R.where(spec, { w: 10, x: 2, y: 300 }); //=> true
  // @dts-jest:pass:snap
  R.where(spec, { x: 1, y: 'moo', z: true }); //=> false
  // @dts-jest:pass:snap
  R.where(spec)({ w: 10, x: 2, y: 300 }); //=> true
  // @dts-jest:pass:snap
  R.where(spec)({ x: 1, y: 'moo', z: true }); //=> false

  const spec2 = { x: (val: number) => val > 10 };
  // @dts-jest:pass:snap
  R.where(spec2, { x: 2, y: 7 }); //=> false
  // @dts-jest:pass:snap
  R.where(spec2, { x: 3, y: 8 }); //=> false

  const xs = [{ x: 2, y: 1 }, { x: 10, y: 2 }, { x: 8, y: 3 }, { x: 10, y: 4 }];
  // @dts-jest:pass:snap
  R.filter(R.where({ x: R.equals(10) }), xs); //=> [{x: 10, y: 2}, {x: 10, y: 4}]
  // @dts-jest:pass:snap
  R.filter(R.where({ x: R.equals(10) }))(xs); //=> [{x: 10, y: 2}, {x: 10, y: 4}]
})();

// @dts-jest:group whereEq
(() => {
  const pred = R.whereEq({ a: 1, b: 2 });
  // @dts-jest:pass:snap
  pred;
  // @dts-jest:pass:snap
  pred({ a: 1 }); //=> false
  // @dts-jest:pass:snap
  pred({ a: 1, b: 2 }); //=> true
  // @dts-jest:pass:snap
  pred({ a: 1, b: 2, c: 3 }); //=> true
  // @dts-jest:pass:snap
  pred({ a: 1, b: 1 }); //=> false
  // @dts-jest:pass:snap
  R.whereEq({ a: 'one' }, { a: 'one' }); //=> true
})();

// @dts-jest:group without
(() => {
  // @dts-jest:pass:snap
  R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
})();

// @dts-jest:group xprod
(() => {
  // @dts-jest:pass:snap
  R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
  // @dts-jest:pass:snap
  R.xprod([1, 2])(['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
})();

// @dts-jest:group zip
(() => {
  // @dts-jest:pass:snap
  R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
  // @dts-jest:pass:snap
  R.zip([1, 2, 3])(['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
})();

// @dts-jest:group zipObj
(() => {
  // @dts-jest:pass:snap
  R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
  // @dts-jest:pass:snap
  R.zipObj(['a', 'b', 'c'])([1, 2, 3]); //=> {a: 1, b: 2, c: 3}
})();

// @dts-jest:group zipWith
(() => {
  const f = (_x: number, _y: string) => {
    /* ... */
  };
  // @dts-jest:pass:snap
  R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
  // @dts-jest:pass:snap
  R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
  // @dts-jest:pass:snap
  R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
})();

// @dts-jest:group issue-273
(() => {
  const mapKeyPairs = R.curry(
    (
      fn: (key: string) => string,
      obj: { [k: string]: any } | { [k: number]: any },
    ) => R.map(R.adjust<0, [string, any]>(fn, 0), R.toPairs(obj)),
  );

  const mapKey = R.pipe(mapKeyPairs, R.fromPairs);

  // @dts-jest:pass:snap
  mapKeyPairs((key: string) => `x${key}`, { a: 1, b: 2, c: 3 }); //=> [['xa', 1], ['xb', 2], ['xc', 3]]
  // @dts-jest:pass:snap
  mapKey((key: string) => `x${key}`, { a: 1, b: 2, c: 3 }); //=> { xa: 1, xb: 2, xc: 3 }
})();
