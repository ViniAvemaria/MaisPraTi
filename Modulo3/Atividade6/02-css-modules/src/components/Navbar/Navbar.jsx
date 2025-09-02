import { useTheme } from "../../contexts/ThemeContext";
import { useCart } from "../../contexts/CartContex";
import styles from "./Navbar.module.css";

function Navbar({ setCartTab }) {
    const { theme, toggleTheme } = useTheme();
    const { cartItems } = useCart();

    return (
        <nav className={styles.container}>
            <img className={styles.logo} src={`/Logo/logo-${theme}.png`} alt="logo" />

            <div className={styles.buttonsContainer}>
                <button className={`${styles.themeBtn} ${styles[theme]}`} onClick={toggleTheme}>
                    <span></span>
                </button>
                <button onClick={() => setCartTab(true)} className={styles.cartBtn}>
                    <span className={styles.itemCounter}>{cartItems.length}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
