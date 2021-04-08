//Exercício:

var racaDoCachorro = "Doberman";
var idadeDoCachorro = 7;

//sair com texto no console dizendo se a idade é ideal para reprodução ou não
var idadeIdealMinima = 2 ;
var idadeIdealMaxima = 6 ;

switch( racaDoCachorro.toLowerCase() ){
    case "pincher" :
        idadeIdealMinima = 2 ;
        idadeIdealMaxima = 8 ;
        break ;
    case "doberman":
        idadeIdealMinima = 2 ;
        idadeIdealMaxima = 4 ;
        break ;
    default:
        break ;
}
if(idadeDoCachorro >= idadeIdealMinima && idadeDoCachorro <= idadeIdealMaxima){
    console.log("Seu cachorro de raça "+racaDoCachorro+" e idade "+idadeDoCachorro+" está na idade ideal para reprodução.") ;
} else {
    console.log("não está na idade ideal") ;
}