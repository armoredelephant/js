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
        uniqueArray = charArray.filter((e, i) => charArray.lastIndexOf(e) === i), // had to google. Will return an array containing each unique character from the array that was filterd
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

/* 
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

*/

function zeros (n) {
    // function to get an array of all numbers counting up to (n)
    function range(start, end) {
        let rangeArray = [];
        for (let i = start; i < end; i++) rangeArray.push(String(i));
        console.log(rangeArray);
        return rangeArray;
    }
    // binding checkedNumber to the factorial number of (n)
    let checkedNumber = String(range(1, n + 1)
                        .reduce((a, b) => a * b, 1));
    console.log(checkedNumber);
    let arr = [];

    // splits the number into an array, reverses it so the 0 is at the start, joins it back, and then matches all 0 up until the first # that isn't a zero, then counts by the length of what was matched.
    let x = checkedNumber.split('').reverse().join('');
    return (x[0] == 0) ? arr = x.match(/.+?(?=[1-9])/).length : 0;
}

// run factorial on arg, with reduce?

f

// reverse the number

// if 0, match 0 until it's not 0

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/*
IP Validation

Write an algorithm that will identify a calid IPv4 address in dot-decimal format. IPs should be
considered calid if they consist of four octets, with values between 0..255 (included)

Input to the function is guaranteed to be a single string

valid inputs
1.2.3.4
123.45.67.89

invalid inputs
1.2.3
1.2.3.4.5
123.456.78.90
12.034.067.089

leading zeros are considered invalid 04.02
*/

function isValidIP(str) {
    // splits each at . and puts them into an array
    str = str.split('.');
    let countCheck = 0;
    // checks if any of the numbers start with 0
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        if ((str[i][0] == 0) && (str[i][0].length > 1)) count++;
        console.log(count);
        if (count > 0) return false;
        if ((Number(str[i]) < 255) && (Number(str[i]) >= 0)) countCheck++;
        if (countCheck == 4) return true;
    }
    // number can range up to 255 between each

    // can only have 4 substrings
    return false;
}

// 0.0.0.0 is giving true
// 123,432,123,12 is supposed to be true?
//1.2.3.4 is failing

// many people complaining in comments that this Kata's tests are bogus

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/*
Two tortoises names A and B must run a race. A starts with an average speed of 720 feet per hour.
A has a 70 feet lead over B
B's speed is 850 feet per hour
How long will it take B to catch A?
*/

function race(v1, v2, g) {
    let v1Speed = Math.round(v1 / 60), //distance /s
        v2Speed = Math.round(v2 / 60), // distance /s
        v1Distance = g, // lead
        v2Distance = 0,
        seconds = 0,
        minutes = 0,
        hours = 0,
        total = [];

        console.log(v1Speed);
        console.log(v2Speed);

    while (v1Distance != v2Distance) {
        v1Distance += v1Speed;
        v2Distance += v2Speed;
            if (minutes == 60) {
                hours++;
                minutes = 0;
            } else {
                minutes++;
            }
            console.log(v1Distance);
            console.log(v2Distance);
    }
    console.log(hours);
    console.log(minutes);
    minutes = minutes - 1;
    console.log(minutes);
    v1Distance = v1Distance - v1Speed; // subtract one minute
    v2Distance = v2Distance - v2Speed; // subtrace one minute
    v1Speed = v1Speed / 60; // sets speeds to per sec
    v2Speed = v2Speed / 60;
    
    // while ((Math.ceil(v2Distance * 10) / 10) <= Math.ceil(v1Distance * 10) / 10) {
        while((Math.ceil(v2Distance * 10) / 10) <= Math.ceil(v1Distance * 10) / 10) {
        v1Distance += v1Speed;
        v2Distance += v2Speed;
        seconds++;
    }


    total.push(hours);
    total.push(minutes);
    total.push(seconds);
    return total;
}
aDistance = 0

// 720 / 60 => 12
// 850 / 60 => 14 

// Math.round(850 / 60); => B speed
// Math.round(720 / 60); => A speed

// 70 feet => distance traveled by A
// A speed/m x 70
// while B is catching up, A is still moving at (aSpeed);

// 70 / 14 => 5 minutes to catch up to the previous speed

// has to be hours/minutes/seconds

// ******************************************************************
// *** NEXT ***
// ******************************************************************

// Opposites Attract

/*
If One flower has an even number and the other has an odd number, then they are in love
Write a function that will take the number of petals of each flower and return true if they are in love
and false if they are not.
*/

(function inLove() {
    // generate two random numbers
    let male = Math.round(Math.random() * 1),
        female = Math.round(Math.random() * 1);
    // if one is odd and one is even then return true : false
    return (male !== female) ?
            true :
            false;
})();

// lovefunc(1,4) => true

function lovefunc(flower1, flower2) {
    let arr = [flower1, flower2]; 
    if (arr.filter( flower =>  flower % 2 == 0).length === 1) {
        return true;
    } else {
        return false;
    }
}

function lovefunc(flower1, flower2) {
    return [flower1, flower2].filter( flower => flower % 2 == 0).length === 1 ?
            true :
            false;
}

// *** BEST ANSWER ***

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************

/**
 * The main idea is to count all occuring characters in string.
 * If you have a string like "aba", then the result should be:
 * { 'a': 2, 'b': 1}
 * Empty string will return {} empty object
 */


function count(string) {
    // return an object
    let countObj = {},
        uniqueChar = [];

    for (let char of string) {
        if (!uniqueChar.includes(char)) uniqueChar.push(char);
    }

    for (let unique of uniqueChar) {
        let count = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i] == unique) count++;
            countObj[unique] = count;
        }
    }

    return countObj;
}

// *** BEST PRACTICE ***

function count(string) {
    let count = {}; // create an empty object
    
    string.split('').forEach(char => { // create an array containing each char and then for each:
        count[char] ? // if that char is already a property =>
        count[char]++ : // add to the count, else =>
        count[char] = 1; // create the property and set the value to 1
    });

    return count; // returns the object with the new key/value pairs.
}

/** this one seems much more practical and efficient than mine.
 * I definitely over coded.
 */

 // ******************************************************************
// *** NEXT ***
// ******************************************************************

// Extract the domain name from a URL

/*
    Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
*/

// This will def be done with regexp

// follows a // || follows a www.
// let space = url.replace(/^.\/([a-z])\..$||^.www\.([a-z]{1,}).$/, `this`);
// replace all except for group $1, which will group the domains with methods above
// maybe slice?  

function domainName(url) {
    url = url.split(/[\/\.]/);
    return url.filter(arrayItem => arrayItem.lastIndexOf(":") != arrayItem.length - 1 && arrayItem != "www")[0];
}

// Can this be done with a regex instead?

// This looks like better code? Not on a single line?
function domainName(url) {
    url = url.split(/[\/\.]/);
    let filteredUrl = url.filter(arrayItem => {
        return arrayItem.lastIndexOf(":") != arrayItem.length - 1
                &&
                arrayItem != "www"
    });
    return filteredUrl[0];
}

// *** BEST PRACTICE *** 

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};


// *** REGEX METHOD ***

function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

// replaces https:// 0 or more times
// replaces www. 0 or more times
// splits the remainder which should just be website.com at the .
// returns the 0 index which would be the domain.

 // ******************************************************************
// *** NEXT ***
// ******************************************************************
// Array.diff

/**
 * Your goal in this kata is to implement a difference function.
 * It will subtract one list from another and returns the result
 * 
 * It should remove all values from list a, which are present in list b
 * 
 * array_diff([1,2], [1]) == [2]
 * 
 * If a value is present in b, all of it's occurrences must be removed from the other:
 * 
 * array_diff([1,2,2,2,3], [2]) = [1,3]
 */

 function array_diff(array1, array2) {
     // filter array a where item is not also found in array2
    return array1.filter( i => array2.indexOf(i) == -1);
}

// *** includes ***

function array_diff(array1, array2) {
    return array1.filter(i => !b.includes(i));
}

// ******************************************************************
// *** NEXT ***
// ******************************************************************
/*
    returns true of a portion of str1 characters can be rearranged to match str2, otherwise return false.
*/

/**
 * Only lower case letters will be used (a-z).
 * No punctuation or digits will be included.
 * Performance needs to be considered.
 */

 // scramble('rkqodlw', 'world') ==> True
 // scramble('katas', 'steak') =>> False

function scramble(str1, str2) {

    function countChar(str, char) {
        return str.split
    }
    const str1Split = str1.split(''),
        str2Split = str2.split(''),
        filteredStr2 = str2Split.filter(letter => str1Split.includes(letter)),
        str2NonUniqueCharacters = str2Split.filter((v, i) => str2Split.indexOf(v) != i);

        for (let i of str2NonUniqueCharacters) {
            // need to find out if non unique char is also used more than once in str1. If not, then return false
        }
        


        console.log(str1Split, str2Split, filteredStr2, nonUniqueCharacters)
    
    return filteredStr2.length == str2Split.length; 
}



