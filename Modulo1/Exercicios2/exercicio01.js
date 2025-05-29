/* 1. Validação de Datas 
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. */

function ehDataValida(dia, mes, ano) {
    const date = new Date(ano, mes - 1, dia);
    return date.getDate() === dia && date.getMonth() === mes - 1;
}

console.log(ehDataValida(29, 2, 2000));
