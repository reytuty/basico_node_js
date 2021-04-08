var produtos = [
            {sku:"1", nome:"Panela", preco: 99.99},
            {sku:"2", nome:"Colchão", preco: 299.99},
            {sku:"3", nome:"USB", preco: 60.00}
        ] ;

        var carrinhoDeCompras = [] ;

        function buscaProdutoPorSku( sku ){
            for( var i = 0 ; i < produtos.length; i++){
                var item = produtos[i] ;
                if(item.sku == sku){
                    return item ;
                }
            }
        }
        function buscaNoCarrinho( sku ){
            for( var i = 0 ; i < carrinhoDeCompras.length; i++){
                var item = carrinhoDeCompras[i] ;
                if(item.sku == sku){
                    return item ;
                }
            }
        }

        function addNoCarrinho( sku ){
            var item = buscaProdutoPorSku( sku ) ;
            if(item == null){
                return ;
            }
            //se chegar aqui, é pq o item não é null
            var itemDoCarrinho = buscaNoCarrinho( sku ) ;
            if( itemDoCarrinho ){
                //tem esse SKU já no carrinho
                var infoCarrinho = itemDoCarrinho ;
                infoCarrinho.quantidade ++ ;
            } else {
                carrinhoDeCompras.push( 
                    { 
                        quantidade  : 1, 
                        sku         : sku ,
                        nome        : item.nome, 
                        preco       : item.preco 
                    } ) ;
            }
            
        }

        function mostraItem( item ){
            console.log(item.quantidade+"        |"+item.nome+" | "+item.preco ) ;
        }
        function mostraCarrinho( lista ){
            console.log("========== CARRINHO DE COMPRAS ============") ;
            console.log("QUANTIDADE |   NOME   |   PREÇO") ;
            for( var i = 0 ; i < lista.length ; i++ ){
                mostraItem(lista[i]) ;
            }
        }

        addNoCarrinho( "1" ) ;
        addNoCarrinho( "2" ) ;
        addNoCarrinho( "2" ) ;

        mostraCarrinho( carrinhoDeCompras ) ;