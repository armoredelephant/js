function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) { // let counter
        console.log("Happy happy");
    }
}

canYouSpotTheProblem();

// => ReferenceError: counter is not defined

function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand") // new Person("Ferdinand");
console.log(name);
// => Ferdinand

/**
 *  The call actually processed and returned an undefined value, but created
 * the global binding "name"
 */

"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
// => Uncaught TypeError: Cannot set property 'name' of undefined

/**
 * constructors created with class notation will always complain if called
 * without new.
 */

// putting "use strict" at the top of the program rarely hurts and might help spot problem


