var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

var mapArray = [];


var new_array = arr.map(function(value) {
    return value+2;
});

console.log(new_array);


// for (let i = 0; i < arr.length; i++) {
//     mapArray.push(arr[i]+2);
// }
// console.log(mapArray);
