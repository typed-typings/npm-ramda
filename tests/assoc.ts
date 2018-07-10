import * as R from '../ramda/dist/index';

declare const symbol_property: symbol;
declare const string_property: string;
declare const number_value: number;
declare const object: object;

// @dts-jest:pass:snap
R.assoc(symbol_property, number_value, object);
// @dts-jest:pass:snap
R.assoc(symbol_property)(number_value)(object);

// @dts-jest:pass:snap
R.assoc(string_property, number_value, object);
// @dts-jest:pass:snap
R.assoc(string_property)(number_value)(object);
