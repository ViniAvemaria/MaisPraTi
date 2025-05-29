/* 2. Jogo de Adivinhação 
Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

const prompt = require("prompt-sync")();

const random = Math.floor(Math.random() * 100) + 1;
let count = 0;

while (true) {
    count++;
    const userInput = Number(prompt("Digite um número entre 1 e 100: "));

    if (userInput === random) break;

    if (userInput > random) console.log("Mais baixo...");
    else console.log("Mais alto...");
}

console.log(`Você acertou em ${count} tentativas!`);
