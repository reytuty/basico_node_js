var produtos = new Map() ;
produtos.set("1", {nome: "Panela", preco: 99.99}) ;
produtos.set("2", {nome: "Colchão", preco: 299.99}) ;
produtos.set("3", {nome: "USB", preco: 60 }) ;


var carrinhoDeCompras = new Map() ;

function addNoCarrinho( sku ){
    var produto = produtos.get( sku ) ;
    if( produto == null ){
        return ;
    }
    //verificar se já existe no carrinho
    if( carrinhoDeCompras.has(sku) ) {
        //já existe no carrinho
        var item = carrinhoDeCompras.get(sku) ;
        item.quantidade++ ;
        return ;
    }
    var itemDeCarrinho = {
        quantidade: 1,
        sku: sku,
        nome : produto.nome ,
        preco : produto.preco
    } ;
    carrinhoDeCompras.set(sku,  itemDeCarrinho ) ; 
}

function mostraItem( item ){
    console.log(item.quantidade+"              | "+item.nome+" |     "+item.preco) ;
}
function listarCarinho( lista ) {
    console.log("============== CARRINHO DE COMPRAS ================") ;
    console.log(" QUANTIDADE     |      NOME     |     PREÇO ") ;
    for( var i = 0 ; i < lista.length ; i++ ){
        mostraItem( lista[i] ) ;
    }
}

addNoCarrinho( "1" ) ;
addNoCarrinho( "2" ) ;
addNoCarrinho( "2" ) ;

listarCarinho( Array.from( carrinhoDeCompras.values() ) ) ;