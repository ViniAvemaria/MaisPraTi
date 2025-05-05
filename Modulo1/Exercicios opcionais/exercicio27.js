/* 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

const prompt = require("prompt-sync")();

const M = [];
const V = [];

for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 6; j++) {
        const num = Number(prompt(`Linha ${i + 1} coluna ${j + 1}: `));
        row.push(num);
    }
    M.push(row);
}

const A = Number(prompt("Digite um valor para ser multiplicado pela matrix: "));

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
        V.push(M[i][j] * A);
    }
}

console.log(V.join(", "));
