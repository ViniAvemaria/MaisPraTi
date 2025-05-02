/* 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require("prompt-sync")();

const jokenpo = ["PEDRA", "PAPEL", "TESOURA"];
let user_input, rand_index, repeat;

while (true) {
    user_input = prompt("Digite PEDRA|PAPEL|TESOURA: ").toUpperCase();
    rand_index = Math.floor(Math.random() * jokenpo.length);
    pc_input = jokenpo[rand_index];

    console.log(`\nUsuário- ${user_input} X ${pc_input} -PC\n`);

    if (
        (user_input == "PEDRA" && pc_input == "TESOURA") ||
        (user_input == "PAPEL" && pc_input == "PEDRA") ||
        (user_input == "TESOURA" && pc_input == "PAPEL")
    ) {
        console.log("Usuário ganhou!");
    } else if (user_input == pc_input) {
        console.log("Empate!");
    } else {
        console.log("PC ganhou!");
    }

    repeat = prompt("Jogar novamente (S/N): ").toUpperCase();
    console.log();
    if (repeat != "S") break;
}
