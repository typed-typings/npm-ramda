declare module Helpers {
  interface ListIterator<T, TResult> {
    (value: T, index: number, list: T[]): TResult;
  }

  interface List<T> {
    [index: number]: T;
    length: number;
  }

  interface ArrayLike {
      nodeType: number;
  }

  interface FuncIndex extends Function {
    (): any;
    idx: Function;
  }
}

interface RamdaStatic {

  substring(
      indexA: number,
      indexB: number,
      The: string): string;

  substringFrom(
      indexA: number,
      The: string): string;

  substringTo(
      indexA: number,
      The: string): string;

  toString(): string;

  isArray(
      a: any[]): boolean;

  isArrayLike(
      a: Array<any>): boolean;

  isArrayLike(
      a: ArrayLike): boolean;

  curry(
      fn: (...args: any[]) => any,
      fnArity?: number): any;

  nAry(
      a: number,
      fn: () => any): any;
  nAry(
      a: number,
      fn: (arg0: any, ...rest: any[]) => any): any;

  arity(
      a: number,
      fn: Function): any;
  arity(
      a: number,
      fn: (...args: any[]) => any): any;

  unary(
      fn: Function): any;

  unary(
      fn: (...args: any[]) => any): any;

  binary(
      fn: Function): any;

  binary(
      fn: (...args: any[]) => any): any;

  invoker(
      name: string,
      obj: any,
      len?: number): any;

  useWith(
      fn: Function,
      ...rest: Function[]): any;

  forEach<T>(
      fn: ListIterator<T, void>,
      list: List<T>): List<T>;

  clone<T>(
      list: List<T>): List<T>

  // Core functions

  isEmpty<T>(
      list: List<T>): boolean;

  prepend<T>(
      el: T,
      list: List<T>): List<T>;
  cons<T>(
      el: T,
      list: List<T>): List<T>;

  head<T>(list: List<T>): List<T>;
  car<T>(list: List<T>): List<T>;

  last<T>(list: List<T>): List<T>;

  tail<T>(list: List<T>): List<T>;
  cdr<T>(list: List<T>): List<T>;

  isAtom(x: any): boolean;

  append<T>(
      el: T,
      list: List<T>): List<T>;
  push<T>(
      el: T,
      list: List<T>): List<T>;

  concat<T>(
      list1: List<T>,
      list2: List<T>): List<T>;

  identity(a: any): any;
  I(a: any): any;

  times(
      fn: (i: number) => any,
      n: number): List<any>

  repeatN(
      value: number,
      n: number): any[];

  compose(
      ...Functions: Function[]): Function;

  pipe(
      ...Functions: Function[]): Function;

  flip(
      fn: (arg0: any, ...args: any[]) => any): Function
}

declare var R: RamdaStatic;
declare module 'ramda' {
  export = R;
}

declare function forEach<T>(
      fn: ListIterator<T, void>,
      list: List<T>): List<T>;
declare module 'ramda' {
  export interface forEach<T>
  var idx: Function
}



