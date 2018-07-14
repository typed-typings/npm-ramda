import * as R from '../ramda/dist/index';

declare const string_to_object: (x: string) => object;
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

// @dts-jest:pass:snap -> R.CurriedFunction0<object[]>
R.liftN(0, string_to_object);
// @dts-jest:pass:snap -> R.CurriedFunction1<R.List<number>, string[]>
R.liftN(1, number_boolean_to_string);
// @dts-jest:pass:snap -> R.CurriedFunction4<R.List<number>, R.List<number>, R.List<number>, R.List<number>, boolean[]>
R.liftN(4, number_args_to_boolean);
// @dts-jest:pass:snap -> R.Variadic<number[]>
R.liftN(7, seven_string_to_number);
