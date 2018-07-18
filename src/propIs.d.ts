import { Constructor, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propIs: propIs_000;
type propIs_000 = {
    /**
     * Returns `true` if the specified object property is of the given type;
     * `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category Type
     * @sig Type -> String -> Object -> Boolean
     * @param {Function} type
     * @param {String} name
     * @param {*} obj
     * @return {Boolean}
     * @see R.is, R.propSatisfies
     * @example
     *
     *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
     *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
     *      R.propIs(Number, 'x', {});            //=> false
     */
    <T>(constructor: Constructor<T>): propIs_guard_100<T>;
    (constructor: Constructor<any>): propIs_general_100;
    <K extends string>(_constructor: PH, key: K): propIs_guard_010<K>;
    (_constructor: PH, key: Property): propIs_general_010;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_110<T, K>;
    (constructor: Constructor<any>, key: Property): propIs_general_110;
    <U extends {
    }>(_constructor: PH, _key: PH, object: U): propIs_guard_001<U>;
    (_constructor: PH, _key: PH, object: {
    }): propIs_general_001;
    <U extends {
    }, K extends string>(_constructor: PH, key: K, object: U): propIs_guard_011<U, K>;
    (_constructor: PH, key: Property, object: {
    }): propIs_general_011;
    <T, U extends {
    }>(constructor: Constructor<T>, _key: PH, object: U): propIs_guard_101<T, U>;
    (constructor: Constructor<any>, _key: PH, object: {
    }): propIs_general_101;
    <T, U extends {
    }, K extends string>(constructor: Constructor<T>, key: K, object: U): object is U & Record<K, T>;
    <$SEL extends "111", $KIND extends "general">(): (constructor: Constructor<any>, key: Property, object: {
    }) => propIs_general_111;
    <$SEL extends "111", $KIND extends "guard">(): <T, U extends {
    }, K extends string>(constructor: Constructor<T>, key: K, object: U) => object is U & Record<K, T>;
    <$SEL extends "101", $KIND extends "general">(): (constructor: Constructor<any>, _key: PH, object: {
    }) => propIs_general_101;
    <$SEL extends "101", $KIND extends "guard">(): <T, U extends {
    }>(constructor: Constructor<T>, _key: PH, object: U) => propIs_guard_101<T, U>;
    <$SEL extends "011", $KIND extends "general">(): (_constructor: PH, key: Property, object: {
    }) => propIs_general_011;
    <$SEL extends "011", $KIND extends "guard">(): <U extends {
    }, K extends string>(_constructor: PH, key: K, object: U) => propIs_guard_011<U, K>;
    <$SEL extends "001", $KIND extends "general">(): (_constructor: PH, _key: PH, object: {
    }) => propIs_general_001;
    <$SEL extends "001", $KIND extends "guard">(): <U extends {
    }>(_constructor: PH, _key: PH, object: U) => propIs_guard_001<U>;
    <$SEL extends "11", $KIND extends "general">(): (constructor: Constructor<any>, key: Property) => propIs_general_110;
    <$SEL extends "11", $KIND extends "guard">(): <T, K extends string>(constructor: Constructor<T>, key: K) => propIs_guard_110<T, K>;
    <$SEL extends "01", $KIND extends "general">(): (_constructor: PH, key: Property) => propIs_general_010;
    <$SEL extends "01", $KIND extends "guard">(): <K extends string>(_constructor: PH, key: K) => propIs_guard_010<K>;
    <$SEL extends "1", $KIND extends "general">(): (constructor: Constructor<any>) => propIs_general_100;
    <$SEL extends "1", $KIND extends "guard">(): <T>(constructor: Constructor<T>) => propIs_guard_100<T>;
    (constructor: Constructor<any>, key: Property, object: {
    }): propIs_general_111;
};
type propIs_guard_100<T> = {
    <K extends string>(key: K): propIs_guard_110<T, K>;
    <U extends {
    }>(_key: PH, object: U): propIs_guard_101<T, U>;
    <$SEL extends "11">(): <U extends {
    }, K extends string>(key: K, object: U) => object is U & Record<K, T>;
    <$SEL extends "01">(): <U extends {
    }>(_key: PH, object: U) => propIs_guard_101<T, U>;
    <$SEL extends "1">(): <K extends string>(key: K) => propIs_guard_110<T, K>;
    <U extends {
    }, K extends string>(key: K, object: U): object is U & Record<K, T>;
};
type propIs_general_100 = {
    (key: Property): propIs_general_110;
    (_key: PH, object: {
    }): propIs_general_101;
    <$SEL extends "11">(): (key: Property, object: {
    }) => propIs_general_111;
    <$SEL extends "01">(): (_key: PH, object: {
    }) => propIs_general_101;
    <$SEL extends "1">(): (key: Property) => propIs_general_110;
    (key: Property, object: {
    }): propIs_general_111;
};
type propIs_guard_010<K extends string> = {
    <T>(constructor: Constructor<T>): propIs_guard_110<T, K>;
    <U extends {
    }>(_constructor: PH, object: U): propIs_guard_011<U, K>;
    <$SEL extends "11">(): <T, U extends {
    }>(constructor: Constructor<T>, object: U) => object is U & Record<K, T>;
    <$SEL extends "01">(): <U extends {
    }>(_constructor: PH, object: U) => propIs_guard_011<U, K>;
    <$SEL extends "1">(): <T>(constructor: Constructor<T>) => propIs_guard_110<T, K>;
    <T, U extends {
    }>(constructor: Constructor<T>, object: U): object is U & Record<K, T>;
};
type propIs_general_010 = {
    (constructor: Constructor<any>): propIs_general_110;
    (_constructor: PH, object: {
    }): propIs_general_011;
    <$SEL extends "11">(): (constructor: Constructor<any>, object: {
    }) => propIs_general_111;
    <$SEL extends "01">(): (_constructor: PH, object: {
    }) => propIs_general_011;
    <$SEL extends "1">(): (constructor: Constructor<any>) => propIs_general_110;
    (constructor: Constructor<any>, object: {
    }): propIs_general_111;
};
type propIs_guard_110<T, K extends string> = {
    <U extends {
    }>(object: U): object is U & Record<K, T>;
};
type propIs_general_110 = {
    (object: {
    }): propIs_general_111;
};
type propIs_guard_001<U extends {
}> = {
    <T>(constructor: Constructor<T>): propIs_guard_101<T, U>;
    <K extends string>(_constructor: PH, key: K): propIs_guard_011<U, K>;
    <$SEL extends "11">(): <T, K extends string>(constructor: Constructor<T>, key: K) => propIs_guard_111<T, U, K>;
    <$SEL extends "01">(): <K extends string>(_constructor: PH, key: K) => propIs_guard_011<U, K>;
    <$SEL extends "1">(): <T>(constructor: Constructor<T>) => propIs_guard_101<T, U>;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_111<T, U, K>;
};
type propIs_general_001 = {
    (constructor: Constructor<any>): propIs_general_101;
    (_constructor: PH, key: Property): propIs_general_011;
    <$SEL extends "11">(): (constructor: Constructor<any>, key: Property) => propIs_general_111;
    <$SEL extends "01">(): (_constructor: PH, key: Property) => propIs_general_011;
    <$SEL extends "1">(): (constructor: Constructor<any>) => propIs_general_101;
    (constructor: Constructor<any>, key: Property): propIs_general_111;
};
type propIs_guard_101<T, U extends {
}> = {
    <K extends string>(key: K): propIs_guard_111<T, U, K>;
};
type propIs_general_101 = {
    (key: Property): propIs_general_111;
};
type propIs_guard_011<U extends {
}, K extends string> = {
    <T>(constructor: Constructor<T>): propIs_guard_111<T, U, K>;
};
type propIs_general_011 = {
    (constructor: Constructor<any>): propIs_general_111;
};
type propIs_guard_111<T, U extends {
}, K extends string> = boolean;
type propIs_general_111 = boolean;
export = propIs;
