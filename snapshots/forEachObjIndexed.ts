import * as R from '../ramda/dist/index';

declare const number_dictionary: R.Dictionary<number>;
declare const keyed_number_dictionary_tap: R.KeyedObjectTap<
  number,
  R.Dictionary<number>
>;

// @dts-jest:pass:snap -> (list: R.Dictionary<number>) => R.Dictionary<number>
R.forEachObjIndexed(keyed_number_dictionary_tap);
// @dts-jest:pass:snap -> R.Dictionary<number>
R.forEachObjIndexed(keyed_number_dictionary_tap)(number_dictionary);
// @dts-jest:pass:snap -> R.Dictionary<number>
R.forEachObjIndexed(keyed_number_dictionary_tap, number_dictionary);
