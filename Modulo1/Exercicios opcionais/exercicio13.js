/* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

const prompt = require("prompt-sync")();

const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

const sequence = [];

for (let i = 0; i < 15; i++) {
    sequence.push(fib(i));
}

console.log(sequence.join(", "));
