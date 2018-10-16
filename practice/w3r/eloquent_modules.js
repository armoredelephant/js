const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
    return {
      name(number) { return names[number]; },
      number(name) { return names.indexOf(name); }
    };
  }();

  console.log(weekDay.name(weekDay.number("Sunday")));
  // => Sunday
  console.log(weekDay.name(6));
  // => Saturday
  console.log(weekDay.number(Saturday));
  // => 6

/*************************************************************
 * Evaluating Data AS Code
 */

 const x = 1;
 function evalAndReturnX(code) {
     eval(code);
     return x;
 }

console.log(evalAndReturnX("var x = 2"));
// => 2
console.log(x);
// => 1

// eval basically runs the code that is passed through as a string.

// we can use the Function constructor instead. 
/*
 It takes two arguments: 
 a string containing a comma-separated list of argument names.
 a string containing the function body. It wraps the code in a function value so
 that it gets its own scope and won't do odd things with other scopes 
*/

let plusOne = Function("n", "return n + 1;");
console.log(plusOne(5));
// => 6

/*************************************************************
 * CommonJS
 */

 // Most widely used approach to bolted-on JS modiles is CommonJS Modules. USed by Node.js

 // The main concept in CommonJS modules is a function called require. 

 /*
    When you call this with the module name of a dependency, it makes sure the module is 
    loaded and returns it's interface.
 */

 