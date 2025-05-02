/* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require("prompt-sync")();

const employee = {
    homem: 0,
    mulher: 0,
};

let man_or_woman, salary, repeat;

console.log("Preencha informações sobre os funcionários\n");

while (true) {
    man_or_woman = prompt("Homem ou mulher: ").toLowerCase();
    salary = Number(prompt("Salário: "));

    employee[man_or_woman] += salary;

    repeat = prompt("Adicionar outro funcionário (S/N): ").toUpperCase();
    if (repeat != "S") break;
}

console.log(`\nSalário total dos homens: ${employee.homem}\
    \nSalário total das mulheres: ${employee.mulher}`);
