/* 8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */

const sales = [
    {
        client: "Bob",
        total: 100,
    },
    {
        client: "Tom",
        total: 30,
    },
    {
        client: "Bob",
        total: 50,
    },
    {
        client: "Tom",
        total: 300,
    },
];

const result = sales.reduce((acc, sale) => {
    const { client, total } = sale;
    if (!acc[client]) acc[client] = 0;
    acc[client] += total;
    return acc;
}, {});

console.log(result);
