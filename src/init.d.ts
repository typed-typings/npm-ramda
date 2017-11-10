import { List } from "./$types";
declare const init: init_0;
type init_0 = {
    /**
     * Returns all but the last element of the given list or string.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category List
     * @sig [a] -> [a]
     * @sig String -> String
     * @param {*} list
     * @return {*}
     * @see R.last, R.head, R.tail
     * @example
     *
     *      R.init([1, 2, 3]);  //=> [1, 2]
     *      R.init([1, 2]);     //=> [1]
     *      R.init([1]);        //=> []
     *      R.init([]);         //=> []
     *
     *      R.init('abc');  //=> 'ab'
     *      R.init('ab');   //=> 'a'
     *      R.init('a');    //=> ''
     *      R.init('');     //=> ''
     */
    (str: string): init_string_1;
    <T>(list: List<T>): init_list_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => init_mixed_1<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => init_list_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => init_string_1;
    <T>(list: string | List<T>): init_mixed_1<T>;
};
type init_string_1 = string;
type init_list_1<T> = T[];
type init_mixed_1<T> = string | T[];
export = init;
