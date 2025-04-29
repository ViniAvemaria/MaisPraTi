/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require("prompt-sync")();

let factorial = Number(prompt("Digite um número para calcular o fatorial: "));
let result = 1;

for (let i = 1; i <= factorial; i++) {
    result *= i;
}

console.log(`${factorial}! = ${result}`);
