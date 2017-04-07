// Fantasyland export interfaces

// TODO: incorporate generalized inheritance e.g.: `<U extends
// Applicative, V extends Traversable>`; possibly needs [rank 2
// polymorphism](https://github.com/Microsoft/TypeScript/issues/1213).

export interface Setoid<T> {
    equals(b: Setoid<T>): boolean;
}

export interface Semigroup<T> {
    concat(b: Semigroup<T>): Semigroup<T>;
}

export interface Monoid<T> extends Semigroup<T> {
    /* static */ empty<T>(): Monoid<T>;
}

export interface Functor<T> {
    map<U>(fn: (t: T) => U): Functor<U>;
}

export interface Apply<T> extends Functor<T> {
    apply<U>(fn: Apply<(t: T) => U>): Apply<U>;
}

export interface Applicative<T> extends Apply<T> {
    /* static */ of<U>(a: U): Applicative<U>;
}

export interface Alt<T> extends Functor<T> {
    alt(b: T): Alt<T>;
}

export interface Plus<T> extends Alt<T> {
    /* static */ zero<T>(): Plus<T>;
}

export interface Alternative<T> extends Plus<T>, Applicative<T> {
}

export interface Foldable<T> {
    reduce<U>(fn: (u: U, t: T) => U, u: U): U;
}

export interface Traversable<T> extends Functor<T>, Foldable<T> {
    traverse<U, V>(fn: (t: T) => Applicative<U>, of: (v: V) => Applicative<V>): Applicative<Traversable<U>>;
}

export interface Chain<T> extends Apply<T> {
    chain<U>(fn: (t: T) => Chain<U>): Chain<U>;
}

export interface ChainRec<T> extends Chain<T> {
    /* static */ chainRec<A, B, C>(f: (next: (a: A) => C, done: (b: B) => C, value: A) => ChainRec<C>, i: A): ChainRec<B>;
}

export interface Monad<T> extends Applicative<T>, Chain<T> {
}

export interface Extend<T> {
    extend<U>(f: (v: Extend<T>) => U): Extend<U>;
}

export interface Comonad<T> extends Functor<T>, Extend<T> {
    extract<U>(): U; // 'same U as in extend's f -- how to bind?
}

export interface Bifunctor<T, U> extends Functor<T> /*, Functor<U>*/ {
    bimap<B, D>(f: (v: T) => B, g: (v: U) => D): Bifunctor<B, D>;
}

export interface Profunctor<T, U> extends Functor<T> /*, Functor<U>*/ {
    promap<B, D>(f: (v: T) => B, g: (v: U) => D): Profunctor<B, D>;
}

// simple types

type Index = string | number;
type Primitive = string | number | boolean;
type Ord = string | number | boolean | Date;

export interface Dictionary<T> {
    [index: string]: T;
}

type Obj<T> = Dictionary<T>;
type List<T> = ArrayLike<T>;
type StringLike = string | StringRepresentable<string>;
type Prop = Index | StringRepresentable<Index>;
type Path = List<Prop>;
type Struct<T> = Obj<T> | List<T>;
type AccOpts<T, U> = List<any> | Obj<any> | Transformer<T, U, U>;
type Pred<T> = (v: T) => boolean;
type ObjPred<T> = (value: T, key: string) => boolean;

// Ramda export interfaces

export interface Type<T> extends Function {
    new (...args: any[]): T;
}

export interface Variadic<T> {
    (...args: any[]): T;
}

export interface KeyValuePair<K, V> extends Array<K | V> { 0: K; 1: V; }

export interface Transformer<T, Acc, Res> {
    step: (acc: Acc, v: T) => Acc;
    init: () => Acc;
    result: (acc: Acc) => Res; // = R.identity
}

export interface NumericDictionary<T> {
    [index: number]: T;
}

export interface StringRepresentable<T> {
    toString(): T;
}

export interface NestedObj<T> {
    [index: string]: T | NestedObj<T>;
}

// export interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
// export interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
export interface NestedArray<T> {
    [index: number]: T | NestedArray<T>;
    length: number;
}

// // an unfortunate compromise -- while the actual lens should be generic, for the purpose of TS the structure should be supplied beforehand
// export interface KeyLens<T extends Struct<any>, K extends keyof T> {
//     // <T extends Struct<any>>
//     (obj: T): T[K]; // get
//     set(v: T[K], obj: T): T;
//     // map(fn: (v: T[K]) => T[K], obj: T): T
// }
export interface Lens<T, U> {
    (obj: T): U; // get
    set(v: U, obj: T): T;
    // map(fn: (v: U) => U, obj: T): T
}
export interface ManualLens<U> {
    <T extends Struct<any>>(obj: T): U; // get
    set<T extends Struct<any>>(v: U, obj: T): T;
    // <T extends Struct<any>>map(fn: (v: U) => U, obj: T): T
}
export interface UnknownLens {
    <T, U>(obj: T): U; // get
    set<T, U>(v: U, obj: T): T;
    // map<T,U>(fn: (v: U) => U, obj: T): T
}

// @see https://gist.github.com/donnut/fd56232da58d25ceecf1, comment by @albrow

// export interface CurriedFunction1<T1, R> {
//     (v1: T1): R;
// }
type CurriedFunction1<T1, R> = (v1: T1) => R;

export interface CurriedFunction2<T1, T2, R> {
    (v1: T1): (v2: T2) => R;
    (v1: T1, v2: T2): R;
}
export interface CurriedFunction3<T1, T2, T3, R> {
    (v1: T1): CurriedFunction2<T2, T3, R>;
    (v1: T1, v2: T2): (v3: T3) => R;
    (v1: T1, v2: T2, v3: T3): R;
}
export interface CurriedFunction4<T1, T2, T3, T4, R> {
    (v1: T1): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, v2: T2): CurriedFunction2<T3, T4, R>;
    (v1: T1, v2: T2, v3: T3): (v4: T4) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4): R;
}
export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (v1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (v1: T1, v2: T2): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction2<T4, T5, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): (v5: T5) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
}
export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (v1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
    (v1: T1, v2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction3<T4, T5, T6, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction2<T5, T6, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): (v6: T6) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): R;
}
export interface CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R> {
    (v1: T1): CurriedFunction6<T2, T3, T4, T5, T6, T7, R>;
    (v1: T1, v2: T2): CurriedFunction5<T3, T4, T5, T6, T7, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction4<T4, T5, T6, T7, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction3<T5, T6, T7, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction2<T6, T7, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): (v7: T7) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): R;
}
export interface CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
    (v1: T1): CurriedFunction7<T2, T3, T4, T5, T6, T7, T8, R>;
    (v1: T1, v2: T2): CurriedFunction6<T3, T4, T5, T6, T7, T8, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction5<T4, T5, T6, T7, T8, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction4<T5, T6, T7, T8, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction3<T6, T7, T8, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction2<T7, T8, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): (v8: T8) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8): R;
}
export interface CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
    (v1: T1): CurriedFunction8<T2, T3, T4, T5, T6, T7, T8, T9, R>;
    (v1: T1, v2: T2): CurriedFunction7<T3, T4, T5, T6, T7, T8, T9, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction6<T4, T5, T6, T7, T8, T9, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction5<T5, T6, T7, T8, T9, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction4<T6, T7, T8, T9, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction3<T7, T8, T9, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): CurriedFunction2<T8, T9, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8): (v9: T9) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9): R;
}
