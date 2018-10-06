/*************************************************************
 * Creating A Regular Expression
 */

 let re1  = new RegExp("abc");
 let re2 = /abc/;

 // => /abc/

 let eighteenPlus = /eighteen\+/;

 // => /eighteenPlus\+/

 /*************************************************************
 * Testing for matches
 */

 console.log(/abc/.test("abcde"));
 // => true

 console.log(/abc/.test("abxde"));
 // => false

 // if "abc" were found in sequence anywhere in the tested string, it would be true

 /*************************************************************
 * Sets of Characters
 */

 console.log(/[0123456789]/.test("in 1992"));
 // => true

 console.log(/[0-9]/.test("in 1992"));
 // => true

 /**
  * \d	Any digit character
  * \w	An alphanumeric character (“word character”)
  * \s	Any whitespace character (space, tab, newline, and similar)
  * \D	A character that is not a digit
  * \W	A nonalphanumeric character
  * \S	A nonwhitespace character
  * .	Any character except for newline
  */

  let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
  console.log(dateTime.test("10-30-2003 15:20"));
  // => true

  console.log(dateTime.test("30-jan-2003 15:20"));
  // => false

  /* 
    backslash codes can be used inside square brackets.
    such as [\d.] means any digit or a period character. But the period itself,
    between square brackets, loses it's special meaning. Same with other special
    characters, such as +
  */

  /*
    To invert a set of characters—that is, to express that you want to 
    match any character except the ones in the set—you can write a caret 
    (^) character after the opening bracket.
  */

  let notBinary = /[^01]/;
  console.log(notBinary.test("1100100010100110"));
  // => false

  console.log(notBinary.test("1100100010200110"));
  // => true - because 2 was matched

/*************************************************************
 * Repeating Parts of a Pattern
 */

 // *** >+< ***

 // Putting a + after something indicates that the element may be repeated.
 // Thus, /\d+/ matches one or more digit characters.

 console.log(/'\d+'/.test("'123'"));
 // => true

 console.log(/'\d+'/.test("''"));
 // => false

 console.log(/'\d*'/.test("'123'"));
 // => true

 console.log(/'\d*'/.test("''"));
 // => true

 // *** >*< ***

 // The star * allows to match 0 times.
 // Something with a star after it does not prevent a pattern from matching.
 // It will just match zero instances instead

 // *** >?< *** 

 // A ? makes a aprt of a patter optional.
 
 let neighbor = /neighbou?r/; // the letter betfor the ? is optional
 console.log(neighbor.test("neighbour"));
 // => true

 console.log(neighbor.test("neighbor"));
 // => true

 // *** >{}< ***

 // {} indicates that the pattern should occur a precise number of times
 // Puttin {4} after an element, requires it to occur four times to match
 // Can also specify the range: {2, 4} meaning it must occur at least twice
 // but no more than 4 times.
 
 let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
 console.log(dateTime.test("1-30-2003 9:45"));
 // => true

 /*************************************************************
 * Grouping Subexpressions
 */

 /*
    To use an operator like * or + on more than one element at a time, 
    you have to use parentheses. A part of a regular expression that is 
    enclosed in parentheses counts as a single element as far as the operators 
    following it are concerned.   
 */

 let cartoonCrying = /boo+(hoo+)+/i;
 console.log(cartoonCrying.test("Boohooooohoohoooo"));
 // => true;

 // the first and second + only apply to the second o in bo'o' and ho'o'
 // The third + matches the whole group (hoo+), matching one or more

 // the i at the end in the example makes this regular expression case insens.

/*************************************************************
 * Matches and Groups
 */

 // *** >exec< ***

/**
 * exec will return null if no match is found, and return an object with information
 * otherwise
 */

 let match = /\d+/.exec("one two 100");
 console.log(match);
 // => ["100"]

 console.log(match.index);
 // => 8

 // let match = /\d/.exec("one two 100");
 // console.log(match);
 // => ["1"]

 // index property of the exec object will tell us where it was matched
 
 // String values have a match method that behaves similarly.

 console.log("one two 100".match(/\d+/));
 // => ["100"];

 /*
    When the regex contains a subexp grouped with parentheses, the text that
    matched those groups will also show up in the array
    The whole match is always the first element.
    The next elem is the part matched by the first group (
        the one whose opening parenthesis comes first in the expression
    ), then the second group, and so on.
 */

 let quotedText = /'([^']*)'/; // match everything between /' '/ first, but also match everything between ' ' without [^']
 console.log(quotedText.exec("she said 'hello'"));
 // => ["'hello'", "hello"] - 'hello' comes first

/*
     When a group does not end up being matched at all (
       for example, when followed by a question mark
     ), its position in the output array will hold undefined. Similarly, 
     when a group is matched multiple times, only the last match ends up 
     in the array. 
*/

console.log(/bad(ly)?/).exec("bad");
// => ["bad", undefined]

console.log(/(\d)+/.exec("123"));
// => ["123", "3"]

// Groups can be useful for extracting parts of a string.
// If we don't just want to match, but extract and construct an object to represent
// We can wrap parentheses around the digit patters and directly pick what we need

/*************************************************************
 * The Date Class
 */

 console.log(new Date());
 // => Sat Oct 06 2018 10:23:31 GMT-0600 (Mountain Daylight Time)

 console.log (new Date(2009, 11, 9));
 // => Wed Dec 09 2009 00:00:00 GMT-0700 (Mountain Standard Time)

 console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
 // => Wed Dec 09 2009 12:59:59 GMT-0700 (Mountain Standard Time)

 // months start at 0, so December is 11

 /**
  * 0 January
  * 1 February
  * 2 March
  * 3 April
  * 4 May
  * 5 June
  * 6 July
  * 7 August
  * 8 September
  * 9 October
  * 10 November
  * 11 December
  */

  // Days still start with 1

  /*
      The last 4 arguments ( hours, minutes, seconds, milliseconds ) are optional
      and taken to be 0 when not given.
  */

console.log(new Date(2013, 11, 19).getTime());
// => 1387436400000

console.log(new Date(1387436400000));
// => Thu Dec 19 2013 00:00:00 GMT-0700 (Mountain Standard Time)

// If Date() is given only one argument, it is taken as a millisecond count.
// You can get the millisecond count by creating a new Date object, and calling getTime()
// or by calling Date.now()

// Date objects have many useful methods:

/** Date.*()
 * getFullYear
 * getMonth
 * getDate
 * getHours
 * getMinutes
 * getSeconds
 */

// Putting parenthesis around the parts of the expression that we want,
// we can now create a date object from a string.

function getDate(string) {
  let [_, month, day, year] = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));
// => Thu Jan 30 2003 00:00:00 GMT-0700 (Mountain Standard Time)

// The _(underscore) binding is ignored and used only to skip the full match element

/*************************************************************
 * Word and String Boundaries
 */

// Unfortunately, getDate will also extract nonsensical date 00-1-3000 from
// "100-1-3000"

console.log(getDate("100-1-3000"));
// => Sun Dec 01 2999 00:00:00 GMT-0700 (Mountain Standard Time)

// if we want to enforce the match must span the whole string, we can add ^ and $
// The caret matches the start of the input string
// The dollar sign matches the end.
// So /^\d+$/ matches a string consisting entirely of one or more digits
// /^!/ matches any string that starts with an exclamation mark.
// /x^/ does not match any string ( there cannot be an x before the start of the string )

// If we just want to make sure the date starts and ends on a word boundary
// we can use the marker \b.
// A word boundary can be the start or end of the string or any point in the string
// that has a word character (as in \w) on one side and a nonword char on the other

console.log(/cat/.test("concatenate"));
// => true

console.log(/\bcat\b/.test("concatenate"));
// => false

console.log(/\bcat\b/.test("cat")); // if cat is the start or end of a word
// => true

console.log(/\bcat\b/.test("dogiscatdog")); // cat is not at the start or end
// => false

console.log(/\bcat/.test("cat is a dog")); // starts with cat
// => true

console.log(/\bcat/.test("dogisacat")); // cat is not the start of a word, nor is it at the start
// => false

console.log(/cat\b/.test("dogisacat")); // cat is at the end of a word/string
// => true

console.log(/cat\b/.test("catisadog")); // cat is not at the end of a word
// => false

console.log(/dog(cat\b)/.test("dogcatdogcat"));
// => true 

console.log(/dog(cat\b)/.exec("dogiscatdogcat"));
// => ["dogcat", "cat"] matched the dogcat, and then also the cat that was at the end

/*************************************************************
 * Choice Patterns
 */

// We want to match not only a  numner, but a number followed by a word (and it's plural)

// *** >|< ***

// Denotes a choice between the left or the right

// \b\d+
// this match can be at the start and starts with 1 or mroe digits
// (pig|cow|chicken)
// followed by pig, chicken, or cow
// s?
// passing the option for them to be plural s? 
// \b
// can end with this match
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// => true

console.log(animalCount.test("15 pigchickens"));
// => false

// matches where it finds the digits followed my one of the animals => 15 cows
console.log(animalCount.test("there are a total of 15 cows at the farm"));
// => true

// the 15 and pigs are not sequential
console.log(animalCount.test("the 15 animals that we are expecting are pigs"));
// => false

let newAnimalCount = /\b\d+ (pig|cow|chicken)s?|(dog|cat|horse)s?\b/;
console.log(newAnimalCount.test("15 pigs"));
// => true

console.log(newAnimalCount.test("there are 22 dogs, and it's heaven"));
// => true

console.log(newAnimalCount.test("The 15 cows do not like the cat"));
// => true

console.log(newAnimalCount.test("The 15 dogs want to eat the cats food"));
// => true because 15 dogs is still met

console.log(newAnimalCount.test("the 15 chickens want to chase the cat around the farm"));
// => true because 15 chickens still starts and ends

console.log(newAnimalCount.test("the 15 other dogs and the 15 other cows"));
// => true but unsure how

/*************************************************************
 * The Mechanics of Matching
 */

 