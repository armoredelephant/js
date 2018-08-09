// var first = document.querySelector('input')[0];
// var last = document.querySelector('input')[1];

// function pull() {
//     let f = first.value;
//     let l = last.value;
//     return f + ' ' + l; 
// }

// function getFormValue(){
//     let x = document.getElementById('form1');
//     for (var i = 0; i < x.length; i++) {
//         if (x.elements[i].value !== 'Submit') {
//             alert(x.elements[i].value);
//         }
//     }
// }

function getFormValue() {
    // let x = document.getElementById('form1');
    let f = document.querySelector('#form1').elements[0].value;
    let l = document.querySelector('#form1').elements[1].value;
    let results = f + ' ' + l;
    alert(results);
}