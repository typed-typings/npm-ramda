import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const take: take_00;
type take_00 = {
    /**
     * Returns the first `n` elements of the given list, string, or
     * transducer/transformer (or object with a `take` method).
     *
     * Dispatches to the `take` method of the second argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Number -> [a] -> [a]
     * @sig Number -> String -> String
     * @param {Number} n
     * @param {*} list
     * @return {*}
     * @see R.drop
     * @example
     *
     *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
     *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
     *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
     *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
     *      R.take(3, 'ramda');               //=> 'ram'
     *
     *      var personnel = [
     *        'Dave Brubeck',
     *        'Paul Desmond',
     *        'Eugene Wright',
     *        'Joe Morello',
     *        'Gerry Mulligan',
     *        'Bob Bates',
     *        'Joe Dodge',
     *        'Ron Crotty'
     *      ];
     *
     *      var takeFive = R.take(5);
     *      takeFive(personnel);
     *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
     * @symb R.take(-1, [a, b]) = [a, b]
     * @symb R.take(0, [a, b]) = []
     * @symb R.take(1, [a, b]) = [a]
     * @symb R.take(2, [a, b]) = [a, b]
     */
    (n: number): take_10;
    (_n: PH, str: string): take_string_01;
    <T>(_n: PH, list: List<T>): take_list_01<T>;
    <T>(_n: PH, list: string | List<T>): take_mixed_01<T>;
    (n: number, str: string): take_string_11;
    <T>(n: number, list: List<T>): take_list_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(n: number, list: string | List<T>) => take_mixed_11<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => take_list_11<T>;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => take_string_11;
    <$SEL extends "01", $KIND extends "mixed">(): <T>(_n: PH, list: string | List<T>) => take_mixed_01<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_n: PH, list: List<T>) => take_list_01<T>;
    <$SEL extends "01", $KIND extends "string">(): (_n: PH, str: string) => take_string_01;
    <$SEL extends "1">(): (n: number) => take_10;
    <T>(n: number, list: string | List<T>): take_mixed_11<T>;
};
type take_10 = {
    (str: string): take_string_11;
    <T>(list: List<T>): take_list_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => take_mixed_11<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => take_list_11<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => take_string_11;
    <T>(list: string | List<T>): take_mixed_11<T>;
};
type take_string_01 = {
    (n: number): take_string_11;
};
type take_list_01<T> = {
    (n: number): take_list_11<T>;
};
type take_mixed_01<T> = {
    (n: number): take_mixed_11<T>;
};
type take_string_11 = string;
type take_list_11<T> = T[];
type take_mixed_11<T> = string | T[];
export = take;
