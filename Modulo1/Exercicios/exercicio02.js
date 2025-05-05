/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require("prompt-sync")();

let age = Number(prompt("Digite a idade: "));

if (age < 13) {
    console.log("Criança");
} else if (age < 19) {
    console.log("Adolescente");
} else if (age < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
