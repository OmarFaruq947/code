function hello(name, print){
    print(name);
}


hello('omar ', function(name){
    console.log('hello '+ name);
})


hello ( " omar ", function(name){
    console.log('hi, '+ name );
});

hello ( "omar" , function(name){
    console.log( 'love '+name);
})

