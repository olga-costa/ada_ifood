// ~~~~ TESTE 1 ~~~~

function calcularSomas(arr) {
    arr.sort((a, b) => a - b);

    const somaMinima = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);

    const somaMaxima = arr.slice(1).reduce((acc, num) => acc + num, 0);

    return [somaMinima, somaMaxima];
}

const valores = [];
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    valores.push(numero);
}

console.log(`Valores inseridos: [${valores.join(', ')}]`);

const resultados = calcularSomas(valores);
console.log(`A soma mínima é: ${valores[0]} + ${valores[1]} + ${valores[2]} + ${valores[3]} = ${resultados[0]}`);
console.log(`A soma máxima é: ${valores[1]} + ${valores[2]} + ${valores[3]} + ${valores[4]} = ${resultados[1]}`);



// ~~~~ TESTE 2 ~~~~

function desenharEscada(tamanho) {
    let escada = '';

    for (let i = 0; i < tamanho; i++) {
        const degrau = '*'.repeat(i + 1);
        escada += degrau + '\n';
    }

    console.log(escada);
}

const alturaEscada = parseInt(prompt("Digite a altura da escada:"));

if (alturaEscada >= 1) {
    desenharEscada(alturaEscada);
} else {
    console.log("Por favor, insira uma altura válida (maior ou igual a 1).");
}