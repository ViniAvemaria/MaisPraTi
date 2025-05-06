/* 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function diagonalSum(matrix) {
    let topTotal = 0,
        bottomTotal = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i < j) topTotal += matrix[i][j];
            if (i > j) bottomTotal += matrix[i][j];
        }
    }

    return { topTotal, bottomTotal };
}

const M = [];

for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
        row.push(Math.ceil(Math.random() * 20));
    }
    M.push(row);
}

const { topTotal, bottomTotal } = diagonalSum(M);

console.log(M.map((row) => row.join(" ")).join("\n"));
console.log(`Soma dos elementos acima da diagonal principal: ${topTotal}
soma dos elementos abaixo da diagonal principal: ${bottomTotal}`);
