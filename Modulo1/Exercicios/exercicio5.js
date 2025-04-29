/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require("prompt-sync")();

let weight = Number(prompt("Digite o peso em kg: "));
let height = Number(prompt("Digite a altura em metros: "));
let bmi = weight / height ** 2;

console.log(`\nIMC: ${bmi.toFixed(1)}\n`);

if (bmi < 18.5) {
    console.log("Baixo peso");
} else if (bmi < 25) {
    console.log("Peso normal");
} else if (bmi < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
