// function gretting(events){
//     var output;
//     function mg(sms){
//         output = events + " " + sms+ "!";
//         console.log(output);
       
//     }
//     return mg;
// }



// .......... /  or  alternate way /.........



// function gretting(events){
//     return function(sms){
//         console.log(events + " " + sms+ "!");
//     }
// }





// var good = gretting("Good morning");
// var hello = gretting("hello");


// good("papa");
// hello("ammi");






var name = "omar faruq";

function say_name(){
    console.log("hi " + name);
}
console.dir(say_name); // closer commend

say_name();