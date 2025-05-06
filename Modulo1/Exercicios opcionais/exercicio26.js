/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

function createMatrix() {
    const matrix = [];
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
            row.push(Math.ceil(Math.random() * 20));
        }
        matrix.push(row);
    }
    return matrix;
}

const A = createMatrix();
const B = createMatrix();
const C = [];

for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < A[0].length; j++) {
        row.push(A[i][j] * B[i][j]);
    }
    C.push(row);
}

console.log(C.map((row) => row.join(" ")).join("\n"));
