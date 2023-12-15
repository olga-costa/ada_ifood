// catalogo.js

// Função para obter o catálogo armazenado no localStorage
function obterCatalogoArmazenado() {
    const catalogoArmazenado = localStorage.getItem("catalogo");
    return catalogoArmazenado ? JSON.parse(catalogoArmazenado) : [];
}

// Função para salvar o catálogo no localStorage
function salvarCatalogoNoLocalStorage() {
    localStorage.setItem("catalogo", JSON.stringify(catalogo));
}

function Produto(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}

// Inicializa o catálogo com os dados armazenados no localStorage
const catalogo = obterCatalogoArmazenado();
let edicaoEmAndamento = false;

function adicionarProduto() {
    const nomeProduto = document.getElementById("nomeProduto").value;
    const tipoProduto = document.getElementById("tipoProduto").value;

    // Verifica se o nome ou o tipo do produto estão vazios
    if (!nomeProduto.trim() || !tipoProduto.trim()) {
        alert("Por favor, preencha todos os campos do produto.");
        return;
    }

    // Verifica se já existe um produto com o mesmo nome E mesmo tipo no catálogo
    if (catalogo.some(produto => produto.nome === nomeProduto && produto.tipo === tipoProduto)) {
        alert("Este produto já existe no catálogo. Por favor, escolha um nome ou tipo diferente.");
        return;
    }

    const produto = new Produto(nomeProduto, tipoProduto);
    catalogo.push(produto);

    atualizarCatalogo();
    limparFormulario();
    salvarCatalogoNoLocalStorage(); // Salva o catálogo no localStorage
}

function removerProduto(nomeProduto) {
    const indice = catalogo.findIndex(produto => produto.nome === nomeProduto);
    if (indice !== -1) {
        catalogo.splice(indice, 1);
        atualizarCatalogo();
        atualizarDropdownProduto();
        salvarCatalogoNoLocalStorage(); // Salva o catálogo no localStorage
    }
}

function editarProduto(nomeProduto) {
    const produtoDiv = document.querySelector(`[data-nome="${nomeProduto}"]`);
    if (produtoDiv) {
        const produtoTexto = produtoDiv.querySelector(".produto");

        const inputNome = document.createElement("input");
        inputNome.type = "text";
        inputNome.value = nomeProduto;
        inputNome.placeholder = "Novo Nome";
        inputNome.classList.add("nome-editar");

        const inputTipo = document.createElement("input");
        inputTipo.type = "text";
        inputTipo.value = catalogo.find(produto => produto.nome === nomeProduto).tipo;
        inputTipo.placeholder = "Novo Tipo";
        inputTipo.classList.add("tipo-editar");

        produtoTexto.innerHTML = "";
        produtoTexto.appendChild(inputNome);
        produtoTexto.appendChild(inputTipo);
        inputNome.focus();

        const botaoSalvar = document.createElement("button");
        botaoSalvar.classList.add("botao-salvar");
        botaoSalvar.textContent = "Salvar";
        botaoSalvar.addEventListener("click", function (e) {
            e.stopPropagation(); // Impede a propagação do evento para evitar fechar a edição
            salvarEdicao(nomeProduto, inputNome.value, inputTipo.value, produtoDiv);
        });

        const botaoFechar = document.createElement("button");
        botaoFechar.classList.add("botao-fechar");
        botaoFechar.textContent = "Fechar";
        botaoFechar.addEventListener("click", function (e) {
            e.stopPropagation(); // Impede a propagação do evento para evitar fechar a edição
            fecharEdicao(produtoDiv);
        });

        produtoTexto.appendChild(botaoSalvar);
        produtoTexto.appendChild(botaoFechar);

        // Adiciona um listener para fechar a edição ao clicar fora da div
        document.addEventListener("click", function fecharEdicaoAoClicarFora(e) {
            if (!produtoDiv.contains(e.target)) {
                fecharEdicao(produtoDiv);
                document.removeEventListener("click", fecharEdicaoAoClicarFora); // Remove o listener após fechar a edição
            }
        });
    }
}

function fecharEdicao(produtoDiv) {
    edicaoEmAndamento = false;
    // Restaura o conteúdo original da div do produto
    const produto = catalogo.find(produto => produto.nome === produtoDiv.dataset.nome);
    if (produto) {
        const produtoTexto = produtoDiv.querySelector(".produto");
        produtoTexto.innerHTML = `${produto.nome} - ${produto.tipo}`;
    }
}

function salvarEdicao(nomeProduto, novoNome, novoTipo, produtoDiv) {
    const produto = catalogo.find(produto => produto.nome === nomeProduto);
    if (produto) {
        produto.nome = novoNome;
        produto.tipo = novoTipo;
        edicaoEmAndamento = false;

        // Restaura o conteúdo original da div do produto
        const produtoTexto = produtoDiv.querySelector(".produto");
        produtoTexto.innerHTML = `${produto.nome} - ${produto.tipo}`;

        salvarCatalogoNoLocalStorage(); // Salva o catálogo no localStorage
    }
}

function atualizarCatalogo() {
    const containerCatalogo = document.getElementById("container-catalogo");
    containerCatalogo.innerHTML = "";

    catalogo.forEach(produto => {
        const produtoContainer = document.createElement("div");
        produtoContainer.classList.add("produto-container");
        produtoContainer.dataset.nome = produto.nome;

        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.textContent = `${produto.nome} - ${produto.tipo}`;

        const botoesContainer = document.createElement("div");
        botoesContainer.classList.add("botoes-container");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.textContent = "Editar";
        botaoEditar.addEventListener("click", () => editarProduto(produto.nome));

        const botaoRemover = document.createElement("button");
        botaoRemover.classList.add("botao-remover");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => removerProduto(produto.nome));

        botoesContainer.appendChild(botaoEditar);
        botoesContainer.appendChild(botaoRemover);

        produtoContainer.appendChild(produtoDiv);
        produtoContainer.appendChild(botoesContainer);

        containerCatalogo.appendChild(produtoContainer);
    });

    atualizarDropdownProduto();
}

function atualizarDropdownProduto() {
    const dropdownProduto = document.getElementById("produtoSelecionado");
    dropdownProduto.innerHTML = "";

    catalogo.forEach(produto => {
        const opcao = document.createElement("option");
        opcao.value = produto.nome;
        opcao.textContent = produto.nome;
        dropdownProduto.appendChild(opcao);
    });
}

function limparFormulario() {
    document.getElementById("nomeProduto").value = "";
    document.getElementById("tipoProduto").value = "";
}

// Limpa o localStorage e salva o catálogo antes de fechar a página
window.addEventListener("beforeunload", function () {
    localStorage.clear();
    salvarCatalogoNoLocalStorage();
});

// Chama a função para atualizar o catálogo ao carregar a página
window.addEventListener("load", function () {
    atualizarCatalogo();
});

// Adiciona um listener para fechar a edição ao clicar fora da div
document.addEventListener("click", function fecharEdicaoAoClicarFora(e) {
    const produtoDiv = document.querySelector(".produto-container .produto");
    if (produtoDiv && !produtoDiv.contains(e.target)) {
        fecharEdicao(produtoDiv.parentElement);
        document.removeEventListener("click", fecharEdicaoAoClicarFora); // Remove o listener após fechar a edição
    }
});