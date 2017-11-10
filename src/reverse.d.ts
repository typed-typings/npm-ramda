import { List } from "./$types";
declare const reverse: reverse_0;
type reverse_0 = {
    /**
     * Returns a new list or string with the elements or characters in reverse
     * order.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [a]
     * @sig String -> String
     * @param {Array|String} list
     * @return {Array|String}
     * @example
     *
     *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
     *      R.reverse([1, 2]);     //=> [2, 1]
     *      R.reverse([1]);        //=> [1]
     *      R.reverse([]);         //=> []
     *
     *      R.reverse('abc');      //=> 'cba'
     *      R.reverse('ab');       //=> 'ba'
     *      R.reverse('a');        //=> 'a'
     *      R.reverse('');         //=> ''
     */
    (str: string): reverse_string_1;
    <T>(list: List<T>): reverse_list_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => reverse_mixed_1<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => reverse_list_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => reverse_string_1;
    <T>(list: string | List<T>): reverse_mixed_1<T>;
};
type reverse_string_1 = string;
type reverse_list_1<T> = T[];
type reverse_mixed_1<T> = string | T[];
export = reverse;
