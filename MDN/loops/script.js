var output = document.querySelector(".output");
output.innerHTML = "";

for (i = 10; i > -1; i--) {
    // creates a new <p> element within the document
    var para = document.createElement("p");
    if (i === 10) {
        // fills the para <p> with content
        para.textContent = "COUNTDOWN 10";
    } else if (i > 0) { 
        para.textContent = i;
    } else {
        para.textContent = "BLAST OFF!!!!";
    }
    // places para at the end of the parent html element
    output.appendChild(para);
}

// two lists, one array for invited guests, one array for refused guests
// for loop to check the people array: people.length -1 
// during the loop check for Phil or Lola
// if Phil or Lola - people[i].push() to refused <p> list with ", " | refused.textContent += people[i] + ", ";
// if it isn't, .push() admitted paragraph's textContent += people[i] + ", ";

var people = ['Chris', "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refused: ";


people.forEach(function(guest){
    checkGuests(guest);
});

function checkGuests(guest) {
    if (guest === "Lola" || guest === "Phil") {
        refused.textContent += guest + ", ";
    } else {
        admitted.textContent += guest + ", ";
    }
}

admitted.textContent = admitted.textContent.replace(/,\s*$/, ".");
refused.textContent = refused.textContent.replace(/,\s*$/, ".");

var list = {
    people: ['Chris', "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"]
}

list.checkGuests = function () {
    this.people.forEach(function(guest){
        if (guest === "Lola" || guest === "Phil") {
            refused.textContent += guest + ", ";
        } else {
            admitted.textContent += guest + ", ";
        }
    });
}

// replaces the final , with .
// he / mark the beginning and end of the regular expression
// The , matches the comma
// The \s means whitespace characters (space, tab, etc) and the * means 0 or more
// The $ at the end signifies the end of the string

// for (i = 0; i < people.length; i++) {
//     if (people[i] === "Lola" || people[i] === "Phil") {
//         refused.textContent += people[i] + ", ";
//     } else {
//         admitted.textContent += people[i] + ", ";
//     }
// }

