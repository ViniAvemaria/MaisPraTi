import { useCart } from "../contexts/CartContex";
import Card from "./Card";

function ProductList({ cartTab }) {
    const products = [
        {
            id: 1,
            name: 'Samsung 55" 4K Smart TV',
            price: 3099.98,
            img: "/tv.webp",
        },
        {
            id: 2,
            name: "Apple iPhone 15 Pro",
            price: 5899,
            img: "/iphone.webp",
        },
        {
            id: 3,
            name: "Sony WH-1000XM5 Headphones",
            price: 1799.59,
            img: "/headphone.webp",
        },
        {
            id: 4,
            name: "Dell XPS 13 Laptop",
            price: 8600,
            img: "/laptop.webp",
        },
        {
            id: 5,
            name: "Apple iPad Air (5th Gen)",
            price: 4799,
            img: "/ipad.webp",
        },
        {
            id: 6,
            name: "Logitech MX Master 3S Mouse",
            price: 549.9,
            img: "/mouse.webp",
        },
        {
            id: 7,
            name: "Kindle Paperwhite",
            price: 999,
            img: "/kindle.webp",
        },
        {
            id: 8,
            name: "PlayStation 5 Slim",
            price: 3899,
            img: "/ps5.webp",
        },
        {
            id: 9,
            name: "Nintedo Switch OLED",
            price: 2899,
            img: "/switch.webp",
        },
        {
            id: 10,
            name: "GoPro HERO11 Action Camera",
            price: 2399,
            img: "/gopro.webp",
        },
    ];

    const { cartItems } = useCart();

    return (
        <>
            {cartTab && cartItems.length === 0 ? (
                <h3 className="empty-cart-message">Your cart is empty</h3>
            ) : (
                <ul className="product-list">
                    {(cartTab ? cartItems : products).map((product, index) => (
                        <li key={index}>
                            <Card product={product}></Card>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default ProductList;
