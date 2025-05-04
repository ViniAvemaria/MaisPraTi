/* 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

const prompt = require("prompt-sync")();

const names = [];
const ages = [];

let name, age;

for (let i = 0; i < 9; i++) {
    name = prompt("Digite o nome: ");
    age = Number(prompt("Digite a idade: "));
    names.push(name);
    ages.push(age);
}

for (let i = 0; i < 9; i++) {
    if (ages[i] < 18) console.log(`Nome: ${names[i]}, Idade: ${ages[i]}`);
}
