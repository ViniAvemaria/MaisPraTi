import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContex";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./Card.module.css";

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
            <div className={styles.rating}>
                {[...Array(totalStars)].map((_, index) => {
                    if (index + 1 <= Math.floor(productRating))
                        return (
                            <span className={styles.starIcon} key={index}>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        );
                    if (index < productRating)
                        return (
                            <span className={styles.starIcon} key={index}>
                                <i className="fa-regular fa-star-half-stroke"></i>
                            </span>
                        );
                    return (
                        <span className={styles.starIcon} key={index}>
                            <i className="fa-regular fa-star"></i>
                        </span>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={styles.productCard}>
            {isLoading ? (
                <Skeleton />
            ) : (
                <>
                    <img
                        className={styles.productImg}
                        src={`./Products/${product.img}`}
                        alt={`${product.name} image`}
                    />
                    <div className={styles.productInfo}>
                        {createRating(product.rating)}
                        <p className={styles.productName}>{product.name}</p>
                        <p className={styles.priceTag}>{formatPrice(product.price)}</p>
                    </div>
                    <button onClick={handleClick} className={styles.addBtn}>
                        {inCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                </>
            )}
        </div>
    );
}

export default Card;
