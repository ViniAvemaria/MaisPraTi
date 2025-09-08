import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";

const Header = styled.header`
    background-color: var(--header-bg);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 5rem;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
`;

const Main = styled.main`
    background-color: var(--bg-color);
    margin-top: 5rem;
    padding: 3rem 0;
    min-height: calc(100vh - 5rem);
`;

const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
`;

const TabTitleContainer = styled.div`
    position: relative;
`;

const TabTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;
`;

const BackBtn = styled.button`
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    background-color: var(--primary-color);
    border-radius: 18px;
    border: 1px solid var(--border-color);
    padding: 6px 14px;
    font-size: 1.1rem;
    cursor: pointer;
    color: var(--card-bg);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--button-hover-bg);
    }
`;

function App() {
    const [cartTab, setCartTab] = useState(false);

    return (
        <>
            <Header>
                <Navbar setCartTab={setCartTab} />
            </Header>
            <Main>
                <Container>
                    <TabTitleContainer>
                        {cartTab ? (
                            <>
                                <BackBtn onClick={() => setCartTab(false)}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </BackBtn>
                                <TabTitle>Shopping Cart</TabTitle>
                            </>
                        ) : (
                            <TabTitle>Products</TabTitle>
                        )}
                    </TabTitleContainer>

                    <ProductList cartTab={cartTab} />
                </Container>
            </Main>
        </>
    );
}

export default App;
