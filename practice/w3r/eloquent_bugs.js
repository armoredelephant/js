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

/*************************************************************
 * Types
 */

// Very useful to leave comments explaining what type the arguments are on func

// (VillageState, Array) => {direction: string, memory: array}
function goalOrientedRobot(state, memory) {}

/*************************************************************
 * Testing
 */

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`); //if body() returns false, it will console.log faile
}

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
}); // hello.toUpperCase is HELLO so nothing would get logged.

// the more external objects that the code interacts with, the harder it is
// to set up the context in which to test it

/*************************************************************
 * Debugging
 */

function numberToString(n, base = 10) { // base by default is set to 10
    let result = "", sign = ""; // results and sign are both empty strings
    if (n < 0) { // if n is less than zero, sign  is - and n = -n 
      sign = "-";
      n = -n;
    }
    do { // while n is greater than 0, we set result to 
      result = String(n % base) + result; // String(n % base) is the remaineder
      n /= base; //diving n by the base 
    } while (n > 0);
    return sign + result;
  }
  console.log(numberToString(13, 10));

/**
 * This is where you must resist the urge to start making random changes 
 * to the code to see whether that makes it better. Instead, think. 
 * Analyze what is happening and come up with a theory of why it might 
 * be happening. Then, make additional observations to test this theory—or, 
 * if you don’t yet have a theory, make additional observations to help you 
 * come up with one.
 */

debugger

function lastElement(array) {
    if (array.length == 0) {
        return { failed: true };
    } else {
        return { element: array[array.length - 1] };
    }
}

/*************************************************************
 * Exceptions
 */

function promptDirection(question) { // function that will prompt a question
    let result = prompt(question); // result is the response to the prompt
    if (result.toLowerCase() == "left") return "L"; // if the result is left, return L
    if (result.toLowerCase() == "right") return "R"; // if the result is right, return R
    throw new Error("Invalid direction: " + result); // Error constructor ;throw an error if neither L nor R (if nothing was returned already)
}

function look() { // function look
    if (promptDirection("Which way?") == "L") { // Prompts and sets the question to Which Way
        return "a house"; // if it's L (left) => return a house
    } else {
        return "two angry bears"; // if it's R (right) => return two angry bears. Anything other than left or right would have thrown an error
    }
}

try { // will try the following code
    console.log("You see", look());
} catch (error) { // if there is an error, log "Something went wrong: " followed by the error from the browser
    console.log("Something went wrong: " + error); // if the error wast thrown in prompDirection, it will return that Error() as the error
} // error will be whatever Error() was called during current state

// `throw` is used to raise an exception
// `try` block followed by `catch` is used to catch the exception

/*
    The throw keyword is used to raise an exception. Catching one is done by wrapping 
    a piece of code in a try block, followed by the keyword catch. When the code in the 
    try block causes an exception to be raised, the catch block is evaluated, with the 
    name in parentheses bound to the exception value. After the catch block finishes—or if 
    the try block finishes without problems—the program proceeds beneath the entire 
    try/catch statement.
*/


