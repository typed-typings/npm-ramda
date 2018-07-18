declare const empty: empty_0;
type empty_0 = {
    /**
     * Returns the empty value of its argument's type. Ramda defines the empty
     * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
     * types are supported if they define `<Type>.empty`,
     * `<Type>.prototype.empty` or implement the
     * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
     *
     * Dispatches to the `empty` method of the first argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category Function
     * @sig a -> a
     * @param {*} x
     * @return {*}
     * @example
     *
     *      R.empty(Just(42));      //=> Nothing()
     *      R.empty([1, 2, 3]);     //=> []
     *      R.empty('unicorns');    //=> ''
     *      R.empty({x: 1, y: 2});  //=> {}
     */
    <T>(container: T[]): empty_list_1<T>;
    (container: string): empty_string_1;
    (container: object): empty_object_1;
    <$SEL extends "1", $KIND extends "general">(): <T>(container: any) => empty_general_1<T>;
    <$SEL extends "1", $KIND extends "object">(): (container: object) => empty_object_1;
    <$SEL extends "1", $KIND extends "string">(): (container: string) => empty_string_1;
    <$SEL extends "1", $KIND extends "list">(): <T>(container: T[]) => empty_list_1<T>;
    <T>(container: any): empty_general_1<T>;
};
type empty_list_1<T> = T[];
type empty_string_1 = string;
type empty_object_1 = {
};
type empty_general_1<T> = T;
export = empty;
