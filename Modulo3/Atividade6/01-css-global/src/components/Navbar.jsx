import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContex";

function Navbar({ setCartTab }) {
    const { theme, toggleTheme } = useTheme();
    const { cartItems } = useCart();

    return (
        <nav className="container">
            <img className="logo" src={`/Logo/logo-${theme}.png`} alt="logo" />

            <div className="buttons-container">
                <button className={`theme-btn ${theme}`} onClick={toggleTheme}>
                    <span className="switch-circle"></span>
                </button>
                <button onClick={() => setCartTab(true)} className="cart-btn">
                    <span className="item-counter">{cartItems.length}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
