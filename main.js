let listaProdutos = [];
let idGerador = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = idGerador++;
    listaProdutos.push(produto);
}

function buscarPorId(id) {
    /*for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto;
        }
    }*/
    return (listaProdutos.find(
        function(produto) {
            return (produto.id == id);        
        }
    ));
}

function atualizar(id, produto) {
    /*let indiceProduto = -1;
    for(let indice in listaProdutos) {
        if(produto.id == id){
            indiceProduto = indice;
        }
    }
    if(indiceProduto == -1) return;
    //alterar o produto direto
    listaProdutos[indiceProduto] = produto;*/

    let indiceProduto = listaProdutos.findIndex(function(produto) {
        return (produto.id == id);
    })

    if(indiceProduto == -1) return;
    //alterar o produto direto
    listaProdutos[indiceProduto] = produto;


}

function main() {
    inserir({nome:"Arroz", categoria:"Alimento", preco:4.7});
    inserir({nome:"Suco de Laranja", categoria:"Bebida", preco:7.5});
    inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    console.log(listar());

    console.log("Produto [id=2]: ", buscarPorId(2));

    atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4})

    console.log(listar());
    
}

main();