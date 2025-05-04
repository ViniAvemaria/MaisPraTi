/* 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

const numbers = [];
let randNum;

for (let i = 0; i < 20; i++) {
    randNum = Math.floor(Math.random() * 100);
    numbers.push(randNum);
}

console.log(`Números gerados: ${numbers.join(", ")}`);

numbers.sort((a, b) => a - b);

console.log(`\nNúmeros ordenados: ${numbers.join(", ")}`);
