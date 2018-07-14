import * as R from '../ramda/dist/index';

declare const number_to_boolean: (x: number) => boolean;

declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap
R.propSatisfies(number_to_boolean, 'a');
// @dts-jest:pass:snap
R.propSatisfies(number_to_boolean, 'a')(a_b_number_record);

// @dts-jest:pass:snap
R.propSatisfies(number_to_boolean, 'a', a_b_number_record);

// @dts-jest:pass:snap
R.propSatisfies(number_to_boolean, R.__, a_b_number_record);
// @dts-jest:pass:snap
R.propSatisfies(number_to_boolean, R.__, a_b_number_record)('a');
