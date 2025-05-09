/* 49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

function objCategory(obj) {
    const res = {};
    for (const item of obj) {
        const amount = item.amount;
        const category = item.category;
        if (!(category in res)) {
            res[category] = { transactions: [], subtotal: 0 };
        }
        res[category]["transactions"].push(item);
        res[category]["subtotal"] += amount;
    }
    return res;
}

const transactions = [
    {
        id: 123,
        amount: 250,
        date: "21/04/2025",
        category: "food",
    },
    {
        id: 456,
        amount: 80,
        date: "23/04/2025",
        category: "food",
    },
    {
        id: 332,
        amount: 300,
        date: "02/05/2025",
        category: "health",
    },
    {
        id: 248,
        amount: 1900,
        date: "02/05/2025",
        category: "appliance",
    },
    {
        id: 789,
        amount: 4500,
        date: "02/05/2025",
        category: "appliance",
    },
];

const categories = objCategory(transactions);
console.log(JSON.stringify(categories, null, 2));
