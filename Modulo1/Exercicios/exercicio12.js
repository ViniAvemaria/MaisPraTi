/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para criar a tabuada: "));

while (num < 1 || num > 10) {
    num = Number(prompt("Apenas números entre 1 e 10, tente novamente: "));
}

for (let i = 1; i < 11; i++) {
    console.log(`${i} x ${num} = ${num * i}`);
}
