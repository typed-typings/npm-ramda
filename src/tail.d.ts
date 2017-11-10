import { List } from "./$types";
declare const tail: tail_0;
type tail_0 = {
    /**
     * Returns all but the first element of the given list or string (or object
     * with a `tail` method).
     *
     * Dispatches to the `slice` method of the first argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [a]
     * @sig String -> String
     * @param {*} list
     * @return {*}
     * @see R.head, R.init, R.last
     * @example
     *
     *      R.tail([1, 2, 3]);  //=> [2, 3]
     *      R.tail([1, 2]);     //=> [2]
     *      R.tail([1]);        //=> []
     *      R.tail([]);         //=> []
     *
     *      R.tail('abc');  //=> 'bc'
     *      R.tail('ab');   //=> 'b'
     *      R.tail('a');    //=> ''
     *      R.tail('');     //=> ''
     */
    (str: string): tail_string_1;
    <T>(list: List<T>): tail_list_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => tail_mixed_1<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => tail_list_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => tail_string_1;
    <T>(list: string | List<T>): tail_mixed_1<T>;
};
type tail_string_1 = string;
type tail_list_1<T> = T[];
type tail_mixed_1<T> = string | T[];
export = tail;
