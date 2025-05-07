/* 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

const prompt = require("prompt-sync")();

const nums = [];

console.log("Digite 6 números");
for (let i = 0; i < 6; i++) {
    const num = Number(prompt(`Número ${i + 1}: `));
    nums.push(num);
}

console.log(
    "1- Soma dos elementos\n2- Produto dos elementos\n3- Média dos elementos\
    \n4- Ordene os elementos em ordem crescente\n5- Mostre o vetor\n0- Sair"
);

let running = true;
const numsSum = nums.reduce((acc, curr) => acc + curr, 0);

while (running) {
    const option = Number(prompt("Digite uma opção: "));

    switch (option) {
        case 1:
            console.log(`Soma: ${numsSum}\n`);
            break;

        case 2:
            console.log(`Produto: ${nums.reduce((acc, curr) => acc * curr, 1)}\n`);
            break;

        case 3:
            console.log(`Média: ${numsSum / nums.length}\n`);
            break;

        case 4:
            nums.sort((a, b) => a - b);
            console.log("A array foi ordenada\n");
            break;

        case 5:
            console.log(`Vetor: [${nums.join(", ")}]\n`);
            break;

        case 0:
            running = false;
            break;

        default:
            console.log("Opção não encontrada\n");
            break;
    }
}

console.log("Programa encerrado...");
