/* 5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo. */

const helloWorld = (str) => {
    console.log("Hello " + str);
};

const debounce = (fn, delay) => {
    let id;
    return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => fn(args), delay);
    };
};

const sayHello = debounce(helloWorld, 500);
sayHello("World!");
sayHello("World!");
