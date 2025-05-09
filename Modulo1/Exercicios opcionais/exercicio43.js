/* 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

function mergeObj(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = {
    id: 1234,
    name: "Bob",
    salary: 2000,
};

const obj2 = {
    id: 5678,
    salary: 3000,
    email: "bob@gmail.com",
};

console.log(mergeObj(obj1, obj2));
