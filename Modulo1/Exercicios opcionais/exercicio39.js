/* 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

const prompt = require("prompt-sync")();

const A = [];

for (let i = 0; i < 100; i++) {
    let num = Number(prompt(`Digite o ${i + 1} número: `));
    while (isNaN(num)) {
        console.log("Digite um número válido");
        num = Number(prompt(`Digite o ${i + 1} número: `));
    }
    A.push(num);
}

const B = A.filter((num) => num > 0);

console.log(A);
console.log(B);
