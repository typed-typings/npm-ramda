
interface Head {
  /**
 * Returns the first element in a list.
 * In some libraries this function is named `first`.
 * Takes list.
 */
  <T>(list: T[]): T;
  /**
 * Returns the first element in a list.
 * In some libraries this function is named `first`.
 * Takes tuple.
 */
  <T0, T1>(list: [T0, T1]): T0;
}

declare const head: Head
export = head
