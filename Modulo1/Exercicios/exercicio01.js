/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para verificar se é par ou ímpar: "));

if (num % 2 == 0) console.log("Par");
else console.log("Ímpar");
