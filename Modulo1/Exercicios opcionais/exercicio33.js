/* 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

const prompt = require("prompt-sync")();

const M = [];
let totalDiagonal = 0;

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        const num = Number(prompt(`Linha ${i + 1} coluna ${j + 1}: `));
        row.push(num);
    }
    M.push(row);
    totalDiagonal += M[i][M[i].length - 1 - i];
}

const meanDiagonal = totalDiagonal / M.length;

for (let i = 0; i < M.length; i++) {
    M[i][i] *= meanDiagonal;
}

console.log(M.map((row) => row.join(" ")).join("\n"));
