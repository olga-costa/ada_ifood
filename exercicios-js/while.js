// ~~~~ DESAFIO 1 ~~~~

let contador = 10;

while (contador >= 1) {
    console.log(contador);
    contador--;
}



// ~~~~ DESAFIO 2 ~~~~

const numeroUsuario = Number(prompt("Digite um número:"));
let divisor = 2;
let ehPrimo = true;

while (divisor < numeroUsuario) {
    if (numeroUsuario % divisor === 0) {
        ehPrimo = false;
        break;
    }
    divisor++;
}

if (ehPrimo && numeroUsuario > 1) {
    console.log(`${numeroUsuario} é um número primo.`);
} else {
    console.log(`${numeroUsuario} não é um número primo.`);
}



// ~~~~ DESAFIO 3 ~~~~

let somaPares = 0;
let numeroInserido;

while (true) {
    numeroInserido = Number(prompt("Digite um número inteiro (ou 0 para encerrar):"));

    if (numeroInserido === 0) {
        break; 
    }

    if (numeroInserido % 2 === 0) {
        somaPares += numeroInserido;
    }
}

console.log(`A soma dos números pares inseridos é: ${somaPares}`);




// ~~~~ DESAFIO 4 ~~~~

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;

while (true) {
    tentativa = Number(prompt("Tente adivinhar o número (entre 1 e 100):"));
    tentativas++;

    if (tentativa === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
        break;
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente novamente. O número é maior.");
    } else {
        console.log("Tente novamente. O número é menor.");
    }
}




// ~~~~ DESAFIO 5 ~~~~

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;
const limiteTentativas = 5;

while (tentativas < limiteTentativas) {
    tentativa = Number(prompt(`Tentativa ${tentativas + 1} de ${limiteTentativas}. Tente adivinhar o número (entre 1 e 100):`));
    tentativas++;

    if (tentativa === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
        break;
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente novamente. O número é maior.");
    } else {
        console.log("Tente novamente. O número é menor.");
    }
}

if (tentativas === limiteTentativas) {
    console.log(`Você atingiu o limite de tentativas. O número correto era ${numeroAleatorio}.`);
}