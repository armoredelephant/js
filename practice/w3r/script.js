// 1. Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday
// Current time is : 10 PM : 30 : 38

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// 2. Write a Javascript program to print the contents of the current window

function printWindow(){
    window.print();
}

// 3. Write a JavaScript function to get the current date.
// expected output: mm-dd-yy,mm/dd/yy

// var to store the date
function dateGet(){
    var newDate = new Date();
// var to store the month
    var newMonth = newDate.getMonth() + 1;
// var to store the day
    var newDay = newDate.getDate();
// var to store the year
    var newYear = newDate.getFullYear();

    var twoYear = (""+newYear).split("");

    var combinedYear = twoYear[2] + twoYear[3];

    // var dateArr = [newMonth, newDay, combinedYear];

    var fullDate = 0;

    // var d = dayGet(newDay);
    // var y = yearGet(combinedYear);
    // var m = monthGet(newMonth);
    
    // fullDate === d+m+y;

    if (newMonth < 10){
        fullDate += 0 + newMonth + '/';
    } else {
        fullDate += newMonth + '/';
    }

    if (newDay < 10){
        fullDate += 0 + newDay + '/';
    } else {
        fullDate += newDay + '/';
    }

    if (combinedYear < 10){
        fullDate += 0 + combinedYear;
    } else {
        fullDate += combinedYear;
    }

    console.log(fullDate);
}

// var d = dayGet(newDay);
// var y = yearGet(combinedYear);
// var m = monthGet(newMonth);

// fullDate === d+m+y;

function dayGet(i){
    var results = '';
    if (i < 10) {
        results += 0 + i + '/';
    } else{
        results += i + '/';
    }
     return results
}

function monthGet(i){
    var results = '';
    if (i < 10) {
        results += 0 + i + '/';
    } else{
        results += i + '/';
    }
     return results
}

function yearGet(i){
    var results = '';
    if (i < 10) {
        results += 0 + i;
    } else{
        results += i;
    }
     return results
}
    


    // dateArr.forEach(function(d) {
    //     var results = '';
    //     if (d < 10){
    //         results += 0 + d + '/';
    //     } else {
    //         results += d + '/';
    //     }
    //     return results
    // })

// function test(i){
//     if (i < 10){
//         return 0 + i
//     }
//     return i
// }
// then run testMonth(newMonth);



// if the month is less than 10, we need to add a 0 in front: 01/ 06/

// need to slice 2 on year to get the last 2

// if day is less than 10, we need to add a 0 in front: 01/02/99

// need a result to store month + - + day + - + year;

// if (month < 10) {}