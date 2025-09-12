import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContex";

function Navbar({ setCartTab }) {
    const { theme, toggleTheme } = useTheme();
    const { cartItems } = useCart();

    return (
        <nav className="flex items-center justify-between h-20 w-[90%] max-w-[1100px] mx-auto">
            {/* Logo */}
            <img
                src={`/Logo/logo-${theme}.png`}
                alt="logo"
                className="h-[200px] max-[480px]:h-[170px] max-[320px]:h-[150px]"
            />

            {/* Right side buttons */}
            <div className="flex items-center gap-12 max-[480px]:gap-6">
                {/* Theme toggle */}
                <button onClick={toggleTheme} className="text-[1.8rem] p-1 rounded focus:outline-none text-icon">
                    {theme === "light" ? (
                        <i className="fa-solid fa-toggle-off cursor-pointer"></i>
                    ) : (
                        <i className="fa-solid fa-toggle-on cursor-pointer"></i>
                    )}
                </button>

                {/* Cart button */}
                <button
                    onClick={() => setCartTab(true)}
                    className="relative flex justify-end bg-none border-none font-inherit"
                >
                    {/* Counter */}
                    <span className="absolute flex items-center justify-center w-5 h-5 pl-[1px] pb-[2px] rounded-full font-medium bg-primary text-text">
                        {cartItems.length}
                    </span>

                    {/* Cart icon */}
                    <i className="fa-solid fa-cart-shopping text-text text-2xl mt-2 mr-4 cursor-pointer"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
