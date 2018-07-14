import * as R from '../ramda/dist/index';

declare const new_string_to_object: new (x: string) => object;
declare const new_number_boolean_to_string: new (
  x: number,
  y: boolean,
) => string;
declare const new_number_args_to_boolean: new (...args: number[]) => boolean;
declare const new_7_string_to_number: new (
  v1: string,
  v2: string,
  v3: string,
  v4: string,
  v5: string,
  v6: string,
  v7: string,
) => number;

// @dts-jest:pass:snap -> R.CurriedFunction0<object>
R.constructN(0, new_string_to_object);
// @dts-jest:pass:snap -> R.CurriedFunction1<number, string>
R.constructN(1, new_number_boolean_to_string);
// @dts-jest:pass:snap -> R.CurriedFunction4<number, number, number, number, boolean>
R.constructN(4, new_number_args_to_boolean);
// @dts-jest:pass:snap -> R.Variadic<number>
R.constructN(7, new_7_string_to_number);
