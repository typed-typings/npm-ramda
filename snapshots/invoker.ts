import * as R from '../ramda/dist/index';

// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, R>(method: N) => R.CurriedFunction1<V, R>
R.invoker(0);
// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, T1, R>(method: N) => R.CurriedFunction2<T1, V, R>
R.invoker(1);
// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, T1, T2, R>(method: N) => R.CurriedFunction3<T1, T2, V, R>
R.invoker(2);
// @dts-jest:pass:snap -> <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(method: N) => R.CurriedFunction6<T1, T2, T3, T4, T5, V, R>
R.invoker(5);
// @dts-jest:pass:snap -> <N extends string, R>(method: N) => R.Variadic<R>
R.invoker(6);
// @dts-jest:pass:snap -> <N extends string, R>(method: N) => R.Variadic<R>
R.invoker(7);
