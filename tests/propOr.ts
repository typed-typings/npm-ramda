import { Placeholder } from '../ramda/dist/src/$placeholder';
import * as R_propOr from '../ramda/dist/src/propOr';

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;
declare const defaults: 'defaults';

// @dts-jest:pass:snap
R_propOr(defaults, 'a');
// @dts-jest:pass:snap
R_propOr(defaults, 'a')(a_b_number_record);

// @dts-jest:pass:snap
R_propOr(defaults, 'a', a_b_number_record);

// @dts-jest:pass:snap
R_propOr(defaults, placeholder, a_b_number_record);
// @dts-jest:pass:snap
R_propOr(defaults, placeholder, a_b_number_record)('a');
