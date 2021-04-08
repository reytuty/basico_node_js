
var teorAlcoolico = 1;


var texto = "" ;//texto é string
if(teorAlcoolico > 0){
    texto = "Não pode dirigir depois de beber." ;
} else {
    texto = "Pode dirigir sim."
}
console.log(texto) ;


// ------ TERNÁRIO
// SINTAXE : ( verificador de verdade ) ? opção se verificador for true : opção se for false
var texto2 = (teorAlcoolico > 0)?"Não pode dirigir depois de beber.":"Pode dirigir sim."  ;
console.log( texto2 ) ;