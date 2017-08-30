import { Property } from '../ramda/dist/src/$types';
import * as R_hasIn from '../ramda/dist/src/hasIn';

declare const property: Property;
declare const object: object;

// @dts-jest:pass:snap
R_hasIn(property);
// @dts-jest:pass:snap
R_hasIn(property)(object);
// @dts-jest:pass:snap
R_hasIn(property, object);
