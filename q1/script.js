console.log("THIS IS QUESTION 1");

// function isEven(num) {
//     if (num % 2 === 0) {
//         return "true";
//     }
//     return "false";
// }

function isEven(num) {
    return num % 2 === 0;
}

console.log("THIS IS QUESTION 2");

// function fictorial(num) {
//     for (var y = num; y > -1; y--) {
//         y * y
//     }
//     return num = y;
// }

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }

function factorial(num) {
    // define a result variable
    var result = 1;
    // calculat factorial and store value in result variable
    for (var i = 2; i <= num; i++) {
        // (result *= i) will times the left side by the right side and sets the left side
        result *= i;
    }
    // return the result variable
    return result;
}

// factorial(4) 4 x 3 x 2 x 1

console.log("THIS IS QUESTION 3");

function kebabToSnake(str) {
    return str.replace(/-/g , "_");
}
