var str = 'w3resources';
var firstLetter = str.slice(str.length - 1);
var newStr = str.slice(0,str.length-1);

// take the last letter from the string
// attach that letter to the new string
// var newStr = firstLetter
// join old to new

for (var i = 0; i < str.length; i++) {
    
    var result = firstLetter + newStr;
    alert(result);
}

function cutLast(str){
    var arr = [];
    var res = str.slice(str.length - 1);
}