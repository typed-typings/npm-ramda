declare const composeP: typeof $;
/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
declare function $<R1>(fn1: () => PromiseLike<R1> | R1): () => PromiseLike<R1>;
declare function $<V1, R1>(fn1: (v1: V1) => PromiseLike<R1> | R1): (v1: V1) => PromiseLike<R1>;
declare function $<V1, V2, R1>(fn1: (v1: V1, v2: V2) => PromiseLike<R1> | R1): (v1: V1, v2: V2) => PromiseLike<R1>;
declare function $<V1, V2, V3, R1>(fn1: (v1: V1, v2: V2, v3: V3) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3) => PromiseLike<R1>;
declare function $<V1, V2, V3, V4, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1>;
declare function $<V1, V2, V3, V4, V5, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1>;
declare function $<V1, V2, V3, V4, V5, V6, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1>;
declare function $<R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: () => PromiseLike<R1> | R1): () => PromiseLike<R2>;
declare function $<V1, R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1) => PromiseLike<R1> | R1): (v1: V1) => PromiseLike<R2>;
declare function $<V1, V2, R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2) => PromiseLike<R1> | R1): (v1: V1, v2: V2) => PromiseLike<R2>;
declare function $<V1, V2, V3, R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3) => PromiseLike<R2>;
declare function $<V1, V2, V3, V4, R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R2>;
declare function $<V1, V2, V3, V4, V5, R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R2>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2>(fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R2>;
declare function $<R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: () => PromiseLike<R1> | R1): () => PromiseLike<R3>;
declare function $<V1, R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1) => PromiseLike<R1> | R1): (v1: V1) => PromiseLike<R3>;
declare function $<V1, V2, R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2) => PromiseLike<R1> | R1): (v1: V1, v2: V2) => PromiseLike<R3>;
declare function $<V1, V2, V3, R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3) => PromiseLike<R3>;
declare function $<V1, V2, V3, V4, R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R3>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R3>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3>(fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R3>;
declare function $<R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: () => PromiseLike<R1> | R1): () => PromiseLike<R4>;
declare function $<V1, R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1) => PromiseLike<R1> | R1): (v1: V1) => PromiseLike<R4>;
declare function $<V1, V2, R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2) => PromiseLike<R1> | R1): (v1: V1, v2: V2) => PromiseLike<R4>;
declare function $<V1, V2, V3, R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3) => PromiseLike<R4>;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R4>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R4>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4>(fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R4>;
declare function $<R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: () => PromiseLike<R1> | R1): () => PromiseLike<R5>;
declare function $<V1, R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1) => PromiseLike<R1> | R1): (v1: V1) => PromiseLike<R5>;
declare function $<V1, V2, R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2) => PromiseLike<R1> | R1): (v1: V1, v2: V2) => PromiseLike<R5>;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3) => PromiseLike<R5>;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R5>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R5>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5>(fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R5>;
declare function $<R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: () => PromiseLike<R1> | R1): () => PromiseLike<R6>;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1) => PromiseLike<R1> | R1): (v1: V1) => PromiseLike<R6>;
declare function $<V1, V2, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2) => PromiseLike<R1> | R1): (v1: V1, v2: V2) => PromiseLike<R6>;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3) => PromiseLike<R6>;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4) => PromiseLike<R6>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => PromiseLike<R6>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => PromiseLike<R6> | R6, fn5: (v: R4) => PromiseLike<R5> | R5, fn4: (v: R3) => PromiseLike<R4> | R4, fn3: (v: R2) => PromiseLike<R3> | R3, fn2: (v: R1) => PromiseLike<R2> | R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R1> | R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => PromiseLike<R6>;
export = composeP;
