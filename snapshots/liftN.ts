import * as R_liftN from '../ramda/dist/src/liftN';

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

// @dts-jest:pass -> () => object[]
R_liftN(0, string_to_object);
// @dts-jest:pass -> CurriedFunction1<number[] | ArrayLike<number>, string[]>
R_liftN(1, number_boolean_to_string);
// @dts-jest:pass -> CurriedFunction4<number[] | ArrayLike<number>, number[] | ArrayLike<number>, number[] | ArrayLike<number>, number[] | ArrayLike<number>, boolean[]>
R_liftN(4, number_args_to_boolean);
// @dts-jest:pass -> (...args: any[]) => number[]
R_liftN(7, seven_string_to_number);
