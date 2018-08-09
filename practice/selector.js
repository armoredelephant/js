var tag = document.getElementById("highlight");

var tags = document.getElementsByClassName("bolded");
// returns a list of all elements that have the matching class name
// in selector.html, this would effect both "bolded" li elements

var tagsAgain = document.getElementsByTagName("li");
// returns a list of aall elements with the given tag
// in selector.html, this will effect all (3) li elements

var tag = document.querySelector("#highlight");
// needs to use the CSS selector for querySelector ("#",".")
// only selects the first one listed within the parent element

var tag = document.querySelector(".bolded")
// as stated above, this will only grab the first bolded li in selector.html

var h1 = document.querySelector("h1");

var li = document.querySelector("li a.special");
// this is valid and querySelector works as long as a CSS selector would work


var tags = document.querySelectorAll(".bolded");
// this will work on both .bolded li in selector.html
