/* 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

const matrix = [];

for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
        if (i == j) row.push(1);
        else row.push(0);
    }
    matrix.push(row);
}

matrix.forEach((row) => {
    console.log(row.join(" "));
});
