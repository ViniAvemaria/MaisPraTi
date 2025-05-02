/* 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require("prompt-sync")();

console.log("Adivinhe o número que estou pensando...");

let user_input,
    rand_num = Math.floor(Math.random() * 5) + 1;

while (user_input != rand_num) {
    user_input = Number(prompt("Digite um número entre 1 e 5: "));

    if (user_input != rand_num) console.log("Errrrrou! Tente de novo.");
}

console.log("Acertô Mizeravi");
