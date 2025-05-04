/* 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

const prompt = require("prompt-sync")();

const employee = {
    name: "",
    position: "",
    salary: 0,
};

let name = prompt("Qual o nome do funcionário? "),
    position = prompt("Qual o cargo? "),
    salary = Number(prompt("Qual o salário? "));

employee.name = name;
employee.position = position;
employee.salary = salary;

console.log(`
Nome: ${employee.name}
Cargo: ${employee.position}
Salário: R$${employee.salary}`);
