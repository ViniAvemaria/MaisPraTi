/* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require("prompt-sync")();

let firstNum = Number(prompt("Qual o primeiro termo da PA? ")),
    difference = Number(prompt("Qual a razão da PA? ")),
    total = 0,
    num;

for (let i = 0; i < 10; i++) {
    num = firstNum + i * difference;
    console.log(num);
    total += num;
}

console.log(`\nSoma total de todos o valores da sequência: ${total}`);
