/* 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

const prompt = require("prompt-sync")();

let even = [];
let odd = [];

for (let i = 0; i < 30; i++) {
    let num = Number(prompt("Digite um número: "));
    if (num % 2 == 0) {
        even.push(num);
        if (even.length == 5) {
            console.log(`Números pares: ${even}`);
            even = [];
        }
    } else {
        odd.push(num);
        if (odd.length == 5) {
            console.log(`Números ímpares: ${odd}`);
            odd = [];
        }
    }
}

console.log(`\nNúmeros pares: ${even}`);
console.log(`Números ímpares: ${odd}`);
