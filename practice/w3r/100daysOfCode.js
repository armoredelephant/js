// ******************************************************************
// *** NEXT ***
// ******************************************************************

// Array's items using for loops

function filteredArray(arr, elem) {
    let newArr = [];
    // loop through the indexes of the passed through array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) != -1) {
            newArr.push(arr[i]);
        }
    }
    // Push to new array if it meets condition passed through in elem | contains char*
    return newArr;
}

console.log(filteredArray([[1,2,3],[4,5,6]],1));
// => [1,2,3];

console.log(filteredArray([[9,5,1],[16,3,67],[1,2,4],[9,5,1]], 1));
// => [ [ 9, 5, 1 ], [ 1, 2, 4 ], [ 9, 5, 1 ] ]

console.log(filteredArray([['word', 2], ['another', 1], ['final', 9]], 1));


// ******************************************************************
// *** NEXT ***
// ******************************************************************

