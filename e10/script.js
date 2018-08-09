// *** method 1 ***

var pAll = document.querySelectorAll("p");
var first = pAll[0];
var last = pAll[pAll.length - 1];

// first.style.color = "purple";
first.style.backgroundColor = "red";
last.style.backgroundColor = "purple";

// *** Method 2 ***

var para = document.querySelector("p");

// para.style.fontSize = "100px";

// *** Method 3 ***

var tag = document.getElementById("first");

// tag.style.fontFamily = "Fira Code";

// *** Method 4 ***

var tags = document.getElementsByClassName("special");

// console.dir(tags);

// *** Method 5 ***

var elem = document.getElementsByTagName("p");

var pID = document.querySelector("#first");

var byIndex = document.getElementsByClassName("special")[0];
// var pAll = document.querySelectorAll("p")[0];

byIndex.style.fontSize = "100px";

var h1Para = document.querySelector("h1 + p");
// first <p> aftet h1