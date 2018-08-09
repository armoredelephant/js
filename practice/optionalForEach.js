// this will run whatevr function we add inplace of func (myForEach(arrayVariable, alert);)
// it will alert once for each item in the array that's called
// It will be blank though because we're not passing any info into func();
function myForEach(arr, func) {
    // loop through array
    for (var i = 0; i < arr.length; i++) {
    // call func inside for each item in the array
        func();
    }
}

// Now that we add arr[i] into func() the alert will input each item in the aray as data IN the alert
function myForEach(arr, func) {
    // loop through array
    for (var i = 0; i < arr.length; i++) {
    // call func inside for each item in the array
        func(arr[i]);
    }
}

// If we have an aray names colors, for each item in the array we are going to run the function alert('hi')
// So for 4 colors, we'll get an alert that says hi 4 times
myForEach(colors, function(){ alert('hi') });

myForEach(colors, function(color){ console.log(color) });

Array.prototype.myForEach = function(func) {
    // use this to apply on the array we call this function on. Refers to the specific array called on
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

// myForEach can now be called on an array and loop through each in friends
friends.myForEach(alert);

// The below will now log I Love + each item from the friends array
friends.myForEach(function(name){
    console.log('I Love ' + name);
});

// We can pass around/through functions: function(func) but the function isn't called until the () in the code
// function(func) will not be called until within function(func){ func(); }