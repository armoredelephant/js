// array of movies objects [0{tile,year,whatever},1,2,3]
// title:
// hasWatched:
// rating:

// if arr.hasWatched = false {console.log(You have watched + arr[0].title + " - " + arr[0].rating)}

// ceates empty array
var movies = [];

movies.push(
    {
    title: "Your Name",
    hasWatched: true,
    rating: 5
    }
);

movies.push(
    {
        title: "Fantastic Beasts",
        hasWatched: false,
        rating: 4
    }
);

movies.push(
    {
        title: "Princess Mononoke",
        hasWatched: true,
        rating: 5
    }
);

movies.push(
    {
        title: "Black Panther",
        hasWatched: false,
        rating: 5
    }
);

// *** Method 1 ***

// movies.forEach(function(arr) {
//     if (arr.hasWatched === false){
//         console.log("You have not seen " + "\"" + arr.title + "\"" + " - " + arr.rating);
//     } else {
//         console.log("You have watched " + "\"" + arr.title + "\"" + " - " + arr.rating);
//     }
// });

// *** Method 2 ***

// movies.forEach(function(arr){
//     var results = "You have ";
//     if (arr.hasWatched === false){
//         results += "not seen ";
//     } else {
//         results += "watched ";
//     }
//     results += "\"" + arr.title + "\"" + " - " + arr.rating + " stars";
//     console.log(results);
// });

// *** Method 3 ***

function buildString(arr) {
    var results = "You have ";
    if (arr.hasWatched === false){
        results += "not seen ";
    } else {
        results += "watched ";
    }
    results += "\"" + arr.title + "\"" + " - " + arr.rating + " stars";
    return results;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
});