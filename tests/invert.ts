import * as R_invert from '../ramda/dist/src/invert';

declare const number_object_record: { [number: number]: object };

// @dts-jest:pass:snap
R_invert(number_object_record);
