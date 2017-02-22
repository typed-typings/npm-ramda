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
