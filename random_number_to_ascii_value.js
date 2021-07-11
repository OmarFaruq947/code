// let text = String.fromCharCode(65);

var i= true;
while (i) {
    var rand = Math.round(Math.random() * 127 +1);
   
    if (rand >= 37 && rand <= 127 ) {

        let text = String.fromCharCode(rand);
        console.log(" the ASCII code is ... ... CODE... Value ");
        console.log("________________________________________");
        console.log(" the ASCII code is ...  ..."+rand+ "...    ", text);
        
    }
    else{
        console.log(" NO Match (the number is under '37'). !!!!");
    }
    i= false;
}



  