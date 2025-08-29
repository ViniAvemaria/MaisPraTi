import { useCart } from "../contexts/CartContex";

function Card({ product }) {
    const { cartItems, addItem, removeItem } = useCart();

    const formatPrice = (value) =>
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(value);

    const inCart = cartItems.some((item) => item.id === product.id);

    const handleClick = () => {
        if (inCart) removeItem(product);
        else addItem(product);
    };

    return (
        <div className="product-card">
            <img className="product-img" src={`./Products/${product.img}`} alt={`${product.name} image`} />
            <div>
                <p>{product.name}</p>
                <p className="price-tag">{formatPrice(product.price)}</p>
            </div>
            <button onClick={handleClick} className="add-btn">
                {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

export default Card;
