var produtos = [] ;
produtos.push( {sku: "1", nome: "Panela", preco: 99.99}) ;
produtos.push( {sku: "2", nome: "Colchão", preco: 299.99}) ;
produtos.push( {sku: "3", nome: "USB", preco: 60 }) ;


var carrinhoDeCompras = [] ;

function buscarPorSku( sku ){
    for( var i = 0; i < produtos.length ; i++){
        if( produtos[i].sku == sku ){
            return produtos[i] ;
        }
    }
}
function buscaNoCarrinho( sku ){
    for( var i = 0; i < carrinhoDeCompras.length ; i++){
        if( carrinhoDeCompras[i].sku == sku ){
            return carrinhoDeCompras[i] ;
        }
    }
}
function addNoCarrinho( sku ){
    var produto = buscarPorSku( sku ) ;
    if( produto == null ){
        return ;
    }
    //verificar se já existe no carrinho
    var itemDeCarrinho = buscaNoCarrinho(sku) ;
    if( itemDeCarrinho ) {
        //já existe no carrinho
        itemDeCarrinho.quantidade++ ;
        return ;
    }
    itemDeCarrinho = {
        quantidade: 1,
        sku: sku,
        nome : produto.nome ,
        preco : produto.preco
    } ;
    carrinhoDeCompras.push( itemDeCarrinho ) ; 
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