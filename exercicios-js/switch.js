// ~~~~ DESAFIO 7 ~~~~

let numero = prompt("Digite um número:");

switch (numero % 2) {
    case 0:
        console.log("O número é par");
        break;
    case 1:
        console.log("O número é ímpar");
        break;
    default:
        console.log("Por favor, digite um número válido.");
}



// ~~~~ DESAFIO 8 ~~~~

let letra = prompt("Digite uma letra:");

letra = letra.toLowerCase();

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}



// ~~~~ DESAFIO 9 ~~~~

let mes = prompt("Digite o nome de um mês:");

mes = mes.toLowerCase();

let estacao;

switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        estacao = "Inverno";
        break;
    case 'março':
    case 'abril':
    case 'maio':
        estacao = "Primavera";
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        estacao = "Verão";
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        estacao = "Outono";
        break;
    default:
        estacao = "Mês inválido";
}

console.log(`A estação do ano para ${mes} é ${estacao}.`);