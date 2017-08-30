import * as R_complement from '../ramda/dist/src/complement';

declare const string: string;
declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass:snap
R_complement(string_string_to_boolean);
// @dts-jest:pass:snap
R_complement(string_string_to_boolean)(string, string);
