/* 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

function stringCount(obj) {
    let count = 0;
    for (const key in obj) {
        if (typeof obj[key] === "string") count++;
    }
    return count;
}

const obj = {
    id: 1234,
    name: "Bob",
    email: "bob@gmail.com",
    salary: 2000,
};

console.log(`Total de propriedades do tipo string: ${stringCount(obj)}`);
