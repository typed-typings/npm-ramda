// usage: paste this whole file into a console with Ramda available to get generated typings
// import * as R from 'ramda';

let letters = (idx) => (n) => R.range(idx, idx + R.clamp(0, 26, n)).map(i => String.fromCharCode(i));
let upper = letters(65);
let lower = letters(97);
let nm = (cnt, fn) => R.range(0,cnt).map(fn).join(', ');
let bits = (k, i) => {
  let rem = 0;
  return R.range(1, k+1).map(n => {
    let res = i % Math.pow(2, n) - rem;
    rem += res;
    return res ? 1 : 0;
  })
};

function composeDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${i-1-n}: (x: T${i-1-n}) => T${i-n}`);
    let types = nm(i, n => `T${n+1}`);
    return `compose<${vals}, ${types}>(${fns}${i>1?', ':''}fn0: (${pars}) => T1): (${pars}) => T${i};`
}

function composePDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${i-1-n}: (x: T${i-1-n}) => Promise<T${i-n}>|T${i-n}`);
    let types = nm(i, n => `T${n+1}`);
    return `composeP<${vals}, ${types}>(${fns}${i>1?', ':''}fn0: (${pars}) => Promise<T1>): (${pars}) => Promise<T${i}>;`
}

function pipeDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${n+1}: (x: T${n+1}) => T${n+2}`);
    let types = nm(i, n => `T${n+1}`);
    return `pipe<${vals}, ${types}>(fn0: (${pars}) => T1${i>1?', ':''}${fns}): (${pars}) => T${i};`
}

function pipePDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${n+1}: (x: T${n+1}) => Promise<T${n+2}>|T${n+2}`);
    let types = nm(i, n => `T${n+1}`);
    return `pipeP<${vals}, ${types}>(fn0: (${pars}) => Promise<T1>${i>1?', ':''}${fns}): (${pars}) => Promise<T${i}>;`
}

function pipeKDef(i) {
    let fns = nm(i-1, n => `fn${n+1}: (x: T${n+1}) => Chain<T${n+2}>`);
    let types = nm(i, n => `T${n+1}`);
    return `pipeK<V, ${types}>(fn0: (v: Chain<V>) => Chain<T1>${i>1?', ':''}${fns}): (v: V) => Chain<T${i}>;`
}

function composeKDef(i) {
    let fns = nm(i-1, n => `fn${i-1-n}: (x: T${i-1-n}) => Chain<T${i-n}>`);
    let types = nm(i, n => `T${n+1}`);
    return `composeK<V, ${types}>(${fns}${i>1?', ':''}fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T${i}>;`
}

function curryDef(i) {
    let lows = lower(i);
    let pars = nm(i, n => `${lows[n]}: T${n+1}`);
    let types = nm(i, n => `T${n+1}`);
    return `curry<${types}, TResult>(fn: (${pars}) => TResult): CurriedFunction${i}<${types}, TResult>;`
}
R.flatten(R.range(2,10).map(i => curryDef(i))).join('\n')

function curryDefGen(i) {
    // let lows = lower(i);
    let pars = nm(i, n => `v${n}: T${n+1}`); // lows[n]
    let types = nm(i, n => `T${n+1}`);
    let parObj = R.pipe(R.range(0), R.map(n => [`v${n}`, `T${n+1}`]), R.fromPairs)(i); // lows[n]
    let curried = genOption([[], parObj, 'TResult'], 2);
    return `curry<${types}, TResult>(fn: (${pars}) => TResult): {\n${curried}};`
}
R.flatten(R.range(1,10).map(i => curryDefGen(i))).join('\n')

function CurriedFunctionDef(i) {
    let types = nm(i, n => `T${n+1}`);
    let curriedDef = (j) => { // , extraGenerics = false
        let pars = nm(j, n => `v${n+1}: T${n+1}`);
        let tps = nm(i-j, n => `T${j+n+1}`);
        let gens = nm(i, n => `T${n+1}`);
        let curried = (i-j > 1) ? `CurriedFunction${i-j}<${tps}, R>` : (i-j == 0) ? 'R' : `(v${i}: T${i}) => R`;
        // return (extraGenerics ? `<${gens}, R>` : '') + `(${pars}): ${curried};`
        return `(${pars}): ${curried};`
    }
    let nums = R.range(0,i);
    // let defs = [...nums.map(n => curriedDef(n+1)), ...nums.map(n => curriedDef(n+1, true))].join('\n    ');
    let defs = nums.map(n => curriedDef(n+1)).join('\n    ');
    return `interface CurriedFunction${i}<${types}, R> {
    ${defs}
}`;
}
R.flatten(R.range(2,10).map(i => CurriedFunctionDef(i))).join('\n')

function CurriedFnDef(i) {
    let types = nm(i, n => `T${n+1}`);
    let curriedDef = (j) => {
        let pars = nm(j, n => `v${n+1}: T${n+1}`);
        let tps = nm(i-j, n => `T${j+n+1}`);
        let gens = nm(i, n => `T${n+1}`);
        let parObj = R.pipe(R.range(j), R.map(n => [`v${n+1}`, `T${n+1}`]), R.fromPairs)(i);
        let curried = (i-j > 1) ? `{\n${
              genOption([[], parObj, 'R'], 4)
            }  }` :
            (i-j == 0) ? 'R' :
            `(v${i}: T${i}) => R`;
        return `(${pars}): ${curried};`
    }
    let nums = R.range(0,i);
    let defs = nums.map(n => curriedDef(i-n)).join('\n  ');
    return `interface CurriedFn${i}<${types}, R> {\n  ${defs}\n}`;
}
R.flatten(R.range(1,10).map(i => CurriedFnDef(i))).join('\n')

function liftDef(i) {
    let pars = nm(i, n => `v${n+1}: T${n+1}`);
    let listPars = nm(i, n => `v${n+1}: List<T${n+1}>`);
    let types = nm(i, n => `T${n+1}`);
    return `lift<${types}, TResult>(fn: (${pars}) => TResult): (${listPars}) => TResult[];`
}

function liftNDef(i, together = true) {
    let pars = nm(i, n => `v${n+1}: T${n+1}`);
    let listPars = nm(i, n => `v${n+1}: List<T${n+1}>`);
    let types = nm(i, n => `T${n+1}`);
    return together ? `liftN<${types}, TResult>(n: number, fn: (${pars}) => TResult): (${listPars}) => TResult[];` :
                      `liftN(n: number): <${types}, TResult>(fn: (${pars}) => TResult) => (${listPars}) => TResult[];`;
}

function liftNDefSeparate(i) {
    let pars = nm(i, n => `v${n+1}: T${n+1}`);
    let listPars = nm(i, n => `v${n+1}: List<T${n+1}>`);
    let types = nm(i, n => `T${n+1}`);
    return `<${types}, TResult>(fn: (${pars}) => TResult): (${listPars}) => TResult[];`;
}
R.flatten(R.range(2,10).map(i => liftNDefSeparate(i))).join('\n');

function pathDef(i) {
    let obj = R.range(1,i+1).reduce((str, n) => `{[K${i-n+1} in T${i-n+1}]: ${str}}`, 'TResult');
    let types = nm(i, n => `T${n+1}`);
    let typesStr = nm(i, n => `T${n+1} extends string`);
    return `path<${typesStr}, TResult>(path: [${types}], obj: ${obj}): TResult;`
}

function pathDefRecord(i) {
    let obj = R.range(1,i+1).reduce((str, n) => `Record<K${i-n+1},${str}>`, 'TResult');
    let types = nm(i, n => `K${n+1}`);
    let typesStr = nm(i, n => `K${n+1} extends string`);
    return `path<${typesStr}, TResult>(path: [${types}], obj: ${obj}): TResult;`
}
R.flatten(R.range(2,10).map(i => pathDefRecord(i))).join('\n')

function pathDefPoly(i, j) {
    let isArrs = bits(i, j);
    let obj = R.range(1,i+1).reduce((str, n) => isArrs[n-1] ? `${str}[]` : `{[K${i-n+1} in T${i-n+1}]: ${str}}`, 'TResult');
    let types = nm(i, n => `T${n+1}`);
    let typesExt = nm(i, n => `T${n+1} extends ${isArrs[i-n-1] ? 'number' : 'string'}`);
    // let typesExt = R.reverse(R.range(0,i).map(n => `T${n+1} extends ${isArrs[n] ? 'number' : 'string'}`)).join(', ');
    return `path<${typesExt}, TResult>(path: [${types}], obj: ${obj}): TResult;`
}
R.flatten(R.range(1,7).map(i => R.range(0, Math.pow(2, i)).map(j => pathDefPoly(i, j)))).join('\n')

// type Option = [/*generics*/ string[], ParamObj, /*retval*/ string | Option[]];
// type ParamObj = { [name: string]: string };

var whitespace = (indentation = 0) => R.repeat(' ', indentation).join('');
var comment = (s, indent = 0) => `${whitespace(indent)}// ${s}`;

function genCurried(options /*: { [name: string]: Option }*/, indent = 0, name = false, isTop = false) /*: string */ {
  let ws = indent + isTop ? 0 : 2;
  let strs = R.pipe(
    R.toPairs,
    R.chain(([k,o]) => [
      comment(k, ws),
      genOption(o, ws, name),
    ]),
    R.join('\n'),
  )(options);
  return isTop ? strs : `{\n${strs}\n${whitespace(indent)}}`;
}

function genOption(option /*: Option*/, indent = 0, name = false, skipLeft = 0) /*: string */ {
  let ws = R.repeat(' ', indent).join('');
  let [generics, paramObj, returnOrOptions] = option;
  let genericNames = generics.map(R.pipe(R.match(/\w+/), R.head));
  let genericObj = R.fromPairs(R.zip(genericNames, generics));
  let params = R.toPairs(paramObj);
  let rest = R.is(Object)(returnOrOptions) ? genCurried(returnOrOptions, indent) : returnOrOptions;
  let uncurried = R.is(Object)(returnOrOptions) ? R.pipe(
    R.toPairs,
    R.chain(([k, [gens, parObj, ret]]) => [
      comment(k, indent),
      genOption([R.concat(generics, gens), R.merge(paramObj, parObj), ret], indent, name, R.pipe(R.values, R.length)(paramObj)),
    ]), // mergeOptions(v)
    R.values,
    R.when(R.length, R.append(comment('mixed', indent))),
  )(returnOrOptions) : [];
  let [paramInfos, retGenerics] = params.reduce(([paramTypes, generics], pair) => {
    let [k,v] = pair;
    let usedGenerics = R.keys(generics)
        .filter(s => R.test(new RegExp(`\\b${s}\\b`), v));
        // TODO: for `keyOf` also check if the generic has been used in other used generics.
        // potentially need to recheck for more as long as I've added new ones!
    let remainingGenerics = R.omit(usedGenerics, generics);
    return [
      R.concat(paramTypes, [[
        [k,v],
        usedGenerics.map(k => generics[k]),
      ]]),
      remainingGenerics,
    ];
  }, [[], genericObj]);
  let nums = R.range(skipLeft, params.length); // number of params delegated to the right side. for 4: 0, 1, 2, 3.
  let current = nums.map((num) => {
    let numLeft = params.length - num;
    let [left, right] = [R.take(numLeft, paramInfos), R.drop(numLeft, paramInfos)];
    let [leftParams, rightParams] = R.map(R.map(R.prop(0)))([left, right]);
    let [leftGenerics, rightGenerics] = R.map(R.chain(R.prop(1)))([left, right]);
    let unusedGenerics = R.values(retGenerics);
    if (num) {
      rightGenerics = rightGenerics.concat(unusedGenerics);
    } else {
      leftGenerics = leftGenerics.concat(unusedGenerics);
    }
    const genStr = (gens) => gens.length ? `<${gens.join(', ')}>` : '';
    const parStr = R.pipe(R.map(/*([k,v]) => `${k}: ${v}`*/ R.join(': ')), R.join(', '));
    const fnStr = (gens, pars, retVal, useArrow = false, useName = false) =>
        `${useName && name || ''}${genStr(gens)}(${parStr(pars)})${useArrow ? ' =>' : ':'} ${retVal}`;
    let returnVal = !num ? rest :
        num == 1 ? fnStr(rightGenerics, rightParams, rest, true, false) :
        (`{\n${
          genOption([rightGenerics, R.fromPairs(rightParams), rest], indent + 2) //, name
        }${ws}}`);
    return `${ws}${fnStr(leftGenerics, leftParams, returnVal, false, true)};\n`;
  }).join('');
  return uncurried.concat(current).join('\n');
}

const defs = {

pathEq: [
  [],
  {
    p: 'Path',
    v: 'any',
    o: 'any',
  },
  'boolean'
],

add: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'number'
],

adjust: [
  ['T'],
  {
    fn: '(a: T) => T',
    index: 'number',
    list: 'List<T>'
  },
  'T[]'
],

all: [
  ['T'],
  {
    pred: 'Pred<T>',
    list: 'List<T>',
  },
  'boolean'
],

allPass: [
  ['T'],
  {
    pred: 'Pred<T>[]',
  },
  'Pred<T>'
],

always: [
  ['T'],
  {
    val: 'T',
  },
  '() => T'
],

add: {
  base: [
    ['T extends {and?: Function}'],
    {
      fn1: 'T',
      val2: 'boolean+any'
    },
    'boolean'
  ],
  no_generics: [
    [],
    {
      v1: 'any',
      v2: 'any',
    },
    'boolean',
  ]
},

any: [
  ['T'],
  {
    pred: 'Pred<T>',
    list: 'List<T>',
  },
  'boolean',
],

anyPass: [
  ['T'],
  {
    preds: 'Pred<T>[]',
  },
  'Pred<T>',
],

ap: [
  ['T', 'U'],
  {
    fns: '((a: T) => U)[]',
    xs: 'List<T>',
  },
  'U[]',
],

aperture: [
  ['T'],
  {
    n: 'number',
    list: 'List<T>',
  },
  'T[][]'
],

append: [
  ['T', 'U'],
  {
    el: 'U',
    list: 'List<T>',
  },
  '(T & U)[]'
],

apply: {
  // // fails, can't use ... on Args because it only indirectly represents an array...
  // capture: [
  //   ['Args extends any[]', 'TResult'],
  //   {
  //     fn: '(...args: Args) => TResult',
  //     args: 'Args',
  //   },
  //   'TResult',
  // ],
  any: [
    ['TResult'],
    {
      fn: '(...args: any[]) => TResult',
      args: 'any[]',
    },
    'TResult',
  ],
},

applySpec: [
  ['T'],
  {
    obj: 'any',
  },
  'Variadic<T>',
],

ascend: {
  base: [
    ['T', 'U extends Struct<any>', 'K extends keyof U'],
    {
      prop: 'K',
      val: 'T',
      obj: 'U'
    },
    '{[P in K]: T} & U'
  ],
  'any object as long as the type remains unchanged': [
    ['T'],
    {
      prop: 'Prop',
      val: 'any',
      obj: 'T',
    },
    'T',
  ]
},

assoc: {
  'extend object with new property': [
    ['T', 'U extends Struct<any>' ,'K extends string'],
    {
      prop: 'K',
      val: 'T',
      obj: 'U',
    },
    '{[P in K]: T} & U'
  ],
  'any object as long as the type remains unchanged': [
    ['T'],
    {
      prop: 'Prop',
      val: 'any',
      obj: 'T',
    },
    'T'
  ]
},

assocPath: [
  ['T', 'U'],
  {
    path: 'Path',
    val: 'T',
    obj: 'U',
  },
  'U'
],

binary: {
  base: [
    ['T', 'A', 'B'],
    {
      fn: '(a: A, b: T, ...args: any[]) => T'
    },
    '(a: A, b: B) => T'
  ],
  'non generics for return func': [
    ['T'],
    {
      fn: 'Variadic<T>',
    },
    '(a:any, b:any) => T'
  ]
},

bind: [
  ['T'],
  {
    fn: 'Variadic<T>',
    thisObj: '{}',
  },
  'Variadic<T>'
],

both: [
  ['T'],
  {
    pred1: 'Pred<T>',
    pred2: 'Pred<T>',
  },
  'Pred<T>',
],

call: [
  ['T'],
  {
    fn: 'Variadic<T>',
    '...args': 'any[]',
  },
  'T',
],

chain: {
'list version': [
  ['T', 'U'],
  {
    fn: '(n: T) => U[]',
    list: 'List<T>',
  },
  'U[]',
],
'generic chain version': [
  ['T', 'U'],
  {
    fn: '(n: T) => Chain<U>',
    list: 'Chain<T>',
  },
  'Chain<U>',
],
'function argument': [
  ['T', 'U', 'V'],
  {
    fn: '(v: V) => (list: List<T>) => U[]',
    monad: '(list: List<T>) => V'
  },
  '(list: List<T>) => U[]',
]
},

clamp: [
  ['T'],
  {
    min: 'T',
    max: 'T',
    value: 'T',
  },
  'T',
],

clone: {
'Objects': [
  ['T'],
  {
    value: 'T'
  },
  'T'
],
'Arrays': [
  ['T'],
  {
    value: 'List<T>',
  },
  'T[]',
]
},

comparator: [
  ['T'],
  {
    pred: '(a: T, b: T) => boolean'
  },
  '(x: T, y: T) => number'
],

complement: [
  ['T'],
  {
    pred: 'Variadic<boolean>',
  },
  'Variadic<boolean>',
],

compose: R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => composeDef(i,j)))).join('\n'),

composeK: R.flatten(R.range(1,10).map(i => composeKDef(i))).join('\n'),

composeP: R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => composePDef(i,j)))).join('\n'),

concat: [
  ['T extends List<any>'],
  {
    list1: 'T',
    list2: 'T',
  },
  'T',
],

cond: [
  ['T', 'U'],
  {
    fns: '[Pred<T>, (v: T) => U][]',
  },
  '(v: T) => U'
],

construct: [
  [],
  {
    fn: 'Function',
  },
  'Function'
],

constructN: [
  [],
  {
    n: 'number',
    fn: 'Function',
  },
  'Function',
],

contains: {
  base: [
    [],
    {
      a: 'string',
      list: 'string',
    },
    'boolean',
  ],
  generics: [
    ['T', 'R extends List<T>'],
    {
      a: 'T',
      list: 'R',
    },
    'boolean',
  ]
},

converge: [
  ['T'],
  {
    after: 'Variadic<T>',
    fns: 'List<Variadic<any>>',
  },
  'Variadic<T>',
],

countBy: [
  ['T'],
  {
    fn: '(a: T) => Prop',
    list: 'List<T>',
  },
  'Obj<number>',
],

// curry

// curryN

dec: [
  [],
  {
    n: 'number',
  },
  'number'
],

defaultTo: [
  ['T', 'U'],
  {
    a: 'T',
    b: 'U',
  },
  'T|U',
],

descend: [
  ['T', 'V extends Ord'],
  {
    comparator: '(val: T) => V',
    a: 'T',
    b: 'T',
  },
  'number'
],

differenceWith: [
  ['T'],
  {
    pred: '(a: T, b: T) => boolean',
    list1: 'List<T>',
    list2: 'List<T>',
  },
  'T[]'
],

dissoc: {
accurate: [['T'], { prop: 'keyof T', obj: 'T' }, 'T'],
easier: [['T'], { prop: 'Prop', obj: 'Struct<any>' }, 'T'],
},

dissocPath: [
  ['T'],
  {
    path: 'Path',
    obj: 'Struct<any>',
  },
  'T'
],

divide: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'number'
],

drop: [
  ['T extends List<any>'],
  {
    n: 'number',
    xs: 'T'
  },
  'T'
],

dropLast: [
  ['T extends List<any>'],
  {
    n: 'number',
    xs: 'T',
  },
  'T'
],

dropLastWhile: [
  ['T', 'R extends List<T>'],
  {
    pred: 'Pred<T>',
    list: 'R'
  },
  'T[]'
],

dropWhile: [
  ['T', 'R extends List<T>'],
  {
    pred: 'Pred<T>',
    list: 'R'
  },
  'T[]'
],

either: [
  ['T'],
  {
    pred1: 'Pred<T>',
    pred2: 'Pred<T>',
  },
  'Pred<T>'
],

empty: [
  ['T'],
  {
    x: 'T',
  },
  'T'
],

eqBy: [
  ['T'],
  {
    fn: '(a: T) => T',
    a: 'T',
    b: 'T',
  },
  'boolean'
],

eqProps: {
  base: [
    ['T', 'U'],
    {
      prop: 'Prop',
      obj1: 'T',
      obj2: 'U'
    },
    'boolean'
  ],
  'less generics': [
    [],
    {
      prop: 'Prop',
      obj1: 'any',
      obj2: 'any',
    },
    'boolean'
  ]
},

equals: [
  ['T'],
  {
    a: 'T',
    b: 'T',
  },
  'boolean'
],

evolve: {
  base: [
    ['V'],
    {
      transformations: 'NestedObj<(v: any) => any>',
      obj: 'V',
    },
    'V'
  ],
  'no inference': [
    [],
    {
      transformations: 'Obj<Function>',
      obj: 'any',
    },
    'T'
  ]
},

// F

filter: {
  base: [
    ['T'],
    {
      pred: 'Pred<T>',
      list: 'List<T>',
    },
    'T[]'
  ],
  'functor to functor': [
    ['T'],
    {
      pred: 'Pred<T>',
      list: 'Functor<T>',
    },
    'Functor[]'
  ],
  'functor to array': [
    ['T'],
    {
      pred: 'Pred<T>',
      list: 'Functor<T>',
    },
    'T[]'
  ],
  'object': [
    ['T', 'U extends Obj<T>'],
    {
      pred: 'Pred<T>',
      obj: 'U',
    },
    'Partial<U>'
  ]
},

find: [
  ['T'],
  {
    fn: '(a: T) => boolean',
    list: 'List<T>'
  },
  'T'
],

findIndex: [
  ['T'],
  {
    fn: '(a: T) => boolean',
    list: 'List<T>',
  },
  'number'
],

findLast: [
  ['T'],
  {
    fn: '(a: T) => boolean',
    list: 'List<T>',
  },
  'T'
],

findLastIndex: [
  ['T'],
  {
    fn: '(a: T) => boolean',
    list: 'List<T>',
  },
  'number'
],

flatten: [
  ['T'],
  {
    x: 'NestedArray<T>'
  },
  'T[]'
],

flip: {
  base: [
    ['T', 'U', 'TResult'],
    {
      fn: '(arg0: T, arg1: U) => TResult'
    },
    '(arg1:U, arg0?:T) => TResult'
  ],
  'rest arguments': [
    ['T', 'U', 'Rest', 'TResult'],
    {
      fn: '(arg0: T, arg1: U, ...args: Rest[]) => TResult'
    },
    '(arg1: U, arg0?: T, ...args: Rest[]) => TResult'
  ]
},

forEach: [
  ['T'],
  {
    fn: '(x: T) => void',
    list: 'List<T>'
  },
  'T[]'
],

forEachObjIndexed: [
  ['T', 'Inp extends Struct<T>'],
  {
    fn: '(val: T, key: string, obj?: Inp) => void',
    o: 'Inp',
  },
  'Inp'
],

fromPairs: [
  ['V'],
  {
    pairs: 'List<KeyValuePair<Prop, V>>',
  },
  'Obj<V>'
],

groupBy: [
  ['T'],
  {
    fn: '(a: T) => prop',
    list: 'List<T>',
  },
  'Obj<T[]>'
],

groupWith: [
  ['T'],
  {
    fn: '(a: T) => Prop',
    list: 'List<T>',
  },
  'Obj<T[]>'
],

gt: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'boolean'
],

gte: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'boolean'
],

has: [
  [],
  {
    s: 'Prop',
    obj: 'Struct<any>',
  },
  'boolean'
],

hasIn: [
  [],
  {
    s: 'Prop',
    obj: 'Struct<any>',
  },
  'boolean'
],

// head

identical: [
  ['T'],
  {
    a: 'T',
    b: 'T',
  },
  'boolean'
],

// identity

ifElse: [
  ['T', 'U', 'V'],
  {
    fn: 'Pred<T>',
    onTrue: '(v: T) => U',
    onFalse: '(v: T) => V'
  },
  '(v: T) => U|V'
],

// inc

indexBy: [
  ['T'],
  {
    fn: '(a: T) => Prop',
    list: 'List<T>',
  },
  'Obj<T>'
],

indexOf: [
  ['T'],
  {
    target: 'T',
    list: 'List<T>',
  },
  'number'
],

// init

insert: [
  ['T'],
  {
    index: 'number',
    elt: 'T',
    list: 'List<T>',
  },
  'T[]'
],

insertAll: [
  ['T', 'U'],
  {
    index: 'number',
    elts: 'List<T>',
    list: 'List<U>',
  },
  'Array<T|U>'
],

intersection: [
  ['T', 'U'],
  {
    list1: 'List<T>',
    list2: 'List<U>',
  },
  'Array<T|U>'
],

intersectionWith: [
  ['T'],
  {
    pred: '(a: T, b: T) => boolean',
    list1: 'List<T>',
    list2: 'List<T>',
  },
  'T[]'
],

intersperse: [
  ['T'],
  {
    separator: 'T',
    list: 'List<T>',
  },
  'T[]'
],

into: [
  ['T', 'U', 'V extends AccOpts<T, U>'],
  {
    acc: 'V',
    xf: '(list: List<T>) => U',
    list: 'List<T>',
  },
  'U'
],

// invert

invoker: [
  ['T', 'R'],
  {
    len: 'number',
    name: 'Prop',
    obj: 'T',
  },
  'R'
],

is: [
  ['T'],
  {
    ctor: 'Type<T>',
    val: 'any',
  },
  'val is T'
],

// isArrayLike

// isEmpty

// isNaN

// isNil

join: [
  [],
  {
    x: 'Prop',
    xs: 'Array<any>',
  },
  'string'
],

juxt: [
  ['T', 'U'],
  {
    fns: '{(...args: T[]): U}[]'
  },
  '(...args: T[]) => U[]'
],

// keys

// keysIn

// last

lastIndexOf: [
  ['T'],
  {
    target: 'T',
    list: 'List<T>',
  },
  'number'
],

// length

lens: {
  base: [
    ['V', 'U extends Struct<any>'],
    {
      getter: '(s: U) => V',
      setter: '(a: V, s: U) => U',
    },
    'ManualLens<V>'
  ],
  'allows setter to change value type': [
    ['T', 'U', 'V'],
    {
      getter: '(s: T) => U',
      setter: '(a: U, s: T) => V'
    },
    'Lens<T, U>'
  ]
},

// lensIndex

// lensPath

lift: R.flatten(R.range(0,10).map(i => liftDef(i))).join('\n'),

liftN: R.flatten(R.range(0,10).map(i => liftNDef(i, true))).join('\n'), // false

lt: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'boolean'
],

lte: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'boolean'
],

map: {
  base: [['T','U'], { fn: '(value: T) => U' }, {
    array: [[], { list: 'List<T>' }, 'U[]'],
    obj_keyof: [['M extends Obj<T>'], { obj: 'M' }, '{[K in keyof M]: U}'],
    obj_record: [['K extends string'], { obj: 'Record<K, T>' }, 'Record<K, U>'],
    functor: [[], { obj: 'Functor<T>' }, 'Functor<U>'],
    // compose: [['Args extends any[]'], { f1: '(...args: Args) => T' }, '(...args: Args) => U'],
    compose: [[], { f1: '(...args: any[]) => T' }, '(...args: any[]) => U'],
  }],
},

// map: {
//   base: [
//     ['T', 'U'],
//     {
//       fn: '(val: T) => U',
//       list: 'List<T>',
//     },
//     'U[]'
//   ],
//   'object: keyof version': [
//     ['T', 'U', 'M extends Obj<T>'],
//     {
//       fn: '(val: T) => U',
//       obj: 'M',
//     },
//     '{[K in keyof M]: U}'
//   ],
//   'object: Record version': [
//     ['T', 'U', 'K extends string'],
//     {
//       fn: '(val: T) => U',
//       obj: 'Record<K, T>',
//     },
//     'Record<K, U>'
//   ],
//   'functor': [
//     ['T', 'U'],
//     {
//       fn: '(val: T) => U',
//       obj: 'Functor<T>',
//     },
//     'Functor<U>'
//   ]
// },

mapAccum: [
  ['T', 'U', 'TResult'],
  {
    fn: '(acc: U, value: T) => [U, TResult]',
    acc: 'U',
    list: 'List<T>',
  },
  '[U, TResult[]]'
],

mapAccumRight: [
  ['T', 'U', 'TResult'],
  {
    fn: '(value: T, acc: U) => [TResult, U]',
    acc: 'U',
    list: 'List<T>',
  },
  '[TResult[], U]'
],

mapIndexed: [
  ['T', 'U', 'V'],
  {
    fn: '(value: T, acc: U) => [TResult, U]',
    acc: 'U',
    list: 'List<T>',
  },
  '[TResult[], U]',
],

mapObjIndexed: [
  ['T', 'V', 'M extends Obj<T>'],
  {
    fn: '(value: T, key: string, obj?:M) => V',
    obj: 'M'
  },
  '{[K in keyof M]: V}'
],

match: [
  [],
  {
    regexp: 'RegExp',
    str: 'string'
  },
  'string[]'
],

mathMod: [
  [],
  {
    a: 'number',
    b: 'number',
  },
  'number'
],

max: [
  ['T extends Ord'],
  {
    a: 'T',
    b: 'T',
  },
  'T'
],

maxBy: [
  ['T'],
  {
    keyFn: '(a: T) => Ord',
    a: 'T',
    b: 'T',
  },
  'T'
],

// mean

// median

// memoize

merge: [
  ['V1', 'V2', 'T1 extends Struct<V1>', 'T2 extends Struct<V2>'],
  {
    a: 'T1',
    b: 'T2',
  },
  'T1 & T2'
],

mergeAll: [
  ['T'],
  {
    list: 'List<any>',
  },
  'T'
],

mergeWith: [
  ['U', 'V'],
  {
    fn: '(x: any, z: any) => any',
    a: 'U',
    b: 'V',
  },
  'U & V'
],

mergeWithKey: {
  'mergeWithKey': [
      ['U', 'V'],
      {
          fn: '(str: string, x: any, z: any) => any',
          a: 'U',
          b: 'V',
      },
      'U & V'
  ]
},

minBy: [
  ['T'],
  {
    keyFn: '(a: T) => Ord',
    a: 'T',
    b: 'T'
  },
  'T'
],

over: {
'Functor version': [
  ['V', 'T extends Functor<V>'],
  {
    lens: 'Lens<T, V>|ManualLens<V>|UnknownLens',
    fn: '(v: V) => V',
    value: 'T',
  },
  'T'
],
'Functor version applied to array': [
  ['V', 'T extends List<V>'],
  {
    lens: 'Lens<T, V>|ManualLens<V>|UnknownLens',
    fn: '(v: V) => V',
    value: 'T',
  },
  'V[]'
],
'unbound value': [
  ['T', 'V'],
  {
    lens: 'Lens<T, V>|ManualLens<V>|UnknownLens',
    fn: '(v: V) => V',
    value: 'T',
  },
  'T'
]
},

path: R.flatten(R.range(2,10).map(i => pathDef(i))).join('\n'),

pathOr: [
  ['T'],
  {
    d: 'T',
    p: 'Path',
    obj: 'Struct<any>',
  },
  'T|any'
],

pathSatisfies: [
  ['T'],
  {
    fn: 'Pred<T>',
    p: 'Path',
    obj: 'any',
  },
  'boolean'
],

pipe: R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => pipeDef(i,j)))).join('\n'),

pipeK: R.flatten(R.range(1,10).map(i => pipeKDef(i))).join('\n'),

pipeP: R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => pipePDef(i,j)))).join('\n'),

propEq: [
  ['T extends Struct<any>'],
  {
    name: 'Prop',
    val: 'any',
    obj: 'T',
  },
  'boolean'
],

propOr: [['T'], { val: 'T' }, {
  record: [['K extends string', 'V', 'U extends Record<K,V>'], { p: 'K', obj: 'U' }, 'V|T'],
  keyof: [['U', 'K extends keyof U'], { p: 'K', obj: 'U' }, 'U[K]|T'],
  same: [[], { p: 'Prop', obj: 'Struct<any>' }, 'T'],
  unbound: [['U', 'V'], { p: 'Prop', obj: 'U' }, 'V'],
}],

propStatisfies: {
'Record (curry-friendly)': [
  ['V', 'K extends string', 'U extends Record<K, V>'],
  {
    pred: 'Pred<V>',
    name: 'K',
    obj: 'U',
  },
  'boolean'
],
'keyof, info too late on currying': [
  ['T', 'U'],
  {
    pred: 'Pred<T>',
    name: 'Prop',
    obj: 'U'
  },
  'boolean'
]
},

reduce: [
  ['T', 'TResult', 'R extends List<T>'],
  {
    fn: '(acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced',
    acc: 'TResult',
    list: 'R',
  },
  'TResult'
],

reduceBy: [
  ['T', 'TResult', 'R extends List<T>'],
  {
    valueFn: '(acc: TResult, elem: T, idx: number, list: R) => TResult',
    acc: 'TResult|any',
    keyFn: '(elem: T) => string',
    list: 'R',
  },
  'TResult'
],

reduceRight: [
  ['T', 'TResult'],
  {
    fn: '(elem: T, acc: TResult) => TResult|Reduced',
    acc: 'TResult|any',
    list: 'List<T>',
  },
  'TResult'
],

reduceWhile: [
  ['T', 'TResult'],
  {
    pred: '(acc: TResult, elem: T) => boolean',
    fn: '(acc: TResult, elem: T) => TResult|Reduced',
    acc: 'TResult',
    list: 'List<T>',
  },
  'TResult'
],

remove: [
  ['T'],
  {
    start: 'number',
    count: 'number',
    list: 'List<T>',
  },
  'T[]'
],

replace: [
  [],
  {
    pattern: 'RegExp|Prop',
    replacement: 'Prop',
    str: 'string',
  },
  'string'
],

scan: [
  ['T', 'TResult'],
  {
    fn: '(acc: TResult, elem: T) => TResult|Reduced',
    acc: 'TResult',
    list: 'List<T>'
  },
  'TResult[]'
],

set: {
  base: [
    ['T', 'U'],
    {
      lens: 'Lens<T, U>',
      a: 'U',
      obj: 'T'
    },
    'T'
  ],
  unknown: [
    ['T'],
    {
      lens: 'UnknownLens',
      a: 'any',
      obj: 'T',
    },
    'T'
  ]
},

slice: [
  ['T extends List<any>'],
  {
    a: 'number',
    b: 'number',
    list: 'T',
  },
  'T'
],

symmetricDifferenceWith: [
  ['T'],
  {
    pred: '(a: T, b: T) => boolean',
    list1: 'List<T>',
    list2: 'List<T>',
  },
  'T[]'
],

transduce: [
  ['T', 'U'],
  {
    xf: '(arg: List<T>) => List<T>',
    fn: '(acc: List<U>, val:U) => List<U>',
    acc: 'List<T>',
    list: 'List<T>'
  },
  'U'
],

traverse: {
  base: [
    ['T', 'U'],
    {
      ap: '(v: T) => Applicative<T>',
      fn: '(v: T) => Applicative<U>',
      traversable: 'List<T>',
    },
    'Applicative<Array<U>>'
  ],
  'general ADT case': [
    ['T', 'U'],
    {
      ap: '(v: T) => Applicative<T>',
      fn: '(v: T) => Applicative<U>',
      traversable: 'List<T>',
    },
    'Applicative<Traversable<U>>'
  ]
},

unionWith: [
  ['T'],
  {
    pred: '(a: T, b: T) => boolean',
    list1: 'List<T>',
    list2: 'List<T>',
  },
  'T[]'
],

until: [
  ['T', 'U'],
  {
    pred: 'Pred<T>',
    fn: '(val: T) => U',
    init: 'U',
  },
  'U'
],

update: [
  ['T'],
  {
    index: 'number',
    value: 'T',
    list: 'List<T>'
  },
  'T[]'
],

when: [
  ['T', 'U'],
  {
    pred: 'Pred<T>',
    whenTrueFn: '(a: T) => U',
    obj: 'T',
  },
  'U'
],

};

let defStrs = R.mapObjIndexed((v, k) =>
  !R.is(Object, v) ? v : // string
    Array.isArray(v) ?
      genOption(v, 0, k) : // array
      genCurried(v, 0, k, true) // object
)(defs);

R.pipe(R.values, R.join('\n\n'))(defStrs);
