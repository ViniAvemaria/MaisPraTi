/* 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require("prompt-sync")();

let total,
    car = prompt("Qual o tipo de carro? "),
    days = Number(prompt("Quantos dias alugados? ")),
    km = Number(prompt("Quantos KMs percorridos? "));

switch (car) {
    case "popular":
        total = 90 * days;

        total += km > 100 ? 100 * 0.2 + (km - 100) * 0.1 : km * 0.2;

        console.log(`Valor total pela versão popular: R$${total.toFixed(2)}`);
        break;

    case "luxo":
        total = 150 * days;

        total += km > 200 ? 200 * 0.3 + (km - 200) * 0.25 : km * 0.3;

        console.log(`Valor total pela versão de luxo: R$${total.toFixed(2)}`);
        break;

    default:
        console.log("Opção de carro não encontrada");
        break;
}
