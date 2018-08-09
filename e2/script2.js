var age = Number(prompt("How old are you?"))

if (age < 0) {
    console.error("Error this is negative");
}

if ( age < 18) {
    console.log("Sorry, you are not old enough to enter the venue.");
}

else if (age < 22) {
    console.log("You can enter, but cannot drink.");
}

else {
    console.log("Come on in, You can drink.");
}

if (age === 21) {
    alert("Happy 21st Birthday!!!");
}

if (age < 0) {
    alert("Error, this is a negative age.");
}

if (age % 2 !== 0 ) {
    alert("Your age is odd!!!");
}

if (age % Math.sqrt(age) === 0) {
    console.log("your age is a perfect square!");
}
