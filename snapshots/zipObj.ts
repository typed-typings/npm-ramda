import * as R_zipObj from '../ramda/dist/src/zipObj';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass -> <U>(b: U[] | ArrayLike<U>) => Record<string, U>
R_zipObj(number_array);
// @dts-jest:pass -> Record<string, string>
R_zipObj(number_array)(string_array);
// @dts-jest:pass -> Record<string, string>
R_zipObj(number_array, string_array);

// @dts-jest:pass -> <U>(b: U[] | ArrayLike<U>) => Record<"a" | "b", U>
R_zipObj(['a', 'b']);
// @dts-jest:pass -> Record<"a" | "b", number>
R_zipObj(['a', 'b'])(number_array);
// @dts-jest:pass -> Record<"a" | "b", number>
R_zipObj(['a', 'b'], number_array);
