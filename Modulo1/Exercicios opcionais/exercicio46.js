/* 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */

function salesResults(sales) {
    const res = {};
    for (const { name, amount } of sales) {
        res[name] = (res[name] ?? 0) + amount;
    }
    return res;
}

const sales = [
    {
        name: "Bob",
        amount: 200,
    },
    {
        name: "Ben",
        amount: 450,
    },
    {
        name: "Ben",
        amount: 800,
    },
    {
        name: "Bob",
        amount: 300,
    },
];

const results = salesResults(sales);
console.log(results);
