var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
  
/*
The buildGraph function takes the roads array as an arguement.
It creates an empty Object with no properties and binds it to graph.
We create a function addEdge that takes in two arguments.
if (graph[from] || graph["Alice's House"] == null). This means if graph["Alice's House"] == null 
(this prop doesn't have a value)

Then create graph["Alice's House"], and give it a value of ["Bob's House"], an array containing 
the value of to. ex. graph["Alice's House"] => ["Bob's House"] || graph => Alice's House: ["Bob's House"]

Else graph[from].push(to) || graph["Alice's House"].push("Post Office). This means if the prop value
isn't null, then the prop is already there, and just push another destination to it.
ex. graph["Alice's House"] => ["Bob's House", "Post Office"] || graph => Alice's House: ["Bob's House", "Post Office"]

Then we run a loop through a mapped version of the RoadsArray. 

The array that gets looped through contains individual arrays of each road. ex. 
[["Alice's House", "Bob's House"], ["Alice's House", "Post Office"]]

It loops through this array by taking each inner array [from, to]. ex ["Alice's House", "Bob's House"]
It runs ["Alice's House", "Bob's House"] through the addEdge() function in both orders.

This will build direction's to and from, instead of just one way. ex.
["Alice's House", "Bob's House"] will set graph => Alice's House: ["Bob's House"] and 
will also set: graph => Bob's House: ["Alice's House"]
*/

  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  var roadGraph = buildGraph(roads);

/*
VillageState class is what keeps track of the state.
IT has a constructor that sets this.parcels and this.place for the current state.
this.place will be where the robot is in it's current state.
this.parcels will be an array containing objetcs for each parcel. Each object within the
parcels array will have a place(where it's picked up, or if already picked up but hasn't been 
dropped off, the robots destination.) and an address(where it's delivered).

The move method takes in a destination as an argument.
If the roadGraph[this.place] does not include the passed through destination, then it returns "this",
current object. 
ex. newVillage => VillageState {place: "Post Office", parcels: Array{1}}
newVillage.move("Farm"); => VillageState {place: "Post Office", parcels: Array{1}};

Else we map and filter the parcels array and bind it to parcels
For the map, we check every parcel object to see if the parcel.place does not contain the current location
If it doesn't, then that parcel get's added back to the array of parcel objects.

ex. curren't place = "Farm", parcels = [{place: "Bob's House", address: "Alice's House"},
{place: "Marketplace", address: "Ernie's House"}]; parcels => the same

*** If the parcel.place is the current place, then add {place: destination, address: p.address}
ex. curren't place = "Post Office" parcels = [{place: "Alice's House", address: "Cabin"},
{place: "Post Office", address: "Cabin"}]);
newVillage.move("Market Place") => parcels = [{place: "Alice's House", address: "Cabin"},
{place: "Market Place", address: "Cabin"}]);
This seems to be so if we find the package at our destination, it's place will always be where we
are in the current state, unless it's being delivered. ex. It has to follow us to each destination,
so each parcel's place is our next destination, but only after we've been to the place where the parcel
is.

We now have an array containing all of our updated parcel objects. If we've been to the place
where the parcel started, then it's place will be updated to our destinations. Otherwise
The parcel will still have a place set to where we need to pick it up.

We then filter the mapped array, removing any parcels where their place and address are the same.

Then we update the state by creating a new VillageState with the destination we moved to, and
the updated array of parcel objects.
*/
  
  var VillageState = class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }

/*
Now we need a function to run our robots.
runRobot takes in a current VillageState, a robot, and the robot's memory.
It will run a loop which will continuouslt count until all parcels have been delivered.
VillageState.parcels.length = 0

Once the robot has completed all of it's deliveries, it logs to the console, with the amount of
turns that it counted up to, and breaks from the loop.

for every iteration of the loop until complete:

we run the current state and robot's memory through the robot, and bind that to action.

*Each robot will return a direction it's currently going, and can contain a memory to track*

the state is updated by calling on the state's move method (VillageState.move(destination))
and the direction that is passed through to the state, is the direction the robot is moving to
ex. state = VillageState.move(robot()) => moves to direction returned from robot

memory is then updated with the robot's returned new memory value.
ex. memory = robot(state, memory); robot returns {destination: memory[0], memory: memory.slice(1)}
and the new memory is set to memory.slice(1);
*/
  
  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }

/*  
This function accepts an array as an argument and then returns a randomly selected index 
from that array.
*/

  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }

/*
Here we create a new random() method on VillageState
This will set the count of parcels to 5 by default

It creates an empty parcels array.

It then loops until it reaches the amount of parcels

for each iteration:

During the loop it first uses Object.keys(roadGraph) to build an array of keys from roadGraph.
It then uses randomPick to select a random index from that array, thus selecting a random key 
from roadGraph.
Then it binds that key to address.
ex. address = "Bob's House"

Then it creates an empty binding, place

it calls an action to select another random key from roadGraph, and to keep selecting random keys
while place is equal to the address. This is to avoide having the address and place randomly be the
same key from roadGraph.

Then it will push the selected place and address into the parcels array as an object.
ex. i = 0 => parcels = [{place: "Bob's House", address: "Cabin"}]
    i = 1 => parcels = [{place: "Bob's House", address: "Cabin"}, {place: "Marketplace", address: "farm"}];
    ...
    ...
    ...
    i = 5 => parcels = [{place: "Bob's House", address: "Cabin"}, {...}, {...}, {...}, {...}];

Then it returns a new VillageState where the starting place is the "Post Office", and the parcels
is the new array of parcels that was randomly selected.
*/
  
  VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
  };

// ******************************************************************
// *** randomRobot ***
// ******************************************************************

/*
This is the most basic of robots.
It simply takes in the current state, and then randomly choosed a direction to move in.
randomPick() is passed through roadGraph[state.place].
It will continue going to randomly places until it picks up each parcel and delivers
*/

  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }
  
// ******************************************************************
// *** routeRobot***
// ******************************************************************

/*
Here we create a mailRoute array. This array maps a single route that takes us to each location.
After one loop, we can then repeat the route, and will be able to deliver each parcel on the
second rotation
*/

  var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];
  
/*
The routeRobot takes in a state and a memory.
If memory.length is 0, then he's been through the entire route. (we set memory to be the mailRoute)
Each time this robot is ran, it returns the direction(place) from memory[0], and then returns 
the rest of the memory by slicing(1).
*/

  function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }

/*
runRobot starts a turn with the state being:

Place: "Post Office" parcels: [{place: "Cabin", address: "Farm"},..., {...}];

  it sets action to be goalOrientedRobot({Place: "Post Office" parcels: 
  [{place: "Cabin", address: "Farm"},..., {...}], []);

  So goalOrientedRobot will run one with the current state.

  route.length IS 0 during initial state, so parcel becomes parcels[0] or 
  {place: "Cabin, address: "Farm"} (parcel is located at "Cabin and needs to
  be delivers to "Farm)

  gOR checks if parcel[0].place is our current location.
  Since it's not, we need to build a route to "Cabin to pick up the parcel.

  it calls findRoute() with the arguments roadGraph, our current place, and the place
  of the parcel we need to find. It's goal will be to build the quickest route to the parcel
  
    findRoute(roadGraph, "Post Office", "Cabin")
    work becomes [{at: "Post Office", route: []}]; and work.length = 1
    Next we begin to loop over the work array, which will get larger with each iteration
    until we run out of possible routes.

    *
    * let {at, route} = work[i] destructuring, but why? DEFINES {at, route} so we can
    * call route.concat?!
    * 

    for (let place of graph["Post Office"]) (loop through the destinations of post office)
    if (place == to(whereWeNeedToGo)) {
      return route.concat(place); => [place] || ["Cabin"]
    } So the last route that gets concacted, will be the destination.

    if (!work.some(w => w.at == place)) inverted t/f. 
    Basically loop check through work => [{at: "Post Office"}, route: []}]
    If Post Office is a destination of Post Office - False, which gets inverted to true
    which runs the next line.

    work.push({at: "Alice's House", route: route.concat(place)}); => 
    {at: "Alice's House", route: ["Alice's House"]} =>
    work => [{at: "Post Office", route: []},{at: "Alice's House", route: ["Alice's House"]};

    work.length = 2, so now it will iterate over work[1]
    
    {at, route} = work[1] => at: "Alice's House", route: ["Alice's House"];

    for (let place of graph["Alice's House"]) (loops through dest. of Alice's House)
    => ["Bob's House", "Cabin", "Post Office"];

    Is "Bob's House" where we need to go? False, run next step

    Is Alice's House == to any of these destinations? False, which inverts to true
    and runs the next line

    work.push({at: "Bob's House", route: ["Alice's House", "Bob's House"]});

    Is "Cabin" where we need to go? True, return route.concat(place);
    => route: ["Alice's House", "Cabin"];
    work[1] => {at: "Alice's House", route: ["Alice's House", "Cabin"]};

    work.length has been met so the route is given back to goalOrientedRobot
    => ["Alice's House", "Cabin"]

    goalOrientedRobot returns {direction: route[0], memory: route.slice(1)}
    => {direction: "Alice's House", memory: ["Cabin"]};

      runRobot binds {direction: "Alice's House", memory: ["Cabin"]} to action

      state.move() is given "Alice's House" as action.direction.
      VillageState uses this information to move the robot and the parcels to 
      Alice's House, and creates a new state with: 
      his.place = "Alice's House"
      his.parcels = [{...},{...},{...}] since we haven't picked up any parcels yet, their
      current place has not changed.

      runRobot binds the new state to state
      runRobot binds the new sliced memory to memory => ["Cabin"];
      runRobot console.logs where we moved to

      Since the current state.parcels is not 0, we repeat the process

        goalOrientedRobot is passed through the current state and memory
        => goalOrientedRobot({place, parcels}, ["Cabin"])

        since our route.length isn't 0 this time, and we have a memory, the robot
        simply returns the next direction in the route

        goalOrientedRobot => {direction: route[0], memory: route.slice(1)};
        => {direction: "Cabin", memory: route.slice(1)};

          The next state will drop off the parcel, and update the state.
          The memory will be at 0, so the next time we go through goalOrientedRobot
          it will need to find a new route
*/
  
  function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      console.log(work[i]);
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          console.log({at: place, route: route.concat(place)});
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }

// ******************************************************************
// *** goalOriented Robot***
// ******************************************************************

  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
        console.log(route);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

// ******************************************************************
// *** EXCERCISE 1 ***
// ******************************************************************

/* 
countSteps will take in a state, robot, and memory. The state will be set in the main funcation
by VillageState.random(). It will check the current states parcels and have the robot move through
until it delivers all the pacels. It binds the action as passing through the current state, memory
to the given robot.then the state is equal to VillageState.move(robot(state, memory).direction).
*/
function countSteps(state, robot, memory) {
    for (steps = 0;; steps++) {
        if (state.parcels.length == 0) return steps;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let r1Turns = [],
        r2Turns = [];
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        r1Turns.push(countSteps(state, robot1, memory1));
        r2Turns.push(countSteps(state, robot2, memory2));
    }
    let r1Average = r1Turns.reduce((a, b) => a + b) / 100,
        r2Average = r2Turns.reduce((a, b) => a + b) / 100;
    console.log(`Robot 1 needed ${r1Average} steps per task`);
    console.log(`Robot 2 needed ${r2Average} steps per task `);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

// *** ANSWER ***

//   function countSteps(state, robot, memory) {
//     for (let steps = 0;; steps++) {
//       if (state.parcels.length == 0) return steps;
//       let action = robot(state, memory);
//       state = state.move(action.direction);
//       memory = action.memory;
//     }
//   }
  
//   function compareRobots(robot1, memory1, robot2, memory2) {
//     let total1 = 0, total2 = 0;
//     for (let i = 0; i < 100; i++) {
//       let state = VillageState.random();
//       total1 += countSteps(state, robot1, memory1);
//       total2 += countSteps(state, robot2, memory2);
//     }
//     console.log(`Robot 1 needed ${total1 / 100} steps per task`)
//     console.log(`Robot 2 needed ${total2 / 100}`)
//   }
  
//   compareRobots(routeRobot, [], goalOrientedRobot, []);