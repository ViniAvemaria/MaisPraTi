/* 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

const prompt = require("prompt-sync")();

const M = [];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        const num = Number(prompt(`Linha ${i + 1} coluna ${j + 1}: `));
        row.push(num);
    }
    M.push(row);
}

let totalRow = 0,
    totalColumn = 0,
    totalDiagonal = 0,
    totalElements = 0;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
        totalElements += M[i][j];
        if (i == 3) totalRow += M[i][j];
        if (j == 1) totalColumn += M[i][j];
        if (i == j) totalDiagonal += M[i][j];
    }
}

console.log(M.map((row) => row.join(" ")).join("\n"));
console.log(`\nSoma da linha 4: ${totalRow}
Soma da coluna 2: ${totalColumn}
Soma da diagonal principal: ${totalDiagonal}
Soma de todos os elementos: ${totalElements}`);
