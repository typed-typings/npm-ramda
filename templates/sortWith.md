Sorts a list according to a list of comparators.

@func
@memberOf R
@since v0.23.0
@category Relation
@sig [(a, a) -> Number] -> [a] -> [a]
@param {Array} functions A list of comparator functions.
@param {Array} list The list to sort.
@return {Array} A new list sorted according to the comarator functions.
@example

     var alice = {
       name: 'alice',
       age: 40
     };
     var bob = {
       name: 'bob',
       age: 30
     };
     var clara = {
       name: 'clara',
       age: 40
     };
     var people = [clara, bob, alice];
     var ageNameSort = R.sortWith([
       R.descend(R.prop('age')),
       R.ascend(R.prop('name'))
     ]);
     ageNameSort(people); //=> [alice, clara, bob]
