import * as R_ifElse from '../ramda/dist/src/ifElse';

declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;
declare const string_to_object: (x: string) => object;

// @dts-jest:pass
R_ifElse(string_to_boolean, string_to_number);
// @dts-jest:pass
R_ifElse(string_to_boolean, string_to_number, string_to_object);
// @dts-jest:pass
R_ifElse(string_to_boolean)(string_to_number)(string_to_object);
