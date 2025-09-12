import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";

function App() {
    const [cartTab, setCartTab] = useState(false);

    return (
        <>
            <header className="bg-header fixed top-0 left-0 right-0 z-[100] h-20 overflow-hidden border-b border-border">
                <Navbar setCartTab={setCartTab} />
            </header>

            <main className="bg-bg mt-20 py-12 min-h-[calc(100vh-5rem)]">
                <div className="w-[90%] max-w-[1100px] mx-auto">
                    {/* Tab title container */}
                    <div className="relative">
                        {cartTab ? (
                            <>
                                {/* Back button */}
                                <button
                                    onClick={() => setCartTab(false)}
                                    className="absolute inline-flex items-center justify-centerbg-primary border border-border rounded-[18px]px-[14px] py-[6px] text-[1.1rem] leading-none cursor-pointertext-card transition-colors duration-300hover:bg-button-hover"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                <h2 className="text-[2.5rem] text-center text-primary mb-8">Shopping Cart</h2>
                            </>
                        ) : (
                            <h2 className="text-[2.5rem] text-center text-primary mb-8">Products</h2>
                        )}
                    </div>

                    <ProductList cartTab={cartTab} />
                </div>
            </main>
        </>
    );
}

export default App;
