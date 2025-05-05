/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require("prompt-sync")();

console.log("Conversor de moedas da tristeza");
let value = Number(prompt("Digite um valor em reais: "));

console.log("\n1)Euros\n2)Dólares\n3)Libras\n");
let option = Number(prompt("Digite o número da opção desejada: "));

switch (option) {
    case 1:
        console.log(`${value} reais = ${(value / 6.41).toFixed(2)} euros`);
        break;
    case 2:
        console.log(`${value} reais = ${(value / 5.63).toFixed(2)} dólares`);
        break;
    case 3:
        console.log(`${value} reais = ${(value / 7.55).toFixed(2)} libras`);
        break;
    default:
        console.log("Opção não encontrada");
        break;
}
