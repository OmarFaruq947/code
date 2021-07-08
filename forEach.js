var arr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,1 ,0 ,5 ,42 ,75 ,100]


// for (var i=0 ; i<arr.length ; i++){
//     console.log(">>  ",arr[i]);
// }


console.log(" .............../ forEach /..............");

// arr.forEach((index) => {
//     console.log("value : " + index );
// });

arr.forEach((number, index, arr) => {
    console.log(number + ">>   " +index+ ">>   "+arr);
});





//Syntax 

// arr.forEach((number, index, array) => {
 
// });