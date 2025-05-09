/* 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

const data = {
    id: 12345,
    cities: ["Porto Alegre", "São Paulo", "Rio de Janeiro"],
    cost: 150.5,
    name: "Bob",
    rates: [5, 4, 4, 1, 3.5],
};

const dataArray = {};

for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) dataArray[key] = value;
}

console.log(dataArray);
