
// uses whatever is used in the custome name field
var customName = document.getElementById('customname');
// selects the randomize button
var randomize = document.querySelector('.randomize');
// selects the story <p>
var story = document.querySelector('.story');

// function that returns an array from a randomly generated index from the array
// initially named with (array) but renamed to (anyName) to show that it can contain any name
function randomValueFromArray(anyName){
  return anyName[Math.floor(Math.random()*anyName.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];      
var insertY = ["the soup kitchen","Disneyland", "the White House"]
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// listens for the click on the randomize button, then runs result function
randomize.addEventListener("click", result);

function result() {
    // we're replacing within NEWSTORY NOT FUCKING STORYTEXT
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
  
    // looping back through newStory and replacing the previous itteration
    newStory = newStory.replace(":insertx:" ,xItem);
    newStory = newStory.replace(":insertx:" ,xItem);
    newStory = newStory.replace(":inserty:" ,yItem);
    newStory = newStory.replace(":insertz:" ,zItem);

    //  if the customName field is NOT empty, set var name to the customName value
  if(customName.value != "") {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

    //  if UK box is checked set the maths to UK measurements 
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.071429) + " stone";
    var temperature =  Math.round((94-32) * .5556) + " centigrade";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 farenheit", temperature);
  }
    // sets the story paragraph to whatever it is = to  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
