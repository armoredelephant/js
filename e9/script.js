var obj = {
    name: "Keith",
    age: 30,
    isCool: true,
    friends: ["Salleena", "Byron", "Will"],
    add: function(x,y){
        return x + y;
    }
}

obj.add(5,10);

function speak() {
    return "WOOF!";
}

function speak() {
    return "MEOW!";
}

var dogSpace = {};
dogSpace.speak = function() {
    return "WOOF!";
}

var catSpace = {};
catSpace.speak = function() {
    return "MEOW!";
}

var comments = {};

comments.data = [
    "Good Job",
    "Bye",
    "Lame..."
];

// 'print' is not needed since it's being names within the object under keymap print already
// (arr) isn't needed if we just want to run this to print out data from the same object
// comments.print = function print(arr){
//     arr.forEach(function(el){
//         console.log(el);
//     });
// }

comments.print = function (){
    // this is calling on the same object 'comments' and then .data to call on the other key
    // so comments.print will only print comments.data
    this.data.forEach(function(el){
        console.log(el);
    });
}




