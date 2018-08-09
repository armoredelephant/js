// ******** QUESTION 1 **********

function printReverse(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        console.log(arr[x]);
    }
}

// function needs to check if index+1 is the same
// ******** QUESTION 2 **********

function isUniform(array) {
    var firstItem = array[0];
    for (var nextItem = 1; nextItem < array.length; nextItem++) {
        if (array[nextItem] !== firstItem ) {
            return false;
        }
        return true 
    }
}


// ******** QUESTION 3 **********
// var that sets input to Number
// var for answer total += var
function sumArray(arr) {
    var total = Number(null);
    for (var i = 0; i < arr.length; i++){
       total += arr[i];
    }
    console.log(total);
}

function sumArray(arr) {
    // var total = 0; will work also
    var total = Number(null);
    arr.forEach(function(i){
        total += i;
    });
    console.log(total);
}


// ******** QUESTION 4 **********
// assumes all are numbers
// var that updates a max if greater than previous
function max(arr) {
    var maxNumber = Number(null);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    console.log(maxNumber);
}

function max(arr) {
    // var maxNumber = arr[0];
    var maxNumber = Number(null);
    arr.forEach(function(i){
        if (i > maxNumber) {
            maxNumber = i;
        }
    })
    console.log(maxNumber);
}

