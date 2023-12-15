// carrinho.js

const carrinhoCompras = [];

function adicionarAoCarrinho() {
    const produtoSelecionado = document.getElementById("produtoSelecionado").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    const itemCarrinho = {
        produto: produtoSelecionado,
        quantidade: quantidade
    };

    carrinhoCompras.push(itemCarrinho);
}

function finalizarCompra() {
    console.log("Compra Finalizada!");
    console.log(carrinhoCompras);
}
