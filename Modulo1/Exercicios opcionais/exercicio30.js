/* 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */

const prompt = require("prompt-sync")();

function rowSum(M) {
    const total = [];
    for (let i = 0; i < M.length; i++) {
        let row = 0;
        for (let j = 0; j < M[0].length; j++) {
            row += M[i][j];
        }
        total.push(row);
    }
    return total;
}

function columnSum(M) {
    const total = [];
    for (let j = 0; j < M[0].length; j++) {
        let column = 0;
        for (let i = 0; i < M.length; i++) {
            column += M[i][j];
        }
        total.push(column);
    }
    return total;
}

const M = [];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        const num = Number(prompt(`Linha ${i + 1} coluna ${j + 1}: `));
        row.push(num);
    }
    M.push(row);
}

const SL = rowSum(M);
const SC = columnSum(M);

console.log(M.map((row) => row.join(" ")).join("\n"));
console.log(`\nVetor com a somas das linhas: ${SL.join(", ")}
Vetor com a somas das colunas: ${SC.join(", ")}`);
