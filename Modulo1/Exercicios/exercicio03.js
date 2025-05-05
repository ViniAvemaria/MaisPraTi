/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require("prompt-sync")();

let grade = Number(prompt("Digite a nota: "));

if (grade >= 70) {
    console.log("Aprovado");
} else if (grade >= 60) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
