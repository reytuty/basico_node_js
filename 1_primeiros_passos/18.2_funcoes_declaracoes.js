//

function exemplo1( mensagem ){
    console.log("|-------------------------|");
    console.log("|"+mensagem);
    console.log("|-------------------------|");
}

var exemplo2 = ( mensagem )=>{ 
    //arrow functions
    console.log("|-------------------------|");
    console.log("|"+mensagem);
    console.log("|-------------------------|");
}

var exemplo3 = mensagem=>{ 
    //arrow functions
    console.log("|-------------------------|");
    console.log("|"+mensagem);
    console.log("|-------------------------|");
}
var exemplo4 = messagem => console.log(messagem) ;

exemplo4("aqui") ;