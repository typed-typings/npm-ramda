declare const type: type_0;
type type_0 = {
    /**
     * Gives a single-word string description of the (native) type of a value,
     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
     * attempt to distinguish user Object types any further, reporting them all as
     * 'Object'.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Type
     * @sig (* -> {*}) -> String
     * @param {*} val The value to test
     * @return {String}
     * @example
     *
     *      R.type({}); //=> "Object"
     *      R.type(1); //=> "Number"
     *      R.type(false); //=> "Boolean"
     *      R.type('s'); //=> "String"
     *      R.type(null); //=> "Null"
     *      R.type([]); //=> "Array"
     *      R.type(/[A-z]/); //=> "RegExp"
     *      R.type(() => {}); //=> "Function"
     *      R.type(undefined); //=> "Undefined"
     */
    (value: null): type_null_1;
    (value: undefined): type_undefined_1;
    (value: boolean): type_boolean_1;
    (value: number): type_number_1;
    (value: string): type_string_1;
    (value: symbol): type_symbol_1;
    <$SEL extends "1", $KIND extends "general">(): (value: any) => type_general_1;
    <$SEL extends "1", $KIND extends "symbol">(): (value: symbol) => type_symbol_1;
    <$SEL extends "1", $KIND extends "string">(): (value: string) => type_string_1;
    <$SEL extends "1", $KIND extends "number">(): (value: number) => type_number_1;
    <$SEL extends "1", $KIND extends "boolean">(): (value: boolean) => type_boolean_1;
    <$SEL extends "1", $KIND extends "undefined">(): (value: undefined) => type_undefined_1;
    <$SEL extends "1", $KIND extends "null">(): (value: null) => type_null_1;
    (value: any): type_general_1;
};
type type_null_1 = "Null";
type type_undefined_1 = "Undefined";
type type_boolean_1 = "Boolean";
type type_number_1 = "Number";
type type_string_1 = "String";
type type_symbol_1 = "Symbol";
type type_general_1 = string;
export = type;
