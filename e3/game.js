// create secretNumber
var secretNumber = 4;

//  ask user for guess
var stringGuess = prompt("Guess a number between 1 and 10");
var guess = Number(stringGuess);

// check if guess is right

if (guess === secretNumber) {
    alert("Correct!");
}

else if (guess < 1 || guess > 10) {
    alert("I said to pick a number BETWEEN 1 and 10, dipshit.");
}

else if (guess > secretNumber) {
    alert("Your guess was too high! Guess again!");
}

else {
        alert("Your guess was too low! Guess again!");
    }