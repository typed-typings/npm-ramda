/**
 * A special placeholder value used to specify "gaps" within curried
 * functions, allowing partial application of any combination of
 * arguments, regardless of their positions.
 * NOTE: can't type this yet, for binary functions consider R.flip!
 */
declare const __: any; // { "@@functional/placeholder": boolean };
// ^ don't type by value, since it can be inserted anywhere...
// Note this is still not useful, as it doesn't take into account how it changes formulas (leaving holes!).
// This remains TODO, and should be done on the level of curried functions, but that
// pretty much requires being able to express the separate functions as a single curried function...
// until that moment handling this would mean having to handle each possible combination for each function. :(

export default __