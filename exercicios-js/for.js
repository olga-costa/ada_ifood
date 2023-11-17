// ~~~~ DESAFIO 1 ~~~~

let soma = 0;

for (let i = 1; i <= 10; i++) {
    soma += i;
}

console.log(`A soma dos números de 1 a 10 é: ${soma}`);



// ~~~~ DESAFIO 2 ~~~~

const pessoa = {
    nome: 'Olga',
    idade: 22,
    cidade: 'Salvador'
};

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}



// ~~~~ DESAFIO 3 ~~~~

const frutas = ['maçã', 'banana', 'morango', 'uva', 'abacaxi'];

for (let fruta of frutas) {
    console.log(fruta);
}




// ~~~~ DESAFIO 4 ~~~~

const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}




// ~~~~ DESAFIO 5 ~~~~

const valores = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40
};

let soma = 0;

for (let propriedade in valores) {
    soma += valores[propriedade];
}

console.log(`A soma dos valores é: ${soma}`);




// ~~~~ DESAFIO 6 ~~~~

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroBuscado = 7;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        console.log(`Achei o número ${numeroBuscado} na posição ${i}`);
        break;
    }
}




// ~~~~ DESAFIO 7 ~~~~

function fibonacci(n) {
    const sequencia = [1, 1];

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia.slice(0, n);
}

const resultado = fibonacci(6);
console.log(resultado);




// ~~~~ DESAFIO 8 ~~~~

const palavra = prompt("Digite uma palavra:");
let contadorVogais = 0;

for (let i = 0; i < palavra.length; i++) {
    const letra = palavra[i].toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVogais++;
    }
}

console.log(`A palavra ${palavra} contém ${contadorVogais} vogais.`);




// ~~~~ DESAFIO 9 ~~~~

function bubbleSort(arr) {
    let troca;
    do {
        troca = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                troca = true;
            }
        }
    } while (troca);

    return arr;
}

const arrayDesordenado = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const arrayOrdenado = bubbleSort(arrayDesordenado);
console.log(`Array Ordenado: ${arrayOrdenado}`);