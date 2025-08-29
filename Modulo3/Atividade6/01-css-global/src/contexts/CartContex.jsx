import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (product) => {
        setCartItems((prev) => {
            const alreadyExists = prev.some((cartItem) => cartItem.id === product.id);
            if (alreadyExists) return prev;
            return [...prev, product];
        });
    };

    const removeItem = (product) => {
        setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== product.id));
    };

    return <CartContext.Provider value={{ cartItems, addItem, removeItem }}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    return useContext(CartContext);
}
