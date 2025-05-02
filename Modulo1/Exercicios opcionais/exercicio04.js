/* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

const prompt = require("prompt-sync")();

let a = Number(prompt("Digite o valor da reta A: ")),
    b = Number(prompt("Digite o valor da reta B: ")),
    c = Number(prompt("Digite o valor da reta C: "));

if (a < b + c && b < a + c && c < a + b) console.log("É possível criar um triângulo");
else console.log("NÂO é possível criar um triângulo");
