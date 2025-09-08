import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContex";
import styled from "styled-components";

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
`;

const Logo = styled.img`
    height: 200px;

    @media (max-width: 480px) {
        height: 170px;
    }

    @media (max-width: 320px) {
        height: 150px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 480px) {
        gap: 1.5rem;
    }
`;

const ThemeBtn = styled.button`
    box-sizing: initial;
    width: 44px;
    height: 20px;
    border-radius: 12px;
    background-color: ${(props) => (props.$dark ? "#4f4f4f" : "#ccc")};
    border: 2px solid var(--icon-color);
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: ${(props) => (props.$dark ? "translateX(24.5px)" : "translateX(-0.4px)")};
        background-color: var(--icon-color);
        transition: transform 0.2s ease;
    }

    @media (max-width: 480px) {
        width: 34px;
        height: 15px;

        &::before {
            width: 15px;
            height: 15px;
            transform: ${(props) => (props.$dark ? "translateX(19.5px)" : "translateX(-0.4px)")};
        }
    }
`;

const CartBtn = styled.button`
    display: flex;
    justify-content: flex-end;
    border: none;
    background: none;
    font-family: inherit;
    position: relative;

    i {
        color: var(--text-color);
        font-size: 2rem;
        margin-top: 0.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }
`;

const ItemCounter = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 20px;
    height: 20px;
    padding-left: 1px;
    padding-bottom: 2px;
    background-color: var(--primary-color);
    color: var(--text-color);
    border-radius: 50%;
    font-weight: 500;
`;

function Navbar({ setCartTab }) {
    const { theme, toggleTheme } = useTheme();
    const { cartItems } = useCart();

    return (
        <Container>
            <Logo src={`/Logo/logo-${theme}.png`} alt="logo" />

            <ButtonsContainer>
                <ThemeBtn $dark={theme === "dark"} onClick={toggleTheme}>
                    <span></span>
                </ThemeBtn>

                <CartBtn onClick={() => setCartTab(true)}>
                    <ItemCounter>{cartItems.length}</ItemCounter>
                    <i className="fa-solid fa-cart-shopping"></i>
                </CartBtn>
            </ButtonsContainer>
        </Container>
    );
}

export default Navbar;
