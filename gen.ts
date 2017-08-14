pathEq: {
  // sole
  (p: Path, v: any, o: any): boolean;
  (p: Path, v: any): (o: any) => boolean;
  (p: Path): {
    (v: any, o: any): boolean;
    (v: any): (o: any) => boolean;
  };
}

add: {
  // base
  <T extends {and?: Function}>(fn1: T, val2: boolean+any): boolean;
  <T extends {and?: Function}>(fn1: T): (val2: boolean+any) => boolean;

  // no_generics
  (v1: any, v2: any): boolean;
  (v1: any): (v2: any) => boolean;
}

adjust: {
  // sole
  <T>(fn: (a: T) => T, index: number, list: List<T>): T[];
  <T>(fn: (a: T) => T, index: number): (list: List<T>) => T[];
  <T>(fn: (a: T) => T): {
    (index: number, list: List<T>): T[];
    (index: number): (list: List<T>) => T[];
  };
}

all: {
  // sole
  <T>(pred: Pred<T>, list: List<T>): boolean;
  <T>(pred: Pred<T>): (list: List<T>) => boolean;
}

allPass: {
  // sole
  <T>(pred: Pred<T>[]): Pred<T>;
}

always: {
  // sole
  <T>(val: T): () => T;
}

any: {
  // sole
  <T>(pred: Pred<T>, list: List<T>): boolean;
  <T>(pred: Pred<T>): (list: List<T>) => boolean;
}

anyPass: {
  // sole
  <T>(preds: Pred<T>[]): Pred<T>;
}

ap: {
  // sole
  <T, U>(fns: ((a: T) => U)[], xs: List<T>): U[];
  <T, U>(fns: ((a: T) => U)[]): (xs: List<T>) => U[];
}

aperture: {
  // sole
  <T>(n: number, list: List<T>): T[][];
  (n: number): <T>(list: List<T>) => T[][];
}

append: {
  // sole
  <U, T>(el: U, list: List<T>): (T & U)[];
  <U>(el: U): <T>(list: List<T>) => (T & U)[];
}

apply: {
  // any
  <TResult>(fn: (...args: any[]) => TResult, args: any[]): TResult;
  <TResult>(fn: (...args: any[]) => TResult): (args: any[]) => TResult;
}

applySpec: {
  // sole
  <T>(obj: any): Variadic<T>;
}

ascend: {
  // base
  <K extends keyof U, T, U extends Struct<any>>(prop: K, val: T, obj: U): {[P in K]: T} & U;
  <K extends keyof U, T>(prop: K, val: T): <U extends Struct<any>>(obj: U) => {[P in K]: T} & U;
  <K extends keyof U>(prop: K): {
    <T, U extends Struct<any>>(val: T, obj: U): {[P in K]: T} & U;
    <T>(val: T): <U extends Struct<any>>(obj: U) => {[P in K]: T} & U;
  };

  // any object as long as the type remains unchanged
  <T>(prop: Prop, val: any, obj: T): T;
  (prop: Prop, val: any): <T>(obj: T) => T;
  (prop: Prop): {
    <T>(val: any, obj: T): T;
    (val: any): <T>(obj: T) => T;
  };
}

assoc: {
  // extend object with new property
  <K extends string, T, U extends Struct<any>>(prop: K, val: T, obj: U): {[P in K]: T} & U;
  <K extends string, T>(prop: K, val: T): <U extends Struct<any>>(obj: U) => {[P in K]: T} & U;
  <K extends string>(prop: K): {
    <T, U extends Struct<any>>(val: T, obj: U): {[P in K]: T} & U;
    <T>(val: T): <U extends Struct<any>>(obj: U) => {[P in K]: T} & U;
  };

  // any object as long as the type remains unchanged
  <T>(prop: Prop, val: any, obj: T): T;
  (prop: Prop, val: any): <T>(obj: T) => T;
  (prop: Prop): {
    <T>(val: any, obj: T): T;
    (val: any): <T>(obj: T) => T;
  };
}

assocPath: {
  // sole
  <T, U>(path: Path, val: T, obj: U): U;
  <T>(path: Path, val: T): <U>(obj: U) => U;
  (path: Path): {
    <T, U>(val: T, obj: U): U;
    <T>(val: T): <U>(obj: U) => U;
  };
}

binary: {
  // base
  <T, A, B>(fn: (a: A, b: T, ...args: any[]) => T): (a: A, b: B) => T;

  // non generics for return func
  <T>(fn: Variadic<T>): (a:any, b:any) => T;
}

bind: {
  // sole
  <T>(fn: Variadic<T>, thisObj: {}): Variadic<T>;
  <T>(fn: Variadic<T>): (thisObj: {}) => Variadic<T>;
}

both: {
  // sole
  <T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>;
  <T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>;
}

call: {
  // sole
  <T>(fn: Variadic<T>, ...args: any[]): T;
  <T>(fn: Variadic<T>): (...args: any[]) => T;
}

chain: {
  // list version
  <T, U>(fn: (n: T) => U[], list: List<T>): U[];
  <T, U>(fn: (n: T) => U[]): (list: List<T>) => U[];

  // generic chain version
  <T, U>(fn: (n: T) => Chain<U>, list: Chain<T>): Chain<U>;
  <T, U>(fn: (n: T) => Chain<U>): (list: Chain<T>) => Chain<U>;

  // function argument
  <T, U, V>(fn: (v: V) => (list: List<T>) => U[], monad: (list: List<T>) => V): (list: List<T>) => U[];
  <T, U, V>(fn: (v: V) => (list: List<T>) => U[]): (monad: (list: List<T>) => V) => (list: List<T>) => U[];
}

clamp: {
  // sole
  <T>(min: T, max: T, value: T): T;
  <T>(min: T, max: T): (value: T) => T;
  <T>(min: T): {
    (max: T, value: T): T;
    (max: T): (value: T) => T;
  };
}

clone: {
  // Objects
  <T>(value: T): T;

  // Arrays
  <T>(value: List<T>): T[];
}

comparator: {
  // sole
  <T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => number;
}

complement: {
  // sole
  <T>(pred: Variadic<boolean>): Variadic<boolean>;
}

compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
compose<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T1;
compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;
compose<V0, V1, V2, V3, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T2;
compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T3;
compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;
compose<V0, V1, V2, V3, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T3;
compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T4;
compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;
compose<V0, V1, V2, V3, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T4;
compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T5;
compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;
compose<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T5;
compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T6;
compose<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;
compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T6;
compose<V0, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T7;
compose<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T7;
compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T7;
compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T7;
compose<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T8;
compose<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T8;
compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T8;
compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T8;
compose<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T9;
compose<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T9;
compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T9;
compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T9;

composeK<V, T1>(fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T1>;
composeK<V, T1, T2>(fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T2>;
composeK<V, T1, T2, T3>(fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T3>;
composeK<V, T1, T2, T3, T4>(fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T4>;
composeK<V, T1, T2, T3, T4, T5>(fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T5>;
composeK<V, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T6>;
composeK<V, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T7>;
composeK<V, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Chain<T8>, fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T8>;
composeK<V, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Chain<T9>, fn7: (x: T7) => Chain<T8>, fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T9>;

composeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
composeP<V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
composeP<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;
composeP<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>;
composeP<V0, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T2>;
composeP<V0, V1, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T2>;
composeP<V0, V1, V2, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T2>;
composeP<V0, V1, V2, V3, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T2>;
composeP<V0, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T3>;
composeP<V0, V1, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T3>;
composeP<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T3>;
composeP<V0, V1, V2, V3, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T3>;
composeP<V0, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T4>;
composeP<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T4>;
composeP<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T4>;
composeP<V0, V1, V2, V3, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T4>;
composeP<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T5>;
composeP<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T5>;
composeP<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T5>;
composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T5>;
composeP<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T6>;
composeP<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T6>;
composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T6>;
composeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T7>;
composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T7>;
composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T7>;
composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T7>;
composeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T8>;
composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T8>;
composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T8>;
composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T8>;
composeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T9>;
composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T9>;
composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T9>;
composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T9>;

concat: {
  // sole
  <T extends List<any>>(list1: T, list2: T): T;
  <T extends List<any>>(list1: T): (list2: T) => T;
}

cond: {
  // sole
  <T, U>(fns: [Pred<T>, (v: T) => U][]): (v: T) => U;
}

construct: {
  // sole
  (fn: Function): Function;
}

constructN: {
  // sole
  (n: number, fn: Function): Function;
  (n: number): (fn: Function) => Function;
}

contains: {
  // base
  (a: string, list: string): boolean;
  (a: string): (list: string) => boolean;

  // generics
  <T, R extends List<T>>(a: T, list: R): boolean;
  <T>(a: T): <R extends List<T>>(list: R) => boolean;
}

converge: {
  // sole
  <T>(after: Variadic<T>, fns: List<Variadic<any>>): Variadic<T>;
  <T>(after: Variadic<T>): (fns: List<Variadic<any>>) => Variadic<T>;
}

countBy: {
  // sole
  <T>(fn: (a: T) => Prop, list: List<T>): Obj<number>;
  <T>(fn: (a: T) => Prop): (list: List<T>) => Obj<number>;
}

dec: {
  // sole
  (n: number): number;
}

defaultTo: {
  // sole
  <T, U>(a: T, b: U | null | undefined): T|U;
  <T>(a: T): <U>(b: U | null | undefined) => T|U;
}

descend: {
  // sole
  <T, V extends Ord>(comparator: (val: T) => V, a: T, b: T): number;
  <T, V extends Ord>(comparator: (val: T) => V, a: T): (b: T) => number;
  <T, V extends Ord>(comparator: (val: T) => V): {
    (a: T, b: T): number;
    (a: T): (b: T) => number;
  };
}

differenceWith: {
  // sole
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>): (list2: List<T>) => T[];
  <T>(pred: (a: T, b: T) => boolean): {
    (list1: List<T>, list2: List<T>): T[];
    (list1: List<T>): (list2: List<T>) => T[];
  };
}

dissoc: {
  // accurate
  <T>(prop: keyof T, obj: T): T;
  <T>(prop: keyof T): (obj: T) => T;

  // easier
  <T>(prop: Prop, obj: Struct<any>): T;
  (prop: Prop): <T>(obj: Struct<any>) => T;
}

dissocPath: {
  // sole
  <T>(path: Path, obj: Struct<any>): T;
  (path: Path): <T>(obj: Struct<any>) => T;
}

divide: {
  // sole
  (a: number, b: number): number;
  (a: number): (b: number) => number;
}

drop: {
  // sole
  <T extends List<any>>(n: number, xs: T): T;
  (n: number): <T extends List<any>>(xs: T) => T;
}

dropLast: {
  // sole
  <T extends List<any>>(n: number, xs: T): T;
  (n: number): <T extends List<any>>(xs: T) => T;
}

dropLastWhile: {
  // sole
  <T, R extends List<T>>(pred: Pred<T>, list: R): T[];
  <T>(pred: Pred<T>): <R extends List<T>>(list: R) => T[];
}

dropWhile: {
  // sole
  <T, R extends List<T>>(pred: Pred<T>, list: R): T[];
  <T>(pred: Pred<T>): <R extends List<T>>(list: R) => T[];
}

either: {
  // sole
  <T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>;
  <T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>;
}

empty: {
  // sole
  <T>(x: T): T;
}

eqBy: {
  // sole
  <T>(fn: (a: T) => T, a: T, b: T): boolean;
  <T>(fn: (a: T) => T, a: T): (b: T) => boolean;
  <T>(fn: (a: T) => T): {
    (a: T, b: T): boolean;
    (a: T): (b: T) => boolean;
  };
}

eqProps: {
  // base
  <T, U>(prop: Prop, obj1: T, obj2: U): boolean;
  <T>(prop: Prop, obj1: T): <U>(obj2: U) => boolean;
  (prop: Prop): {
    <T, U>(obj1: T, obj2: U): boolean;
    <T>(obj1: T): <U>(obj2: U) => boolean;
  };

  // less generics
  (prop: Prop, obj1: any, obj2: any): boolean;
  (prop: Prop, obj1: any): (obj2: any) => boolean;
  (prop: Prop): {
    (obj1: any, obj2: any): boolean;
    (obj1: any): (obj2: any) => boolean;
  };
}

equals: {
  // sole
  <T>(a: T, b: T): boolean;
  <T>(a: T): (b: T) => boolean;
}

evolve: {
  // base
  <V>(transformations: NestedObj<(v: any) => any>, obj: V): V;
  (transformations: NestedObj<(v: any) => any>): <V>(obj: V) => V;

  // no inference
  (transformations: Obj<Function>, obj: any): T;
  (transformations: Obj<Function>): (obj: any) => T;
}

filter: {
  // base
  <T>(pred: Pred<T>, list: List<T>): T[];
  <T>(pred: Pred<T>): (list: List<T>) => T[];

  // functor to functor
  <T>(pred: Pred<T>, list: Functor<T>): Functor[];
  <T>(pred: Pred<T>): (list: Functor<T>) => Functor[];

  // functor to array
  <T>(pred: Pred<T>, list: Functor<T>): T[];
  <T>(pred: Pred<T>): (list: Functor<T>) => T[];

  // object
  <T, U extends Obj<T>>(pred: Pred<T>, obj: U): Partial<U>;
  <T>(pred: Pred<T>): <U extends Obj<T>>(obj: U) => Partial<U>;
}

find: {
  // sole
  <T>(fn: (a: T) => boolean, list: List<T>): T;
  <T>(fn: (a: T) => boolean): (list: List<T>) => T;
}

findIndex: {
  // sole
  <T>(fn: (a: T) => boolean, list: List<T>): number;
  <T>(fn: (a: T) => boolean): (list: List<T>) => number;
}

findLast: {
  // sole
  <T>(fn: (a: T) => boolean, list: List<T>): T;
  <T>(fn: (a: T) => boolean): (list: List<T>) => T;
}

findLastIndex: {
  // sole
  <T>(fn: (a: T) => boolean, list: List<T>): number;
  <T>(fn: (a: T) => boolean): (list: List<T>) => number;
}

flatten: {
  // sole
  <T>(x: NestedArray<T>): T[];
}

flip: {
  // base
  <T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1:U, arg0?:T) => TResult;

  // rest arguments
  <T, U, Rest, TResult>(fn: (arg0: T, arg1: U, ...args: Rest[]) => TResult): (arg1: U, arg0?: T, ...args: Rest[]) => TResult;
}

forEach: {
  // sole
  <T>(fn: (x: T) => void, list: List<T>): T[];
  <T>(fn: (x: T) => void): (list: List<T>) => T[];
}

forEachObjIndexed: {
  // sole
  <T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void, o: Inp): Inp;
  <T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void): (o: Inp) => Inp;
}

fromPairs: {
  // sole
  <V>(pairs: List<KeyValuePair<Prop, V>>): Obj<V>;
}

groupBy: {
  // sole
  <T>(fn: (a: T) => prop, list: List<T>): Obj<T[]>;
  <T>(fn: (a: T) => prop): (list: List<T>) => Obj<T[]>;
}

groupWith: {
  // sole
  <T>(fn: (a: T) => Prop, list: List<T>): Obj<T[]>;
  <T>(fn: (a: T) => Prop): (list: List<T>) => Obj<T[]>;
}

gt: {
  // sole
  (a: number, b: number): boolean;
  (a: number): (b: number) => boolean;
}

gte: {
  // sole
  (a: number, b: number): boolean;
  (a: number): (b: number) => boolean;
}

has: {
  // sole
  (s: Prop, obj: Struct<any>): boolean;
  (s: Prop): (obj: Struct<any>) => boolean;
}

hasIn: {
  // sole
  (s: Prop, obj: Struct<any>): boolean;
  (s: Prop): (obj: Struct<any>) => boolean;
}

identical: {
  // sole
  <T>(a: T, b: T): boolean;
  <T>(a: T): (b: T) => boolean;
}

ifElse: {
  // sole
  <T, U, V>(fn: Pred<T>, onTrue: (v: T) => U, onFalse: (v: T) => V): (v: T) => U|V;
  <T, U>(fn: Pred<T>, onTrue: (v: T) => U): <V>(onFalse: (v: T) => V) => (v: T) => U|V;
  <T>(fn: Pred<T>): {
    <U, V>(onTrue: (v: T) => U, onFalse: (v: T) => V): (v: T) => U|V;
    <U>(onTrue: (v: T) => U): <V>(onFalse: (v: T) => V) => (v: T) => U|V;
  };
}

indexBy: {
  // sole
  <T>(fn: (a: T) => Prop, list: List<T>): Obj<T>;
  <T>(fn: (a: T) => Prop): (list: List<T>) => Obj<T>;
}

indexOf: {
  // sole
  <T>(target: T, list: List<T>): number;
  <T>(target: T): (list: List<T>) => number;
}

insert: {
  // sole
  <T>(index: number, elt: T, list: List<T>): T[];
  <T>(index: number, elt: T): (list: List<T>) => T[];
  (index: number): {
    <T>(elt: T, list: List<T>): T[];
    <T>(elt: T): (list: List<T>) => T[];
  };
}

insertAll: {
  // sole
  <T, U>(index: number, elts: List<T>, list: List<U>): Array<T|U>;
  <T>(index: number, elts: List<T>): <U>(list: List<U>) => Array<T|U>;
  (index: number): {
    <T, U>(elts: List<T>, list: List<U>): Array<T|U>;
    <T>(elts: List<T>): <U>(list: List<U>) => Array<T|U>;
  };
}

intersection: {
  // sole
  <T, U>(list1: List<T>, list2: List<U>): Array<T|U>;
  <T>(list1: List<T>): <U>(list2: List<U>) => Array<T|U>;
}

intersectionWith: {
  // sole
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>): (list2: List<T>) => T[];
  <T>(pred: (a: T, b: T) => boolean): {
    (list1: List<T>, list2: List<T>): T[];
    (list1: List<T>): (list2: List<T>) => T[];
  };
}

intersperse: {
  // sole
  <T>(separator: T, list: List<T>): T[];
  <T>(separator: T): (list: List<T>) => T[];
}

into: {
  // sole
  <V extends AccOpts<T, U>, T, U>(acc: V, xf: (list: List<T>) => U, list: List<T>): U;
  <V extends AccOpts<T, U>, T, U>(acc: V, xf: (list: List<T>) => U): (list: List<T>) => U;
  <V extends AccOpts<T, U>>(acc: V): {
    <T, U>(xf: (list: List<T>) => U, list: List<T>): U;
    <T, U>(xf: (list: List<T>) => U): (list: List<T>) => U;
  };
}

invoker: {
  // sole
  <T, R>(len: number, name: Prop, obj: T): R;
  (len: number, name: Prop): <T, R>(obj: T) => R;
  (len: number): {
    <T, R>(name: Prop, obj: T): R;
    (name: Prop): <T, R>(obj: T) => R;
  };
}

is: {
  // sole
  <T>(ctor: Type<T>, val: any): val is T;
  <T>(ctor: Type<T>): (val: any) => val is T;
}

join: {
  // sole
  (x: Prop, xs: Array<any>): string;
  (x: Prop): (xs: Array<any>) => string;
}

juxt: {
  // sole
  <T, U>(fns: {(...args: T[]): U}[]): (...args: T[]) => U[];
}

lastIndexOf: {
  // sole
  <T>(target: T, list: List<T>): number;
  <T>(target: T): (list: List<T>) => number;
}

lens: {
  // base
  <V, U extends Struct<any>>(getter: (s: U) => V, setter: (a: V, s: U) => U): ManualLens<V>;
  <V, U extends Struct<any>>(getter: (s: U) => V): (setter: (a: V, s: U) => U) => ManualLens<V>;

  // allows setter to change value type
  <T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens<T, U>;
  <T, U>(getter: (s: T) => U): <V>(setter: (a: U, s: T) => V) => Lens<T, U>;
}

lift<, TResult>(fn: () => TResult): () => TResult[];
lift<T1, TResult>(fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
lift<T1, T2, TResult>(fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
lift<T1, T2, T3, TResult>(fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
lift<T1, T2, T3, T4, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
lift<T1, T2, T3, T4, T5, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
lift<T1, T2, T3, T4, T5, T6, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
lift<T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
lift<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];
lift<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>, v9: List<T9>) => TResult[];

liftN<, TResult>(n: number, fn: () => TResult): () => TResult[];
liftN<T1, TResult>(n: number, fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
liftN<T1, T2, TResult>(n: number, fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
liftN<T1, T2, T3, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
liftN<T1, T2, T3, T4, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
liftN<T1, T2, T3, T4, T5, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
liftN<T1, T2, T3, T4, T5, T6, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
liftN<T1, T2, T3, T4, T5, T6, T7, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
liftN<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];
liftN<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>, v9: List<T9>) => TResult[];

lt: {
  // sole
  (a: number, b: number): boolean;
  (a: number): (b: number) => boolean;
}

lte: {
  // sole
  (a: number, b: number): boolean;
  (a: number): (b: number) => boolean;
}

map: {
  // base
  // array
  <T, U>(fn: (value: T) => U): (list: List<T>) => U[];

  // obj_keyof
  <T, U>(fn: (value: T) => U): <M extends Obj<T>>(obj: M) => {[K in keyof M]: U};

  // obj_record
  <T, U>(fn: (value: T) => U): <K extends string>(obj: Record<K, T>) => Record<K, U>;

  // functor
  <T, U>(fn: (value: T) => U): (obj: Functor<T>) => Functor<U>;

  // compose
  <T, U>(fn: (value: T) => U): (f1: (...args: any[]) => T) => (...args: any[]) => U;

  // mixed
  <T, U>(fn: (value: T) => U): {
    // array
    (list: List<T>): U[];

    // obj_keyof
    <M extends Obj<T>>(obj: M): {[K in keyof M]: U};

    // obj_record
    <K extends string>(obj: Record<K, T>): Record<K, U>;

    // functor
    (obj: Functor<T>): Functor<U>;

    // compose
    (f1: (...args: any[]) => T): (...args: any[]) => U;

  };
}

mapAccum: {
  // sole
  <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: List<T>): [U, TResult[]];
  <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: List<T>) => [U, TResult[]];
  <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): {
    (acc: U, list: List<T>): [U, TResult[]];
    (acc: U): (list: List<T>) => [U, TResult[]];
  };
}

mapAccumRight: {
  // sole
  <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U, list: List<T>): [TResult[], U];
  <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U): (list: List<T>) => [TResult[], U];
  <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U]): {
    (acc: U, list: List<T>): [TResult[], U];
    (acc: U): (list: List<T>) => [TResult[], U];
  };
}

mapIndexed: {
  // sole
  <T, U, V>(fn: (value: T, acc: U) => [TResult, U], acc: U, list: List<T>): [TResult[], U];
  <T, U>(fn: (value: T, acc: U) => [TResult, U], acc: U): <V>(list: List<T>) => [TResult[], U];
  <T, U>(fn: (value: T, acc: U) => [TResult, U]): {
    <V>(acc: U, list: List<T>): [TResult[], U];
    (acc: U): <V>(list: List<T>) => [TResult[], U];
  };
}

mapObjIndexed: {
  // sole
  <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?:M) => V, obj: M): {[K in keyof M]: V};
  <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?:M) => V): (obj: M) => {[K in keyof M]: V};
}

match: {
  // sole
  (regexp: RegExp, str: string): string[];
  (regexp: RegExp): (str: string) => string[];
}

mathMod: {
  // sole
  (a: number, b: number): number;
  (a: number): (b: number) => number;
}

max: {
  // sole
  <T extends Ord>(a: T, b: T): T;
  <T extends Ord>(a: T): (b: T) => T;
}

maxBy: {
  // sole
  <T>(keyFn: (a: T) => Ord, a: T, b: T): T;
  <T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
  <T>(keyFn: (a: T) => Ord): {
    (a: T, b: T): T;
    (a: T): (b: T) => T;
  };
}

merge: {
  // sole
  <T1 extends Struct<V1>, T2 extends Struct<V2>, V1, V2>(a: T1, b: T2): T1 & T2;
  <T1 extends Struct<V1>>(a: T1): <T2 extends Struct<V2>, V1, V2>(b: T2) => T1 & T2;
}

mergeAll: {
  // sole
  <T>(list: List<any>): T;
}

mergeWith: {
  // sole
  <U, V>(fn: (x: any, z: any) => any, a: U, b: V): U & V;
  <U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => U & V;
  (fn: (x: any, z: any) => any): {
    <U, V>(a: U, b: V): U & V;
    <U>(a: U): <V>(b: V) => U & V;
  };
}

mergeWithKey: {
  // mergeWithKey
  <U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): U & V;
  <U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => U & V;
  (fn: (str: string, x: any, z: any) => any): {
    <U, V>(a: U, b: V): U & V;
    <U>(a: U): <V>(b: V) => U & V;
  };
}

minBy: {
  // sole
  <T>(keyFn: (a: T) => Ord, a: T, b: T): T;
  <T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
  <T>(keyFn: (a: T) => Ord): {
    (a: T, b: T): T;
    (a: T): (b: T) => T;
  };
}

over: {
  // Functor version
  <V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): T;
  <V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V): (value: T) => T;
  <V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens): {
    (fn: (v: V) => V, value: T): T;
    (fn: (v: V) => V): (value: T) => T;
  };

  // Functor version applied to array
  <V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): V[];
  <V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V): (value: T) => V[];
  <V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens): {
    (fn: (v: V) => V, value: T): V[];
    (fn: (v: V) => V): (value: T) => V[];
  };

  // unbound value
  <T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): T;
  <T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V): (value: T) => T;
  <T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens): {
    (fn: (v: V) => V, value: T): T;
    (fn: (v: V) => V): (value: T) => T;
  };
}

path<T1 extends string, T2 extends string, TResult>(path: [T1, T2], obj: {[K1 in T1]: {[K2 in T2]: TResult}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: TResult}}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult}}}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult}}}}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}}}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: {[K7 in T7]: TResult}}}}}}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: {[K7 in T7]: {[K8 in T8]: TResult}}}}}}}}): TResult;
path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, T9 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8, T9], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: {[K7 in T7]: {[K8 in T8]: {[K9 in T9]: TResult}}}}}}}}}): TResult;

pathOr: {
  // sole
  <T>(d: T, p: Path, obj: Struct<any>): T|any;
  <T>(d: T, p: Path): (obj: Struct<any>) => T|any;
  <T>(d: T): {
    (p: Path, obj: Struct<any>): T|any;
    (p: Path): (obj: Struct<any>) => T|any;
  };
}

pathSatisfies: {
  // sole
  <T>(fn: Pred<T>, p: Path, obj: any): boolean;
  <T>(fn: Pred<T>, p: Path): (obj: any) => boolean;
  <T>(fn: Pred<T>): {
    (p: Path, obj: any): boolean;
    (p: Path): (obj: any) => boolean;
  };
}

pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
pipe<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T1;
pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;
pipe<V0, V1, V2, V3, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2, x3: V3) => T2;
pipe<V0, T1, T2, T3>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0) => T3;
pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;
pipe<V0, V1, V2, V3, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2, x3: V3) => T3;
pipe<V0, T1, T2, T3, T4>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0) => T4;
pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;
pipe<V0, V1, V2, V3, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2, x3: V3) => T4;
pipe<V0, T1, T2, T3, T4, T5>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0) => T5;
pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;
pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2, x3: V3) => T5;
pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0) => T6;
pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;
pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2, x3: V3) => T6;
pipe<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0) => T7;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;
pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2, x3: V3) => T7;
pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0) => T8;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;
pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2, x3: V3) => T8;
pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0) => T9;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;
pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2, x3: V3) => T9;

pipeK<V, T1>(fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T1>;
pipeK<V, T1, T2>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>): (v: V) => Chain<T2>;
pipeK<V, T1, T2, T3>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>): (v: V) => Chain<T3>;
pipeK<V, T1, T2, T3, T4>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>): (v: V) => Chain<T4>;
pipeK<V, T1, T2, T3, T4, T5>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>): (v: V) => Chain<T5>;
pipeK<V, T1, T2, T3, T4, T5, T6>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>): (v: V) => Chain<T6>;
pipeK<V, T1, T2, T3, T4, T5, T6, T7>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>): (v: V) => Chain<T7>;
pipeK<V, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>, fn7: (x: T7) => Chain<T8>): (v: V) => Chain<T8>;
pipeK<V, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>, fn7: (x: T7) => Chain<T8>, fn8: (x: T8) => Chain<T9>): (v: V) => Chain<T9>;

pipeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
pipeP<V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
pipeP<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;
pipeP<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>;
pipeP<V0, T1, T2>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0) => Promise<T2>;
pipeP<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0, x1: V1) => Promise<T2>;
pipeP<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0, x1: V1, x2: V2) => Promise<T2>;
pipeP<V0, V1, V2, V3, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T2>;
pipeP<V0, T1, T2, T3>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0) => Promise<T3>;
pipeP<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0, x1: V1) => Promise<T3>;
pipeP<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0, x1: V1, x2: V2) => Promise<T3>;
pipeP<V0, V1, V2, V3, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T3>;
pipeP<V0, T1, T2, T3, T4>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0) => Promise<T4>;
pipeP<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0, x1: V1) => Promise<T4>;
pipeP<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0, x1: V1, x2: V2) => Promise<T4>;
pipeP<V0, V1, V2, V3, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T4>;
pipeP<V0, T1, T2, T3, T4, T5>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0) => Promise<T5>;
pipeP<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0, x1: V1) => Promise<T5>;
pipeP<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0, x1: V1, x2: V2) => Promise<T5>;
pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T5>;
pipeP<V0, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0) => Promise<T6>;
pipeP<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0, x1: V1) => Promise<T6>;
pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T6>;
pipeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0) => Promise<T7>;
pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0, x1: V1) => Promise<T7>;
pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0, x1: V1, x2: V2) => Promise<T7>;
pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T7>;
pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0) => Promise<T8>;
pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0, x1: V1) => Promise<T8>;
pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0, x1: V1, x2: V2) => Promise<T8>;
pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T8>;
pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0) => Promise<T9>;
pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0, x1: V1) => Promise<T9>;
pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0, x1: V1, x2: V2) => Promise<T9>;
pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T9>;

propEq: {
  // sole
  <T extends Struct<any>>(name: Prop, val: any, obj: T): boolean;
  (name: Prop, val: any): <T extends Struct<any>>(obj: T) => boolean;
  (name: Prop): {
    <T extends Struct<any>>(val: any, obj: T): boolean;
    (val: any): <T extends Struct<any>>(obj: T) => boolean;
  };
}

propOr: {
  // sole
  // record
  <T, K extends string>(val: T, p: K): <U extends Record<K,V>, V>(obj: U) => V|T;
  <T>(val: T): {
    <K extends string, U extends Record<K,V>, V>(p: K, obj: U): V|T;
    <K extends string>(p: K): <U extends Record<K,V>, V>(obj: U) => V|T;
  };

  // keyof
  <T, K extends keyof U>(val: T, p: K): <U>(obj: U) => U[K]|T;
  <T>(val: T): {
    <K extends keyof U, U>(p: K, obj: U): U[K]|T;
    <K extends keyof U>(p: K): <U>(obj: U) => U[K]|T;
  };

  // same
  <T>(val: T, p: Prop): (obj: Struct<any>) => T;
  <T>(val: T): {
    (p: Prop, obj: Struct<any>): T;
    (p: Prop): (obj: Struct<any>) => T;
  };

  // unbound
  <T>(val: T, p: Prop): <U, V>(obj: U) => V;
  <T>(val: T): {
    <U, V>(p: Prop, obj: U): V;
    (p: Prop): <U, V>(obj: U) => V;
  };

  // mixed
  <T>(val: T): {
    // record
    <K extends string, U extends Record<K,V>, V>(p: K, obj: U): V|T;
    <K extends string>(p: K): <U extends Record<K,V>, V>(obj: U) => V|T;

    // keyof
    <K extends keyof U, U>(p: K, obj: U): U[K]|T;
    <K extends keyof U>(p: K): <U>(obj: U) => U[K]|T;

    // same
    (p: Prop, obj: Struct<any>): T;
    (p: Prop): (obj: Struct<any>) => T;

    // unbound
    <U, V>(p: Prop, obj: U): V;
    (p: Prop): <U, V>(obj: U) => V;

  };
}

propStatisfies: {
  // Record (curry-friendly)
  <V, K extends string, U extends Record<K, V>>(pred: Pred<V>, name: K, obj: U): boolean;
  <V, K extends string>(pred: Pred<V>, name: K): <U extends Record<K, V>>(obj: U) => boolean;
  <V>(pred: Pred<V>): {
    <K extends string, U extends Record<K, V>>(name: K, obj: U): boolean;
    <K extends string>(name: K): <U extends Record<K, V>>(obj: U) => boolean;
  };

  // keyof, info too late on currying
  <T, U>(pred: Pred<T>, name: Prop, obj: U): boolean;
  <T>(pred: Pred<T>, name: Prop): <U>(obj: U) => boolean;
  <T>(pred: Pred<T>): {
    <U>(name: Prop, obj: U): boolean;
    (name: Prop): <U>(obj: U) => boolean;
  };
}

reduce: {
  // sole
  <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult, list: R): TResult;
  <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult): (list: R) => TResult;
  <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced): {
    (acc: TResult, list: R): TResult;
    (acc: TResult): (list: R) => TResult;
  };
}

reduceBy: {
  // sole
  <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any, keyFn: (elem: T) => string, list: R): TResult;
  <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any, keyFn: (elem: T) => string): (list: R) => TResult;
  <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any): {
    (keyFn: (elem: T) => string, list: R): TResult;
    (keyFn: (elem: T) => string): (list: R) => TResult;
  };
  <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): {
    (acc: TResult|any, keyFn: (elem: T) => string, list: R): TResult;
    (acc: TResult|any, keyFn: (elem: T) => string): (list: R) => TResult;
    (acc: TResult|any): {
      (keyFn: (elem: T) => string, list: R): TResult;
      (keyFn: (elem: T) => string): (list: R) => TResult;
    };
  };
}

reduceRight: {
  // sole
  <T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced, acc: TResult|any, list: List<T>): TResult;
  <T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced, acc: TResult|any): (list: List<T>) => TResult;
  <T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced): {
    (acc: TResult|any, list: List<T>): TResult;
    (acc: TResult|any): (list: List<T>) => TResult;
  };
}

reduceWhile: {
  // sole
  <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult;
  <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult): (list: List<T>) => TResult;
  <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced): {
    (acc: TResult, list: List<T>): TResult;
    (acc: TResult): (list: List<T>) => TResult;
  };
  <T, TResult>(pred: (acc: TResult, elem: T) => boolean): {
    (fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult;
    (fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult): (list: List<T>) => TResult;
    (fn: (acc: TResult, elem: T) => TResult|Reduced): {
      (acc: TResult, list: List<T>): TResult;
      (acc: TResult): (list: List<T>) => TResult;
    };
  };
}

remove: {
  // sole
  <T>(start: number, count: number, list: List<T>): T[];
  (start: number, count: number): <T>(list: List<T>) => T[];
  (start: number): {
    <T>(count: number, list: List<T>): T[];
    (count: number): <T>(list: List<T>) => T[];
  };
}

replace: {
  // sole
  (pattern: RegExp|Prop, replacement: Prop, str: string): string;
  (pattern: RegExp|Prop, replacement: Prop): (str: string) => string;
  (pattern: RegExp|Prop): {
    (replacement: Prop, str: string): string;
    (replacement: Prop): (str: string) => string;
  };
}

scan: {
  // sole
  <T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult[];
  <T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult): (list: List<T>) => TResult[];
  <T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced): {
    (acc: TResult, list: List<T>): TResult[];
    (acc: TResult): (list: List<T>) => TResult[];
  };
}

set: {
  // base
  <T, U>(lens: Lens<T, U>, a: U, obj: T): T;
  <T, U>(lens: Lens<T, U>, a: U): (obj: T) => T;
  <T, U>(lens: Lens<T, U>): {
    (a: U, obj: T): T;
    (a: U): (obj: T) => T;
  };

  // unknown
  <T>(lens: UnknownLens, a: any, obj: T): T;
  (lens: UnknownLens, a: any): <T>(obj: T) => T;
  (lens: UnknownLens): {
    <T>(a: any, obj: T): T;
    (a: any): <T>(obj: T) => T;
  };
}

slice: {
  // sole
  <T extends List<any>>(a: number, b: number, list: T): T;
  (a: number, b: number): <T extends List<any>>(list: T) => T;
  (a: number): {
    <T extends List<any>>(b: number, list: T): T;
    (b: number): <T extends List<any>>(list: T) => T;
  };
}

symmetricDifferenceWith: {
  // sole
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>): (list2: List<T>) => T[];
  <T>(pred: (a: T, b: T) => boolean): {
    (list1: List<T>, list2: List<T>): T[];
    (list1: List<T>): (list2: List<T>) => T[];
  };
}

transduce: {
  // sole
  <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>, acc: List<T>, list: List<T>): U;
  <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>, acc: List<T>): (list: List<T>) => U;
  <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>): {
    (acc: List<T>, list: List<T>): U;
    (acc: List<T>): (list: List<T>) => U;
  };
  <T>(xf: (arg: List<T>) => List<T>): {
    <U>(fn: (acc: List<U>, val:U) => List<U>, acc: List<T>, list: List<T>): U;
    <U>(fn: (acc: List<U>, val:U) => List<U>, acc: List<T>): (list: List<T>) => U;
    <U>(fn: (acc: List<U>, val:U) => List<U>): {
      (acc: List<T>, list: List<T>): U;
      (acc: List<T>): (list: List<T>) => U;
    };
  };
}

traverse: {
  // base
  <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Array<U>>;
  <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): (traversable: List<T>) => Applicative<Array<U>>;
  <T>(ap: (v: T) => Applicative<T>): {
    <U>(fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Array<U>>;
    <U>(fn: (v: T) => Applicative<U>): (traversable: List<T>) => Applicative<Array<U>>;
  };

  // general ADT case
  <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Traversable<U>>;
  <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): (traversable: List<T>) => Applicative<Traversable<U>>;
  <T>(ap: (v: T) => Applicative<T>): {
    <U>(fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Traversable<U>>;
    <U>(fn: (v: T) => Applicative<U>): (traversable: List<T>) => Applicative<Traversable<U>>;
  };
}

unionWith: {
  // sole
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
  <T>(pred: (a: T, b: T) => boolean, list1: List<T>): (list2: List<T>) => T[];
  <T>(pred: (a: T, b: T) => boolean): {
    (list1: List<T>, list2: List<T>): T[];
    (list1: List<T>): (list2: List<T>) => T[];
  };
}

until: {
  // sole
  <T, U>(pred: Pred<T>, fn: (val: T) => U, init: U): U;
  <T, U>(pred: Pred<T>, fn: (val: T) => U): (init: U) => U;
  <T>(pred: Pred<T>): {
    <U>(fn: (val: T) => U, init: U): U;
    <U>(fn: (val: T) => U): (init: U) => U;
  };
}

update: {
  // sole
  <T>(index: number, value: T, list: List<T>): T[];
  <T>(index: number, value: T): (list: List<T>) => T[];
  (index: number): {
    <T>(value: T, list: List<T>): T[];
    <T>(value: T): (list: List<T>) => T[];
  };
}

when: {
  // sole
  <T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U, obj: T): U;
  <T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U): (obj: T) => U;
  <T>(pred: Pred<T>): {
    <U>(whenTrueFn: (a: T) => U, obj: T): U;
    <U>(whenTrueFn: (a: T) => U): (obj: T) => U;
  };
}

and: {
  // dispatch to some `and` method:
  <T extends {and?: Function}>(fn1: T, val2: boolean|any): boolean;
  <T extends {and?: Function}>(fn1: T): (val2: boolean|any) => boolean;

  // no generics
  (v1: any, v2: any): boolean;
  (v1: any): (v2: any) => boolean;
}

difference: {
  // sole
  <T>(list1: List<T>, list2: List<T>): T[];
  <T>(list1: List<T>): (list2: List<T>) => T[];
}

identity: {
  // sole
  <T>(a: T): T;
}

inc: {
  // sole
  (n: number): number;
}

init: {
  // sole
  <T extends List<any>>(list: T): T;
}

invert: {
  // sole
  (obj: Struct<Prop>): Obj<List<string>>;
}

invertObj: {
  // sole
  (obj: Struct<Prop>): Obj<string>;
}

isArrayLike: {
  // sole
  (val: any): val in List<any>;
}

isEmpty: {
  // sole
  (val: any): boolean;
}

isNil: {
  // sole
  (val: any): boolean;
}

keys: {
  // sole
  (x: Struct<any>): string[];
}

keysIn: {
  // sole
  (obj: Struct<any>): string[];
}

last: {
  // sole
  <R extends List<T>, T>(list: R): T;
}

length: {
  // sole
  (list: List<any>): number;
}

lensIndex: {
  // generics
  <T>(n: number): ManualLens<T>;

  // non-generic
  (n: number): UnknownLens;
}

lensPath: {
  // generics
  <T>(path: Path): ManualLens<T>;

  // non-generic
  (path: Path): UnknownLens;
}

lensProp: {
  // generics
  <T>(prop: Prop): ManualLens<T>;

  // non-generic
  (prop: Prop): UnknownLens;
}

mean: {
  // sole
  (list: List<number>): number;
}

median: {
  // sole
  (list: List<number>): number;
}

memoize: {
  // sole
  <T>(fn: Variadic<T>): Variadic<T>;
}

min: {
  // sole
  <T extends Ord>(a: T, b: T): T;
  <T extends Ord>(a: T): (b: T) => T;
}

modulo: {
  // sole
  (a: number, b: number): number;
  (a: number): (b: number) => number;
}

multiply: {
  // sole
  (a: number, b: number): number;
  (a: number): (b: number) => number;
}

nAry: {
  // sole
  <T>(n: number, fn: Variadic<T>): Variadic<T>;
  (n: number): <T>(fn: Variadic<T>) => Variadic<T>;
}

negate: {
  // sole
  (n: number): number;
}

none: {
  // sole
  <T>(fn: (a: T) => boolean, list: List<T>): boolean;
  <T>(fn: (a: T) => boolean): (list: List<T>) => boolean;
}

not: {
  // sole
  (value: any): boolean;
}

nth: {
  // sole
  <T>(n: number, list: list<T>): undefined;
  (n: number): <T>(list: list<T>) => undefined;
}

nthArg: {
  // sole
  (n: number): <T>(...a : T[]) => T;
}

objOf: {
  // sole
  <K extends string, V, T extends Record<K, V>>(key: K, value: V): T;
  <K extends string>(key: K): <V, T extends Record<K, V>>(value: V) => T;
}

of: {
  // sole
  <T>(x: T): T[];
}

omit: {
  // sole
  <T>(names: List<Prop>, obj: T): T;
  (names: List<Prop>): <T>(obj: T) => T;
}

once: {
  // sole
  <T>(fn: Variadic<T>): Variadic<T>;
}

or: {
  // dispatch to some `or` method
  <T extends {or?: (alt: U) => T|U}, U>(fn1: T, val2: U): T|U;
  <T extends {or?: (alt: U) => T|U}>(fn1: T): <U>(val2: U) => T|U;

  // values
  <T, U>(a: T, b: U): T|U;
  <T>(a: T): <U>(b: U) => T|U;
}

pair: {
  // sole
  <F, S>(fst: F, snd: S): [F, S];
  <F>(fst: F): <S>(snd: S) => [F, S];
}

partial: {
  // sole
  <T>(fn: Variadic<T>, args: any[]): Variadic<T>;
  <T>(fn: Variadic<T>): (args: any[]) => Variadic<T>;
}

partialRight: {
  // sole
  <T>(fn: Variadic<T>, args: any[]): Variadic<T>;
  <T>(fn: Variadic<T>): (args: any[]) => Variadic<T>;
}

partition: {
  // arrays
  <T>(fn: (a: T) => boolean, list: List<T>): [T[], T[]];
  <T>(fn: (a: T) => boolean): (list: List<T>) => [T[], T[]];

  // objects
  <V, T extends Obj<V>, U extends Obj<V>>(fn: (a: V) => boolean, obj: T & U): [T, U];
  <V>(fn: (a: V) => boolean): <T extends Obj<V>, U extends Obj<V>>(obj: T & U) => [T, U];

  // objects, alternative notation
  <T, U extends Obj<T>>(fn: (a: T) => boolean, obj: U): [Partial<U>, Partial<U>];
  <T>(fn: (a: T) => boolean): <U extends Obj<T>>(obj: U) => [Partial<U>, Partial<U>];
}

pick: {
  // generic 1
  <K extends keyof T, T>(names: List<K>, obj: T): Pick<T, K>;
  <K extends keyof T>(names: List<K>): <T>(obj: T) => Pick<T, K>;

  // generic 2
  <T>(names: List<Prop>, obj: T): Partial<T>;
  (names: List<Prop>): <T>(obj: T) => Partial<T>;
}

pickAll: {
  // sole
  <K, T>(names: List<K>, obj: T): Partial<T>;
  <K>(names: List<K>): <T>(obj: T) => Partial<T>;
}

pickBy: {
  // sole
  <T>(pred: ObjPred<any>, obj: T): Partial<T>;
  (pred: ObjPred<any>): <T>(obj: T) => Partial<T>;
}

pluck: {
  // infer
  <K extends keyof T, T extends Struct<any>>(p: K, list: List<T>): T[K][];
  <K extends keyof T>(p: K): <T extends Struct<any>>(list: List<T>) => T[K][];

  // supply return object type manually when unable to infer it...
  <T>(p: Prop, list: Struct<any>[]): T[];
  (p: Prop): <T>(list: Struct<any>[]) => T[];
}

prepend: {
  // sole
  <T>(el: T, list: List<T>): T[];
  <T>(el: T): (list: List<T>) => T[];
}

product: {
  // sole
  (list: List<number>): number;
}

project: {
  // infer
  <K extends keyof T, T>(props: List<K>, objs: List<T>): Pick<K, T>[];
  <K extends keyof T>(props: List<K>): <T>(objs: List<T>) => Pick<K, T>[];

  // supply return object type manually when unable to infer it...
  <T, U>(props: List<Prop>, objs: List<T>): U[];
  (props: List<Prop>): <T, U>(objs: List<T>) => U[];
}

prop: {
  // keyof version
  <K extends keyof T, T>(p: K, obj: T): T[K];
  <K extends keyof T>(p: K): <T>(obj: T) => T[K];

  // Record version, more curry-friendly
  <K extends string, T extends Record<K, V>, V>(p: K, obj: T): V;
  <K extends string>(p: K): <T extends Record<K, V>, V>(obj: T) => V;
}

propIs: {
  // Record
  <T extends Function, K extends string, U extends Record<K, V>, V>(type: T, name: K, obj: U): obj is (U & Record<K, V>);
  <T extends Function, K extends string>(type: T, name: K): <U extends Record<K, V>, V>(obj: U) => obj is (U & Record<K, V>);
  <T extends Function>(type: T): {
    <K extends string, U extends Record<K, V>, V>(name: K, obj: U): obj is (U & Record<K, V>);
    <K extends string>(name: K): <U extends Record<K, V>, V>(obj: U) => obj is (U & Record<K, V>);
  };

  // curry-friendlier fallback
  (type: Function, name: Prop, obj: Struct<any>): boolean;
  (type: Function, name: Prop): (obj: Struct<any>) => boolean;
  (type: Function): {
    (name: Prop, obj: Struct<any>): boolean;
    (name: Prop): (obj: Struct<any>) => boolean;
  };
}

propSatisfies: {
  // Record
  <V, K extends string, U extends Record<K, V>>(pred: Pred<V>, name: K, obj: U): boolean;
  <V, K extends string>(pred: Pred<V>, name: K): <U extends Record<K, V>>(obj: U) => boolean;
  <V>(pred: Pred<V>): {
    <K extends string, U extends Record<K, V>>(name: K, obj: U): boolean;
    <K extends string>(name: K): <U extends Record<K, V>>(obj: U) => boolean;
  };

  // keyof, info too late on currying
  <T, U>(pred: Pred<T>, name: Pred, obj: U): boolean;
  <T>(pred: Pred<T>, name: Pred): <U>(obj: U) => boolean;
  <T>(pred: Pred<T>): {
    <U>(name: Pred, obj: U): boolean;
    (name: Pred): <U>(obj: U) => boolean;
  };
}

props: {
  // sole
  <T>(ps: List<Prop>, obj: Struct<T>): T[];
  (ps: List<Prop>): <T>(obj: Struct<T>) => T[];
}

range: {
  // sole
  (from: number, to: number): number[];
  (from: number): (to: number) => number[];
}

reduced: {
  // sole
  <T>(el: T): Reduced;
}

reject: {
  // array
  <T>(pred: Pred<T>, list: List<T>): T[];
  <T>(pred: Pred<T>): (list: List<T>) => T[];

  // functor to functor
  <T>(pred: Pred<T>, list: Functor<T>): Functor<T>;
  <T>(pred: Pred<T>): (list: Functor<T>) => Functor<T>;

  // functor to array
  <T>(pred: Pred<T>, list: Functor<T>): T[];
  <T>(pred: Pred<T>): (list: Functor<T>) => T[];

  // object
  <T, U extends Obj<T>>(pred: Pred<T>, obj: U): Partial<U>;
  <T>(pred: Pred<T>): <U extends Obj<T>>(obj: U) => Partial<U>;
}

repeat: {
  // sole
  <T>(a: T, n: number): T[];
  <T>(a: T): (n: number) => T[];
}

reverse: {
  // sole
  <T>(list: List<T>): T[];
}

sequence: {
  // common case of array as traversable
  <T>(fn: (v: T) => Applicative<T>, traversable: List<Applicative<T>>): Applicative<Array<T>>;
  <T>(fn: (v: T) => Applicative<T>): (traversable: List<Applicative<T>>) => Applicative<Array<T>>;

  // general ADT case:
  <T>(fn: (v: T) => Applicative<T>, traversable: Traversable<Applicative<T>  >): Applicative<Traversable<T>>;
  <T>(fn: (v: T) => Applicative<T>): (traversable: Traversable<Applicative<T>  >) => Applicative<Traversable<T>>;
}

sort: {
  // sole
  <T>(fn: (a: T, b: T) => number, list: List<T>): T[];
  <T>(fn: (a: T, b: T) => number): (list: List<T>) => T[];
}

sortBy: {
  // sole
  <T>(fn: (a: T) => string, list: List<T>): T[];
  <T>(fn: (a: T) => string): (list: List<T>) => T[];
}

sortWith: {
  // sole
  <T>(comparators: List<(a: T, b: T) => number>, list: List<T>): T[];
  <T>(comparators: List<(a: T, b: T) => number>): (list: List<T>) => T[];
}

split: {
  // sole
  (sep: RegExp|Prop, str: string): string[];
  (sep: RegExp|Prop): (str: string) => string[];
}

splitAt: {
  // string
  (index: number, list: string): string[];
  (index: number): (list: string) => string[];

  // array
  <T>(index: number, list: List<T>): T[][];
  (index: number): <T>(list: List<T>) => T[][];
}

splitEvery: {
  // sole
  <R extends List<T>, T>(a: number, list: R): R[];
  (a: number): <R extends List<T>, T>(list: R) => R[];
}

splitWhen: {
  // sole
  <T, R extends List<T>>(pred: Pred<T>, list: R): R[];
  <T>(pred: Pred<T>): <R extends List<T>>(list: R) => R[];
}

subtract: {
  // sole
  (a: number, b: number): number;
  (a: number): (b: number) => number;
}

sum: {
  // sole
  (list: List<number>): number;
}

symmetricDifference: {
  // sole
  <T>(list1: List<T>, list2: List<T>): T[];
  <T>(list1: List<T>): (list2: List<T>) => T[];
}

tail: {
  // sole
  <T exetnds List<any>>(list: T): T;
}

take: {
  // sole
  <T extends List<any>>(n: number, xs: T): T;
  (n: number): <T extends List<any>>(xs: T) => T;
}

takeLast: {
  // sole
  <T extends List<any>>(n: number, xs: T): T;
  (n: number): <T extends List<any>>(xs: T) => T;
}

takeLastWhile: {
  // sole
  <T, R extends List<T>>(pred: Pred<T>, list: R): R;
  <T>(pred: Pred<T>): <R extends List<T>>(list: R) => R;
}

takeWhile: {
  // sole
  <T, R extends List<T>>(pred: Pred<T>, list: R): R;
  <T>(pred: Pred<T>): <R extends List<T>>(list: R) => R;
}

tap: {
  // sole
  <T>(fn: (a: T) => any, value: T): T;
  <T>(fn: (a: T) => any): (value: T) => T;
}

test: {
  // sole
  (regexp: RegExp, str: Prop): boolean;
  (regexp: RegExp): (str: Prop) => boolean;
}

times: {
  // sole
  <T>(fn: (i: number) => T, n: number): T[];
  <T>(fn: (i: number) => T): (n: number) => T[];
}

toLower: {
  // sole
  (str: string): string;
}

toPairs: {
  // sole
  <T>(obj: Obj<T>): [string, T][];
}

toPairsIn: {
  // generics
  <T>(obj: Obj<T>): [string, T][];

  // non-generic
  (obj: Object): [string, any][];
}

toString: {
  // sole
  (val: StringRepresentable<string> | any): string;
}

toUpper: {
  // sole
  (str: string): string;
}

transpose: {
  // generics 1
  <T>(list: List<List<T>>): T[][];

  // generics 2
  (list: List<List<any>>): any[][];
}

trim: {
  // sole
  (str: string): string;
}

tryCatch: {
  // sole
  <T>(tryer: Variadic<T>, catcher: Variadic<T>): Variadic<T>;
  <T>(tryer: Variadic<T>): (catcher: Variadic<T>) => Variadic<T>;
}

type: {
  // sole
  (val: any): string;
}

unapply: {
  // sole
  <T>(fn: (args: any[]) => T): Variadic<T>;
}

unary: {
  // sole
  <T, U>(fn: (a: T, ...args: any[]) => U): (a: T) => U;
}

uncurryN: {
  // sole
  <T>(len: number, fn: (a: any) => any): Variadic<T>;
  (len: number): <T>(fn: (a: any) => any) => Variadic<T>;
}

unfold: {
  // sole
  <T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T): TResult[];
  <T, TResult>(fn: (seed: T) => [TResult, T] | false): (seed: T) => TResult[];
}

union: {
  // sole
  <T>(as: List<T>, bs: List<T>): T[];
  <T>(as: List<T>): (bs: List<T>) => T[];
}

uniq: {
  // sole
  <T>(list: List<T>): T[];
}

uniqBy: {
  // sole
  <T, U>(fn: (a: T) => U, list: List<T>): T[];
  <T, U>(fn: (a: T) => U): (list: List<T>) => T[];
}

uniqWith: {
  // sole
  <T, U>(pred: (x: T, y: T) => boolean, list: List<T>): T[];
  <T>(pred: (x: T, y: T) => boolean): <U>(list: List<T>) => T[];
}

unless: {
  // sole
  <T, U>(pred: Pred<T>, whenFalseFn: (a: T) => U, obj: T): U;
  <T, U>(pred: Pred<T>, whenFalseFn: (a: T) => U): (obj: T) => U;
  <T>(pred: Pred<T>): {
    <U>(whenFalseFn: (a: T) => U, obj: T): U;
    <U>(whenFalseFn: (a: T) => U): (obj: T) => U;
  };
}

unnest: {
  // sole
  <T>(x: List<List<T>>): T[];
}

useWith: {
  // sole
  <T>(fn: Variadic<T>, transformers: List<Function>): Variadic<T>;
  <T>(fn: Variadic<T>): (transformers: List<Function>) => Variadic<T>;
}

values: {
  // Struct
  <T>(obj: Struct<T>): T[];

  // Object
  <T>(obj: Object): any[];
}

valuesIn: {
  // Struct
  <T>(obj: Struct<T>): T[];

  // Object
  <T>(obj: Object): any[];
}

view: {
  // smart approach, unreliable
  <T, U>(lens: Lens<T, U>, obj: T): U;
  <T, U>(lens: Lens<T, U>): (obj: T) => U;

  // lens with type manually set
  <T>(lens: ManualLens<T>, obj: Struct<any>): T;
  <T>(lens: ManualLens<T>): (obj: Struct<any>) => T;

  // unknown lens, manually supply return type. does this add to the above case?
  <T>(lens: UnknownLens, obj: Struct<any>): any;
  (lens: UnknownLens): <T>(obj: Struct<any>) => any;
}

where: {
  // heterogeneous version
  <T extends Obj<any>>(spec: {[P in keyof K]?: Pred<T[P]>}, testObj: T): boolean;
  <T extends Obj<any>>(spec: {[P in keyof K]?: Pred<T[P]>}): (testObj: T) => boolean;

  // homogeneous version
  <T>(spec: Obj<Pred<T>>, testObj: Obj<T>): boolean;
  <T>(spec: Obj<Pred<T>>): (testObj: Obj<T>) => boolean;

  // DIY "fill in the type params yourself" version
  <T, U>(spec: T, testObj: U): boolean;
  <T>(spec: T): <U>(testObj: U) => boolean;
}

whereEq: {
  // heterogeneous version
  <T extends Obj<any>>(spec: Partial<T>, testObj: T): boolean;
  <T extends Obj<any>>(spec: Partial<T>): (testObj: T) => boolean;

  // homogeneous version
  <T>(spec: Obj<T>, testObj: Obj<T>): boolean;
  <T>(spec: Obj<T>): (testObj: Obj<T>) => boolean;

  // DIY "fill in the type params yourself" version
  <T, U>(spec: T, testObj: U): boolean;
  <T>(spec: T): <U>(testObj: U) => boolean;
}

without: {
  // sole
  <T>(list1: List<T>, list2: List<T>): T[];
  <T>(list1: List<T>): (list2: List<T>) => T[];
}

xprod: {
  // sole
  <K, V>(as: List<K>, bs: List<V>): KeyValuePair<K, V>[];
  <K>(as: List<K>): <V>(bs: List<V>) => KeyValuePair<K, V>[];
}

zip: {
  // sole
  <K, V>(list1: List<K>, list2: List<V>): KeyValuePair<K, V>[];
  <K>(list1: List<K>): <V>(list2: List<V>) => KeyValuePair<K, V>[];
}

zipObj: {
  // sole
  <T>(keys: List<Prop>, values: List<T>): Obj<T>;
  (keys: List<Prop>): <T>(values: List<T>) => Obj<T>;
}

zipWith: {
  // sole
  <T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>, list2: List<U>): TResult[];
  <T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>): (list2: List<U>) => TResult[];
  <T, U, TResult>(fn: (x: T, y: U) => TResult): {
    (list1: List<T>, list2: List<U>): TResult[];
    (list1: List<T>): (list2: List<U>) => TResult[];
  };
}

F(): false;

T(): true;

head: {
  // triple
  <T0, T1, T2>(list: [T0, T1, T2]): T0;

  // tuple
  <T0, T1>(list: [T0, T1]): T0;

  // single
  <T>(list: [T]): T;

  // any
  <T extends List<any>>(list: T): any;
}

curryN: {
  // sole
  <T>(length: number, fn: Variadic<T>): Variadic<T>;
  (length: number): <T>(fn: Variadic<T>) => Variadic<T>;
}
