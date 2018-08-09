var myBtn = document.querySelector(".my-button");
var whole = document.querySelector("body");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll('li');
// var i = 2

// myBtn.addEventListener('click', function(){
//     if (i % 2 !== 0) {
//         whole.style.backgroundColor = 'white';
//     } else {
//         whole.style.backgroundColor = 'purple';
//     }
//     i++;
// });

// var isPurple = false;

// myBtn.addEventListener('click', function(){
//     if (isPurple) {
//         document.body.style.backgroundColor = 'white';
//     } else {
//         document.body.style.backgroundColor = 'purple';
//     }
//     isPurple = !(isPurple);
// });

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function(){
        this.classList.toggle('cross-out');
    });
}

myBtn.addEventListener('click', function() {
    document.body.classList.toggle('purple');
});

// li.addEventListener('click', function(){
//     li.classList.toggle('cross-out');
// });

