import { Placeholder } from '../ramda/dist/src/$placeholder';
import R_propSatisfies = require('../ramda/dist/src/propSatisfies');

declare const number_to_boolean: (x: number) => boolean;
declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap -> (object: Record<"a", any>) => boolean
R_propSatisfies(number_to_boolean, 'a');
// @dts-jest:pass:snap -> boolean
R_propSatisfies(number_to_boolean, 'a')(a_b_number_record);

// @dts-jest:pass:snap -> boolean
R_propSatisfies(number_to_boolean, 'a', a_b_number_record);

// @dts-jest:pass:snap -> (key: "a" | "b") => boolean
R_propSatisfies(number_to_boolean, placeholder, a_b_number_record);
// @dts-jest:pass:snap -> boolean
R_propSatisfies(number_to_boolean, placeholder, a_b_number_record)('a');
