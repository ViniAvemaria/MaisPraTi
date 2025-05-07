/* 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

const M = [];
const moddedM = [];

for (let i = 0; i < 12; i++) {
    const row = [];
    let highest = 0;

    for (let j = 0; j < 13; j++) {
        row.push(Math.floor(Math.random() * 41) - 20);
        if (Math.abs(row[j]) > highest) highest = Math.abs(row[j]);
    }
    M.push(row);

    moddedM.push(row.map((num) => (num / highest).toFixed(2)));
}

console.log("Matrix original\n" + M.map((row) => row.join(" ")).join("\n"));
console.log("\nMatrix modificada\n" + moddedM.map((row) => row.join(" ")).join("\n"));
