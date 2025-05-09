/* 47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

function transformObj(obj, fun) {
    const res = {};
    for (const key in obj) {
        res[key] = fun(obj[key]);
    }
    return res;
}

const object = {
    num1: 45,
    num2: 10,
    num3: 20,
    num4: 4,
};

console.log(
    transformObj(object, (num) => {
        return num * num;
    })
);
