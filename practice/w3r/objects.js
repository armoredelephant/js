let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'.`);
}

rabbit.speak("I'm alive");
// "The rabbit says 'I'm alive.'.";

function speak(line) {
    console.log(`The ${this.type} Rabbit says, '${line}'.`);
}

let whiteRabbit = {type: 'White', speak};
let blackRabbit = {type: 'Black', speak};

blackRabbit.speak('I am a black Rabbit');
whiteRabbit.speak('I am a white Rabbit');

speak.call(blackRabbit, `BLAHBRBRBRBR`);
// => The Black Rabbit says, 'BLAHBRBRBRBR'. 

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

// normalize({coords: [0,2,3], length: 5});
// => Uncaught TypeError: Cannot read property of `map` of undefined

normalize.call({coords: [0,2,3], length: 5});
// => [0, 0.4, 0.6]

// function normalize() {
    // console.log(this.coords.map(function(n) {
        // this.length cannot see the this.coords in a regular function
        // it instead will see the window object
        // console.log(this);
//         n / this.length;
//     }));
// }

// normalize({coords: [0,2,3], length: 5});
// => Errors out

normalize.call({coords: [0,2,3], length: 5});
// => Array of undefined

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says, ${line}.`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = `killer`;
killerRabbit.speak('SKREE!!!');

// ******************************************************************
// *** Classes OLD PROTOTYPE METHOD ***
// ******************************************************************

// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says ${line}.`);
// }

// let weirdRabbit = new Rabbit('weird');
// weirdRabbit.speak('something weird');

// Rabbit has function.prototype which has Object.prototype.
// function.prototype gives Rabbit a default set of properties to use


// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

// console.log(Object.getPrototypeOf(Rabbit));

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// weirdRabbit has a Rabbit.prototype which gives it access to the functions tied to Rabbit

// console.log(Object.getPrototypeOf(weirdRabbit));

// ******************************************************************
// *** Class Notation ***
// ******************************************************************

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let insaneRabbit = new Rabbit('insane');
let orangeRabbit = new Rabbit('orange');

insaneRabbit.speak("I'm insane!!!");
// => `The killer rabbit says kill!
orangeRabbit.speak("I'm orange!");
// => `The black rabbit says I'm orange!`

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());