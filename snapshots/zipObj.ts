import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> <U>(b: R.List<U>) => Record<string, U>
R.zipObj(number_array);
// @dts-jest:pass:snap -> Record<string, string>
R.zipObj(number_array)(string_array);
// @dts-jest:pass:snap -> Record<string, string>
R.zipObj(number_array, string_array);

// @dts-jest:pass:snap -> <U>(b: R.List<U>) => Record<"a" | "b", U>
R.zipObj(['a', 'b']);
// @dts-jest:pass:snap -> Record<"a" | "b", number>
R.zipObj(['a', 'b'])(number_array);
// @dts-jest:pass:snap -> Record<"a" | "b", number>
R.zipObj(['a', 'b'], number_array);
