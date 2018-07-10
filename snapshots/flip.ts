import * as R from '../ramda/dist/index';

declare const string_number_to_object: (x: string, y: number) => object;
declare const number_boolean_to_string: (x: number, y: boolean) => string;
declare const number_args_to_boolean: (...args: number[]) => boolean;
declare const seven_string_to_number: (
  v1: string,
  v2: string,
  v3: string,
  v4: string,
  v5: string,
  v6: string,
  v7: string,
) => number;

// @dts-jest:pass:snap -> CurriedFunction2<number, string, object>
R.flip(string_number_to_object);
// @dts-jest:pass:snap -> CurriedFunction2<boolean, number, string>
R.flip(number_boolean_to_string);
// @dts-jest:pass:snap -> CurriedFunction2<number, number, boolean>
R.flip(number_args_to_boolean);
// @dts-jest:pass:snap -> (v2: string, v1: string, ...args: any[]) => number
R.flip(seven_string_to_number);
