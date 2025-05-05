/* 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

const prompt = require("prompt-sync")();

function processData(children, salaries) {
    let totalSalary = 0,
        totalChildren = 0,
        highestSalary = 0,
        salaryCount = 0;

    for (let i = 0; i < children.length; i++) {
        totalSalary += salaries[i];
        totalChildren += children[i];
        if (salaries[i] <= 350) salaryCount += 1;
        if (salaries[i] > highestSalary) highestSalary = salaries[i];
    }

    const meanSalary = totalSalary / salaries.length;
    const meanChildren = totalChildren / children.length;
    const salaryPercent = (salaryCount / salaries.length) * 100;

    return { meanSalary, meanChildren, highestSalary, salaryPercent };
}

const children = [];
const salaries = [];
let child, salary, repeat;

do {
    child = Number(prompt("Quantos filhos você tem? "));
    salary = Number(prompt("Qual o seu salário? "));
    children.push(child);
    salaries.push(salary);

    repeat = prompt("Coletar novos dados (S/N)? ").toLowerCase();
} while (repeat == "s");

const { meanSalary, meanChildren, highestSalary, salaryPercent } = processData(children, salaries);

console.log(`
Média de salário da população: R$${meanSalary.toFixed(2)}
Média do número de filhos: ${meanChildren.toFixed(2)}
Maior salário: R$${highestSalary}
Percentual de pessoas com salário até R$350,00: ${salaryPercent.toFixed(2)}%`);
