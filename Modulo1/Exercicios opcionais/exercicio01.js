/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require("prompt-sync")();

let cig = Number(prompt("Quantos cigarros fumados por dia? "));
let years = Number(prompt("Fumante a quantos anos? "));
let totalCigs = years * 365 * cig;

console.log(`Número de dias perdidos: ${Math.ceil((totalCigs * 10) / 60 / 24)}`);
