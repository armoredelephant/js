var todos = ["Buy New Turtle"];

window.setTimeout(function(){ 
    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        // handle input
            if (input === "list") {
                listToDos();
            } else if (input === "new") {
                addToDo();
            } else if (input === "delete") {
                deleteToDo();
            }
        // ask again for new input
        // this will be ran after list or new is entered and completed
        var input = prompt("What would you like to do?");
    }
    console.log("Okay, you quit the app!");

    function listToDos() {
        console.log("**********");
        todos.forEach(function(listItem, i){
        console.log(i + ": " + listItem);
        });
        console.log("**********");
    }

    function addToDo() {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added todo");
    }

    function deleteToDo() {
        // ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete.");
        // delete that todo
        // splice()
        todos.splice(index, 1);
        console.log(index + " has been deleted");
    }

}, 500);

// we need a function that function.push() to add an item to the array

// else if (input === "new") {
//     var newTodo = prompt("Enter new todo");
//     todos.push(newTodo);
// }


// we need a function that calls on the array and returns it to the user

// we need a function that quits the app

// make new items be on their own line

// make a way to delete from an index


