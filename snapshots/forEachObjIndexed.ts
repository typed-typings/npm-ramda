import { Dictionary, KeyedObjectTap } from '../ramda/dist/src/$types';
import * as R_forEachObjIndexed from '../ramda/dist/src/forEachObjIndexed';

declare const number_dictionary: Dictionary<number>;
declare const keyed_number_dictionary_tap: KeyedObjectTap<
  number,
  Dictionary<number>
>;

// @dts-jest:pass -> (list: Dictionary<number>) => Dictionary<number>
R_forEachObjIndexed(keyed_number_dictionary_tap);
// @dts-jest:pass -> Dictionary<number>
R_forEachObjIndexed(keyed_number_dictionary_tap)(number_dictionary);
// @dts-jest:pass -> Dictionary<number>
R_forEachObjIndexed(keyed_number_dictionary_tap, number_dictionary);
