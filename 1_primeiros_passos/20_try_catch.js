


function dividir(a, b){
    if(b==0){
        //é um erro enviar o zero como divisor
        throw new Error("Divisão por zero?") ;
    }
    if( isNaN(b) ){
        //é um erro enviar o zero como divisor
        throw new ErrorEvent("Divisão por letra?") ;
    }
    return a / b ;
}

while(true){
    try {
        console.log( dividir(1, 2) ) ;
        //
    } catch(e){
        console.log(e) ;
    } finally{
        console.log("tentou executar.");
    }
}