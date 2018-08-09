// 3. Write a JavaScript function to get the current date.
// expected output: mm-dd-yy,mm/dd/yy

function dateGet() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yy = today.getFullYear();

    if (dd < 10) {
        dd = 0 + dd;
    }

    if (mm < 10) {
        mm = 0 + mm;
    }

    console.log(mm + '/' + dd + '/' + yy);
}

function dateGet(){
    var newDate = new Date();
    var newMonth = newDate.getMonth() + 1;
    var newDay = newDate.getDate();
    var newYear = newDate.getFullYear();
    var twoYear = (""+newYear).split("");
    var combinedYear = twoYear[2] + twoYear[3];
    var fullDate = 0;

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

// var to store the date

// function dayGet(i){
//     var results = '';
//     if (i < 10) {
//         results += 0 + i + '/';
//     } else{
//         results += i + '/';
//     }
//      return results
// }

// function monthGet(i){
//     var results = '';
//     if (i < 10) {
//         results += 0 + i + '/';
//     } else{
//         results += i + '/';
//     }
//      return results
// }

// function yearGet(i){
//     var results = '';
//     if (i < 10) {
//         results += 0 + i;
//     } else{
//         results += i;
//     }
//      return results
// }

// function dateGet(){
//     var newDate = new Date();
//     var newMonth = newDate.getMonth() + 1;
//     var newDay = newDate.getDate();
//     var newYear = newDate.getFullYear();
//     var twoYear = (""+newYear).split("");
//     var combinedYear = twoYear[2] + twoYear[3];
//     var dateArr = [newMonth, newDay, combinedYear];
//     var results = '';
//     for (var i = 0; i < dateArr.length; i++){
//         if (i < 10) {
//             results += 0 +  + '/';
//         } else {
//             results += i + '/';
//         }
//     }

    // dateArr.forEach(function() {
    //     var results = [];
    //     if (d < 10){
    //         results.push(0 + d + '/');
    //     } else {
    //         results.push(d + '/');
    //     }
    //     return results
    // });
    // console.log(dateArr.join(''));
    // console.log(results);
// }

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