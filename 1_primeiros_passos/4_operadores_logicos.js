// Dados da pessoa
var idade               = 21;
var nacionalidade       = "brasileiro";
var saldoEmConta        = 1800 ;
// variaveis da aplicação
var idadeMinimaParaCNH  = 18 ;
var custoDaCNH          = 1000 ;

if( nacionalidade == "americano" ){
    idadeMinimaParaCNH = 16 ;
    //isso também está dentro do if
}
if( idade >= idadeMinimaParaCNH && saldoEmConta >= custoDaCNH ){
    //só entra aqui se o if for verdadeiro
    console.log("Pode tirar a CNH") ;
} else {
    //só entra aqui se if for verdadeiro
    console.log("Volte ano que vem") ;
}
//diferente
if(nacionalidade != "americano"){
    console.log("Acho que você é brasileiro") ;
}
