function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log(`I say: ${this.saying}`);
}

function newClass(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype); // constructor.prototype is coming from Person.prototype.talk
    // run apply on constructor to assign 'this'. First arg is what we bind this to, the second is an array of arguments that are assigned to this.
    // var argsArray = Array.from(arguments) ES6, could also do (constructor, ...args) and then to apply(obj, ...args);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1)); // take off the first argsArray which will be the function*not needed in ES6** 
    return obj;
}

var crockford = newClass(Person,'SEMICOLANS!!!');
crockford.talk();

// Creates a new object

// Looks at what new was called on, and checks it's prototype. Sets Prorotype on new object to be that object

// Checks the constructor(function) and calls it with the new object, assigned to the this variable

// Returns the new object

// 1. Creates a new Object
// 2. Sets prototype
// 3. Executes constructor with this assigned
// 4. Returned the created object or object returned by constructor if there is one
