import * as R from '../ramda/dist/index';

declare const string_to_number: R.Morphism<string, number>;
declare const string_array: string[];

// @dts-jest:pass:snap
R.ap([string_to_number])(string_array);
// @dts-jest:pass:snap
R.ap([string_to_number], string_array);
