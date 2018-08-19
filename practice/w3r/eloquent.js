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

// export default class SortBar extends React.Component {
//     // setting an Object propTypes with
//     static propTypes = {
//       selectedSort: PropTypes.string.isRequired,
//       sortOptions: PropTypes.arrayOf(PropTypes.shape({
//         value: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         mobile: PropTypes.bool,
//         toolTipText: PropTypes.string
//       })),
//       onChange: PropTypes.func,
//       currencySymbol: PropTypes.string
//     }
  
//     constructor (props) {
//       super(props)
//       const cookiePresent = !document.cookie.match('RC_LOWEST_PRICE_TOOL_TIP')
//       this.state = {
//         displayToolTip: cookiePresent
//       }
//       autobind(this)
//     }
  
//     // 
//     buildClickHandler (sortOption) {
//         // binds the value of sortOption (selected)?
//       const val = sortOption.value
//     //   returns an anon function that returns.....
//       return (event) => {
//         this.props.onChange(val, event)
//       }
//     }
  
//     closeToolTip (event) {
//       event.preventDefault()
//       this.setState({ displayToolTip: false })
//       let now = new Date()
//       now.setDate(now.getDate() + 7)
//       const expires = now.toGMTString()
//       document.cookie = 'RC_LOWEST_PRICE_TOOL_TIP=false; expires='.concat(expires, '; path=/')
//     }
  
//     sortOptions () {
//       return this.props.sortOptions.map((sortOption) => {
//         const clickHandler = this.buildClickHandler(sortOption)
//         const StyledOption = (this.props.selectedSort === sortOption.value) ? SortOptionSelected : SortOption
  
//         // SETI COPY NOT ADDED TO i18Next
//         // SETI CLEANUP NOTE: If this wins pleas add this copy to i18Next files.
//         sortOption.toolTipText = (sortOption.value === 'TOTAL_PRICE') ? 'Check out our lowest priced rentals' : ''
//         // END SETI COPY NOT ADDED TO i18Next
  
//         return (
//           <StyledOption key={sortOption.value} mobile={sortOption.mobile}>
//             {this.state.displayToolTip && sortOption.toolTipText &&
//               <AnalyticsOnClick key={sortOption.value | `ToolTip`} action='Sort Bar ToolTip' label={`Sort Option ToolTip Clicked | ${sortOption.text}`}>
//                 <StyledToolTip data-test='toolTipOpen' pt={'12px'} >
//                   {t('common.text.checkOutOurLowestPricedRentals', { defaultValue: 'Check out our lowest priced rentals.' })}
//                   <StyledToolTipClose onClick={this.closeToolTip} data-test='sort-option-close-tool-tip-TOTAL_PRICE' name={'closeLight'} size={9} />
//                 </StyledToolTip>
//               </AnalyticsOnClick>
//             }
//             <AnalyticsOnClick key={sortOption.value} action='Sort Bar' label={`Sort Option Clicked | ${sortOption.text}`}>
//               <StyledText onClick={clickHandler} data-test={`sort-option-${sortOption.value}`}>
//                 {sortOption.text}
//                 {sortOption.value === 'TOTAL_PRICE' &&
//                   <StyledFromPrice>
//                     <StyledFrom>{t('text.from', { defaultValue: `From` })} </StyledFrom>
//                     <CurrencySymbol dangerouslySetInnerHTML={{ __html: this.props.currencySymbol }} />{numeraljs(sortOption.fromPrice, '0,0')}
//                     <FromRate>{sortOption.fromRate}</FromRate>
//                   </StyledFromPrice>
//                 }
//               </StyledText>
//             </AnalyticsOnClick>
//           </StyledOption>
//         )
//       })
//     }
  
//     render () {
//       return (
//         <SortBarWrapper>
//           <SortLineWrapper>
//             <SortOptionsWrapper>
//               <SortByLabel>{ t('common.label.sortBy', { defaultValue: 'Sort by' }) }:</SortByLabel>
//               { this.sortOptions() }
//             </SortOptionsWrapper>
//             <Line />
//           </SortLineWrapper>
//         </SortBarWrapper>
//       )
//     }
//   }
  

  var journal = [];

let addEntry = (events, squirrel) => {
  journal.push({events, squirrel});
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

let tableFor = (event, journal) => {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

let journalEvents = (journal) => {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

for (let event of journalEvents(journal)) {
    console.log(event + ":", phi(tableFor(event, journal)));
}

for (let event of journalEvents(journal)) {
    let correlation = phi(tableFor(event, journal));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ':', correlation)
    }
}

for (let entry of journal) {
    if (entry.events.includes('high') &&
    !entry.events.includes('pooping')) {
        entry.events.push('was high');
    }
}
console.log(Math.floor(phi(tableFor('was high', journal))));

// for (let entry of JOURNAL) {
//     console.log(`${entry.events.length} events.`)
// }

let todoList = [];
let remember = task => {
    todoList.push(task);
}
let getTask = () => {
    return todoList.shift();
}

let rememberUrgently = task => {
    todoList.unshift(task);
}

let remove = (arr, index) => {
    return arr.slice(0, index)
        .concat(arr.slice(index + 1));
        // ['a','b'].concat['d','e'];
}
console.log(remove(['a','b','c','d','e'], 2));
// => ['a','b','d','e'];

console.log("   OKAY  \n ".trim());

console.log(String(6).padStart(3, "0"));

let sentence = 'Secretarybirds specialize in stomping';
let words = sentence.split(" ");
console.log(words);
// => ['Secretarybirds', 'specialize', 'in', 'stomping']
console.log(words.join(' '));
// => 'Secretarybirds specialize in stomping

let max = (...placeholder) => {
    let result = -Infinity;
    for (let number of placeholder) {
        if (number > result) result = number;
    }
    return result
}

let numbers = [6,1,4];
// calling the function requires ... if the function was created with it
console.log (max(...numbers));
// => 6
console.log(max(0,...numbers,9));
// => 9

// let range = (start, end) => {
//     let arr = [];
//     if (start > end) {
//         for (let i = end; i <= start; i++) {
//             arr.push(i);
//         }
//     } else {
//         for (let i = start; i <= end; i++) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

let range = (start, end, step = start < end ? 1 : -1) => {
    let arr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }
    return arr;
}

let sum = arr => {
    let count = 0;
    for (let num of arr) {
        count += num;
    }
    return count
}

// let reverseArray = arr => {
//     let newArr = [];
//     for (let item of arr) {
//         let arrItem = arr.pop(item);
//         newArr.push(arrItem);
//     }
//     return newArr;
// }

// let reverseArray = arr => {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//             newArr.push(arr[i]);
//     }
//     return newArr;
// }

let reverseArray = arr => {
    let newArr = [];
        for (let item of arr) {
            newArr.unshift(item);
    }
    return newArr;
}

// let reverseArrayInPlace = arr => {
//     // can't reassign to new arr
//     // pop and then shift? 
//     for (let i = 0; i <= arr.length; i++) {

//     }
//     return arr;
// }

/* *** Review *** */

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

  let list = {
      value: 1,
      rest: {
          value: 2,
          rest: {
              value: 3,
              rest: null
          }
      }
  };

// let arrToList = arg => {
//     let list = null;
//     for (let i = arg.length - 1; i >= 0; i--) {
//         list = {value: arg[i], rest: list};
//     }
//     return list;
// }


let arrToList = arg => {
    let list = {};
    for (let i = arg.length - 1; i >= 0; i--) {
        arg[i] === arg[arg.length - 1] ? list = {value: arg[i], rest: null} : list = {value: arg[i], rest: list}
    }
    return list;
  }


let listToArray = list => {
    let arr = [];
    for (let node = list; node; node = node.rest) arr.push(node.value);
    return arr;
}

let prepend = (arg, list) => {
    // let newList = {};
    newList = {value: arg, rest: list}
    // return newList;
}

let nth = (arr, num) => {
    if (!list) {
        return undefined;
    } else if (n == 0) {
        // num is the index
        // the value prop is index 0 on each object
        // once our num is at 0, we return the value
        return list.value;
    } else {
        // this will continue to run the function
        // each time it passes in the nested object within the rest prop
        // then n goes down one index until it hits 0, counting how deep we need to go within the nested objects within rest.
        return nth(list.rest, n - 1);
    }
}


let deepEqual = (arg1, arg2) => {
    if ((typeof arg1 == 'object' && arg1 != null) && (typeof arg2 == 'object' && arg2 != null)) {
        let arr1 = Object.keys(arg1), arr2 = Object.keys(arg2);
        for (let prop in arg1) {
            if (arg1.hasOwnProperty(prop) || arg2.hasOwnProperty(prop)) {
                return deepEqual(arg1[prop], arg2[prop]);
            } 
            return false;
        }
        for (let prop in arg2) {
            if (arg1.hasOwnProperty(prop) || arg2.hasOwnProperty(prop)) {
                return deepEqual(arg1[prop], arg2[prop]);
            } 
            return false;
        }
    } else if (arg1 === arg2) {
        return true;
    } else return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

let deepEqual = (arg1, arg2) => {
    if (arg1 === arg2) return true;

    if (arg1 == null || typeof arg1 != 'object' || arg2 == null || typeof arg2 != 'object') return false;

    let arr1 = Object.keys(arg1), arr2 = Object.keys(arg2);

    if (arr1.length != arr2.length) return false;
    for (let prop in arg1) {
        if (!arr2.includes(prop) || !deepEqual(arg1[prop], arg2[prop])) return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

let sumTo = num => {
    if (num <= 0) return num;
    return num + sumTo(num - 1);
}

let sumTo = num => {
    let results = 0;
    for (let i = 0; i <= num; i++) {
        results += i;
    }
    return results
}

let factorial = num => {
    if (num <= 1) return num;
    return num * factorial(num - 1);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }

    }
};

let printList = list => {
    alert(list.value);
    list.next ? printList(list.next) : printList(list);
}

// clever, it  works with array but we pop out each item of the array as we add
// the exit statement is when the array length = 1
// poping each item as we add allows for the exit statement
let arrTest = arr => {
    if (arr.length === 1) {
        return arr[0]; 
    } else {
        return arr.pop() + arrTest(arr);
    }
}

// create a function that can call on an anonymous function and run n times;

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let labels = [];

// calls on repeat function and uses an anonymous function to push 1-5.
// x is basically 0-4
// x is defined in action(i) as i

repeat(5, x => {
    labels.push(`Unit ${x + 1}`);
});

// unit 0+1 = Unit 1
// unit 1+1 = Unit 2
// ...
// unit 4+1 = Unit 5

function greaterThan(n) {
    return m => m > n;
}

// now whatever is passed into greaterThan10 will run m > n and give true/false
// closure

let greaterThan10 = greaterThan(10);

// will run 11 > 10 = true

console.log(greaterThan10(11));
// => true

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}


// noisy passes through Math.min() as f above, and runs Math.min against the args we passed through
// 1,2,3

let test = noisy(Math.min);
test(3,2,1);
// These two are basically the same.
noisy(Math.min)(3,2,1);
// => calling with [3,2,1];
// => called with [3,2,1] , returned 1

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

['A', 'B'].forEach(i => console.log(i));
// => A
// => B

function multiplier(factor) {
    return function(x) {
        return x * factor;
    }
}

function multiplier(factor) {
    return x => x * factor;
}

let doubler = multiplier(2);
console.log(doubler(10));
// => 20

let tripler = multiplier(3);
console.log(tripler(10));
// => 30

const rooms = ['h1', 'h2', 'h3'];

let newRooms = rooms.map(x => {
    return (x == 'h3' ? 'h4' : x);
});

let newRooms = rooms.map(x => {
    if (x == 'h3') {
        return 'h4';
    } else {
        return x;
    }
});

let userName = '';
let userQuestion = 'Will I go to South Carolina?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(userQuestion);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain' 
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again' 
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it' 
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good' 
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
  default:
    eightBall = 'Dumb question'
    break;
}

console.log(`${eightBall}`);

function foo(a) {
    return b => b * a;
}

let bar = foo(3);

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        alert(i) }, 1000 + i);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function(i_local) {
        return function() { alert(i_local); }
    } (i), 1000 + 1);
}

function createBase(num) {
    return x => x + num;
}

let addSix = createBase(6);

let x = 10;

function foo() {
    let y = x + 5;
    return y;
}

function bar() {
    let x = 2;
    return foo();
}

function main() {
    foo(); // Static scope: 15; Dynamic scope: 15
    bar(); // Static scope: 15; Dynamic scope: 7
    return 0;
}

function numberGenerator() {
    let num = 10;
    let checkNumber = () => console.log(num);
    num++;
    return checkNumber
}
// num = 11 is already stored as closure at this point and lives within the numberGenerator() environment.
// calling numberGenerator itself will not console log it though. for that we need to call on the inner function below.
// number will now call checkNumber() and console.log num which is defined already

let number = numberGenerator();
number();
// => 11

function sayHello() {
    let say = () => console.log(hello);
    let hello = 'Hello, world!';
    return say;
}

let callSay = sayHello();
callSay();
// => Hello, world!

const SCRIPTS = [{
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://www.google.com"
}];

// function filter(arr, test) {
//     let passed = [];
//     for (let element of arr) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// }

// console.log(filter(SCRIPTS, s => s.living));

let newArr = SCRIPTS.filter(s => s.direction === 'ltr')

// function map(arr, transform) {
//     let mapped = [];
//     for (let prop of arr) {
//             mapped.push(transform(prop));
//     }
//     return mapped;
// }

// console.log(map(SCRIPTS, obj => obj.name));

let mappedArr = SCRIPTS.map(s => s.name);

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
// starts at 0 (index?)
//  0 + 1 current is 1
//  1 + 2 current is 3
//  3 + 3 current is 6
//  6 + 4 current is 10
//  => 10

console.log([1,2,3,4].reduce((a, b) => a + b));
// doesn't need the start bc there is at least 1 element

// to find the script with the most characters
// ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
// 0 + 1008 - 994
// (1008 - 94) + (11508 - 11392)
// ((1008 - 94) + (11508 - 11392)) + (11520 - 11513);
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

function average(arr) {
    return arr.reduce((a,b) => a + b / array.length);
}

// passing through average(array of the year of living languages) 
// average() will add the new array and then devide by the length then round it
console.log(Math.round(average(
    // filters SCRIPT array and only gives ones that are living, then maps that array into a new array that only pulls the year of origin
    SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));

// Better for larger data structures:
let total = 0, count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}

console.log(Math.round(total / count));

function multiplier(fact, ...numbers) {
    return numbers.map(number => fact * number);
}

// function testFunction(callback, ...numbers) {
//     return callback(numbers);
// }

function testFunction(callback, ...numbers) {
    return callback(numbers)
}

function callNum(num) {
    let arr = num.map(number => `${number} is a number`);
    return arr;
}


const myObj = [
    {
        name: 'Keith',
        age: 30,
        isMarried: false,
        friends: ['Sam', 'jim', 'Yuna']
    },
    {
        name: 'Salleena',
        age: 27,
        isMarried: false,
        friends: ['Leigh', 'Erica', 'Monica', 'Salem']
    }
];

const otherObj = [
    {
        name: 'Michael',
        age: 30,
        isMarried: false,
        friends: ['Laura', 'Jason']
    },
    {
        name: 'Jason',
        age: 40,
        isMarried: false,
        friends: ['Juan']
    }
]

const allObj = [myObj, otherObj];

const objNames = allObj
    .reduce((acc, currVal) => {
        return acc.concat(currVal);
    })
    .filter(person => {
        return person.isMarried == false;
    })
    .filter(person => {
        return person.friends.length >= 3;
    })
    .map(person => person.name);

function listNames(person) {
    for (let name of person) {
       return `${name} is not married and has at least 3 friends.`
    }
}
// let str = `${objNames[0]}, ${objNames[1]}, and ${objNames[2]}, are all over the age of 30.`;
console.log(listNames(objNames));

// const str = myObj.filter(married => !married.isMarried).map(person => {
//     return `${person.name} is ${person.age} years old, is not married, and has ${count(person.friends)} friends.`
// });

// function count(num) {
//     let count = 0;
//     for (let x of num) {
//         ++count;
//     }
//     return count;
// }

// const myFun = obj => obj.name.toLowerCase();
// const lowerCaseNames = myObj.map(myFun);

// console.log(`${lowerCaseNames[0]} is lowercase and ${lowerCaseNames[1]} is lowercase`);

// const newList = myObj.map(person => {
//     const {name, age, ...rest} = person;
//     return {
//         name,
//         ...rest,
//         basicCount: 0,
//         spotifyUrl: "let's just pretend"
//     };
// });

function range(start, end) {
    let arr = [];
    for (let x = start; x <= end; x++) {
        arr.push(x);
    }
    return arr;
}

function sum(numbers) {
    let count = 0;
    for (let int of numbers) {
        count += int
    }
    return count;
}


function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];
    if (start > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }
    return arr;
}

function reverseArray(arr) {
    let newArr = [];
    for (let num of arr) {
        newArr.unshift(num);
    }
    return newArr;
}

function fizzBuzz(arg) {
    for (let count = 0; count <= arg; count++) {
        let results = '';
        if (count > 0) {
            if (count % 5 === 0) results = 'Buzz';
            if (count % 3 === 0) results = 'Fizz';
            if (count % 3 === 0 && count % 5 === 0) results = 'FizzBuzz';
        }
        console.log(results || count);
    }
}

// function arrayToList(...numbers) {
//     let list = {};
//     for (let val of numbers) {
//         list = {value: val, rest: list};
//     }
//     return list;
// }

function arrayToList(arr) {
    let list = {};
    for (i = 0; i < arr.length; i++) {
        if (arr[arr.length - 1]) {
            list = {value: arr[i], rest: null}
        } else {
            list = {value: arr[i], rest: list}
        }
    }
    return list;
}

function arrayToList(arr) {
    let list = {};
    for (i = arr.length - 1; i >= 0; --i) {
        i === arr.length - 1 ? list = {value: arr[i], rest: null} : list = {value: arr[i], rest: list};
    }
    return list;
}

function arrayToList(...num) {
    let x = num.reverse();
    let list = {};
    for (let val of x) {
        val === x[0] ? list = {value: val, rest: null} : list = {value: val, rest: list};
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(ele, list) {
    list = {value: ele, rest: list}
    return list;
}

function nth(list, num) {
    if (num === 0) {
        return list.value;
    }
    return list = nth(list.rest, num - 1)
};

