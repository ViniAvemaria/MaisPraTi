/* 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

const prompt = require("prompt-sync")();

const formatTime = (time) => {
    if (time < 10) return "0" + time.toString();
    else return time;
};

let hour, minute, second;

for (let i = 0; i < 5; i++) {
    hour = Number(prompt("Horas: "));
    minute = Number(prompt("Minutos: "));
    second = Number(prompt("Segundos: "));

    while (!(hour >= 0 && hour < 24) || !(minute >= 0 && minute < 60) || !(second >= 0 && second < 60)) {
        console.log("\nHorário inválido, tente novamente.\n");
        hour = Number(prompt("Horas: "));
        minute = Number(prompt("Minutos: "));
        second = Number(prompt("Segundos: "));
    }

    console.log(`${formatTime(hour)}.${formatTime(minute)}.${formatTime(second)}`);
}
