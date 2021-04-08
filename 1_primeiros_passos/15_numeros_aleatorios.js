
//Math.random() retorna um número randomico entre 0 e 1
//0.1, 0.00000002, 0.92324, 1

while( true ){
    var numeroRandomico = ( Math.random() * 6 ) + 0.5 ;
    console.log( numeroRandomico ) ;
    /**
     * 0%|-----------|-----------|100%
     *   |-----------------------|
     *   0           |      |    6
     * 
     *   0 > 0,5 :: 0,5 > 1,5
     */
    //simulando randomico para números inteiros
    var numeroRandomicoInteiro =  Math.round( numeroRandomico ) ; 
    numeroRandomicoInteiro = Math.min( numeroRandomicoInteiro, 6 ) ;
    numeroRandomicoInteiro = Math.max( numeroRandomicoInteiro, 1 ) ;
    
    console.log("randomico inteiro >> ", numeroRandomicoInteiro) ;
}


