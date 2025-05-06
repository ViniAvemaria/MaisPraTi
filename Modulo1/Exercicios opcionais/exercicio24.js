/* 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */

const M = [];

for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
        row.push(Math.floor(Math.random() * 41) - 20);
    }
    M.push(row);
}

const C = M.map((row) => row.filter((n) => n < 0).length);

console.log(M.map((row) => row.join(" ")).join("\n"));

console.log(C);
