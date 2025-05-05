/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require("prompt-sync")();

let apples = Number(prompt("Digite o número de maças compradas: "));

if (apples < 12) console.log(`Total: R$${(apples * 0.3).toFixed(2)}`);
else console.log(`Total: R$${(apples * 0.25).toFixed(2)}`);
