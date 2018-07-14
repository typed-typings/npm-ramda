import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const number_to_string_string_tuple: (x: number) => [string, string];
declare const number_chain: R.Chain<number>;
declare const number_chain_to_string_chain: (x: number) => R.Chain<string>;
declare const string_to_number_list_to_object: (
  x: string,
) => (list: R.List<number>) => object;
declare const number_list_to_string: (list: R.List<number>) => string;

// @dts-jest:pass:snap
R.chain(number_to_string_string_tuple);
// @dts-jest:pass:snap
R.chain(number_to_string_string_tuple)(number_array);
// @dts-jest:pass:snap
R.chain(number_to_string_string_tuple, number_array);

// @dts-jest:pass:snap
R.chain(number_chain_to_string_chain);
// @dts-jest:pass:snap
R.chain(number_chain_to_string_chain)(number_chain);
// @dts-jest:pass:snap
R.chain(number_chain_to_string_chain, number_chain);

// @dts-jest:pass:snap
R.chain(string_to_number_list_to_object);
// @dts-jest:pass:snap
R.chain(string_to_number_list_to_object)(number_list_to_string);
// @dts-jest:pass:snap
R.chain(string_to_number_list_to_object, number_list_to_string);
