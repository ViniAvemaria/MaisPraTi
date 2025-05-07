/* 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

const prompt = require("prompt-sync")();

function countHits(answers, player) {
    const playerSet = new Set(player);
    let count = 0;
    answers.forEach((e) => {
        if (playerSet.has(e)) count++;
    });
    return count;
}

function validateInput(index) {
    let num = Number(prompt(`Número ${index + 1}: `));
    while (!Number.isInteger(num) || num < 1) {
        console.log("Permitido apenas números inteiros e maiores que zero");
        num = Number(prompt(`Número ${index + 1}: `));
    }
    return num;
}

const winnerNums = [];
const players = [];

console.log("Digite os números do gabarito");
for (let i = 0; i < 13; i++) {
    const num = validateInput(i);
    winnerNums.push(num);
}

for (let i = 0; i < 100; i++) {
    const card = Number(prompt("Digite os números do cartão: "));
    const playerNums = [];
    console.log("Digite os números da sua aposta");
    for (let j = 0; j < 13; j++) {
        const num = validateInput(j);
        playerNums.push(num);
    }
    players.push({ card, playerNums });
}

console.log("Lista de jogadores\n");
players.forEach((player) => {
    const hits = countHits(winnerNums, player.playerNums);
    if (hits == winnerNums.length) console.log(`${player.card}, Parabéns, tu foi o GANHADOR`);
    else console.log(`${player.card} acertou ${hits} números`);
});
