var arr = [1,2,3,4,55,66,55,45,65,5555,111,478852256,254562363];

var x = arr.sort(function(a,b){
    return a-b; // Asending
    // return b-a; // dessending
});
console.log(x);






// object....
// var people =[
//     {name: 'omar faruq', age: 22},
//     {name: 'mr.nahin', age: 28},
//     {name: 'likhon', age: 32},
//     {name: 'anannay mostofa', age: 42},
//     {name: 'shuvo', age: 12}, 
//     {name: 'sara', age: 25},

// ]







// sorted by age...
// people.sort(function(a,b){
//     return a.age - b.age;
// })
// console.log(people);




// A-Z
// people.sort(function(a,b){
//     if (a.name > b.name){
//         return +1;
//     }

//     else if(a.name < b.name){
//         return -1;
//     }
//     else {
//         return 0;
//     };
// })
// console.log(people);







// Z-A
// people.sort(function(a,b){
//     if (b.name >a.name){
//         return +1;
//     }

//     else if(b.name < a.name){
//         return -1;
//     }
//     else {
//         return 0;
//     };
// })

// console.log(people);