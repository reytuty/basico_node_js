//Dicionários ou Mapas

//                  0       1      2        3          4
//var frutasLista =  new Array( "uva", "maça", "pera", "tomate", "morango" );

var frutas = new Map() ;
frutas.set("chave", "valor") ;

frutas.set("vermelhas", ["maça", "tomate", "morango"]) ;

frutas.set("roxas", ["uva"]) ;
frutas.set("amarelas", ["pera"]) ;

frutas.set(99, "noventa e nove") ;

console.log( frutas  ) ;
console.log( frutas.get("vermelhas") );

var cartas = new Map() ;
var objAPaus = {nome:"A", naipe:"paus"} ;
cartas.set("as de paus", objAPaus) ;
cartas.set("A de paus", objAPaus) ;
cartas.set("Apaus", objAPaus) ;
cartas.set("a de Paus", objAPaus) ;

var nomeDaCarta = "Apaus" ;
var objetoDaCarta = cartas.get(nomeDaCarta) ;

console.log(objetoDaCarta)