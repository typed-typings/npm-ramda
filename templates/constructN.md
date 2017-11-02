Wraps a constructor function inside a curried function that can be called
with the same arguments and returns the same type. The arity of the function
returned is specified to allow using variadic constructor functions.

@func
@memberOf R
@since v0.4.0
@category Function
@sig Number -> (* -> {*}) -> (* -> {*})
@param {Number} n The arity of the constructor function.
@param {Function} Fn The constructor function to wrap.
@return {Function} A wrapped, curried constructor function.
@example

     // Variadic Constructor function
     function Salad() {
       this.ingredients = arguments;
     }

     Salad.prototype.recipe = function() {
       var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
       return R.join('\n', instructions);
     };

     var ThreeLayerSalad = R.constructN(3, Salad);

     // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
     var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');

     console.log(salad.recipe());
     // Add a dollop of Mayonnaise
     // Add a dollop of Potato Chips
     // Add a dollop of Ketchup
