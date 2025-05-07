/* 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

const prompt = require("prompt-sync")();

function countAnswers(answers, student) {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === student[i]) count++;
    }
    return count;
}

function validateInput(index) {
    let answer = prompt(`Pergunta ${index + 1}: `).toUpperCase();
    while (!["A", "B", "C", "D", "E"].includes(answer)) {
        console.log("Opções de resposta são de A a E");
        answer = prompt(`Pergunta ${index + 1}: `).toUpperCase();
    }
    return answer;
}

const G = [];
const students = [];

console.log("Monte o gabarito");
for (let i = 0; i < 20; i++) {
    const answer = validateInput(i);
    G.push(answer);
}

console.log("Informações do aluno");
for (let i = 0; i < 50; i++) {
    const name = prompt("Nome: ");
    console.log("Digite as respostas");
    const R = [];
    for (let j = 0; j < 20; j++) {
        const answer = validateInput(j);
        R.push(answer);
    }
    students.push({ name, R });
}

for (const student of students) {
    const hits = countAnswers(G, student.R);
    console.log(`\n${student.name} acertou ${hits} questões`);
    if (hits >= 12) console.log("APROVADO");
    else console.log("REPROVADO");
}
