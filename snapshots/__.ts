import { CurriedFunction3 } from '../ramda/dist/src/$curriedFunctions';
import * as R___ from '../ramda/dist/src/__';

declare const boolean: boolean;
declare const number: number;
declare const string: string;
declare const curried_string_boolean_number_to_object: CurriedFunction3<
  string,
  boolean,
  number,
  object
>;

// @dts-jest:pass -> object
curried_string_boolean_number_to_object(string)(boolean)(number);
// @dts-jest:pass -> object
curried_string_boolean_number_to_object(string, boolean, number);
// @dts-jest:pass -> CurriedFunction1<string, object>
curried_string_boolean_number_to_object(R___, boolean, number);
// @dts-jest:pass -> CurriedFunction1<boolean, object>
curried_string_boolean_number_to_object(string, R___, number);
// @dts-jest:pass -> CurriedFunction2<string, boolean, object>
curried_string_boolean_number_to_object(R___, R___, number);
// @dts-jest:pass -> CurriedFunction1<boolean, object>
curried_string_boolean_number_to_object(string)(R___, number);
