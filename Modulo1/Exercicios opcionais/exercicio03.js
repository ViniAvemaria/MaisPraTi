/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

const prompt = require("prompt-sync")();

let distance = Number(prompt("Qual a distância que desejas percorrer em Km? "));

if (distance > 200) {
    console.log(`Custo total da viagem: R$${(distance * 0.45).toFixed(2)}`);
} else {
    console.log(`Custo total da viagem: R$${(distance * 0.5).toFixed(2)}`);
}
