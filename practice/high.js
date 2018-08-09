function sing() {
    console.log("twinkle twinkle...");
    console.log("how I wonder...");
}

// setInterval(anotherFunc, interval)

setInterval(sing, 1000);

// can set a function within another function, to only be called within the function
setInterval(function() {
    console.log("I am an anonymous function!");
    console.log("THIS IS AWESOME!");
}, 2000);

// push & pop (add to end | remove from end)
// unshift & shift (add to front of array | remove from front of array)

var number = [22, 67, 33, 96, 88];

// What does the following line print?
console.log(numbers[numbers.length]);

// numbers.length is 5
// console.log(numbers[5]);
// this will print the 5th index of numbers which is undefined
// this will print undefined

var friendGroups = [
    ["Harry", "Ron", "Hermoine"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];

// what is the result of this line:
console.log(friendGroups[2][0]);

// friendGroups [(0),(1),(2)]
// the first [] calls nexted array (if there is one)
// the second [] calls index within the nexted array
// within (0): ["Harry", "Ron", "Hermoine"]
// within (1): ["Malfoy", "Crabbe", "Goyle"]
// within (2): ["Mooney", "Wormtail", "Prongs"]
// 0 index within (2): "Mooney"

// array.forEach(someFunction() {});
// this function gets called for every element within the array.forEach

var colors = ["red", "orange", "yellow", "green"]

colors.forEach(function(anyFunction){
    console.log("INSIDE THE FOREACH IS " + anyFunction);
});

// every index within the colors array is going to be stored in test
colors.forEach(function(test) {
    alert(test);
});


// with for loop:
var colors = ["red", "orange", "yellow", "green"];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// with forEach:
var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(anyPlaceholderToStoreValueOfColors) {
    console.log(anyPlaceholderToStoreValueOfColors);
})

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
    if(color % 3 === 0) {
        console.log(color);
    }
})

// 3,6,9

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

for (i = 1; i < numbers.length; i++) {
    if (i % 3 === 0) {
        console.log(numbers[i] -= 1);
    }
}

var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf("Christmas") !== -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}

var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
  var lowerCase = input.toLowerCase();
  var firstLetter = lowerCase.slice(0,1);
  var capitalized = lowerCase.replace(firstLetter, firstLetter.toUpperCase());
  var result = capitalized;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (var i = 0; i < stations.length; i++) {
//   var input = stations[i];
//   // write your code just below here   
//   var stationCode = input.slice(0,2);
//   var street = input.split(';');
//   var streetSplit = street[1];
//   var result = stationCode + ": " + streetSplit;
//   var listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

for (var i = 0; i < stations.length; i++) {
    var input = stations[i];
    // write your code just below here   
    var stationCode = input.slice(0,3);
    var street = input.indexOf(';');
    var streetSplit = input.slice(street + 1);
    var result = stationCode + ": " + streetSplit;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}

var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];


stations.forEach(function(i) {
    var input = i;
    var stationCode = input.slice(0,3);
    var street = input.indexOf(';');
    var streetSplit = input.slice(street + 1);
    var result = stationCode + ": " + streetSplit;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}) 


var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (var i = 0; i <= products.length; i++) { // number 2
    var myContainer = products[i].split(':');
    var myProduct = myContainer[0];
    var myPrice = Number(myContainer[1]);
    total += myPrice;
    itemText = myProduct + " ---  $" + myPrice;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

products.forEach(function(i){
    var myContainer = i.split(':');
    var myProduct = myContainer[0];
    var myPrice = Number(myContainer[1]);
    total += myPrice;
    itemText = myProduct + " ---  $" + myPrice;
  
    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
});


var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    myHistory.forEach(function(i){
      itemText = i;
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    });

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
    myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}

