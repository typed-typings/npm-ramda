import * as R from '../ramda/dist/index';

declare const boolean: boolean;
declare const number: number;
declare const string: string;
declare const curried_string_boolean_number_to_object: R.CurriedFunction3<
  string,
  boolean,
  number,
  object
>;

// @dts-jest:pass:snap -> object
curried_string_boolean_number_to_object(string)(boolean)(number);
// @dts-jest:pass:snap -> object
curried_string_boolean_number_to_object(string, boolean, number);
// @dts-jest:pass:snap -> R.CurriedFunction1<string, object>
curried_string_boolean_number_to_object(R.__, boolean, number);
// @dts-jest:pass:snap -> R.CurriedFunction1<boolean, object>
curried_string_boolean_number_to_object(string, R.__, number);
// @dts-jest:pass:snap -> R.CurriedFunction2<string, boolean, object>
curried_string_boolean_number_to_object(R.__, R.__, number);
// @dts-jest:pass:snap -> R.CurriedFunction1<boolean, object>
curried_string_boolean_number_to_object(string)(R.__, number);
