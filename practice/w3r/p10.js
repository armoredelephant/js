var numOne = document.getElementById('check-first');
var numTwo = document.getElementById('check-second');
var mult = document.querySelector('.btn-multiply');
var div = document.querySelector('.btn-divide');
var para = document.querySelector('p');

numOne.focus();

div.onclick = function() {
    var results = numOne.value / numTwo.value;
    para.textContent = 'The result is: ' + results;   
}

mult.onclick = function(){
    var results = numOne.value * numTwo.value;
    para.textContent = 'The result is: ' + results;    
}

// var p = querySelector('p');
// body.appendChild('p');
// p.textContent = results;
// to grab input from check-first

// to grab inout from check-second

// an action on click for each button

// for multiply (numOne * numTwo) results = value
// for divide (numOne / numTwo) output results