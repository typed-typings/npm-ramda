Returns the empty value of its argument's type. Ramda defines the empty
value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
types are supported if they define `<Type>.empty`,
`<Type>.prototype.empty` or implement the
[FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).

Dispatches to the `empty` method of the first argument, if present.

@func
@memberOf R
@since v0.3.0
@category Function
@sig a -> a
@param {*} x
@return {*}
@example

     R.empty(Just(42));      //=> Nothing()
     R.empty([1, 2, 3]);     //=> []
     R.empty('unicorns');    //=> ''
     R.empty({x: 1, y: 2});  //=> {}
