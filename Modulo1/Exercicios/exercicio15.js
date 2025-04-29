/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let fib = [0, 1];

for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

fib.forEach((e) => {
    console.log(e);
});
