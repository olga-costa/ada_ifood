// ~~~~ DESAFIO 1 ~~~~

function obterNumeroValido(mensagem) {
    let numero;
    do {
        numero = Number(prompt(mensagem));
        if (isNaN(numero) || numero <= 0) {
            console.log("Por favor, insira um número válido maior que zero.");
        }
    } while (isNaN(numero) || numero <= 0);

    return numero;
}

function rolarDado(quantidadeLados) {
    return Math.floor(Math.random() * quantidadeLados) + 1;
}

function realizarTentativa(quantidadeDados, quantidadeLados) {
    let soma = 0;
    let rolagens = [];

    for (let j = 0; j < quantidadeDados; j++) {
        const resultadoDado = rolarDado(quantidadeLados);
        rolagens.push(resultadoDado);
        soma += resultadoDado;
    }

    return { rolagens, soma };
}

function executarJogo() {
    const quantidadeDados = obterNumeroValido("Quantidade de dados: ");
    const quantidadeLados = obterNumeroValido("Quantidade de lados por dado: ");
    const quantidadeTentativas = obterNumeroValido("Quantidade de tentativas: ");

    for (let i = 0; i < quantidadeTentativas; i++) {
        const { rolagens, soma } = realizarTentativa(quantidadeDados, quantidadeLados);

        console.log(`Tentativa ${i + 1}: Rolagens individuais: ${rolagens.join(', ')}`);
        console.log(`Soma total: ${soma}`);
    }
}

executarJogo();




// ~~~~ DESAFIO 2 ~~~~

function realizarCalculo() {
    const operadoresValidos = ['+', '-', '*', '/'];

    let operador;
    do {
        operador = prompt(
            "Digite o operador:\n" +
            "Adição (+)\n" +
            "Subtração (-)\n" +
            "Multiplicação (*)\n" +
            "Divisão (/)"
        );
    } while (!operadoresValidos.includes(operador));

    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        return "Erro: Números inválidos";
    }

    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
            break;
        default:
            return "Operador inválido";
    }

    return `${num1} ${operador} ${num2} = ${resultado}`;
}

let resultadoCalculo = realizarCalculo();
console.log(resultadoCalculo);



// ~~~~ DESAFIO 3 ~~~~

let saldo = 0;

function efetuarTransacao(tipo, valor) {
    if (tipo === 'dep') {
        saldo += valor;
        alert(`Depósito de ${valor} realizado. Novo saldo: ${saldo}`);
    } else if (tipo === 'saq') {
        if (valor <= saldo) {
            saldo -= valor;
            alert(`Saque de ${valor} realizado. Novo saldo: ${saldo}`);
        } else {
            alert("Saldo insuficiente");
        }
    } else if (tipo === 'con') {
        alert(`Saldo atual: ${saldo}`);
    }
}

function exibirOpcoes() {
    alert(
        "Escolha a operação:\n" +
        "1 - Depósito\n" +
        "2 - Saque\n" +
        "3 - Consultar Saldo"
    );
}

exibirOpcoes();

while (true) {
    let opcao = prompt("Digite o número da operação desejada (ou clique em Cancelar para sair):");

    if (opcao === null) {
        efetuarTransacao('con');
        break;
    } else if (opcao === '1') {
        let valorDeposito = parseFloat(prompt("Digite o valor a ser depositado: "));
        efetuarTransacao('dep', valorDeposito);
        exibirOpcoes();
    } else if (opcao === '2') {
        let valorSaque = parseFloat(prompt("Digite o valor a ser sacado: "));
        efetuarTransacao('saq', valorSaque);
        exibirOpcoes();
    } else if (opcao === '3') {
        efetuarTransacao('con');
        exibirOpcoes();
    } else {
        alert("Opção inválida. Tente novamente.");
        exibirOpcoes();
    }
}

// ~~~~ DESAFIO 4 ~~~~

const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function entradaJogador(vez) {
    try {
        const vezValida = typeof vez === 'number' && (vez === 0 || vez === 1);

        if (!vezValida) {
            throw new Error("Erro interno. O parâmetro deve ser numérico.");
        }

        const mensagemVez = "Sua vez, Jogador 1: ";
        const instrucao = vez === 0
            ? "Escolha uma casa para jogar (de 1 a 9)."
            : "O Computador está pensando...";

        const escolha = vez === 0 ? prompt(`${instrucao}\n${mensagemVez}`) : Math.floor(Math.random() * 9) + 1;

        return escolha;
    } catch (error) {
        alert(`Erro: ${error.message}`);
        return null;
    }
}

const posicoesTabuleiro = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
};

function fazerJogada(jogador, escolha) {
    try {
        escolha = Number(escolha);

        if (isNaN(escolha) || escolha < 1 || escolha > 9) {
            throw new Error("Escolha inválida. Escolha um número de 1 a 9.");
        }

        const [linha, coluna] = posicoesTabuleiro[escolha];

        if (tabuleiro[linha][coluna] !== null) {
            if (jogador === 0) {
                throw new Error("Essa casa já foi escolhida");
            }
            return null;
        }

        tabuleiro[linha][coluna] = jogador === 0 ? 'X' : 'O';

        const jogadorAtual = jogador === 0 ? "Jogador 1" : "Computador";

        const mensagem = `${jogadorAtual} escolheu a casa ${escolha}\n\n${exibirTabuleiro()}`;

        alert(mensagem);

        return mensagem;
    } catch (error) {
        alert(`Erro: ${error.message}`);
        return null;
    }
}

function exibirTabuleiro() {
    let tabuleiroStr = '';
    for (let i = 0; i < 3; i++) {
        tabuleiroStr += tabuleiro[i].join(' | ');
        if (i < 2) {
            tabuleiroStr += '\n---------\n';
        }
    }
    return tabuleiroStr;
}

function verificarVencedor() {
    const linhas = [
        [tabuleiro[0][0], tabuleiro[0][1], tabuleiro[0][2]],
        [tabuleiro[1][0], tabuleiro[1][1], tabuleiro[1][2]],
        [tabuleiro[2][0], tabuleiro[2][1], tabuleiro[2][2]],
        [tabuleiro[0][0], tabuleiro[1][0], tabuleiro[2][0]],
        [tabuleiro[0][1], tabuleiro[1][1], tabuleiro[2][1]],
        [tabuleiro[0][2], tabuleiro[1][2], tabuleiro[2][2]],
        [tabuleiro[0][0], tabuleiro[1][1], tabuleiro[2][2]],
        [tabuleiro[0][2], tabuleiro[1][1], tabuleiro[2][0]],
    ];

    for (const linha of linhas) {
        if (linha.every((elem) => elem === 'X')) {
            return 'Jogador 1 venceu!';
        } else if (linha.every((elem) => elem === 'O')) {
            return 'Computador venceu!';
        }
    }

    return null;
}

function instrucoesJogo() {
    alert("Bem-vindo ao Jogo da Velha!\n\nPara fazer sua jogada, escolha uma casa de 1 a 9.");
}

function jogoDaVelha() {
    instrucoesJogo();
    let vez = 0;

    while (vez < 9) {
        const vezDoJogador = entradaJogador(vez % 2);

        if (vezDoJogador === null) {
            continue; // Ignora entrada inválida
        }

        const jogadaAtual = fazerJogada(vez % 2, vezDoJogador);

        if (jogadaAtual === null) {
            continue; // Ignora jogada inválida do computador
        }

        const vencedor = verificarVencedor();
        if (vencedor) {
            alert(vencedor);
            break;
        }

        vez++;
    }

    if (vez === 9) {
        alert("Empate!");
    }
}

jogoDaVelha();