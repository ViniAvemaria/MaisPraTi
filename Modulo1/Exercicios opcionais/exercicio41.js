/* 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

const person = {
    name: "Bob",
    age: 30,
};

console.log(`${person.name} tem ${person.age} anos`);

person["email"] = "bob@gmail.com";

console.log(person.email);
