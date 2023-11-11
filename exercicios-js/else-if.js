// ~~~~ DESAFIO 1 ~~~~

let numero = prompt("Digite um número:");

if (numero % 2 === 0) {
    console.log("É par");
} else {
    console.log("É ímpar");
}



// ~~~~ DESAFIO 2 ~~~~

let nota = prompt("Digite a nota:");

nota = Number(nota);

if (nota >= 90) {
    console.log("Aprovado com mérito!");
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado.");
}




// ~~~~ DESAFIO 3 ~~~~

let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");
let numero3 = prompt("Digite o terceiro número:");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

let maiorNumero;

if (numero1 >= numero2 && numero1 >= numero3) {
    maiorNumero = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maiorNumero = numero2;
} else {
    maiorNumero = numero3;
}

console.log("O maior número é: " + maiorNumero);




// ~~~~ DESAFIO 4 ~~~~

let lado1 = prompt("Digite o comprimento do primeiro lado:");
let lado2 = prompt("Digite o comprimento do segundo lado:");
let lado3 = prompt("Digite o comprimento do terceiro lado:");

lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

if (lado1 === lado2 && lado2 === lado3) {
    console.log("É um triângulo equilátero. Todos os lados são iguais.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("É um triângulo isósceles. Dois lados são iguais.");
} else {
    console.log("É um triângulo escaleno. Nenhum lado é igual.");
}




// ~~~~ DESAFIO 5 ~~~~

let ano = prompt("Digite um ano:");

ano = Number(ano);

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("Ano bissexto");
} else {
    console.log("Não é um ano bissexto");
}




// ~~~~ DESAFIO 6 ~~~~

let idade = prompt("Digite sua idade:");

idade = Number(idade);

let mensagem = (idade >= 18) ? "Pode comprar bebidas alcoólicas." : "Não pode comprar bebidas alcoólicas.";

console.log(mensagem);