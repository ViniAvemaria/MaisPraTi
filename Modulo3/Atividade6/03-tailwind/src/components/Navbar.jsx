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
                <button
                    onClick={toggleTheme}
                    className={`
            relative cursor-pointer rounded-[12px] border-2 border-icon 
            transition-colors duration-200
            ${theme === "dark" ? "bg-[#4f4f4f]" : "bg-[#ccc]"}
            w-[44px] h-[20px] max-[480px]:w-[34px] max-[480px]:h-[15px]
            before:content-[''] before:absolute before:top-0 before:left-0
            before:rounded-full before:bg-icon before:transition-transform before:duration-200
            before:h-[20px] before:w-[20px] max-[480px]:before:h-[15px] max-[480px]:before:w-[15px]
            ${
                theme === "dark"
                    ? "before:translate-x-[24.5px] max-[480px]:before:translate-x-[19.5px]"
                    : "before:translate-x-[-0.4px]"
            }
          `}
                />

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
