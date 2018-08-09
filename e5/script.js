var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    var answer = prompt("Are we there yet?");
}

// while (answer !== "yeah") {
//     var answer = prompt ("Are we there yet?");
// }

alert("YAY, we made it!!");

var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2) {
    // str.length === 10
    //a
    //c
    //c
    //c
    //w
    //x
    // a is 0 
    // it starts at h (1)
    // prints every other one
    // h e l l o
    console.log(str[i]);
}