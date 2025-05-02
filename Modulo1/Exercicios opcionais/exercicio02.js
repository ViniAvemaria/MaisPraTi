/* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require("prompt-sync")();

let speed = Number(prompt("Qual a velocidade do carro? "));

if (speed > 80) {
    console.log(`Você foi multado R$${(speed - 80) * 5}`);
} else {
    console.log("Você está dirigindo dentro da velocidade permitida");
}
