/* 9. Conversão Entre Formatos
Escreva duas funções:
-paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], … ] e retorna o objeto equivalente.
-objetoParaPares(obj) faz o inverso, retornando um array de
pares. */

const paresParaObjeto = (pairs) => {
    const result = {};
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
};

const objetoParaPares = (obj) => {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
        result.push([key, value]);
    }
    return result;
};

const stock = [
    ["apple", 100],
    ["orange", 200],
    ["melon", 300],
];

const people = {
    bob: 30,
    tom: 57,
    will: 19,
};

const newObj = paresParaObjeto(stock);
console.log(newObj);

const newArr = objetoParaPares(people);
console.log(newArr);
