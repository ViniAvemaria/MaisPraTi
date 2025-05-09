/* 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

function merge(obj1, obj2) {
    const res = { ...obj2 };
    for (const [key, value] of Object.entries(obj1)) {
        if (key in res) res[key] += value;
        else res[key] = value;
    }
    return res;
}

const inventarioLojaA = {
    product1: 2,
    product2: 3,
};

const inventarioLojaB = {
    product2: 4,
    product3: 2,
};

const mergedInventory = merge(inventarioLojaA, inventarioLojaB);
console.log(mergedInventory);
