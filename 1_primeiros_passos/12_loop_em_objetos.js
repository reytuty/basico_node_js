

const guerreiro = {
    nome    : "Thor",
    forca   : 100,
    hp      : 1000
} ;

const dragao = {
    nome    : "Dragão",
    forca   : 200,
    hp      : 300
}
//fora do for
for( var i in guerreiro ){
    //dentro do for e do loop
    console.log( i +" >>>>>> "+guerreiro[i] ) ;
}
//fora do for

var turno = 0 ;
while( dragao.hp > 0 && guerreiro.hp > 0 ){
    //aqui a batalha
    console.log("Estamos no turno ", turno) ;
    //dragão ataca no impar
    if( turno%2 == 1 ){
        guerreiro.hp = guerreiro.hp - dragao.forca ;
        console.log("É a vez do dragão atacar.")
    }
    //guerreiro ataca nos multiplos de 10
    if(turno%10 == 0){
        console.log("É a vez do guereiro atacar.") ;
        dragao.hp -= guerreiro.forca ;
    }
    turno++ ;
}

console.log(guerreiro, dragao) ;
