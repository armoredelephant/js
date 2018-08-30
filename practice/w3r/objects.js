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

function normalize() {
    console.log(this.coords.map(function(n) {
        // this.length cannot see the this.coords in a regular function
        // it instead will see the window object
        console.log(this);
        n / this.length;
    }));
}

// normalize({coords: [0,2,3], length: 5});
// => Errors out

normalize.call({coords: [0,2,3], length: 5});
// => Array of undefined