/* 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

const M = [];

for (let i = 0; i < 15; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
        row.push(Math.random() * 20);
    }
    M.push(row);
}

const totalSum = [];

for (let j = 0; j < M[0].length; j++) {
    let count = 0;
    for (let i = 0; i < M.length; i++) {
        count += Number(M[i][j]);
    }
    totalSum.push(count);
}

totalSum.forEach((sum, column) => {
    console.log(`Soma total da coluna ${column + 1}: ${sum.toFixed(2)}`);
});
