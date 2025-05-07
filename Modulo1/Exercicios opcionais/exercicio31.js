/* 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

const prompt = require("prompt-sync")();

function diffValues(M, target) {
    const values = [];
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] !== target) values.push(M[i][j]);
        }
    }
    return values;
}

const V = [];

for (let i = 0; i < 30; i++) {
    const row = [];
    for (let j = 0; j < 30; j++) {
        row.push(Math.floor(Math.random() * 41) - 20);
    }
    V.push(row);
}

const A = Number(prompt("Digite um número entre -20 e 20: "));
const values = diffValues(V, A);
const newMatrixSize = Math.ceil(Math.sqrt(values.length));

const X = [];
let index = 0;

for (let i = 0; i < newMatrixSize; i++) {
    X.push([]);
    for (let j = 0; j < newMatrixSize; j++) {
        X[i].push(values[index]);
        index++;
    }
}

console.log(
    `Total de números iguais a '${A}' que estão presentes na matrix: ${V.length * V[0].length - values.length}\n`
);
console.log(X.map((row) => row.join(" ")).join("\n"));
