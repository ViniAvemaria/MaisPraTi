/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require("prompt-sync")();

const totalEven = () => {
    let even = 0;
    numbers.forEach((n) => {
        if (n % 2 == 0) even += 1;
    });
    return even;
};

const numbers = [];
let num, repeat, sum;

do {
    num = Number(prompt("Digite um número: "));
    numbers.push(num);

    repeat = prompt("Gostaria de continuar (S/N): ").toUpperCase();
} while (repeat == "S");

sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(`\nSoma total dos números: ${sum}\
    \nMenor valor digitado: ${Math.min(...numbers)}\
    \nMédia de todos os números: ${(sum / numbers.length).toFixed(2)}\
    \nTotal de números pares: ${totalEven()}`);
