/// <reference path="ramda.d.ts" />
var double = function(x: number): number {
    return x + x
};
var shout = function(x: number): string {
    return x >= 10
        ? 'big'
        : 'small'
};

(() => {
    /* op */
    var div: Function;
    div = R.op(function (a, b) {
        return a / b;
    });
});

(() => {
    var x: boolean
    x = R.isArrayLike('a');
    x = R.isArrayLike([1,2,3]);
    x = R.isArrayLike([]);
});

R.substring(0, 4, '1234567');
R.substringFrom(4, '1234567');
R.substringTo(8, 'abcdefghijklm');

() => {
    var takesNoArg = function() { return true; };
    var takesOneArg = function(a) { return [a]; };
    var takesTwoArgs = function(a, b) { return [a, b]; };
    var takesThreeArgs = function(a, b, c) { return [a, b, c]; };

    var addFourNumbers = function(a: number, b: number, c: number, d: number): number {
      return a + b + c + d;
    };

    var x1: Function = R.curry(addFourNumbers)
    var x2: Function = R.curry(addFourNumbers)(1,2,4)
    var x3: Function = R.curry(addFourNumbers)(1)(2)
    var x4: Function = R.curry(addFourNumbers)(1)(2)(3)
    var y1: number = R.curry(addFourNumbers)(1)(2)(3)(4)

    R.nAry(0, takesNoArg);
    R.nAry(0, takesOneArg);
    R.nAry(1, takesTwoArgs);
    R.nAry(1, takesThreeArgs);

    var u1: {(a: any): any} = R.unary(takesOneArg);
    var u2: {(a: any): any} = R.unary(takesTwoArgs);
    var u3: {(a: any): any} = R.unary(takesThreeArgs);

    R.binary(takesTwoArgs);
    R.binary(takesThreeArgs);

}

/* compose */
() => {
    var double = function(x: number): number {
        return x + x
    }
    var limit10 = function(x: number): boolean {
        return x >= 10
    }
    var func: (x: number) => boolean = R.compose(limit10, double)
    var res: boolean = R.compose(limit10, double)(10)
}
/* pipe */
() => {

    var func: (x: number) => string = R.pipe(double, double, shout)
    var res: string = R.pipe(double, double, shout)(10)
}

R.invoker('charAt', String.prototype);
R.invoker('charAt', String.prototype, 1);

var square = function(x) { return x * x; };
var add = function(a, b) { return a + b; };
// Adds any number of arguments together
var addAll = function() {
  return 0;
};

// Basic example
R.useWith(addAll, double, square);

(() => {
  var printXPlusFive = function(x) { console.log(x + 5); };
  R.forEach(printXPlusFive, [1, 2, 3]);
  R.clone([{},{},{}])
  R.clone([1,2,3]);
})();

// (() => {
//   var printXPlusFive = function(x, i) { console.log(i + 5); };
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

var i = function(x) {return x;};
R.times(i, 5);

(() => {
  var triple = function(x: number): number { return x * 3; };
  var square = function(x: number): number { return x * x; };
  var squareThenDoubleThenTriple = R.pipe(square, double, triple);
  squareThenDoubleThenTriple(5); //=> 150

  var mergeThree = function(a: number, b: number, c: number): number[] {
    return ([]).concat(a, b, c);
  };
  mergeThree(1, 2, 3); //=> [1, 2, 3]
  R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
})();

(() => {
    var multiply = function(a, b) { return a * b; };
    var double = R.lPartial(multiply, 2);
    double(2); //=> 4

    var greet = function(salutation, title, firstName, lastName) {
      return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
    };
    var sayHello = R.lPartial(greet, 'Hello');
    var sayHelloToMs = R.lPartial(sayHello, 'Ms.');
    sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'

    var greetMsJaneJones = R.rPartial(greet, 'Ms.', 'Jane', 'Jones');
    greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
})();

(() => {
    var numberOfCalls = 0;
    var trackedAdd = function(a, b) {
      numberOfCalls += 1;
      return a + b;
    };
    var memoTrackedAdd = R.memoize(trackedAdd);

    memoTrackedAdd(1, 2); //=> 3
    numberOfCalls; //=> 1
    memoTrackedAdd(1, 2); //=> 3
    numberOfCalls; //=> 1
    memoTrackedAdd(2, 3); //=> 5
    numberOfCalls; //=> 2

    // Note that argument order matters
    memoTrackedAdd(2, 1); //=> 3
    numberOfCalls; //=> 3
})();

(() => {
    var addOneOnce = R.once(function(x){ return x + 1; });
    addOneOnce(10); //=> 11
    addOneOnce(addOneOnce(50)); //=> 11
})();

(() => {
    var slashify = R.wrap(R.flip(add)('/'), function(f, x) {
      return R.match(/\/$/, x) ? x : f(x);
    });

    slashify('a');  //=> 'a/'
    slashify('a/'); //=> 'a/'
})();

(() => {
    var Circle = function(r) {
        this.r = r;
        this.colors = Array.prototype.slice.call(arguments, 1);
    };
    Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};
    var circleN = R.constructN(2, Circle);
    var c1 = circleN(1, 'red');
    var circle = R.construct(Circle);
    var c1 = circle(1, 'red');
})();

(() => {
    var numbers = [1, 2, 3];
    var add = function(a, b) {
        return a + b
    };
    R.reduce(add, 10, numbers); //=> 16;
})();
(() => {
    var plus3 = R.add(3);
})();
(() => {
    var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
    var flattenPairs = function(acc, pair) {
      return acc.concat(pair);
    };
    R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
})();
(() => {
    var values = { x: 1, y: 2, z: 3 };
    var double = function(num) {
      return num * 2;
    };

    R.mapObj(double, values); //=> { x: 2, y: 4, z: 6 }
});
(() => {
    var values = { x: 1, y: 2, z: 3 };
    var prependKeyAndDouble = function(num, key, obj) {
        return key + (num * 2);
    };
    R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
});
(() => {
    R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
    R.of([1]); //=> [[1]]
    R.empty([1,2,3,4,5]); //=> []
});
(() => {
    var duplicate = function(n) {
        return [n, n];
    };
    R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
});
(() => {
    R.size([]); //=> 0
    R.size([1, 2, 3]); //=> 3
    R.length([1, 2, 3]); //=> 3
});
(() => {
    var isEven = function(n) {
        return n % 2 === 0;
    };
    R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]

    var lastTwo = function(val, idx, list) {
      return list.length - idx <= 2;
    };
    R.filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]

    var isOdd = function(n) {
      return n % 2 === 1;
    };
    R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
});
(() => {
    var isNotFour = function(x) {
      return !(x === 4);
    };
    R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
    R.take(2, [1, 2, 3, 4]); //=> [1, 2]
});
(() => {
    var isTwo = function(x) {
      return x === 2;
    };
    R.skipUntil(isTwo, [1, 2, 3, 4]); //=> [2, 3, 4]
    R.skip(3, [1,2,3,4,5,6,7]); //=> [4,5,6,7]
});
(() => {
    var f = function(n) { return n > 50 ? false : [-n, n + 10] };
    R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
});

/*****************************************************************
 * Math category
 */
() => {
    R.add(2, 3);       //=>  5
    R.add(7)(10);      //=> 17
    R.add("Hello", " World");  //=>  "Hello World"
    R.add("Hello")(" World");  //=>  "Hello World"
}

() => {
    R.dec(42); //=> 41
}

() => {
    R.divide(71, 100); //=> 0.71

    var half = R.divide(R.__, 2);
    half(42); //=> 21

    var reciprocal = R.divide(1);
    reciprocal(4);   //=> 0.25
}

() => {
    R.gt(2, 6); //=> false
    R.gt(2, 0); //=> true
    R.gt(2, 2); //=> false
    R.gt(R.__, 2)(10); //=> true
    R.gt(2)(10); //=> false
}

() => {
    R.gte(2, 6); //=> false
    R.gte(2, 0); //=> true
    R.gte(2, 2); //=> false
    R.gte(R.__, 2)(10); //=> true
    R.gte(2)(10); //=> false
}

() => {
    R.isNaN(NaN);        //=> true
    R.isNaN(undefined);  //=> false
    R.isNaN({});         //=> false
}

() => {
    R.lt(2, 6); //=> true
    R.lt(2, 0); //=> false
    R.lt(2, 2); //=> false
    R.lt(5)(10); //=> true
    R.lt(R.__, 5)(10); //=> false // right-sectioned currying
}

() => {
    R.lte(2, 6); //=> true
    R.lte(2, 0); //=> false
    R.lte(2, 2); //=> true
    R.lte(R.__, 2)(1); //=> true
    R.lte(2)(10); //=> true
}

() => {
    R.mathMod(-17, 5);  //=> 3
    R.mathMod(17, 5);   //=> 2
    R.mathMod(17, -5);  //=> NaN
    R.mathMod(17, 0);   //=> NaN
    R.mathMod(17.2, 5); //=> NaN
    R.mathMod(17, 5.3); //=> NaN

    var clock = R.mathMod(R.__, 12);
    clock(15); //=> 3
    clock(24); //=> 0

    var seventeenMod = R.mathMod(17);
    seventeenMod(3);  //=> 2
}

() => {
    var hasName = R.has('name');
    hasName({name: 'alice'});   //=> true
    hasName({name: 'bob'});     //=> true
    hasName({});                //=> false

    var point = {x: 0, y: 0};
    var pointHas = R.has(R.__, point);
    pointHas('x');  //=> true
    pointHas('y');  //=> true
    pointHas('z');  //=> false
}

() => {
    R.max([7, 3, 9, 2, 4, 9, 3]); //=> 9
}

() => {
    function cmp(obj) { return obj.x; }
    var a = {x: 1}, b = {x: 2}, c = {x: 3};
    R.maxBy(cmp, [a, b, c]); //=> {x: 3}
    R.maxBy(cmp)([a, b, c]); //=> {x: 3}
}

() => {
    R.min([7, 3, 9, 2, 4, 9, 3]); //=> 2
}

() => {
    function cmp(obj) { return obj.x; }
    var a = {x: 1}, b = {x: 2}, c = {x: 3};
    R.minBy(cmp, [a, b, c]); //=> {x: 1}
    R.minBy(cmp)([a, b, c]); //=> {x: 1}
}

() => {
    R.modulo(17, 3); //=> 2
    // JS behavior:
    R.modulo(-17, 3); //=> -2
    R.modulo(17, -3); //=> 2

    var isOdd = R.modulo(R.__, 2);
    isOdd(42); //=> 0
    isOdd(21); //=> 1
}

() => {
    var double = R.multiply(2);
    var triple = R.multiply(3);
    double(3);       //=>  6
    triple(4);       //=> 12
    R.multiply(2, 5);  //=> 10
}

() => {
    R.negate(42); //=> -42
}

() => {
    R.product([2,4,6,8,100,1]); //=> 38400
}

() => {
    R.subtract(10, 8); //=> 2

    var minus5 = R.subtract(R.__, 5);
    minus5(17); //=> 12

    var complementaryAngle = R.subtract(90);
    complementaryAngle(30); //=> 60
    complementaryAngle(72); //=> 18
}

() => {
    R.sum([2,4,6,8,100,1]); //=> 121
}
