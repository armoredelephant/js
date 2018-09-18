let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'.`);
}

rabbit.speak("I'm alive");
// "The rabbit says 'I'm alive.'.";

function speak(line) {
    console.log(`The ${this.type} Rabbit says, '${line}'.`);
}

let whiteRabbit = {type: 'White', speak};
let blackRabbit = {type: 'Black', speak};

blackRabbit.speak('I am a black Rabbit');
whiteRabbit.speak('I am a white Rabbit');

speak.call(blackRabbit, `BLAHBRBRBRBR`);
// => The Black Rabbit says, 'BLAHBRBRBRBR'. 

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

// normalize({coords: [0,2,3], length: 5});
// => Uncaught TypeError: Cannot read property of `map` of undefined

normalize.call({coords: [0,2,3], length: 5});
// => [0, 0.4, 0.6]

// function normalize() {
    // console.log(this.coords.map(function(n) {
        // this.length cannot see the this.coords in a regular function
        // it instead will see the window object
        // console.log(this);
//         n / this.length;
//     }));
// }

// normalize({coords: [0,2,3], length: 5});
// => Errors out

normalize.call({coords: [0,2,3], length: 5});
// => Array of undefined

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says, ${line}.`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = `killer`;
killerRabbit.speak('SKREE!!!');

// ******************************************************************
// *** Classes OLD PROTOTYPE METHOD ***
// ******************************************************************

// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says ${line}.`);
// }

// let weirdRabbit = new Rabbit('weird');
// weirdRabbit.speak('something weird');

// Rabbit has function.prototype which has Object.prototype.
// function.prototype gives Rabbit a default set of properties to use


// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

// console.log(Object.getPrototypeOf(Rabbit));

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// weirdRabbit has a Rabbit.prototype which gives it access to the functions tied to Rabbit

// console.log(Object.getPrototypeOf(weirdRabbit));

// ******************************************************************
// *** Class Notation ***
// ******************************************************************

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let insaneRabbit = new Rabbit('insane');
let orangeRabbit = new Rabbit('orange');

insaneRabbit.speak("I'm insane!!!");
// => `The killer rabbit says kill!
orangeRabbit.speak("I'm orange!");
// => `The black rabbit says I'm orange!`

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());

Rabbit.prototype.teeth = "small";
console.log(insaneRabbit.teeth);

insaneRabbit.teeth = "long, sharp, and bloody";
console.log(insaneRabbit.teeth);

console.log(orangeRabbit.teeth);
console.log(Rabbit.prototype.teeth);

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Julia: 62
//   };
  
//   console.log(`Julia is ${ages["Julia"]}`);
  // → Júlia is 62
//   console.log("Is Jack's age known?", "Jack" in ages);
  // → Is Jack's age known? false
//   console.log("Is toString's age known?", "toString" in ages);
  // → Is toString's age known? true

//   Can create Objects that do not derive from Object.prototype using Object.create(null);
console.log("toString" in Object.create(null)) ;

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`);
//   => Julia is 62
console.log(`Is Jack's age known?`, ages.has("Jack"));
//  => Is Jack's age known? false
console.log(ages.has("toString"));
//  => false
console.log(ages);

// ******************************************************************
// *** POLYMORPHISM ***
// ******************************************************************

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}

console.log(String(orangeRabbit));

// ******************************************************************
// *** SYMBOLS ***
// ******************************************************************

let sym = Symbol("name");
console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
console.log(orangeRabbit[sym]);
// ends up being assigned under __proto__ > Symbol(name): 55

const toStringSymbol = Symbol("toString");
const toStringSecondSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

Array.prototype[toStringSecondSymbol] = function() {
    return `This array has ${this.length} indexes.`;
};

// Array.prototype now has two Symbol(toString): f (); tied to it.
// Basically just another method tied to a prototype and can be delegated to everything using that prototype.

console.log([1,2].toString());

console.log([1,2][toStringSymbol]());
console.log([1,2][toStringSecondSymbol]());

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());

// ******************************************************************
// *** THE ITERATOR INTERFACE ***
// ******************************************************************

let okIterator = "OK"[Symbol.iterator](); // This created a String Iterator that runs against OK when .next() is called
console.log(okIterator); // => String Iterator {}
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

let x = [1,2][Symbol.iterator](); // This will create an Array Iterator that runs against this array [1,2]
console.log(x) // => Array Iterator {}
console.log(x.next());
console.log(x.next());
console.log(x.next());

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true}; // when the iterator is ran it will run next

        let value = {   x: this.x,
                        y: this.y,
                        value: this.matrix.get(this.x, this.y)}; // this is what will ve returned. This runs the method on the original MAtrix that gets passed through
        
        this.x++; //increments
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        } // if height(x) == width(y) then x = 0 and y increments
        return {value, done: false}
    }
}

//  Matrix class is not iterable until we add this to allow it to be
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}; // creates an iterator that calls on the MatrixIterator that we created.

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}

// ******************************************************************
// *** GETTERS, SETTERS, AND STATICS ***
// ******************************************************************

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
}

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32; // when we run temp.farenheit it calls the get fahrenheit() function, this returning the stored celsius through this function
    }
    set fahrenheit(value) {
        this.celsius = ((value - 32) / 1.8); // when we run temp.fahrenheit(value) were are setting the celsius prop through the set fahrenheit(value)
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8); // class can be used to create a new object fromFahrenheit instead of celsius, but it will still store it as celsius
    }
}

// the only prop that's actually stored in the object is celsius

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// => 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// => 30

let newTemp = Temperature.fromFahrenheit(100);
console.log(newTemp.celsius);
// => 37.77

// again these are GENERATED values from methods, they are not actual values; although set will update a property
// these are not technically stored values. It uses set function(value) to set a value and get function() to get a value
// get allows you to call the function and return a value based on that call || allows you to get the stored non-function value by using a function
// set lets you update the prop within the object || lets you set the stored non-function value by using a function
// static allows you to re-use the class but using a different value to determine the original property?

// ******************************************************************
// *** INHERITANCE ***
// ******************************************************************

// creates a new class based on another prototype/class but adds a new definition for something, like the set function() method
// extend indicates that the class shouldn't be based off the default Object prototype.
// this is called the superclass(Matrix) and the derived class is the subclass(SymmetricMatrix)

// constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
// }

// so all of the above basically gets passed into the new subclass by the super keyword

// set(x, y, value) {
//     this.content[y * this.width + x] = value;
// }

// set(x, y, value) super.set is going to take any SymmentricMatrix.set(x, y, value) and then run it through the set() method of the superclass
// then swaps it based on the logic

class SymmetricMatrix extends Matrix { 
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => { // super keyword refers to the superclasses constructor (above)
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value); // again calls on the set() method of the superclass 
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let extendedMatrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(extendedMatrix.get(2,3));
// => 3, 2

// ******************************************************************
// *** THE INSTANCE OF OPERATOR ***
// ******************************************************************

// allows you to check if an Object was derived from a specific class

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// => true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// => true
console.log(new Matrix(2,2) instanceof SymmetricMatrix);
// => false
console.log([1] instanceof Array);
// => true

/*
So objects do more than just hold their own properties. They have prototypes, which are other objects. They’ll act as if they have properties they don’t have as long as their prototype has that property. Simple objects have Object.prototype as their prototype.

Constructors, which are functions whose names usually start with a capital letter, can be used with the new operator to create new objects. The new object’s prototype will be the object found in the prototype property of the constructor. You can make good use of this by putting the properties that all values of a given type share into their prototype. There’s a class notation that provides a clear way to define a constructor and its prototype.

You can define getters and setters to secretly call methods every time an object’s property is accessed. Static methods are methods stored in a class’s constructor, rather than its prototype.

The instanceof operator can, given an object and a constructor, tell you whether that object is an instance of that constructor.

One useful thing to do with objects is to specify an interface for them and tell everybody that they are supposed to talk to your object only through that interface. The rest of the details that make up your object are now encapsulated, hidden behind the interface.

More than one type may implement the same interface. Code written to use an interface automatically knows how to work with any number of different objects that provide the interface. This is called polymorphism.

When implementing multiple classes that differ in only some details, it can be helpful to write the new classes as subclasses of an existing class, inheriting part of its behavior.
*/

// ******************************************************************
// *** EXCERCISE 1 ***
// ******************************************************************

// A VECTOR TYPE

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // method that takes in an object, and then returns a new Object containing the sum of of the original object and passsed through object
    plus(obj) { 
        let newX = this.x + obj.x,
            newY = this.y + obj.y;
        return new Vec(newX, newY);
    }

    // method that takes in an object, and then returns a new Object containing the difference of of the original object and passsed through object
    minus(obj) {
        let newX = this.x - obj.x,
            newY = this.y - obj.y;
        return new Vec(newX, newY);
    }

    // finds the distance of a point from the origin (0, 0). This can be determined by doing sqrt((x * x) + (y * y));
    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

// *** ANSWER ***

// class Vec {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     plus(other) {
//       return new Vec(this.x + other.x, this.y + other.y);
//     }
  
//     minus(other) {
//       return new Vec(this.x - other.x, this.y - other.y);
//     }
  
//     get length() {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//   }

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// => Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// => Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// => 5

// ******************************************************************
// *** EXCERCISE 2 ***
// ******************************************************************

// GROUPS

// *** SEARCH FOR INSTANCE IN CHAPTER AND REVIEW ***

// the Set data structure(like Map) only stores a value once.

// create a classed called Group (in place of Set).
class Group {
// like Set, it will have add(), delete(), and has() methods. 

// the constructor creates an empty group.
    constructor(iterableObject) {
        this.entries = [];
        
        for (let i of iterableObject) this.entries.push(i);
    }
// add adds a value to the group(but only if it isn't already a number). Has to check
    add(val) {
            if (!(this.entries.includes(val))) {
                this.entries.push(val);
            }
    }
// delete removes it's argument from the group (if it was a member) check first.
    delete(val) {
        return this.entries.splice(this.entries.indexOf(val), 1);
    }
// has returns a Boolean value indicating whether its argument is a member of the group (checks if group HAS said argument)
    has(val) {
        return this.entries.includes(val) ? true : false;
    }
// Use the === operator for checking values

// Give the class a static from method. It takes an iterable object as an argument
// from([10, 20]) goes to Group([10,20]), this needs to be stored 
    static from(iterableObject) {
        return new Group(iterableObject);
    }
// and created a group that contains tthe values produced by iterating.
 
}

class Group {
    constructor(iterableObject) {
        this.entries = [];
        for (let i of iterableObject) this.entries.push(i);
    }

    add(value) {
        if (!(this.entries.includes(value))) {
            this.entries.push(value);
        }
    }

    delete(value) {
        return this.entries.splice(this.entries.indexOf(value), 1);
    }

    has(value) {
        return this.entries.includes(value) ? 
        true : 
        false;
    }

    static from(iterableObject) {
        return new Group(iterableObject);
    }
}

// *** ANSWER ***

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  }

let group = Group.from([10, 20]);
console.log(group.has(10));
// => true
console.log(group.has(30));
// => false
group.add(10);
group.delete(10);
console.log(group.has(10));
//=> false;

// ******************************************************************
// *** EXCERCISE 3 ***
// ******************************************************************

// ITERABLE GROUPS

/*
class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true}; // when the iterator is ran it will run next

        let value = {   x: this.x,
                        y: this.y,
                        value: this.matrix.get(this.x, this.y)}; // this is what will ve returned. This runs the method on the original MAtrix that gets passed through
        
        this.x++; //increments
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        } // if height(x) == width(y) then x = 0 and y increments
        return {value, done: false}
    }
}
*/

class Group {
    constructor(iterableObject) {
        this.entries = [];
        for (let i of iterableObject) this.entries.push(i);
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

    add(value) {
        if (!(this.entries.includes(value))) this.entries.push(value);
    }

    delete(value) {
        return this.entries.splice(this.entries.indexOf(value), 1);
    }

    has(value) {
        return this.entries.includes(value) ? true : false;
    }

    static from(iterableObject) {
        return new Group(iterableObject);
    }
}

class GroupIterator {
        constructor(group) { // group that gets passed in
            this.group = group;
            this.currentIndex = 0;
        }

        next() {
            if (this.currentIndex >= this.group.entries.length) { // should be >= and not just ==
                return {done: true};
            } else {
            
            // let value = {value: this.group.entries[this.currentIndex]};
            let value = {value: this.group.entries[this.currentIndex],
                        done: false};
            this.currentIndex++;

            return value;
            }
        }
}

// *** ANSWER ***

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }
  
  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    next() {
      if (this.position >= this.group.members.length) {
        return {done: true};
      } else {
        let result = {value: this.group.members[this.position],
                      done: false};
        this.position++;
        return result;
      }
    }
  }

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

// => a
// => b
// => c
// => undefined

// ******************************************************************
// *** EXCERCISE 4 ***
// ******************************************************************

/* 
hasOwnProperty can be used as a more robust alternative to 'in' when you want to ignore a prototype's prop
But what if your map needs to include the word "hasOwnProperty" ? You won't be able to call that method
anymore because the object's own properly hides the method value.

Can you think og a way to call hasOwnProperty on an object that has it's own prop by that name?
*/

let map = {one: true, two: true, hasOwnProperty: true};
let theCall = Object.hasOwnProperty.bind(map); //passes map into the Object.hasOwnProperty() method
console.log(theCall("one")); // runs Object.hasOwnProperty but is calling it on map and is looking through map for the arg.

// *** ANSWER ***

console.log(Object.prototype.hasOwnProperty.call(map, "one")); // runs a call on Object.prorortype.hasOwnProperty and passes through map as this, and looks for "one"
// call can be used instead of bind, with what you WOULD have bound, followed by what you're looking for

// methods exist on plain objects from Object.prototype
// can call a function with a specific this binding by using it's call method



