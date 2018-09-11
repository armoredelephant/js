// function that takes a number as the arg and sums numbers div by 3 or 5

// *** MY SOLUTION ***

function multiples(num) {
    // accumulate all numbers divisble by 3 or 5 | if both, then it's counted once
    count = 0;
    for (let i = 0; i <= num; i++) {
        if ((i % 5 == 0 && i % 3 == 0) || (i % 5 == 0 || i % 3 == 0)) count += i;
    }
    return count;
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// *** MY SOLUTION

function phoneNumber(arr) {
    for (let num of arr) {
        if (num >= 10) return `This is not a valid number.`;
    }

    let areaCode = arr.splice(0, 3).join(''),
        firstThree = arr.splice(0, 3).join(''),
        lastFour = arr.splice(0).join('');

    return `(${areaCode}) ${firstThree}-${lastFour}`;
}

// (123) 456-7890

// *** MOST CLEVER IMO***

function phoneNumber(arr) {
    for (let num of arr) {
        if (num >= 10) return `This is not a valid number.`;
    }

    return arr.join('').replace(/(...)(...)(.*)/, `($1) $2-$3`);
}

phoneNumber([1,2,3,4,5,6,7,8,9,0]);

// => (123) 456-7890

// *** BEST PRACTICE

function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0,3) + ') '
        + numbers.substring(3,6)
        + '-'
        + numbers.substring(6);
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);


// ******************************************************************
// *** NEXT ***
// ******************************************************************

// maskify

function maskify(arg) {
    let str = arg.toString(),
        cut = str.length - 4,
        shown = str.substring(cut),
        arr = str.split(''),
        hidden = [];
        
        arr.forEach(() => hidden.push('#'));

    return hidden.join('') + shown;
}

function maskify(cc) {
    let str = cc.toString(),
        cut = str.length - 4,
        shown = str.substring(cut),
        arr = str.substring(0, cut).split(''),
        hidden = arr.map(n => n = '#').join('');

    return hidden + shown;
}

// *** BEST PRACTICE ***

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

// printer string
// string should be >= 1 and only contain letters a-z
function print_error(s) {
    let errors = 0,
        denom = s.length;

    if (!s.match(/[a-z]/i) || s.match(/[A-Z]/g)) return "This is an invalid string";
    errors += (s.match(/[n-z]/g) || []).length;

    return `${errors}/${denom}`;
    // return errors + "/" + denom;
}

// *** BEST PRACTICE ***

function print_error(s) {
    // s.math(/[^a-m]/g).length will match all characters that are not a-m and count the length
    return s.match(/[^a-m]/g).length + '/' + s.length;
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/* Implement a method that accepts 3 integer values a, b, c. 
The method should return true if a triangle can be built with 
the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a, b, c) {
    let sortedArray = sorting(a, b, c);

    if (sortedArray.includes(0)) return false;

    return sortedArray[0] < sortedArray[1] + sortedArray[2] &&
            sortedArray[1] < sortedArray[0] + sortedArray[2] &&
            sortedArray[2] < sortedArray[1] + sortedArray[0]
        ? true
        : false

    function sorting(...args) {
        return args.sort((a, b) => a - b );
    }
}

// *** REFACTORED OF MINE ***

function isTriangle(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b);
    if ([a, b, c].includes(0)) return false; // can also be excluded as it couldn't return true if any number was 0

    return a + b > c;
}

// *** ANOTHER WAY I THOUGHT OF AFTER WATCHING OBJECT VIDEOS ***

function isTriangle(a, b, c) {
    let sortedArguments = Array.from(arguments).sort((a, b) => a - b);
    if (sortedArguments.includes(0)) return false;

    return a + b > c;
}

// *** CLEVER (easier version of what I did ***

function isTriangle(a,b,c) {
// binds a,b,c to an array and then sorts that array
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
//   the two lower numbers need to be greater than the highest number
  return a + b > c;
}

// *** BEST PRACTICE *** 

function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/* You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be in the same place.
*/

function sortArray(array) {
    // [5, 3, 2, 8, 1, 4] => [1, 3, 2, 8, 5 ,4]
    let oddArray = [],
        finalArray = [];
    
    if (array.length == 0) return array;    
    // Loop through the array once and determine if odd or even.
    // Push all odd into a new array
    for (let i of array) {
        if (i % 2 == 1) oddArray.unshift(i);
        console.log(oddArray);
    }

    oddArray = oddArray.sort((a,b) => a - b);
    // Loop through array, if odd finalArray.push(oddArray.shift());
    // if even finalArray.push(arr[i]);
    for (let i = 0; i < array.length; i++) {
        array[i] % 2 == 1 ? finalArray.push(oddArray.shift()) : finalArray.push(array[i]);
    }

    return finalArray;
}


// *** BEST PRACTICE ***

function sortArray(array) {
    const oddArray = array.filter(x => x % 2).sort((a, b) => a - b); // x % 2 is TRUE on odd bc it = 1 which is TRUTHY. AMAZING.
    return array.map(x => x % 2 ? oddArray.shift() : x); // if even, (x % 2 == 1  == true), then current index == oddArray.shift(), else it's even and keep it
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// Find the unique number!
// [1, 1, 1, 5, 1, 1] = > 5
// [0, 0, 0, .55, 0, 0] => .55

// Has to be able to tell if the first character is the unique
// can use a count on each individual #?
// run a map or filter on array to get the two numbers
// return the number fr

function findUniq(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray[0] == sortedArray[1] ? sortedArray[sortedArray.length - 1] : sortedArray[0];
}

// 1694ms to run

// *** BEST PRACTICE ***

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}
// VERY SIMILAR TO MINE!!!
// Do not need to create a new array, can simply sort the original array.
// can actually be refactored to:

function findUniq(arr) {
    arr.sort(); // doesn't need the function inside as there will only be two dif values
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}

// *** CLEVER ***

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// checks the indexOf n.
// if it's the same as the last indexOf n then it returns that number
// Thus finding the unique number.
// Should run faster than the best practice version as it only needs to finish looping through the array once.//#endregion

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized ONLY if the original word was capitalized */

// toCamelCase("the-stealth-warrior") => "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") => "TheSTealthWarrior"
function toCamelCase(str) {
    let arrOfWords = str.split(/[-_]/)
    let newArr = str.split(/[_-]/)
            .filter(word => { if (!(word === arrOfWords[0])) return word })
            .map(char => { return char.charAt(0).toUpperCase() + char.slice(1) });
    return arrOfWords.shift() + newArr.join('');
}


// split/replace at /_/- ?

// return first word as is, the rest are toUpperCase();

// *** BEST PRACTICE ***

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

// Refactored version of the best practice, but is it harder to understand or necessary??
// /[-_]\w/ig will find a dash or underscore followed by a char
// toCamelCase("the_stealth_warrior") => "_s" "_w"
// it runs these chars through the anon function and makes charAt(1) uppercase, then replaces _s with S
// _s gets replaced with a capital S
// _w gets replaced with a capital W

function toCamelCase(str) {
    return str.replace(/[-_]\w/ig, match => match.charAt(1).toUpperCase());
}

function toCamelCase(str) {
    return str.replace(/[-_]\w/ig, match => {
        console.log(match);
        match.charAt(1).toUpperCase() });
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/* 
Write a function that will return the count of distinct case-insensitive alphabetical characters
and numeric digits that occur more than once in the input string. The input string can be assumed to
contain only alphabets and numberic digits.
*/

// if any number/letter occurs more than once, it's +1 for that letter.
// "aabBcde" => 2
//  "aA11" => 2

function duplicateCount(text) {
    let charArray = text.toLowerCase().split(''),
        uniqueArray = charArray.filter((e, i) => charArray.lastIndexOf(e) === i),
        results = 0;

    for (let char of uniqueArray) {
        if (charArray.indexOf(char) != charArray.lastIndexOf(char)) results++;
    }
    
    return results;
}

// *** Best Practice ***

// It's a one liner....

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

//   sets text to lowercase, splits it into an array, sorts, then rejoins
// "11Aa3345" => "11aa3345" => [1,1,a,a,3,3,4,5] => [1,1,3,3,4,5,a,a]  => "113345aa"
// 1+ matches one time + matches 1 is how many times it matches
// [] denotes a character class
// ( ) denotes a capturing group
// ^ matches beginning of input
// ([^]) checks first of every character in string and 1+ checks if there is one more. 
// If it matches itself once, then the letter is added to array, or its an empty array
// returns the arrays length which will either have matched letters or be empty.

// ******************************************************************
// *** NEXT ***
// ******************************************************************