import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContex";

function Card({ product }) {
    const { cartItems, addItem, removeItem } = useCart();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);

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

    function createRating(productRating, totalStars = 5) {
        return (
            <div className="rating">
                {[...Array(totalStars)].map((_, index) => {
                    if (index + 1 <= Math.floor(productRating))
                        return (
                            <span key={index}>
                                <i className="star-icon fa-solid fa-star"></i>
                            </span>
                        );
                    if (index < productRating)
                        return (
                            <span key={index}>
                                <i className="star-icon fa-regular fa-star-half-stroke"></i>
                            </span>
                        );
                    return (
                        <span key={index}>
                            <i className="star-icon fa-regular fa-star"></i>
                        </span>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="product-card">
            {isLoading ? (
                <>
                    <div className="skeleton-card">
                        <div className="skeleton-image"></div>
                        <div className="skeleton-text long"></div>
                        <div className="skeleton-text short"></div>
                    </div>
                </>
            ) : (
                <>
                    <img className="product-img" src={`./Products/${product.img}`} alt={`${product.name} image`} />
                    <div className="product-info">
                        {createRating(product.rating)}
                        <p className="product-name">{product.name}</p>
                        <p className="price-tag">{formatPrice(product.price)}</p>
                    </div>
                    <button onClick={handleClick} className="add-btn">
                        {inCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                </>
            )}
        </div>
    );
}

export default Card;
