import * as R_construct from '../ramda/dist/src/construct';

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

// @dts-jest:pass -> CurriedFunction1<string, object>
R_construct(new_string_to_object);
// @dts-jest:pass -> CurriedFunction2<number, boolean, string>
R_construct(new_number_boolean_to_string);
// @dts-jest:pass -> () => boolean
R_construct(new_number_args_to_boolean);
// @dts-jest:pass -> (...args: any[]) => number
R_construct(new_7_string_to_number);
