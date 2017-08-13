import * as R_takeWhile from '../ramda/dist/src/takeWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => string[]
R_takeWhile(string_to_boolean);
// @dts-jest:pass -> string[]
R_takeWhile(string_to_boolean, string_array);
