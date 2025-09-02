import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import styles from "./App.module.css";

function App() {
    const [cartTab, setCartTab] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <Navbar setCartTab={setCartTab} />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.tabTitleContainer}>
                        {cartTab ? (
                            <>
                                <button className={styles.backBtn} onClick={() => setCartTab(false)}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>
                                <h2 className={styles.tabTitle}>Shopping Cart</h2>
                            </>
                        ) : (
                            <h2 className={styles.tabTitle}>Products</h2>
                        )}
                    </div>

                    <ProductList cartTab={cartTab} />
                </div>
            </main>
        </>
    );
}

export default App;
