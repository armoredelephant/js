const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

function buildGraph(edges) {
    let graph = Object.create(null); // object created with no props
    function addEdge(from, to) { // function that takes two args
      if (graph[from] == null) { // if the index of graph[arg1] is null
        graph[from] = [to]; // if there is no from, then graph[from] becomes graph[to]
      } else {
        graph[from].push(to); // else graph[arg1].push(arg2) || if there is a from, then push the to
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) { // maps the roads and splits them at -. Each of he indexes in roads is now [first road, second road] or [from, to]
      addEdge(from, to); // creates 
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);

/* 
Condense the village's state down to the minimal set of values that define it.
There's the robot's current location and collection of undelivered parcels, each
of which has a current location and a destination address. That's it

While we're at is, let's make it so that we don't change this state when the robot moved
but rather compute a new state for the situation after the move
*/

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    } // basic constructor that sets the place and parcel of the new Object

    move(destination) { // method added to each object build from VillageState that takes in a destination
        if (!roadGraph[this.place].includes(destination)) { // if the roadGraph[this.place] doesn't include the destination
            return this; // return current
        } else {
            let parcels = this.parcels.map(p => { // for parcel
                if (p.place != this.place) return p; // return all parcels that isn't the current one
                return {place: destination, address: p.address}; // return an object with dest and address
            }).filter(p => p.place != p.address); // filters the parcels array and removed the delivered parcel at this address
            return new VillageState(destination, parcels); // creates a new Object containing the current state
        }
    }
}

/* 
Parcel objects aren't changed when they are moved but re-created. The move method
gives us a new village state but leaves the old one entirely intact
*/

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

console.log(next.place);
// => Alice's House
console.log(next.parcels);
// => []
console.log(first.place);
// => Post Office

/*
Because we want robots to be able to remember things, so that they can make and execute plans, 
we also pass them their memory and allow them to return a new memory. 
Thus, the thing a robot returns is an object containing both the direction it wants to move 
in and a memory value that will be given back to it the next time it is called.
*/

function runRobot(state, robot, memory) {
    for (let turn = 0 ;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory); // takes in the previous state and memory and that becomes the action
        state = state.move(action.direction); // calls on the move method from the passed through obj
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

/*
The robot must pick up all parcels by visiting every location that has a parcel
The robot must deliver those parcels by visiting every location that a parcel is addressed to, but only after picking it up.//#endregion

What is the dumbest strategy that could work? The robot could just walk in a random direction every turn.
that means, with great likelihood, it will eventually run into all parcels and then also at some point
reach the place where that should be delivered to.

*/

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length); // grabs a randomnumber between 0 and array.length
    return array[choice]; // uses the random number and returns that index of the passed through array
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}; // sets direction: 
}


/*
To put this sophisticated robot to work, we’ll first need a way to create a new state 
with some parcels. A static method (written here by directly adding a property to the constructor) 
is a good place to put that functionality.
*/

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph)); // sets address to be a randomindex of a random array from roadGraph
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address) // if place == address, then set place to be another random index
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);

/*
We should be able to do a lot better than the random robot. An easy improvement would be to 
take a hint from the way real-world mail delivery works. If we find a route that passes all 
places in the village, the robot could run that route twice, at which point it is 
guaranteed to be done. Here is one such route (starting from the post office):
*/

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute; // if the memory length = 0 then it sets the memory to the mail route
    }
    return {direction: memory[0], memory: memory.slice(1)}; // sets the direction to the first index and slices everything after
}

/*
In fact, we are mostly interested in the shortest route. So we want to make sure we look at 
short routes before we look at longer ones. A good approach would be to “grow” routes from 
the starting point, exploring every reachable place that hasn’t been visited yet, until a 
route reaches the goal. That way, we’ll only explore routes that are potentially interesting, 
and we’ll find the shortest route (or one of the shortest routes, if there are more than one) 
to the goal.
*/


/*
The search then operates by taking the next item in the list and exploring that, which means 
all roads going from that place are looked at. If one of them is the goal, a finished route 
can be returned. Otherwise, if we haven’t looked at this place before, a new item is added 
to the list. If we have looked at it before, since we are looking at short routes first, 
we’ve found either a longer route to that place or one precisely as long as the existing one, 
and we don’t need to explore it.
*/

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}]; // work.at = what is passed through as from. Start position and empty route
    for (let i = 0; i < work.length; i++) { // work.length is 1? Work increases in length as this loop goes.
        let {at, route} = work[i]; // sets {at, route} to be that of the current index of the loop. See example below for what work[0] would set {at, route}to
        for (let place of graph[at]) { // for every place of graph["from"]. So whatever the value is of graph[at] property. Every road from current location.
        console.log(place); // added to see what is being pulled as the place 
            if (place = to) return route.concat(place); // if value == to, route: [value]; if goal is found then return that as the best route?
            if (!work.some(w => w.at == place)) { // work.some checks if at least one thing is true. If any item in work.at == place then {} we don't want one that we've already looked at before, as it would be the same length or longeer so we !work.some() to find ones that we haven't already looked at
                work.push({at: place, route: route.concat(place)}); // adds a new route to the work array.
            }
        }
    }
}

// work.push({at: obj["at"], route: route.concat(obj["at"])});
// => 2
// work
// [{...}, {...}]
// 0: {at: "one", route: Array(1)}
// at: "one"
// route: ["one"];

function goalOrientedRobot({place, parcels}, route) { // takes in an object with 2 props, and a route
    if (route.length == 0) { 
        let parcel = parcels[0]; // parcel = first index of parcels
        if (parcel.place != place) { // if parcel.place != current place, then route = ?
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)}; // uses the first index of route for the direction, and then memory is every other index of route
}

