declare const cond: cond_0;
type cond_0 = {
    /**
     * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
     * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
     * to `fn` are applied to each of the predicates in turn until one returns a
     * "truthy" value, at which point `fn` returns the result of applying its
     * arguments to the corresponding transformer. If none of the predicates
     * matches, `fn` returns undefined.
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Logic
     * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
     * @param {Array} pairs A list of [predicate, transformer]
     * @return {Function}
     * @example
     *
     *      var fn = R.cond([
     *        [R.equals(0),   R.always('water freezes at 0°C')],
     *        [R.equals(100), R.always('water boils at 100°C')],
     *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
     *      ]);
     *      fn(0); //=> 'water freezes at 0°C'
     *      fn(50); //=> 'nothing special happens at 50°C'
     *      fn(100); //=> 'water boils at 100°C'
     */
    <R>(fns: Array<[() => boolean, () => R]>): cond_0arity_1<R>;
    <T1, R>(fns: Array<[(v1: T1) => boolean, (v1: T1) => R]>): cond_1arity_1<T1, R>;
    <T1, T2, R>(fns: Array<[(v1: T1, v2: T2) => boolean, (v1: T1, v2: T2) => R]>): cond_2arity_1<T1, T2, R>;
    <T1, T2, T3, R>(fns: Array<[(v1: T1, v2: T2, v3: T3) => boolean, (v1: T1, v2: T2, v3: T3) => R]>): cond_3arity_1<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(fns: Array<[(v1: T1, v2: T2, v3: T3, v4: T4) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4) => R]>): cond_4arity_1<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(fns: Array<[(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R]>): cond_5arity_1<T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(fns: Array<[(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R]>) => cond_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(fns: Array<[(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R]>) => cond_5arity_1<T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(fns: Array<[(v1: T1, v2: T2, v3: T3, v4: T4) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4) => R]>) => cond_4arity_1<T1, T2, T3, T4, R>;
    <$SEL extends "1", $KIND extends "3arity">(): <T1, T2, T3, R>(fns: Array<[(v1: T1, v2: T2, v3: T3) => boolean, (v1: T1, v2: T2, v3: T3) => R]>) => cond_3arity_1<T1, T2, T3, R>;
    <$SEL extends "1", $KIND extends "2arity">(): <T1, T2, R>(fns: Array<[(v1: T1, v2: T2) => boolean, (v1: T1, v2: T2) => R]>) => cond_2arity_1<T1, T2, R>;
    <$SEL extends "1", $KIND extends "1arity">(): <T1, R>(fns: Array<[(v1: T1) => boolean, (v1: T1) => R]>) => cond_1arity_1<T1, R>;
    <$SEL extends "1", $KIND extends "0arity">(): <R>(fns: Array<[() => boolean, () => R]>) => cond_0arity_1<R>;
    <T1, T2, T3, T4, T5, T6, R>(fns: Array<[(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R]>): cond_6arity_1<T1, T2, T3, T4, T5, T6, R>;
};
type cond_0arity_1<R> = () => R;
type cond_1arity_1<T1, R> = (v1: T1) => R;
type cond_2arity_1<T1, T2, R> = (v1: T1, v2: T2) => R;
type cond_3arity_1<T1, T2, T3, R> = (v1: T1, v2: T2, v3: T3) => R;
type cond_4arity_1<T1, T2, T3, T4, R> = (v1: T1, v2: T2, v3: T3, v4: T4) => R;
type cond_5arity_1<T1, T2, T3, T4, T5, R> = (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R;
type cond_6arity_1<T1, T2, T3, T4, T5, T6, R> = (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R;
export = cond;
