/* 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

const prompt = require("prompt-sync")();

const numbers = [];
let num;

for (let i = 0; i < 10; i++) {
    num = Number(prompt("Digite um número inteiro: "));
    numbers.push(num);
}

console.log("Números pares:\n");

numbers.forEach((n, i) => {
    if (n % 2 == 0) console.log(`${n} - posição: ${i}`);
});
