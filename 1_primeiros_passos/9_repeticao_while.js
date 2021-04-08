//criando um objeto simples com várias PROPRIEDADES 
const alimento = { 
    proteinas       : 0,
    valorCalorico   : 0,
    sodio           : 0
} ;

while( alimento.valorCalorico < 1000 || alimento.sodio < 444 || ++alimento.proteinas < 20 ){
    ++alimento.valorCalorico ;
    alimento.sodio++ ;
}

console.log( alimento ) ;

//WHILE