import {
  CurriedFunction1,
  CurriedFunction2,
  CurriedFunction3,
  CurriedFunction4,
  CurriedFunction5,
  CurriedFunction6,
  CurriedFunction7,
  CurriedFunction8,
  CurriedFunction9
} from '../interfaces'

/**
 * Returns a curried equivalent of the provided function.
 */
declare function curry<T1, TResult>(fn: (a: T1) => TResult): CurriedFunction1<T1, TResult>;
declare function curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
declare function curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
declare function curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
declare function curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
declare function curry<T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7) => TResult): CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, TResult>;
declare function curry<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8) => TResult): CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, TResult>;
declare function curry<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9) => TResult): CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>;

export = curry;
