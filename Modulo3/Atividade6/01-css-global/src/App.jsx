import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.jsx";

function App() {
    const [cartTab, setCartTab] = useState(false);

    return (
        <>
            <header>
                <Navbar setCartTab={setCartTab} />
            </header>
            <main>
                <div className="container">
                    <div className="tab-title-container">
                        {cartTab ? (
                            <>
                                <button className="back-btn" onClick={() => setCartTab(false)}>
                                    <i class="fa-solid fa-arrow-left"></i>
                                </button>
                                <h2 className="tab-title">Shopping Cart</h2>
                            </>
                        ) : (
                            <h2 className="tab-title">Products</h2>
                        )}
                    </div>

                    <ProductList cartTab={cartTab} />
                </div>
            </main>
        </>
    );
}

export default App;
