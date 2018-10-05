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

const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name"); // will prompt for an account name and bind it to accountName
    if (!accounts.hasOwnProperty(accounts)) { // if there is no account make the statement true and then throw new Error
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName; // return accountName
}

function transfer(from, amount) { //transfer from one account to a new account
    if (accounts[from] < amount) return; // if there isn't enough money, return
    accounts[from] -= amount; // subtract amount from current account
    accounts[getAccount()] += amount; // getAccount will prompt for an account, and then add the amount to that account
}

// will first remove the money and THEN throw an exception

/**
 * `finally` | A finally block says “no matter what happens, run this code 
 * after trying to run the code in the try block.”
 */

 function transfer(from, amount) {
     if (accounts[from] < amount) return;
     let progress = 0;
     try {
         accounts[from] -= amount; // subtract from first account
         progess = 1; // set progress to 1
         accounts[getAccount()] += amount; // add to second account or throw error
         progress = 2; // set progess to 2
     } finally {
         if (progress == 1) { // if there was an error with getAccount()
             accounts[from] += amount; // add the money back to the first account
         }
     }
 }

/*************************************************************
 * Selective Catching
 */

 for (;;) { // if it's not L or R from promptDirection, it will continously loop
     try {
         let dir = promtDirection("Where?"); // <== typo!
        console.log("You chose ", dir);
        break;
        } catch (e) { 
            console.log("Not a valid direction. Try again.");
        }
 }

 /**
  * The for (;;) construct is a way to intentionally create a loop that 
  * doesn’t terminate on its own. We break out of the loop only when a 
  * valid direction is given.
  */

class InputError extends Error {} // input error is a new class based off Error

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for (;;) { 
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
}

/*
This will catch only instances of InputError and let unrelated exceptions 
through. If you reintroduce the typo, the undefined binding error will be 
properly reported.
*/

/*************************************************************
 * Assertions
 */

/*
    Assertions are checks inside a program that verify that something is the 
    way it is supposed to be. They are used not to handle situations that can 
    come up in normal operation but to find programmer mistakes.

    If, for example, firstElement is described as a function that should 
    never be called on empty arrays, we might write it like this:
*/

function firstElement(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}

/*
    I do not recommend trying to write assertions for every possible kind 
    of bad input. That’d be a lot of work and would lead to very noisy code. 
    You’ll want to reserve them for mistakes that are easy to make 
    (or that you find yourself making).
*/

/*************************************************************
 * Exercise 1
 */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure(`Klunk`);
    }
}

function reliableMultiply(a, b) {
    // wraps what primitive does
    for (;;) {
        try {
            let result = (Math.random() < 0.2);
            if (result) {
                return result = a * b;
            }
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("The number was not less than 0.2");
            } else {
                throw e;
            }
        }
    }
    // keeps trying until a call succeeds
    // after which it returns result
}

/***** ANSWER */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    for (;;) { // will continue to loop until a * b is returned from primitiveMultiply()
        try {
            return primitiveMultiply(a, b); // will continue to be returned as either an exception or the multiplied number
        } catch (e) { // catch the exception if multiplied number was not returned
            if (!(e instanceof MultiplicatorUnitFailure)) // checks for only the exception in the function, if it's there, and it's true, we set it to false
            throw e; // we throw e if it's any other exception other than the one in this function
        }
    }
}

/*************************************************************
 * Exercise 2
 */

const box = {
    locked: true,
    unlock() { this.locked = false; }, // method to set the value of locked to false
    lock() { this.locked = true; }, // method to set the value of locked to true
    _content: [],
    get content() { // getter we can call on each instance of box
        if (this.locked) throw new Error("Locked!"); // will check if it's locked or not
        return this._content; // if unlocked we can see the value of contents
    }
};

function withBoxUnlocked(body){
    // unlocks the box 
    let progress = 0,
        wasUnlocked = 0;

    if (box.locked == false) {
        wasUnlocked = 1
    }

    try {
        box.unlock();
        progress = 1;
        body();
        box.lock();
        progress = 2;
        } finally {
            if (progress != 2) box.lock();
            if (wasUnlocked == 1) box.unlock();
        }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: ", e);
}

console.log(box.locked);

/***** ANSWER */

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let locked = box.locked; // binds the value of box.locked to locked
    if (!locked) { // if the box is unlocked, return the body function
      return body();
    }
  
    box.unlock(); // unlock the box
    try {
      return body(); // try running the body function
    } finally {
      box.lock(); // lock the box back 
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  
  console.log(box.locked);