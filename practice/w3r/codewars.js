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

// placeholder







