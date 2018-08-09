// let str = '';
// let size = 10;

// for (let i = 1; i < size; i++) {
//     for (let x = 1; x < size; x++) {
//         if ((x+i) % 2 === 0) {
//             str += ' ';
//         } else {
//             str += '#';
//         }
//     }
//     str += '\n';
// }

// for (let n = 1; n <= 100; n++){
//     if ((n % 3 === 0) && (n % 5 === 0)) {
//         console.log('FizzBuzz');
//         n++;
//     } else if (n % 3 === 0) {
//         console.log('Fizz');
//         n++;
//     } else if (n % 5 === 0) {
//         console.log('Buzz');
//         n++;
//     }
//     console.log(n);
// }

/* Instrad of console.log('fizz') or vice versa, we instead use
store the word in a variable and output that variable if it has info OR it will output n
*/

//  *** INTERVIEW QUESTIONS ***
// Count to 100 and return FizzBuzz || Fizz | Buzz

for (let n = 1; n <= 100; n++) {
    let output = '';
    if ((n % 3 === 0) && (n % 5 === 0)) {
        output += 'FizzBuzz';
    } else if (n % 3 === 0) {
        output += 'Fizz';
    } else if (n % 5 === 0) {
        output += 'Buzz';
    }
    console.log(output || n);
}

/*

*** FUNCTIONS ***

*/

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'tahini');
    ingredient(0.25, 'cup', 'lemon juice');
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", 'cumin');
}

function greet(who) {
    console.log('hello ' + who);
}

greet('Keith');
console.log('bye');

function minus(a,b) {
    if (b === undefined) return -a;
    else return a - b;
}

// exponent will be (2) IF no param is passed through
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= 2;
    }
    return result;
}

console.log(4);
// 16
console.log(2,6);
// 64 - 2x2x2x2x2x2

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapvalue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// => 1
console.log(wrap1());
// => 2

function multiplier(factor) {
    return number => number * factor;
}

// binding multiplier() with factor parameter set to 2. Calling this will remember that environment where 2 is bound
let var1 = multiplier(2);
let var2 = multiplier(4);

console.log(var1(2));
// => 4
console.log(var2(4));
// => 16

/*

*** When called, the function body sees the environment in which it was created, not the environment in which it was called. ***

*/

let minNum = (arg1, arg2) => {
    let num;
    (arg1 < arg2) ? num = arg1: num = arg2;
    return num;
}

minNum(19,3);
// => 3


let isEven = (num) => {
    if(num === 0) {
        return true;
    } else if(num === 1) {
        return false;
    } else {
    return isEven(num - 2);
    }
}

let countChar = (str, char) => {
    let count = 0;
    let lowStr = str.toLowerCase();
    let upStr = str.toUpperCase();
    for(let i = 0; i < str.length; i++) {
        lowStr[i] === char ? count += 1 : count += 0 ;
        upStr[i] === char ? count += 1 : count += 0 ;
    }
    return count;
}

