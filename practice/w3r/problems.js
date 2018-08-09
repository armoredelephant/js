// Write a Jacascript program to check two given numbers and return true if one of them is 50 or if their sum is 50

// var p = document.querySelector('p');
// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     var valOne = Number(document.getElementById('pOne').value);
//     var valTwo = Number(document.getElementById('pTwo').value);
//     results = '';

//     if ((valOne + valTwo) === 50 || valOne === 50 || valTwo === 50) {
//         results += true;
//     } else {
//         results += false;
//     }
//     p.textContent = results;
// }

// check if two values are the same and if so give the sum *3

// var p = document.querySelector('p');
// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     var valOne = document.getElementById('pOne').value;
//     var valTwo = document.getElementById('pTwo').value;

//     if (valOne === valTwo) {
//         p.textContent = valOne * 3;
//     }
//     p.textContent = valOne * 2;
// }

// Add 'Py' to the beggining of string, if it alreadt starts with 'Py' then return the original string

// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     var inp = document.getElementById('pOne').value;
//     var p = document.querySelector('p');
//     var Py = 'Py';

//     if (inp.slice(0,2) === Py) {
//         p.textContent = inp;
//     } else {
//         p.textContent = Py + inp;
//     }
    
// }

// check if (Math.sign(-valueA) && Math.sign(valueB)) || (Math.sign(valA) && Math.sign(-valB));

// var p = document.querySelector('p');
// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     var valA = document.getElementById('pOne').value;
//     var valB = document.getElementById('pTwo').value;

//     if (Math.sign(-valA) && Math.sign(valB)) {
//         p.textContent = true;
//     } 
//     if (Math.sign(valA) && Math.sign(-valB)) {
//         p.textContent = true;
//     } else {
//         p.textContent = false;
//     }
// }

// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// var p = document.querySelector('p');
// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     let valA = document.getElementById('pOne').value;
//     let valB = document.getElementById('pTwo').value;

//     function strSplit(str,sl) {
//         let strA = str.slice(0, sl - 1);
//         let strB = str.slice(sl, str.length);
//         let result = strA + strB;
//         return result
//     }
//     p.textContent = strSplit(valA,valB);
// }

// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.

// break string into an array
// switch arry.push(arr[0]);?

// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     var inp = document.getElementById('pOne').value;
//     var p = document.querySelector('p');
//     var arr = inp.split('');
//     var newLast = arr[0];
//     var newFirst = arr[arr.length - 1];
//     arr.pop();
//     arr.shift();
//     arr.push(newLast);
//     arr.unshift(newFirst);
//     var i = arr.join('');
//     console.log(i);
// }

// function first_last(str1) {
//     if (str1.length <= 1) {
//         return str1;
//     }
//     // sets mid_char as 2nd letter until last char
//     mid_char = str1.substring(1, str1.length - 1);
//     // first part of return grabs the last letter, adds it to the middle portion, then adds the first character using charAt
//     return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
// }

// Write a JavaScript program to create a new string from a given string
// with the first character of the given string added at the front and back. 
// var placeButton = document.querySelector('.placeButton');

// placeButton.onclick = function() {
//     var inp = document.getElementById('pOne').value;
//     var p = document.querySelector('p');
//     var str = inp.substring(0,1);
//     var newStr = str + inp + str;
//     // console.log(str);
//     alert(newStr);
// }

// function newStr(str) {
//     var firstChar = str.substring(0,1);
//     return firstChar + str + firstChar;
// }

// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. 

// function checkNum(num) {
//     if (((Math.sign(num) === 1) && num % 3 === 0) || ((Math.sign(num) === 1) && num % 7 === 0)) {
//         return true
//     }
//     return false
// }

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. 

// function newStr(str) {
//     let val = str.substring(str.length - 3);
//     if (str.length <= 3) {
//         return str
//     } 
//     return val + str + val
// }

// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

// function checkStr(str) {
//     let check = str.substring(0,4).toLowerCase();
//     if (check === 'java') {
//         return true
//     }
//     return false
// }

// function checkStr(str) {
//     let check = str.substring(0,4).toLowerCase();
//     return check.startsWith('java');
// }

// Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. 

// if ((100 - x) < 50 || (100 - y) < 50) {}

// function checkNum(x,y,z) {
//     if ((100 - x) < 50 || (100 - y) < 50 || (100 - z) < 50) {
//         return true
//     }
//     return false
// }

// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string
// if "Script" presents in the string return the string without "Script" otherwise return the original one.

// var n = str.substring(4);
// check (str) for 5th index starts with "script"

// function checkStr(str){
//     var strCheck = str.substring(4).toLowerCase();
//     if (strCheck.startsWith("script")) {
//         let noScript = str.replace(/script/i,"");
//         return noScript
//     }
//     return str
// }

// // Write a javascript function that reverses a number

// function revNum(num) {
//     num = num + "";
//     return num.split("").reverse().join("");
// }

// function revString(str) {
//     str = str + "";
//     str = str.split('');
//     var newStr = '';
//     for (i = 0; i < str.length; i++) {
//         newStr += str[i]
//         alert(newStr);
//     }
//     console.log(str);
// }

// function revString(str) {
//     var arr = [];
//     for (var x = 0; x < str.length; x++){
//         for (var y = 0; y < str.length; y++) {
//             if (str.substring(x,y) !== '') {
//                 arr.push(str.substring(x,y));
//             }
//         }
//     }
//     return Array.from(new Set(arr)).join('\n');
// }

// Write a JavaScript function that accepts a string as a parameter and converts the first letters of each word of the string in Uppercase.

// Split string on " "; Each arr[i].toUpperCase > then join array back add spaces?
// Maybe add + " " to each index or array?

    // for (i = 0; i < arr.length - 1; i++) {
    //     newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    // }

// function capStr(str){
//     var arr = str.split(" ");
//     var newArr = [];
//     arr.forEach(function(i) {
//        newArr.push(i.charAt(0).toUpperCase() + i.slice(1));
//     });
//     return newArr.join(' ');
// }

// Write a function that takes a string and returns the longest word in the string

// function checkStr(str) {
//     var arr = str.split(" ");
//     var x = '';
//     arr.forEach(function(i){
//         if (i.length > x.length) {
//             x = i
//         }
//     })
//     return x
// }

// function checkVow(vow){
//     var low = vow.toLowerCase(); 
//     var vowel = ['A','E','I','O','U','a','e','i','o','u'];
//     var results = 0;
//     vowel.forEach(function(i){
//         if (low.indexOf(i) !== -1){
//             results += low.indexOf(i);
//         }
//     });
//     return results
// }

// function checkVow(vow) {
//     var low = vow.toLowerCase();
//     var count = vow.match(/[aeiou]/gi).length
//     return count
// }

// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// greater than previous # but less than next
// function checkArr(arr) {
//     var maxNum = Math.max.apply(null,arr);
//     var minNum = Math.min.apply(null,arr);
//     var minResults = 0;
//     var maxResults = 0;
//     arr.forEach(function(i) {
//         if ((i > maxResults) && i !== maxNum) {
//             maxResults = i;
//         }
//         if ((i > minNum) && (i < arr[i + 1])) {
//             minResults = i;
//         }
//     });
    // for (i = 0; i < arr.length - 1; i++) {
    //     if ((arr[i] > maxResults) && (arr[i] !== maxNum)) {
    //         maxResults = arr[i];
    //     }
    //     if ((arr[i] > minNum) && (arr[i] < arr[i + 1])) {
    //         minResults = arr[i];
    //     }
    // }
    // if (arr[arr.length - 1] < minResults) {
    //     minResults = arr[arr.length - 1];
    // }
    // if (arr[arr.length - 1] > maxResults) {
    //     maxResults = arr[arr.length - 1];
    // }

 

//     var ifLastMin = function(arr) {
//         if (arr[arr.length - 1] < minResults) {
//             minResults = arr[arr.length -1];
//         }
//     }
    
//     var ifLastMax = function(arr) {
//         if (arr[arr.length - 1] > maxResults) {
//             maxResults = arr[arr.length - 1];
//         }
//     }
//     ifLastMin(arr);
//     ifLastMax(arr);
//     console.log(minResults);
//     console.log(maxResults);
// }

// function checkArr(arr) {
//     var maxNum = Math.max.apply(null,arr);
//     var minNum = Math.min.apply(null,arr);
//     var minResults = 0;
//     var maxResults = 0;

//     var ifLastMin = function(arr) {
//         if (arr[arr.length - 1] < minResults) {
//             minResults = arr[arr.length -1];
//         }
//     }
    
//     var ifLastMax = function(arr) {
//         if (arr[arr.length - 1] > maxResults) {
//             maxResults = arr[arr.length - 1];
//         }
//     }

//     arr.forEach(function(i) {
//         if ((i > maxResults) && i !== maxNum) {
//             maxResults = i;
//         }
//         if ((i > minNum) && (i < arr[i + 1])) {
//             minResults = i;
//         }
//     });

//     ifLastMin(arr);
//     ifLastMax(arr);

//     console.log(minResults);
//     console.log(maxResults);
// }

// Create a function to check if an input is an array

// function isArr(arr) {
//     var results = Array.isArray(arr);
//     return results;
// }

// function cloneArr(arr) {
//     let newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr
// }

// var arrayClone = arr => arr.slice(0);
// console.log([1,2,3]);



