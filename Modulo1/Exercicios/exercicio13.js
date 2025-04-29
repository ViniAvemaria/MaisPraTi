/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require("prompt-sync")();

let num,
    total = 0,
    count = 0;

while (true) {
    num = Number(prompt("Digite um número: "));
    if (num == 0) break;
    total += num;
    count += 1;
}

console.log(`Média dos ${count} números fornecidos: ${(total / count).toFixed(2)}`);
