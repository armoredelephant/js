var y

function square(x) {
    return y = x * x;
}

var result = square(104);

// function to capital first character of a word
function capitalize(str) {
    // if typeof capitalize(argument) is equal to "number", return message
    if (typeof str === "number") {
        return "that's not a string!";
    }
    // if it is not a number, then take the first letter(0) and set it to uppercase, then take the rest and add it
    return str.charAt(0).toUpperCase() + str.slice(1);
}


var city = 'paris';
// runs paris through the capitalize function and sets capital variable to the "returned" output, which is 'Paris'
var capital = capitalize(city);

var num = 37;
// runs 37 through the capitalize function and sets the capital variable to the "returned" output, which is "that's not a string!" as defined in the IF statement of the function
var capital = capitalize(num);


// function nameOfFunction(arg) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var nameOfFunction = function(arg) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

function test(x,y) {
    return y - x;
}

test(10,40);

function test(x) {
    return x*2;
    console.log(x);
    return x/2;
}

test(40);

function doMath() {
    var x = 40;
    console.log(x);
}

function hi() {
    var name = "Keith";
    console.log(name);
}

function bye() {
    console.log(name);
}

var phrase = "hi there!";
undefined
function doSomething() {
    var phrase = "Goodbye!";
    console.log(phrase);
}