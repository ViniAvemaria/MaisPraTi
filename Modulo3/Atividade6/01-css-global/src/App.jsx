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
                    <h2 className="tab-title">{cartTab ? "Shopping Cart" : "Products"}</h2>
                    <ProductList cartTab={cartTab} />
                </div>
            </main>
        </>
    );
}

export default App;
