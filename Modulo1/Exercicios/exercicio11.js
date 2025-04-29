/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require("prompt-sync")();

let num;
let total = 0;

for (let i = 0; i < 5; i++) {
    num = Number(prompt("Digite um número: "));
    total += num;
}

console.log(`\nSoma total dos números: ${total}`);
