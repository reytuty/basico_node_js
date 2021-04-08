
// var n = 1 ;
// var t = "1" ;

// if(n === t){
//     console.log("SIM", n ,"é igual de", t) ;
// } else {
//     console.log("NÃO, ", n ,"é diferente de", t) ;
// }


//concatenar

// var t1 = "Ola, como vai?" ;
// var t2 = "Tudo bem?" ;

// var textoJunto = t1 + t2 ;

// console.log(textoJunto) ;

// var nome = "Renato" ;
// var bemVindo = "Ola, como vai "+nome+"?" ;

// console.log(bemVindo) ;


//SUBSTITUIÇÃO DE TEXTO
var nome = "Renato" ;
var idade = 41 ;

var bemVindoTemplate = "Ola, como vai %nomeDaPessoaAqui%! Parabéns pelos seus !idadeDaPessoaAqui- anos!" ;

var bemVindo = bemVindoTemplate.split("%nomeDaPessoaAqui%").join(nome) ;
bemVindo = bemVindo.split("!idadeDaPessoaAqui-").join(idade) ;
console.log( bemVindo ) ;

//tornar tudo maiusuculo
console.log( bemVindo.toUpperCase() ) ;

console.log( bemVindo.toLowerCase() ) ;

