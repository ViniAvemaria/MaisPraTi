import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContex";
import Card from "./Card";
import Skeleton from "./Skeleton";
import styled from "styled-components";

const EmptyCartMessage = styled.h3`
    font-size: 1.7rem;
    text-align: center;
    color: var(--text-color);
    margin-top: 10rem;
`;

const ProductListGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-rows: 1fr;
    justify-items: center;
    gap: 2.3rem;
    padding: 2rem;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background-color: var(--bg-secondary);
    list-style: none;
`;

function ProductList({ cartTab }) {
    const products = [
        {
            id: 1,
            rating: 4.5,
            name: "Smart TV 55” 4K UHD LED Samsung 55DU7700",
            price: 3099.98,
            img: "/tv.webp",
        },
        {
            id: 2,
            rating: 4,
            name: "Apple iPhone 15 Pro 512 GB - Titânio Preto",
            price: 8290,
            img: "/iphone.webp",
        },
        {
            id: 3,
            rating: 5,
            name: "Sony Fones de ouvido WH-1000XM5 premium com cancelamento de ruído, otimizador automático NC, bateria de 30 horas, controle de voz Alexa, preto",
            price: 1799.59,
            img: "/headphone.webp",
        },
        {
            id: 4,
            rating: 4.5,
            name: 'Dell XPS 13 9340 - 13.37" - Intel Core Ultra 7 - 155H - Evo - 16GB RAM - 512GB SSD',
            price: 12998,
            img: "/laptop.webp",
        },
        {
            id: 5,
            rating: 3.5,
            name: "Apple Ipad Air 5ª Geração, Wi-fi, 64GB, 10.9 Polegadas, Cinza-espacial",
            price: 4799,
            img: "/ipad.webp",
        },
        {
            id: 6,
            rating: 4,
            name: "Mouse Sem Fio Logitech MX Master 3S, 8000 DPI, Bluetooth, USB, para Uso em Qualquer Superfície, Clique Silencioso, Grafite",
            price: 549.9,
            img: "/mouse.webp",
        },
        {
            id: 7,
            rating: 3.5,
            name: "Kindle Paperwhite Amazon 7\", 16GB, Tela antirreflexo, Bateria que dura semanas, À Prova d'água, Preto",
            price: 999,
            img: "/kindle.webp",
        },
        {
            id: 8,
            rating: 5,
            name: "Console PlayStation 5 Pro Sony, SSD 2TB, Com Controle Sem Fio DualSense, Branco",
            price: 6399,
            img: "/ps5.webp",
        },
        {
            id: 9,
            rating: 4.5,
            name: "Nintendo Switch Oled Branco 64GB",
            price: 2899,
            img: "/switch.webp",
        },
        {
            id: 10,
            rating: 5,
            name: "Câmera GoPro HERO13, 27MP, Preto - CHDHX-131-RW",
            price: 2399,
            img: "/gopro.webp",
        },
    ];

    const { cartItems } = useCart();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, [cartTab]);

    return (
        <>
            {cartTab && cartItems.length === 0 ? (
                <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
            ) : (
                <ProductListGrid>
                    {(cartTab ? cartItems : products).map((product) => (
                        <li key={product.id}>{isLoading ? <Skeleton /> : <Card product={product} />}</li>
                    ))}
                </ProductListGrid>
            )}
        </>
    );
}

export default ProductList;
