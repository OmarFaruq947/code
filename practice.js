function person( firstName, lastName, gender){
    var output;
    if (gender === "male") {
        output = "Mr. "+ firstName+ " " + lastName;
    }
    else if( gender === "female") {
        output =  "Ms. "+ firstName+ " " + lastName;
    }
    return output;
}
var abc= person("omar", "faruq", "male");

console.log(abc);