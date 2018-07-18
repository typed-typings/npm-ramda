import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const path: path_00;
type path_00 = {
    /**
     * Retrieve the value at a given path.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> {a} -> a | Undefined
     * @param {Array} path The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path`.
     * @see R.prop
     * @example
     *
     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
     */
    (path: Path): path_10;
    <T1 extends string, T2 extends string, TResult>(path: [T1, T2], obj: {
        [K1 in T1]: {
            [K2 in T2]: TResult;
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: TResult;
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: TResult;
                };
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: TResult;
                    };
                };
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: TResult;
                        };
                    };
                };
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: {
                                [K7 in T7]: TResult;
                            };
                        };
                    };
                };
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: {
                                [K7 in T7]: {
                                    [K8 in T8]: TResult;
                                };
                            };
                        };
                    };
                };
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, T9 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8, T9], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: {
                                [K7 in T7]: {
                                    [K8 in T8]: {
                                        [K9 in T9]: TResult;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    }): TResult;
    <K1 extends string, K2 extends string, TResult>(path: [K1, K2], obj: Record<K1, Record<K2, TResult>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, TResult>(path: [K1, K2, K3], obj: Record<K1, Record<K2, Record<K3, TResult>>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, K4 extends string, TResult>(path: [K1, K2, K3, K4], obj: Record<K1, Record<K2, Record<K3, Record<K4, TResult>>>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, TResult>(path: [K1, K2, K3, K4, K5], obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, TResult>>>>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6], obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, Record<K6, TResult>>>>>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, K7 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6, K7], obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, Record<K6, Record<K7, TResult>>>>>>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, K7 extends string, K8 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6, K7, K8], obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, Record<K6, Record<K7, Record<K8, TResult>>>>>>>>): TResult;
    <K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, K7 extends string, K8 extends string, K9 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6, K7, K8, K9], obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, Record<K6, Record<K7, Record<K8, Record<K9, TResult>>>>>>>>>): TResult;
    <T1 extends string, T2 extends string, TResult>(path: [T1, T2], obj: {
        [K1 in T1]: {
            [K2 in T2]: TResult;
        };
    }): TResult;
    <T1 extends string, T2 extends number, TResult>(path: [T1, T2], obj: {
        [K1 in T1]: TResult[];
    }): TResult;
    <T1 extends number, T2 extends string, TResult>(path: [T1, T2], obj: Array<{
        [K2 in T2]: TResult;
    }>): TResult;
    <T1 extends number, T2 extends number, TResult>(path: [T1, T2], obj: TResult[][]): TResult;
    <T1 extends string, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: TResult;
            };
        };
    }): TResult;
    <T1 extends string, T2 extends string, T3 extends number, TResult>(path: [T1, T2, T3], obj: {
        [K1 in T1]: {
            [K2 in T2]: TResult[];
        };
    }): TResult;
    <T1 extends string, T2 extends number, T3 extends string, TResult>(path: [T1, T2, T3], obj: {
        [K1 in T1]: Array<{
            [K3 in T3]: TResult;
        }>;
    }): TResult;
    <T1 extends string, T2 extends number, T3 extends number, TResult>(path: [T1, T2, T3], obj: {
        [K1 in T1]: TResult[][];
    }): TResult;
    <T1 extends number, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: Array<{
        [K2 in T2]: {
            [K3 in T3]: TResult;
        };
    }>): TResult;
    <T1 extends number, T2 extends string, T3 extends number, TResult>(path: [T1, T2, T3], obj: Array<{
        [K2 in T2]: TResult[];
    }>): TResult;
    <T1 extends number, T2 extends number, T3 extends string, TResult>(path: [T1, T2, T3], obj: Array<Array<{
        [K3 in T3]: TResult;
    }>>): TResult;
    <T1 extends number, T2 extends number, T3 extends number, TResult>(path: [T1, T2, T3], obj: TResult[][][]): TResult;
    (_path: PH, object: {
    }): path_01;
    <$SEL extends "11">(): <T>(path: Path, object: {
    }) => path_11<T>;
    <$SEL extends "01">(): (_path: PH, object: {
    }) => path_01;
    <$SEL extends "1">(): (path: Path) => path_10;
    <T>(path: Path, object: {
    }): path_11<T>;
};
type path_10 = {
    <T>(object: {
    }): path_11<T>;
};
type path_01 = {
    <T>(path: Path): path_11<T>;
};
type path_11<T> = T | undefined;
export = path;
