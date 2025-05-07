/* 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

const prompt = require("prompt-sync")();

function takeFiveNumbers() {
    const nums = [];
    for (let i = 0; i < 5; i++) {
        let num = Number(prompt(`Número ${i + 1}: `));
        while (!Number.isInteger(num) || num < 1 || num > 60 || nums.includes(num)) {
            console.log("Apenas números entre 1 e 60 sem repetir");
            num = Number(prompt(`Número ${i + 1}: `));
        }
        nums.push(num);
    }
    return nums;
}

function countResults(answers, player) {
    const playerSet = new Set(player);
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
        if (playerSet.has(answers[i])) count++;
    }
    return count;
}

console.log("\nDigite os números sorteados");
const answers = takeFiveNumbers();

const players = [];

console.log("\nApostas");
for (let i = 0; i < 50; i++) {
    console.log(`Digite os números do jogador ${i + 1}`);
    players.push(takeFiveNumbers());
}

console.log("\nResultados");
for (let i = 0; i < players.length; i++) {
    const result = countResults(answers, players[i]);
    if (result === 5) {
        console.log(`Jogador ${i + 1} é GANHADOR!`);
    } else {
        console.log(`Jogador ${i + 1} acertou ${result} números`);
    }
}
