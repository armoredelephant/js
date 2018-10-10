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

 "the 3 pigs"

 /*
    boundary => | digit | => <| digit |> or ""(space) => {"pig", "cow", "chicken"}  => "s" or boundary
  */


/**
 * At position 4, there is a word boundary, so we can move past the first box
 * 
 * Still at position 4, we find a digit(3), so we can move past the third box (it checks if there is another digit first)
 * 
 * At position 5, one path loops back to before the second (digit) box, while the other moves 
 * forward through the box that holds a single space character. There is a space here, not a 
 * digit, so we must take the second path.
 * 
 * We are now at position 6 (the start of pigs) and at the three-way branch in the diagram.
 * We don't see cow or chicken here, but we do see pig, so we take that branch.
 * 
 * At position 9, after the branch, one path skips s and goes straight to to the final boundary.
 * The other matches an "s". There is an s character here, so we go through the s box.
 * 
 * We're at position 10 (end of the string) and can match only a word boundary. The end of a string counts as a word
 * boundary, so we go through the last box and have successfully matched this string.
 */

let matchBinary = /\b([01]+b|[\da-f]+h|\d+)\b/;

/**
 * Matches either a bindary number followed by a b
 * 
 * a hexadecimal number (that is, base 16, with the letters a to f standing for digits 10 to 15),
 * followed by an h
 * 
 * or a regular decimal number with no suffix character. 
 * 
 */

 /*
    word boundary => 
    "0" or "1" => <| "0" or "1" |> => "b" || 
    digit or [a-f] => <| digit or [a-f] |> => "h" ||
    digit => <| digit |> 
    => word boundary
 */

 /*
    When matching this expression, it will often happen that the top (binary) branch is
    entered even though the input does not actually contain a bindary number.

    When matching the string "103", for example, it becomes clear only at the 3 that
    we are in the wrong branch. The string does match the expression, just not the branch
    we are currently in
 */

 // *** The matcher will backtrack ***

 // When entering a branch, it remembers it's current position, to jump back to, if the current branch isn't matched

 // The matcher stops as soon as it finds a full match. It will stop after only the first one.

 let findUpToX = /^.*x/;

 console.log(findUpToX.test("abcxe"));
 // => true

 console.log(findUpToX.exec("abcxe"));
 // => ["abcx", index: 0, input: "abcxe"]

 /**
  * Backtracking also happens for repition operators like + and *.
  * If you match /^.*x/ against "abcxe", the .* part will try to consume the whole string.
  * The engine will realize that it needs an x to match the pattern.
  * Since there is no x past the end of the string, the start operator tries to match one character less
  * The matcher doesn't find an x after abcx either, so it backtracks again matching the star operator to just 
  * "abc".  Now it find an x where it needs it and reports a successful match from 0 to 4.
  */

  // abcxe > abcx > abc (everything before the x) => abcx

  // Possible to do a LOT of backtracking.
  
  /*
    This problem occurs when a pattern can match a piece of input in many different ways.
    For example, if we get confused while writing a binary-number regular expression, we
    might accidentally write something like /([01]+)+b/
  */

  let failedBinaryMatch = /([01]+)+b/;

  /*
    This will try to match some long number of zeros (0), with no training b character, the matcher
    will first go through the entire inner loop checking easy 0/1 until it runs out. 
    Then it notices there is no b, so it backtracks on position and goes through the outer loop once,
    gives up again, and checks the inner loop once more.

    The work basically doubles

    0?0?0?0?0?0?0?0?0?0?0?0?h
    0?0?0?0?0?0?0?0?0?0?0?
    0?0?0?0?0?0?0?0?0?
    0?0?0?0?0?0?0?
    0?0?0?0?0?
    0?0?0?0?
    0?0?0?
    0?0?
    0?

    Would NOT want to use + operator for the inner loop
  */

/*************************************************************
 * The Replace Method
 */

console.log("papa".replace("p", "m"));
// => mapa

/* 
  The first arg of replace can be a regular expression.
  The first match of the regex is replaced.
  When a g option (for global) is added to the regex,
  all matches in the string will be replaced, not just the first.
*/

console.log("Borobudur".replace(/[ou]/, "a"));
// => Barobudur

console.log("Borobudur".replace(/[ou]/g, "a"));
// => Barabadar

/*
  The real power of using regular expressions with replace, comes from the fact
  that we can refer to matched groups in the replacement string.

  For example, we say we have a big string containing the names of people, one name
  per line, in the format Lastname, Firstname. If we want to swap these names and
  remove the comma to get a Firstname Lastname format, we can use the following
  code:
*/

console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
  .replace(/(\w+), (\w+)/g, "$2 $1") 
  );
// => Barbara Liskov
//    John McCarthy
//    Philip Wadler

/*
  This regex looks for a word followed by a comma and space followed by another word.
  It groups the first word and the second word separately, and runs it globally.
  It then swaps $1 which would be the first group in the match aka last name,
  with $2 which is the second group in the string which is the first name.
  This leaves us with Firstname Lastname
*/

/*
  The $1 and $2 in the replacement string refer to the parenthesized groups in
  the pattern. $1 is replaced by the text that matched against the first group, $2
  by the second, and so on, up to $9. The whole match can be referred to with $&
*/

/*
  It is possible to pass a function - rather than a string - as the second arg.
  For each replacement, the function will be called with the matched groups (
    as well as the whole match
  ) as arguments, and it's return value will be inserted into the new string.
*/

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
            str => str.toUpperCase())
);
// => the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) { // match will be exp, amount is the #, unit is item
  amount = Number(amount) - 1; // the value of amount within the func, is 1 less than passed through
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1); // slices the word and returns the whole word - 1 char from end
  } else if (amount == 0) {
    amount = "no"; // cannot be negative on stock of item
  }
  return `${amount} ${unit}`;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// => no lemon, 1 cabbage, and 100 eggs

/**
 * the (\d+) group ends up as the amount argument to the function
 * the (\w+) group gets bount to unit.
 * The function converts amount to a number.
 * Makes an adjustment in case there is only 1 or 0 left.
 */

/*************************************************************
 * Greed
 */

 // It is possible to use replace to remove all comments from a piece of Javascript code.

 function stripComments(code) {
   return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
 }

 console.log(stripComments("1 + /* 2 */3"));
 // => 1 + 3

 console.log(stripComments("x = 10; // ten!"));
 // => x = 10;

 console.log(stripComments("1 /* a */+/* b */ 1"));
 // => 1 1

 /**
  * The part before the or operator matches to slash characters followed by any non-newline char.
  * /\/\/.*
  * 
  * The part for multiline comments is more involved
  * We use [^] (any character that is not in the empty set of characters)
  * as a way to match any character.
  * 
  * We cannot just use a period here because block comments can continue on a new line,
  * and the period character does not match newline characters
  * 
  * But the output for the last line appears to have gone wrong. Why?
  * 
  * The [^]* part of the expression, as I described in the section on backticking,
  * will first match as much as it can. If that causes the next part of the patters to
  * fail, the matcher moves back one character and tries again from there.
  * In the example, the matcher first tries to match the whole rest of the string,
  * and then moves back from there. 
  * 
  * It will find an occurence of * / after going back four characters and match that.
  * This is not what we wanted - the intention was to match a single comment, not to
  * go all the way to the end of the code and find the end of the last block comment.
  * 
  * Because of this behavior, we say the repitition operators(+, *, ?, and {}) are
  * greedy, meaning they match as much as they can and backtrack from there.
  * If you put a question mark after them (
  *   +?, *?, ??, {}?
  * )
  * They become nongreedy and start by matching as little as possible.
  * matching more only when the remaining pattern does not fit the smaller match.
  * 
  * By having the start match the smallest stretch of characters that brings us to 
  * a * /, we consume one block comment and nothing more.
  * 
  */

  function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, ""); // checks for //.* || /* [^]*? */
  }

  console.log(stripComments("1 /* a */+/* b */ 1"));
  // => 1 + 1

// A lot of bugs in regex programs can be traced to unintentionally using a greedy op.

// *** Consider the non-greedy version FIRST ***

/*************************************************************
 * Dynamically Creating RegExp Objects
 */

 // Cases when you might not know the exact pattern you need to match against.

 /*
  Say you want to look for the user's name in a piece of text and enclose it in
  underscore characters to make it stand out. Since you will know the name only once the
  program is actually running, you can't use the slash-based notion.
 */

 // But you can build up a string and use the RegExp constructor on that.

 let name = "harry";
 let text = "Harry is a suspicious character";
 // let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
 let regexp = new RegExp(`\\b(${name})\\b`, "gi"); // /\b(harry)\b/gi <== the end args
 console.log(text.replace(regexp, "_$1_")); // matches regexp and replaced with _$1_ group from constructor
 // => _Harry_ is a suspicious character

 /* 
  When creating the \b boundary markers, we have to use two backslashes
  because we are writing them in a normal string, not a slash-enclosed regexp.

  The second argument in RegExp constructor contains the options for the reg exp.
  In this case "gi" for global and case insesitivie
 */

 /*
  But what if the name is "dea+hl[]rd"?
  That would result in a nonsensical regular expression that won't match the user's name
 */

 // To work around this, we can add backslashes before any character that has special meaning

 let name = "dea+hl[]rd";
 let text = "This dea+hl[]rd guy is super annoying.";
 let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&"); // we say ignore all of these char?
 let regexp = new RegExp(`\\b${escaped}\\b`, `gi`);
 console.log(text.replace(regexp, "_$&_"));


 let name = "dea+hl[]rd";
 let text = "This dea+hl[]rd guy is super annoying.";
 let escaped = name.replace(/[\\[+]/g, "\\$&");
 let regexp = new RegExp(`\\b${escaped}\\b`, `gi`);
 console.log(text.replace(regexp, "_$&_"));
 // This does the same thing, was the extra characters used just in case the name contained ant other char?

 let name = "dea+hl[]rd$n^k3";
 let text = "This dea+hl[]rd$n^k3 guy is super annoying.";
 let escaped = name.replace(/[\\[+]/g, "\\$&");
 let regexp = new RegExp(`\\b${escaped}\\b`, `gi`);
 console.log(text.replace(regexp, "_$&_"));
 // this did not work.

 let name = "dea+hl[]rd$n^k3";
 let text = "This dea+hl[]rd$n^k3 guy is super annoying.";
 let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&"); // we say ignore all of these char?
 let regexp = new RegExp(`\\b${escaped}\\b`, `gi`);
 console.log(text.replace(regexp, "_$&_"));
 // This did work. So the example just used all special characters to not run into issues
 // and instead is any example in case ANY name value had any number of spec char.

 /*************************************************************
 * The Search Method
 */

 // the indexOf method on strings cannot be called with a regexp

 // There is another method, search, that does expect a regexp.

 // Like indexOf, it returns the first index on which the exp was found, or -1

 console.log("  word".search(/\S/)); // \S matches a single char other than white space, so in this case, the w
 // => 2

 console.log("   ".search(/\S/)); // there is no char other than white space, so -1
 // => -1 

// There is no way to indicate that the match shouls start at a given offset/index

 /*************************************************************
 * The LastIndex Property
 */

 /*
  The exec method also doesn't provide a convenient way to start searching at a given pos.
  However, it does provide an inconvenient way
 
  Regexp objects have properties.
  One such prop is source, which contains the string that expression was created from.
  Another prop is *** lastIndex *** which controls, in some limited circumstances,
  where the next match will start.

  The circumstances are that the regexp must have the global (g) or sticky (y) option 
  enabled, and the match must happen through the exec method.

  Again, a less confusing solution would have been to just allow an extra arg to be passed
  to exec, but confusion is an essential feature of JavaScript's Regexp interface.
  */

  let pattern = /y/g;
  pattern.lastIndex = 3;
  let match = pattern.exec("xyzzy");
  console.log(match.index);
  // => 4
  console.log(pattern.lastIndex);
  // => 5?

// match => ["y", index: 4, "xyzzy", groups: undefined]; index is where y was matched.
// by setting pattern.lastIndex = 3, we are saying where we want to be in the index?

/** 
 * pattern => 0 initially. 
 * Then we set it to 3
 * Then we run pattern.exec("xyzzy") and bind to match, although the binding isn't important
 * now that we've ran pattern.exec with the lastIndex being 3, it finds the next y from 3
 * The y is at index 4, which makes the lastIndex +1 being 5.
 */

 let pattern = /g/g;
 pattern.lastIndex = 3;
 let match = pattern.exec("gtgtttg");
 console.log(match.index); // => 6?
 console.log(pattern.lastIndex); // => 7?
 // both are correct.

 /*
  If the match is successful, the call to exec automatically updates the lastIndex prop
  to point after the match. 

  If no match is found, lastIndex is set back to zero, which is also the value it has
  in a newly constructed regexp object.

  The difference between the global and sticky options is that, when sticky is enabled,
  the match will succeed only if it starts directly at lastIndex, whereas with global,
  it will search ahead for a position where a match can start.
 */

 let global = /abc/g;
 console.log(global.exec("xyz abc"));
 // => ["abc"];

 let sticky = /abc/y;
 console.log(sticky.exec("xyz abc"));
 // => null

 /*
  When using a shared regexp value for multiple exec calls, these automatic updates
  to the lastIndex property can cause problems. Your regexp might be accidentally starting
  at an index that was left over from a prev call.
 */

 let digit = /\d/g;
 console.log(digit.exec("here it is: 1"));
 // => ["1"];
 console.log(digit.exec("and now: 1"));
 // => null

 /*
  Another interesting effect of the global option is that it changes the way the
  match method on a string works. When called with a global exp, instead of returning
  an array similar to that returned by exec, match will find all matches of the pattern
  in the string and return an array containing matched strings.
 */

 /**
  * Be cautious with global regexp. 
  * The cases where they are necessary:
  * Calls to replace and paces where you want to explicitly use lastIndex
  * are typically the only places where you want to use them
  */

/*************************************************************
 * Looping over Matches
 */

 