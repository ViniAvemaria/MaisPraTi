/* 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

const M = [];

for (let i = 0; i < 50; i++) {
    const row = [];
    for (let j = 0; j < 50; j++) {
        row.push(Math.random() * 20);
    }

    for (let k = 0; k < row.length; k++) {
        row[k] *= row[i];
    }

    M.push(row);
}

console.log(M.map((row) => row.map((n) => n.toFixed(2)).join(" ")).join("\n"));
