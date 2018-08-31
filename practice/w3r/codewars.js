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