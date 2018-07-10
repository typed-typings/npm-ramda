import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass:snap -> R.Variadic<boolean>
R.complement(string_string_to_boolean);
// @dts-jest:pass:snap -> boolean
R.complement(string_string_to_boolean)(string, string);
