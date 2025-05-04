/* 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

const prompt = require("prompt-sync")();

const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

for (let i = 0; i < 10; i++) {
    console.log(fib(i));
}
