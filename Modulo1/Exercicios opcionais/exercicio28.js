/* 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

const math = require("mathjs");

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

const M = math.randomInt([10, 10], 1, 10);
const { topTotal, bottomTotal } = diagonalSum(M);

console.log(M.map((row) => row.join(" ")).join("\n"));
console.log(`Soma dos elementos acima da diagonal principal: ${topTotal}
soma dos elementos abaixo da diagonal principal: ${bottomTotal}`);
