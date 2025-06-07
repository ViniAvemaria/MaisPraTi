/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, …], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */

const products = [
    {
        name: "apple",
        price: 30,
    },
    {
        name: "banana",
        price: 10,
    },
    {
        name: "orange",
        price: 20,
    },
];

const sortByPrice = (products) => {
    return products.sort((a, b) => a.price - b.price).map((product) => product.name);
};

const newProducts = sortByPrice(products);
console.log(newProducts);
