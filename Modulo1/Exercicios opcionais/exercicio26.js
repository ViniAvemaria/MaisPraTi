/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

const math = require("mathjs");

const A = math.randomInt([3, 5], 1, 10);
const B = math.randomInt([3, 5], 1, 10);
const C = [];

for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < A[0].length; j++) {
        row.push(A[i][j] * B[i][j]);
    }
    C.push(row);
}

console.log(C.map((row) => row.join(" ")).join("\n"));
