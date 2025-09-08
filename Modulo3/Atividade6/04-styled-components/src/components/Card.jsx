import { useCart } from "../contexts/CartContex";
import styled from "styled-components";

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100%;
    max-width: 235px;
    padding: 1.2rem;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background-color: var(--card-bg);
    box-shadow: 0 2px 6px var(--shadow-color);
`;

const ProductImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 1.1rem;
    width: 100%;
`;

const Rating = styled.div``;

const StarIcon = styled.span`
    i {
        color: gold;
        font-size: 0.75rem;
    }
`;

const ProductName = styled.p`
    display: -webkit-box;
    display: box;
    line-height: 1.4em;
    min-height: calc(1.4em * 2);
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    color: var(--text-color);
`;

const PriceTag = styled.p`
    font-weight: 500;
    color: var(--primary-color);
`;

const AddBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    background-color: var(--primary-color);
    border-radius: 18px;
    border: 1px solid var(--border-color);
    padding: 6px 14px;
    font-family: inherit;
    font-size: 1.1rem;
    cursor: pointer;
    color: var(--card-bg);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--button-hover-bg);
    }
`;

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

    function createRating(productRating, totalStars = 5) {
        return (
            <Rating>
                {[...Array(totalStars)].map((_, index) => {
                    if (index + 1 <= Math.floor(productRating))
                        return (
                            <StarIcon key={index}>
                                <i className="fa-solid fa-star"></i>
                            </StarIcon>
                        );
                    if (index < productRating)
                        return (
                            <StarIcon key={index}>
                                <i className="fa-regular fa-star-half-stroke"></i>
                            </StarIcon>
                        );
                    return (
                        <StarIcon key={index}>
                            <i className="fa-regular fa-star"></i>
                        </StarIcon>
                    );
                })}
            </Rating>
        );
    }

    return (
        <ProductCard>
            <ProductImg src={`./Products/${product.img}`} alt={`${product.name} image`} />
            <ProductInfo>
                {createRating(product.rating)}
                <ProductName>{product.name}</ProductName>
                <PriceTag>{formatPrice(product.price)}</PriceTag>
            </ProductInfo>
            <AddBtn onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</AddBtn>
        </ProductCard>
    );
}

export default Card;
