/* 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */

const prompt = require("prompt-sync")();

const employees = [];
let id, name, grossSalary;

for (let i = 0; i < 80; i++) {
    id = Number(prompt("Número de matrícula: "));
    name = prompt("Nome: ");
    grossSalary = Number(prompt("Salário bruto: "));
    employees.push({ id, name, grossSalary });
}

employees.forEach((e) => {
    console.log(`\nMatrícula: ${e.id}\
        \nNome: ${e.name}\
        \nSalário bruto: R$${e.grossSalary}\
        \nDedução INSS: R$${(e.grossSalary * 0.12).toFixed(2)}\
        \nSalário líquido: R$${(e.grossSalary * 0.88).toFixed(2)}`);
});
