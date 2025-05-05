/* 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require("prompt-sync")();

function idealWeight(height, sex) {
    return sex == "homem" ? (72.7 * height - 58).toFixed(1) : (62.1 * height - 44.7).toFixed(1);
}

let sex = prompt("Você é homem ou mulher? ").toLowerCase();

while (sex != "homem" && sex != "mulher") {
    sex = prompt("Digite homem ou mulher: ").toLowerCase();
}

let height = Number(prompt("Qual sua altura em metros? "));

console.log(`Seu peso ideal é: ${idealWeight(height, sex)} quilos`);
