import * as R from 'ramda';

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

function sanctPipeDef(i, j) {
    let [lows, ups] = [lower, upper].map(f => f(i));
    let zipped = R.zip(lows, ups);
    let pars = nm(j, n => `a${n}: A${n}`);
    let types = nm(j, n => `A${n}`);
    return `export function pipe<${types}${i>1?', ':''}${ups.splice(1).join(', ')}, Z>(functions: [(${pars})=>${zipped.splice(1).map(([low, up]) => `${up}, (${low}: ${up})=>`).join('')}Z]): CurriedFunction${j}<${types}, Z>;`
}
R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => sanctPipeDef(i,j)))).join('\r\n')

function composeDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${i-1-n}: (x: T${i-1-n}) => T${i-n}`);
    let types = nm(i, n => `T${n+1}`);
    return `compose<${vals}, ${types}>(${fns}${i>1?', ':''}fn0: (${pars}) => T1): (${pars}) => T${i};`
}
R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => composeDef(i,j)))).join('\r\n')

function composePDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${i-1-n}: (x: T${i-1-n}) => Promise<T${i-n}>|T${i-n}`);
    let types = nm(i, n => `T${n+1}`);
    return `composeP<${vals}, ${types}>(${fns}${i>1?', ':''}fn0: (${pars}) => Promise<T1>): (${pars}) => Promise<T${i}>;`
}
R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => composePDef(i,j)))).join('\r\n')

function pipeDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${n+1}: (x: T${n+1}) => T${n+2}`);
    let types = nm(i, n => `T${n+1}`);
    return `pipe<${vals}, ${types}>(fn0: (${pars}) => T1${i>1?', ':''}${fns}): (${pars}) => T${i};`
}
R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => pipeDef(i,j)))).join('\r\n')

function pipePDef(i, j) {
    let vals = nm(j, n => `V${n}`);
    let pars = nm(j, n => `x${n}: V${n}`);
    let fns = nm(i-1, n => `fn${n+1}: (x: T${n+1}) => Promise<T${n+2}>|T${n+2}`);
    let types = nm(i, n => `T${n+1}`);
    return `pipeP<${vals}, ${types}>(fn0: (${pars}) => Promise<T1>${i>1?', ':''}${fns}): (${pars}) => Promise<T${i}>;`
}
R.flatten(R.range(1,10).map(i => R.range(1,5).map(j => pipePDef(i,j)))).join('\r\n')

function pipeKDef(i) {
    let fns = nm(i-1, n => `fn${n+1}: (x: T${n+1}) => Chain<T${n+2}>`);
    let types = nm(i, n => `T${n+1}`);
    return `pipeK<V, ${types}>(fn0: (v: Chain<V>) => Chain<T1>${i>1?', ':''}${fns}): (v: V) => Chain<T${i}>;`
}
R.flatten(R.range(1,10).map(i => pipeKDef(i))).join('\r\n')

function composeKDef(i) {
    let fns = nm(i-1, n => `fn${i-1-n}: (x: T${i-1-n}) => Chain<T${i-n}>`);
    let types = nm(i, n => `T${n+1}`);
    return `composeK<V, ${types}>(${fns}${i>1?', ':''}fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T${i}>;`
}
R.flatten(R.range(1,10).map(i => composeKDef(i))).join('\r\n')

function curryDef(i) {
    let lows = lower(i);
    let pars = nm(i, n => `${lows[n]}: T${n+1}`);
    let types = nm(i, n => `T${n+1}`);
    return `curry<${types}, TResult>(fn: (${pars}) => TResult): CurriedFunction${i}<${types}, TResult>;`
}
R.flatten(R.range(2,10).map(i => curryDef(i))).join('\r\n')

function CurriedFunctionDef(i) {
    let types = nm(i, n => `T${n+1}`);
    let curriedDef = (j) => { // , extraGenerics = false
        let pars = nm(j, n => `t${n+1}: T${n+1}`);
        let tps = nm(i-j, n => `T${j+n+1}`);
        let gens = nm(i, n => `T${n+1}`);
        let curried = (i-j > 1) ? `CurriedFunction${i-j}<${tps}, R>` : (i-j == 0) ? 'R' : `(t${i}: T${i}) => R`;
        // return (extraGenerics ? `<${gens}, R>` : '') + `(${pars}): ${curried};`
        return `(${pars}): ${curried};`
    }
    let nums = R.range(0,i);
    // let defs = [...nums.map(n => curriedDef(n+1)), ...nums.map(n => curriedDef(n+1, true))].join('\r\n    ');
    let defs = nums.map(n => curriedDef(n+1)).join('\r\n    ');
    return `interface CurriedFunction${i}<${types}, R> {
    ${defs}
}`;
}
R.flatten(R.range(2,10).map(i => CurriedFunctionDef(i))).join('\r\n')

function liftDef(i) {
    let pars = nm(i, n => `v${n+1}: T${n+1}`);
    let listPars = nm(i, n => `v${n+1}: List<T${n+1}>`);
    let types = nm(i, n => `T${n+1}`);
    return `lift<${types}, TResult>(fn: (${pars}) => TResult): (${listPars}) => TResult[];`
}
R.flatten(R.range(0,10).map(i => liftDef(i))).join('\r\n')

function liftNDef(i, together = true) {
    let pars = nm(i, n => `v${n+1}: T${n+1}`);
    let listPars = nm(i, n => `v${n+1}: List<T${n+1}>`);
    let types = nm(i, n => `T${n+1}`);
    return together ? `liftN<${types}, TResult>(n: number, fn: (${pars}) => TResult): (${listPars}) => TResult[];` :
                      `liftN(n: number): <${types}, TResult>(fn: (${pars}) => TResult) => (${listPars}) => TResult[];`;
}
R.flatten(R.range(0,10).map(i => liftNDef(i, true))).join('\r\n');
// R.flatten(R.range(0,10).map(i => liftNDef(i, false))).join('\r\n');

function liftNDefSeparate(i) {
    let pars = nm(i, n => `v${n+1}: T${n+1}`);
    let listPars = nm(i, n => `v${n+1}: List<T${n+1}>`);
    let types = nm(i, n => `T${n+1}`);
    return `<${types}, TResult>(fn: (${pars}) => TResult): (${listPars}) => TResult[];`;
}
R.flatten(R.range(2,10).map(i => liftNDefSeparate(i))).join('\r\n');

function pathDef(i) {
    let obj = R.range(1,i+1).reduce((str, n) => `{[K${i-n+1} in T${i-n+1}]: ${str}}`, 'TResult');
    let types = nm(i, n => `T${n+1}`);
    let typesStr = nm(i, n => `T${n+1} extends string`);
    return `path<${typesStr}, TResult>(path: [${types}], obj: ${obj}): TResult;`
}
R.flatten(R.range(2,10).map(i => pathDef(i))).join('\r\n')

function pathDefRecord(i) {
    let obj = R.range(1,i+1).reduce((str, n) => `Record<K${i-n+1},${str}>`, 'TResult');
    let types = nm(i, n => `K${n+1}`);
    let typesStr = nm(i, n => `K${n+1} extends string`);
    return `path<${typesStr}, TResult>(path: [${types}], obj: ${obj}): TResult;`
}
R.flatten(R.range(2,10).map(i => pathDefRecord(i))).join('\r\n')

function pathDefPoly(i, j) {
    let isArrs = bits(i, j);
    // console.log('pathDefPoly', i, j, isArrs);
    let obj = R.range(1,i+1).reduce((str, n) => isArrs[n-1] ? `${str}[]` : `{[K${i-n+1} in T${i-n+1}]: ${str}}`, 'TResult');
    let types = nm(i, n => `T${n+1}`);
    let typesExt = nm(i, n => `T${n+1} extends ${isArrs[i-n-1] ? 'number' : 'string'}`);
    // let typesExt = R.reverse(R.range(0,i).map(n => `T${n+1} extends ${isArrs[n] ? 'number' : 'string'}`)).join(', ');
    return `path<${typesExt}, TResult>(path: [${types}], obj: ${obj}): TResult;`
}
R.flatten(R.range(1,7).map(i => R.range(0, Math.pow(2, i)).map(j => pathDefPoly(i, j)))).join('\r\n')

function CurriedCustomFunctionDef(i) {
  let types = nm(i, n => `T${n+1}`);
  let curriedDef = (j) => { // , extraGenerics = false
      let pars = nm(j, n => `t${n+1}: T${n+1}`);
      let tps = nm(i-j, n => `T${j+n+1}`);
      let gens = nm(i, n => `T${n+1}`);
      let curried = (i-j > 1) ? `CurriedFunction${i-j}<${tps}, R>` : (i-j == 0) ? 'R' : `(t${i}: T${i}) => R`;
      // return (extraGenerics ? `<${gens}, R>` : '') + `(${pars}): ${curried};`
      return `(${pars}): ${curried};`
  }
  let nums = R.range(0,i);
  // let defs = [...nums.map(n => curriedDef(n+1)), ...nums.map(n => curriedDef(n+1, true))].join('\r\n    ');
  let defs = nums.map(n => curriedDef(n+1)).join('\r\n    ');
  return `interface CurriedFunction${i}<${types}, R> {
  ${defs}
  }`;
}

// type Option = [/*generics*/ string[], ParamObj, /*retval*/ string | Option[]];
// type ParamObj = { [name: string]: string };

var whitespace = (indentation) => R.repeat(' ', indentation).join('');

function genCurried(options /*: { [name: Option }*/, indent = 0) /*: string */ {
  return `{\r\n${
    R.toPairs(options).map(([k,o]) => `${whitespace(indent+2)}// ${k}\r\n` + genOption(o, indent+2)).join('\r\n')
  }\r\n${whitespace(indent)}}`;
}

function genOption(option /*: Option*/, indent = 0) /*: string */ {
  let ws = R.repeat(' ', indent).join('');
  let [generics, paramObj, returnOrOptions] = option;
  let genericNames = generics.map(R.pipe(R.match(/\w+/), R.head));
  let genericObj = R.fromPairs(R.zip(genericNames, generics));
  let params = R.toPairs(paramObj);
  let rest = R.is(Object)(returnOrOptions) ? genCurried(returnOrOptions, indent + 2) : returnOrOptions;
  let [paramInfos, retGenerics] = params.reduce(([paramTypes, generics], pair) => {
    let [k,v] = pair;
    let usedGenerics = R.keys(generics)
        .filter((name) => R.test(new RegExp(`\\b${name}\\b`), v));
    let remainingGenerics = R.omit(usedGenerics, generics);
    return [
      R.concat(paramTypes, [[
        [k,v],
        usedGenerics.map(k => generics[k]),
      ]]),
      remainingGenerics,
    ];
  }, [[], genericObj]);
  let nums = R.range(0, params.length); // number of params delegated to the right side. for 4: 0, 1, 2, 3.
  return nums.map((num) => {
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
    let genericStr = leftGenerics.length ? `<${leftGenerics.join(', ')}>` : '';
    let parStr = leftParams.map(/*([k,v]) => `${k}: ${v}`*/ R.join(': ')).join(', ');
    let returnVal = !num ? ` ${rest}` : (`{\r\n${
      genOption([rightGenerics, R.fromPairs(rightParams), rest], indent + 2)
    }${ws}}`);
    return `${ws}${genericStr}(${parStr}):${returnVal};\r\n`;
  }).join('');
}

// propOr
genCurried({
  base: [['T'], { val: 'T' }, {
    record: [['K extends string', 'V', 'U extends Record<K,V>'], { p: 'K', obj: 'U' }, 'V|T'],
    keyof: [['U', 'K extends keyof U'], { p: 'K', obj: 'U' }, 'U[K]|T'],
    same: [[], { p: 'Prop', obj: 'Struct<any>' }, 'T'],
    unbound: [['U', 'V'], { p: 'Prop', obj: 'U' }, 'V'],
  }],
})

// map
genCurried({
  base: [['T','U'], { fn: '(value: T) => U' }, {
    array: [[], { list: 'List<T>' }, 'U[]'],
    obj_keyof: [['M extends Obj<T>'], { obj: 'M' }, '{[K in keyof M]: U}'],
    obj_keyof: [['K extends string'], { obj: 'Record<K, T>' }, 'Record<K, U>'],
    functor: [[], { obj: 'Functor<T>' }, 'Functor<U>'],
  }],
})

// dissoc
genCurried({
  accurate: [['T'], { prop: 'keyof T', obj: 'T' }, 'T'],
  easier: [['T'], { prop: 'Prop', obj: 'Struct<any>' }, 'T'],
})

// pathEq
genCurried({
  base: [
    [],
    {
      p: 'string|number[]',
      v: 'any',
      o: 'any',
    },
    'boolean'
  ]
});

// add
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'number'
  ]
});

// adjust
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => T',
      index: 'number',
      list: 'List<T>'
    },
    'T[]'
  ]
});

// all
genCurried({
  base: [
    ['T'],
    {
      pred: 'Pred<T>',
      list: 'List<T>',
    },
    'boolean'
  ]
});

// allPass
genCurried({
  base: [
    ['T'],
    {
      pred: 'Pred<T>[]',
    },
    'Pred<T>'
  ]
});

// always
genCurried({
  base: [
    ['T'],
    {
      val: 'T',
    },
    '() => T'
  ]
});

// add
genCurried({
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
});

// any
genCurried({
  base: [
    ['T'],
    {
      pred: 'Pred<T>',
      list: 'List<T>',
    },
    'boolean',
  ]
});

// anyPass
genCurried({
  base: [
    ['T'],
    {
      preds: 'Pred<T>[]',
    },
    'Pred<T>',
  ]
});

// ap
genCurried({
  base: [
    ['T', 'U'],
    {
      fns: '((a: T) => U)[]',
      xs: 'List<T>',
    },
    'U[]',
  ]
});

// aperture
genCurried({
  base: [
    ['T'],
    {
      n: 'number',
      list: 'List<T>',
    },
    'T[][]'
  ]
});

// append
genCurried({
  base: [
    ['T', 'U'],
    {
      el: 'U',
      list: 'List<T>',
    },
    '(T & U)[]'
  ]
});

// apply
genCurried({
  base: [
    ['T', 'U', 'TResult'],
    {
      fn: '(arg0: T, ...args: T[]) => TResult',
      args: 'List<U>',
    },
    'TResult',
  ]
});

// applySpec
genCurried({
  base: [
    ['T'],
    {
      obj: 'any',
    },
    'Variadic<T>',
  ]
});

// ascend
genCurried({
  base: [
    ['T', 'U extends Struct<any>', 'K extends keyof U'],
    {
      prop: 'K',
      val: 'T',
      obj: 'U'
    },
    '{[P in K]: T} & U'
  ],
  'any object as long as the type remains unchanged': {
    ['T'],
    {
      prop: 'Prop',
      val: 'any',
      obj: 'T',
    },
    'T',
  }
});

// assocPath
genCurried({
  base: [
    ['T', 'U'],
    {
      path: 'Path',
      val: 'T',
      obj: 'U',
    },
    'U'
  ]
});

// binary
genCurried({
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
});

// bind
genCurried({
  base: [
    ['T'],
    {
      fn: 'Variadic<T>',
      thisObj: '{}',
    },
    'Variadic<T>'
  ]
});

// both
genCurried({
  base: [
    ['T'],
    {
      pred1: 'Pred<T>',
      pred2: 'Pred<T>',
    },
    'Pred<T>',
  ]
});

// call
genCurried({
  base: [
    ['T'],
    {
      fn: 'Variadic<T>',
      '...args': 'any[]',
    },
    'T',
  ]
});

// chain
genCurried({
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
      fn: '(v: V) => (list: Chain<T>) => Chain<U>',
      monad: '(chain: Chain<T>) => V'
    },
    '(list: Chain<T>) => Chain<U>',
  ]
});

// clamp
genCurried({
  base: [
    ['T'],
    {
      min: 'T',
      max: 'T',
      value: 'T',
    },
    'T',
  ]
});

// clone
genCurried({
  'Objects': [
    ['T'],
    {
      value: 'T'
    },
    'T'
  ],
  'Arrays': {
    ['T'],
    {
      value: 'List<T>',
    },
    'T[]',
  }
});

// comparator
genCurried({
  base: [
    ['T'],
    {
      pred: '(a: T, b: T) => boolean'
    },
    '(x: T, y: T) => number'
  ]
});

// complement
genCurried({
  base: [
    ['T'],
    {
      pred: 'Variadic<boolean>',
    },
    'Variadic<boolean>',
  ]
});

// compose

// composeK

// composeP

// concat
genCurried({
  base: [
    ['T extends List<any>'],
    {
      list1: 'T',
      list2: 'T',
    },
    'T',
  ]
});

// cond
genCurried({
  base: [
    ['T', 'U'],
    {
      fns: '[Pred<T>, (v: T) => U][]',
    },
    '(v: T) => U'
  ]
});

// construct
genCurried({
  base: [
    [],
    {
      fn: 'Function',
    },
    'Function'
  ]
});

// constructN
genCurried({
  base: [
    [],
    {
      n: 'number',
      fn: 'Function',
    },
    'Function',
  ]
});

// contains
genCurried({
  base: [
    [],
    {
      a: 'string',
      list: 'string',
    },
    'boolean',
  ]
  generics: [
    ['T', 'R extends List<T>'],
    {
      a: 'T',
      list: 'R',
    },
    'boolean',
  ]
});

// converge
genCurried({
  base: [
    ['T'],
    {
      after: 'Variadic<T>',
      fns: 'List<Variadic<any>>',
    },
    'Variadic<T>',
  ]
});

// countBy
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => Prop',
      list: 'List<T>',
    },
    'Obj<number>',
  ]
});

// curry

// curryN

// dec
genCurried({
  base: [
    [],
    {
      n: 'number',
    },
    'number'
  ]
});

// defaultTo
genCurried({
  base: [
    ['T', 'U'],
    {
      a: 'T',
      b: 'U',
    },
    'T|U',
  ]
});

// descend
genCurried({
  base: [
    ['T', 'V extends Ord'],
    {
      comparator: '(val: T) => V',
      a: 'T',
      b: 'T',
    },
    'number'
  ]
});

// differenceWith
genCurried({
  base: [
    ['T'],
    {
      pred: '(a: T, b: T) => boolean',
      list1: 'List<T>',
      list2: 'List<T>',
    },
    'T[]'
  ]
});

// dissoc
genCurried({
  base: [
    ['T'],
    {
      prop: 'keyof T',
      obj: 'T'
    },
    'T'
  ]
  'struct': [
    ['T'],
    {
      prop: 'Prop',
      obj: 'Struct<any>'
    },
    'T'
  ]
});

// dissocPath
genCurried({
  base: [
    ['T'],
    {
      path: 'Path',
      obj: 'Struct<any>',
    },
    'T'
  ]
});

// divide
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'number'
  ]
});

// drop
genCurried({
  base: [
    ['T extends List<any>'],
    {
      n: 'number',
      xs: 'T'
    },
    'T'
  ]
});

// dropLast
genCurried({
  base: [
    ['T extends List<any>'],
    {
      n: 'number',
      xs: 'T',
    },
    'T'
  ]
});

// dropLastWhile
genCurried({
  base: [
    ['T', 'R extends List<T>'],
    {
      pred: 'Pred<T>',
      list: 'R'
    },
    'T[]'
  ]
});

// dropWhile
genCurried({
  base: [
    ['T', 'R extends List<T>'],
    {
      pred: 'Pred<T>',
      list: 'R'
    },
    'T[]'
  ]
});

// either
genCurried({
  base: [
    ['T'],
    {
      pred1: 'Pred<T>'
      pred2: 'Pred<T>',
    },
    'Pred<T>'
  ]
});

// empty
genCurried({
  base: [
    ['T'],
    {
      x: 'T',
    },
    'T'
  ]
});

// eqBy
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => T',
      a: 'T',
      b: 'T',
    },
    'boolean'
  ]
});

// eqProps
genCurried({
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
});

// equals
genCurried({
  base: [
    ['T'],
    {
      a: 'T',
      b: 'T',
    },
    'boolean'
  ]
});

// evolve
genCurried({
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
});

// F

// filter
genCurried({
  base: [
    ['T'],
    {
      pred: 'Pred<T>',
      list: 'List<T>',
    },
    'T[]'
  ]
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
});

// find
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => boolean',
      list: 'List<T>'
    },
    'T'
  ]
});

// findIndex
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => boolean',
      list: 'List<T>',
    },
    'number'
  ]
});

// findLast
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => boolean',
      list: 'List<T>',
    },
    'T'
  ]
});

// findLastIndex
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => boolean',
      list: 'List<T>',
    },
    'number'
  ]
});

// flatten
genCurried({
  base: [
    ['T'],
    {
      x: 'NestedArray<T>'
    },
    'T[]'
  ]
});

// flip
genCurried({
  base: [
    ['T', 'U', 'TResult'],
    {
      fn: '(arg0: T, arg1: U) => TResult'
    },
    '(arg1:U, arg0?:T) => TResult'
  ]
  'rest arguments': [
    ['T', 'U', 'Rest', 'TResult'],
    {
      fn: '(arg0: T, arg1: U, ...args: Rest[]) => TResult'
    },
    '(arg1: U, arg0?: T, ...args: Rest[]) => TResult'
  ]
});

// forEach
genCurried({
  base: [
    ['T'],
    {
      fn: '(x: T) => void',
      list: 'List<T>'
    },
    'T[]'
  ]
});

// forEachObjIndexed
genCurried({
  base: [
    ['T', 'Inp extends Struct<T>'],
    {
      fn: '(val: T, key: string, obj?: Inp) => void',
      o: 'Inp',
    },
    'Inp'
  ]
});

// fromPairs
genCurried({
  base: [
    ['V'],
    {
      pairs: 'List<KeyValuePair<Prop, V>>',
    },
    'Obj<V>'
  ]
});

// groupBy
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => prop',
      list: 'List<T>',
    },
    'Obj<T[]>'
  ]
});

// groupWith
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => Prop',
      list: 'List<T>',
    },
    'Obj<T[]>'
  ]
});

// gt
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'boolean'
  ]
});

// gte
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'boolean'
  ]
});

// has
genCurried({
  base: [
    [],
    {
      s: 'Prop',
      obj: 'Struct<any>',
    },
    'boolean'
  ]
});

// hasIn
genCurried({
  base: [
    [],
    {
      s: 'Prop',
      obj: 'Struct<any>',
    },
    'boolean'
  ]
});

// head

// identical
genCurried({
  base: [
    ['T'],
    {
      a: 'T',
      b: 'T',
    },
    'boolean'
  ]
});

// identity

// ifElse
genCurried({
  base: [
    ['T', 'U', 'V'],
    {
      fn: 'Pred<T>',
      onTrue: '(v: T) => U',
      onFalse: '(v: T) => V'
    },
    '(v: T) => U|V'
  ]
});

// inc

// indexBy
genCurried({
  base: [
    ['T'],
    {
      fn: '(a: T) => Prop',
      list: 'List<T>',
    },
    'Obj<T>'
  ]
});

// indexOf
genCurried({
  base: [
    ['T'],
    {
      target: 'T',
      list: 'List<T>',
    },
    'number'
  ]
});

// init

// insert
genCurried({
  base: [
    ['T'],
    {
      index: 'number',
      elt: 'T',
      list: 'List<T>',
    },
    'T[]'
  ]
});

// insertAll
genCurried({
  base: [
    ['T', 'U'],
    {
      index: 'number',
      elts: 'List<T>',
      list: 'List<U>',
    },
    'Array<T|U>'
  ]
});

// intersection
genCurried({
  base: [
    ['T', 'U'],
    {
      list1: 'List<T>',
      list2: 'List<U>',
    },
    'Array<T|U>'
  ]
});

// intersectionWith
genCurried({
  base: [
    ['T'],
    {
      pred: '(a: T, b: T) => boolean',
      list1: 'List<T>',
      list2: 'List<T>',
    },
    'T[]'
  ]
});

// intersperse
genCurried({
  base: [
    ['T'],
    {
      separator: 'T',
      list: 'List<T>',
    },
    'T[]'
  ]
});

// into
genCurried({
  base: [
    ['T', 'U', 'V extends AccOpts<T, U>'],
    {
      acc: 'V',
      xf: '(list: List<T>) => U',
      list: 'List<T>',
    },
    'U'
  ]
});

// invert

// invoker
genCurried({
  base: [
    ['T', 'R'],
    {
      len: 'number',
      name: 'Prop',
      obj: 'T',
    },
    'R'
  ]
});

// is
genCurried({
  base: [
    ['T'],
    {
      ctor: 'Type<T>',
      val: 'any',
    },
    'val is T'
  ]
});

// isArrayLike

// isEmpty

// isNaN

// isNil

// join
genCurried({
  base: [
    [],
    {
      x: 'Prop',
      xs: 'Array<any>',
    },
    'string'
  ]
});

// juxt
genCurried({
  base: [
    ['T', 'U'],
    {
      fns: '{(...args: T[]): U}[]'
    },
    '(...args: T[]) => U[]'
  ]
});

// keys

// keysIn

// last

// lastIndexOf
genCurried({
  base: [
    ['T'],
    {
      target: 'T',
      list: 'List<T>',
    },
    'number'
  ]
});

// length

// lens
genCurried({
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
});

// lensIndex

// lensPath

// lift --

// liftN

// lt
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'boolean'
  ]
});

// lte
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'boolean'
  ]
});

// map
genCurried({
  base: [
    ['T', 'U'],
    {
      fn: '(x: T) => U',
      list: 'List<T>',
    },
    'U[]'
  ],
  'object: keyof version': [
    ['T', 'U', 'M extends Obj<T>'],
    {
      fn: '(value: T) => U',
      obj: 'M',
    },
    '{[K in keyof M]: U}'
  ],
  'object: Record version': [
    ['T', 'U', 'K extends string'],
    {
      f: '(x: T) => U',
      obj: 'Record<K, T>',
    },
    'Record<K, U>'
  ],
  'functor': [
    ['T', 'U'],
    {
      x: '(x: T) => U',
      obj: 'Functor<T>',
    },
    'Functor<U>'
  ]
});

// mapAccum
genCurried({
  base: [
    ['T', 'U', 'TResult'],
    {
      fn: '(acc: U, value: T) => [U, TResult]',
      acc: 'U',
      list: 'List<T>',
    },
    '[U, TResult[]]'
  ]
});

// mapAccumRight
genCurried({
  base: [
    ['T', 'U', 'TResult'],
    {
      fn: '(value: T, acc: U) => [TResult, U]',
      acc: 'U',
      list: 'List<T>',
    },
    '[TResult[], U]'
  ]
});

// mapIndexed
genCurried({
  base: [
    ['T', 'U', 'V'],
    {
      fn: '(value: T, acc: U) => [TResult, U]',
      acc: 'U',
      list: 'List<T>',
    },
    '[TResult[], U]',
  ]
});

// mapObjIndexed
genCurried({
  base: [
    ['T', 'V', 'M extends Obj<T>'],
    {
      fn: '(value: T, key: string, obj?:M) => V',
      obj: 'M'
    },
    '{[K in keyof M]: V}'
  ]
});

// match
genCurried({
  base: [
    [],
    {
      regexp: 'RegExp',
      str: 'string'
    },
    'string[]'
  ]
});

// mathMod
genCurried({
  base: [
    [],
    {
      a: 'number',
      b: 'number',
    },
    'number'
  ]
});

// max
genCurried({
  base: [
    ['T extends Ord'],
    {
      a: 'T',
      b: 'T',
    },
    'T'
  ]
});

// maxBy
genCurried({
  base: [
    ['T'],
    {
      keyFn: '(a: T) => Ord',
      a: 'T',
      b: 'T',
    },
    'T'
  ]
});

// mean

// median

// memoize

// merge
genCurried({
  base: [
    ['V1', 'V2', 'T1 extends Struct<V1>', 'T2 extends Struct<V2>'],
    {
      a: 'T1',
      b: 'T2',
    },
    'T1 & T2'
  ]
});

// mergeAll
genCurried({
  base: [
    ['T'],
    {
      list: 'List<any>',
    },
    'T'
  ]
});

// mergeWith
genCurried({
  base: [
    ['U', 'V'],
    {
      fn: '(x: any, z: any) => any',
      a: 'U',
      b: 'V',
    },
    'U & V'
  ]
});

// mergeWithKey
genCurried({
    'mergeWithKey': [
        ['U', 'V'],
        {
            fn: '(str: string, x: any, z: any) => any',
            a: 'U',
            b: 'V',
        },
        'U & V'
    ]
});

// minBy
genCurried({
  base: [
    ['T'],
    {
      keyFn: '(a: T) => Ord',
      a: 'T',
      b: 'T'
    },
    'T'
  ]
});

// over
genCurried({
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
});

// pathOr
genCurried({
  base: [
    ['T'],
    {
      d: 'T',
      p: 'Path',
      obj: 'Struct<any>',
    },
    'T|any'
  ]
});

// pathSatisfies
genCurried({
  base: [
    ['T'],
    {
      fn: 'Pred<T>',
      p: 'Path',
      obj: 'any',
    },
    'boolean'
  ]
});

// propEq
genCurried({
  base: [
    ['T extends Struct<any>'],
    {
      name: 'Prop',
      val: 'any',
      obj: 'T',
    },
    'boolean'
  ]
});

// propOr
genCurried({
  base: [
    ['T', 'U', 'K extends keyof U'],
    {
      val: 'T',
      p: 'K',
      obj: 'U'
    },
    'U[K] | T'
  ],
  'other': [
    ['T'],
    {
      val: 'T',
      p: 'Prop',
    },
    'Struct<any>'
  ]
});

// propStatisfies
genCurried({
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
});

// reduce
genCurried({
  base: [
    ['T', 'TResult', 'R extends List<T>'],
    {
      fn: '(acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced',
      acc: 'TResult',
      list: 'R',
    },
    'TResult'
  ]
});

// reduceBy
genCurried({
  base: [
    ['T', 'TResult', 'R extends List<T>'],
    {
      valueFn: '(acc: TResult, elem: T, idx: number, list: R) => TResult',
      acc: 'TResult|any',
      keyFn: '(elem: T) => string',
      list: 'R',
    },
    'TResult'
  ]
});

// reduceRight
genCurried({
  base: [
    ['T', 'TResult'],
    {
      fn: '(elem: T, acc: TResult) => TResult|Reduced',
      acc: 'TResult|any',
      list: 'List<T>',
    },
    'TResult'
  ]
});

// reduceWhile
genCurried({
  base: [
    ['T', 'TResult'],
    {
      pred: '(acc: TResult, elem: T) => boolean',
      fn: '(acc: TResult, elem: T) => TResult|Reduced',
      acc: 'TResult',
      list: 'List<T>',
    },
    'TResult'
  ]
});

// remove
genCurried({
  base: [
    ['T'],
    {
      start: 'number',
      count: 'number',
      list: 'List<T>',
    },
    'T[]'
  ]
});

// replace
genCurried({
  base: [
    [],
    {
      pattern: 'RegExp|Prop',
      replacement: 'Prop',
      str: 'string',
    },
    'string'
  ]
});

// scan
genCurried({
  base: [
    ['T', 'TResult'],
    {
      fn: '(acc: TResult, elem: T) => TResult|Reduced',
      acc: 'TResult',
      list: 'List<T>'
    },
    'TResult[]'
  ]
});

// set
genCurried({
  base: [
    ['T', 'U'],
    {
      lens: 'Lens<T, U>',
      a: 'U',
      obj: 'T'
    },
    'T'
  ],
  unknow: [
    ['T'],
    {
      lens: 'UnknownLens',
      a: 'any',
      obj: 'T',
    },
    'T'
  ]
});

// slice
genCurried({
  base: [
    ['T extends List<any>'],
    {
      a: 'number',
      b: 'number',
      list: 'T',
    },
    'T'
  ]
});

// symmetricDifferenceWith
genCurried({
  base: [
    ['T'],
    {
      pred: '(a: T, b: T) => boolean',
      list1: 'List<T>',
      list2: 'List<T>',
    },
    'T[]'
  ]
});

// transduce
genCurried({
  base: [
    ['T', 'U'],
    {
      xf: '(arg: List<T>) => List<T>',
      fn: '(acc: List<U>, val:U) => List<U>',
      acc: 'List<T>',
      list: 'List<T>'
    },
    'U'
  ]
});

// traverse
genCurried({
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
});

// unionWith
genCurried({
  base: [
    ['T'],
    {
      pred: '(a: T, b: T) => boolean',
      list1: 'List<T>',
      list2: 'List<T>',
    },
    'T[]'
  ]
});

// until
genCurried({
  base: [
    ['T', 'U'],
    {
      pred: 'Pred<T>',
      fn: '(val: T) => U',
      init: 'U',
    },
    'U'
  ]
});

// update
genCurried({
  base: [
    ['T'],
    {
      index: 'number',
      value: 'T',
      list: 'List<T>'
    },
    'T[]'
  ]
});

// when
genCurried({
  base: [
    ['T', 'U'],
    {
      pred: 'Pred<T>',
      whenTrueFn: '(a: T) => U',
      obj: 'T',
    },
    'U'
  ]
});


// assoc
genCurried({
  'extend object with new property': [
    ['T', 'U extends Struct<any>' ,'K extends keyof U'],
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
})


