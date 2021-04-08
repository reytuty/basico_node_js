
function exemplo( mensagem ){
    console.log("|-------------------------|");
    console.log("|"+mensagem);
    console.log("|-------------------------|");
}
exemplo("Bom dia");

function somar(a, b){F
    return a + b ;
}
function volume(largura, altura, profundidade){
    return ( largura * altura * profundidade )/1000 ;
}

function mostraLista(titulo, lista){
    exemplo(titulo) ;
    for( var i = 0; i < lista.length; i++){
        console.log(lista[i]) ;
    }
    exemplo("Fim da lista "+titulo)
}
var x = 10 ;
var y = 90 ;
var resultado = somar(x, y) ;
exemplo("Vou somar: "+x+"+"+y+"="+resultado);

exemplo("O volume de um recipiente é de "+volume(100,100,100)+" litros")

var compras = ["Maça", "Uva", "Pera", "Tomate"];

mostraLista("Minhas compras", compras) ;


