/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número inteiro: "));

while (!Number.isInteger(num)) {
    num = Number(prompt("Este número não é inteiro, tente novamente: "));
}

for (let i = 0; i < 10; i++) {
    console.log(num);
}
