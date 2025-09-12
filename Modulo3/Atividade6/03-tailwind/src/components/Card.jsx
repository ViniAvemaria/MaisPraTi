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

    function createRating(productRating, totalStars = 5) {
        return (
            <div className="flex gap-1">
                {[...Array(totalStars)].map((_, index) => {
                    if (index + 1 <= Math.floor(productRating))
                        return (
                            <span key={index} className="text-yellow-300">
                                <i className="fa-solid fa-star text-[0.75rem]"></i>
                            </span>
                        );
                    if (index < productRating)
                        return (
                            <span key={index} className="text-yellow-300">
                                <i className="fa-regular fa-star-half-stroke text-[0.75rem]"></i>
                            </span>
                        );
                    return (
                        <span key={index} className="text-yellow-300">
                            <i className="fa-regular fa-star text-[0.75rem]"></i>
                        </span>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-8 h-full max-w-[235px] p-5 border border-border rounded-xl bg-card shadow-[0_2px_6px_var(--shadow-color)]">
            {/* Product image */}
            <img
                src={`./Products/${product.img}`}
                alt={`${product.name} image`}
                className="w-[200px] h-[200px] object-contain"
            />

            {/* Product info */}
            <div className="flex flex-col gap-1.5 text-[1.1rem] w-full">
                {createRating(product.rating)}
                <p className="text-text overflow-hidden text-ellipsis line-clamp-2 leading-[1.4em] min-h-[calc(1.4em*2)]">
                    {product.name}
                </p>
                <p className="text-primary font-medium">{formatPrice(product.price)}</p>
            </div>

            {/* Add / Remove button */}
            <button
                onClick={handleClick}
                className="inline-flex items-center justify-center bg-primary rounded-[18px] border border-border px-[14px] py-[4px] text-[1.1rem] font-inherit cursor-pointer text-card transition-colors duration-300 hover:bg-button-hover"
            >
                {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

export default Card;
