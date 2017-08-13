import * as R_dropWhile from '../ramda/dist/src/dropWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => string[]
R_dropWhile(string_to_boolean);
// @dts-jest:pass -> string[]
R_dropWhile(string_to_boolean, string_array);
