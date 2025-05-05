/* 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */

const math = require("mathjs");

const M = math.randomInt([6, 8], -10, 10);
const C = [];

console.log(M.map((row) => row.join(" ")).join("\n"));

for (let i = 0; i < M.length; i++) {
    let count = 0;
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) count++;
    }
    C.push(count);
}

console.log(C);
