var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var array2 = [];




function myFilter(array, callback) {
    var array2 = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            array2.push(array[i]);
        }
    }
    return array2;
}
var myArray = myFilter(array, function(element) {
    return element % 2  == 1;
});
console.log("my array is : ", myArray);









// var newArray = array.filter(function(element) {
//     return element %2 == 0;
    
// });
// console.log(newArray);




// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 == 0) {
//         console.log("even is :  ", array[i]);
//     }
    
// }




// array.forEach(element => {

//     if (element%2 === 0) {
//         console.log("even is :  ", element);
//     }
// });








// array.forEach(element => {

//     if (element%2 === 0) {
//         array2.push(element)
//     }
// });
// console.log("even array :  ", element);
