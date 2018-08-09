var input = document.getElementById('temp-check');
var faren = document.querySelector('.btn-to-faren');
var cel = document.querySelector('.btn-to-celcius');
var p = document.querySelector('p');

input.focus();

cel.onclick = function() {
    var temp = input.value;
    var results = Math.round((temp - 32) * .5556);
    p.textContent = results + ('\xB0') + ' Celcius';
    input.focus();
    document.getElementById('temp-check').value = null;
}

faren.onclick = function() {
    var temp = input.value;
    var results = Math.round((temp * 1.8) + 32);
    p.textContent = results + ('\xB0') + ' Farenheight';
    input.focus();
    document.getElementById('temp-check').value = null;
}

// call on the buttons to run a fonction btn.onclock = function() {} btn.eventListener(onClick,'element');

// based on the buttons we need to convert the input of input.value to the opposite

