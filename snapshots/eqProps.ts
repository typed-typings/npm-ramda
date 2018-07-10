import * as R from '../ramda/dist/index';

declare const property: R.Property;
declare const string: string;

// @dts-jest:pass:snap -> (b: string) => boolean
R.eqProps(property, string);
// @dts-jest:pass:snap -> boolean
R.eqProps(property)(string, string);
// @dts-jest:pass:snap -> boolean
R.eqProps(property, string, string);
