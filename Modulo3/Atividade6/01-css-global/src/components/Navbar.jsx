import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContex";

function Navbar({ setCartTab }) {
    const { theme, toggleTheme } = useTheme();
    const { cartItems } = useCart();

    return (
        <nav className="container">
            <img onClick={() => setCartTab(false)} className="logo" src={`/Logo/logo-${theme}.png`} alt="logo" />

            <div className="buttons-container">
                <button className={`toggle-switch ${theme}`} onClick={toggleTheme}>
                    <span className="switch-circle"></span>
                </button>
                <div onClick={() => setCartTab(true)} className="cart-container">
                    <span>{cartItems.length}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
