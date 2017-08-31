import R_invoker = require('../ramda/dist/src/invoker');

// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, R>(method: N) => CurriedFunction1<V, R>
R_invoker(0);
// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, T1, R>(method: N) => CurriedFunction2<T1, V, R>
R_invoker(1);
// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, T1, T2, R>(method: N) => CurriedFunction3<T1, T2, V, R>
R_invoker(2);
// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(method: N) => CurriedFunction6<T1, T2, T3, T4, T5, V, R>
R_invoker(5);
// @dts-jest:pass:snap -> <N extends string, R>(method: N) => (...args: any[]) => R
R_invoker(6);
// @dts-jest:pass:snap -> <N extends string, R>(method: N) => (...args: any[]) => R
R_invoker(7);
