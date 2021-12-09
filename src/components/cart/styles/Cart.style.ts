import styled from 'styled-components';

export const StyledCart = styled.aside<{ isCartOpen: boolean }>`
    /* background-color: #fff; */
    width: 100%;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    /* z-index: 2;
    z-index: 4; */
    display: grid;
    grid-template-columns: auto 480px;
    z-index: ${(props) => (props.isCartOpen ? '2' : '-1')};
    height: ${(props) => (props.isCartOpen ? '100%' : '0')};
    transition: ${(props) =>
        props.isCartOpen ? 'z-index 0.01s ease-in;' : 'z-index 0.2s ease-in 0.2s, height .2s ease-in 4s'};

    .cart__content {
        background-color: #fff;
        width: 100vw;
        transform: ${(props) => (props.isCartOpen ? 'translateX(0%)' : 'translateX(100%)')};
        transition: transform 0.1s ease-in 0.1s;
    }

    .cart__header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 10px 30px;
        background: #ffffff;
        border: 1px solid #eeeeee;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
        height: 72px;
    }
    .back__button {
        border: none;
        background: none;
        width: 77px;
        padding: 0;
        display: grid;
        grid-template-columns: 18px 1fr;
        align-items: center;
        justify-content: flex-start;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        text-decoration: none;
        cursor: pointer;
        transform: translateY(0px);
        transition: transform 0.3s ease;

        :hover {
            opacity: 0.7;
        }

        :active {
            transform: translateY(3px);
            &:disabled {
                transform: translateY(0px);
            }
        }
    }
    .button__text {
        display: block;
        width: 100%;
        text-align: center;
        text-decoration: none;
    }
    .cart__info {
        display: flex;
        align-items: center;
    }
    .cart__text {
        font-size: 14px;
        line-height: 16px;
        display: flex;
        color: #000000;
        margin-right: 12px;
    }
    .cart__empty {
        display: none;
    }
    .cart__items {
        margin-bottom: 48px;
        max-height: calc(100vh - 300px);
        overflow: auto;
        scroll-behavior: smooth;
        scrollbar-width: 8px;
        padding-right: 10px;
        -ms-overflow-style: scrollbar;
        &::-webkit-scrollbar {
            width: 5px;
            display: block;
        }
        &::-webkit-scrollbar-thumb {
            background: #e1e4e8;
            border-radius: 50px;
            border-right: none;
            border-left: none;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-track-piece:end {
            background: transparent;
            margin-bottom: 10px;
        }
        ::-webkit-scrollbar-track-piece:start {
            background: transparent;
            margin-top: 10px;
        }
    }
    .cart__content__body {
        padding: 20px 30px;
    }
    .book__cta {
    }
    .subtotal__container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 18px;
    }
    .subtotal__title {
        font-size: 14px;
        line-height: 15px;
        color: #000000;
    }
    .subtotal__price {
        font-weight: 300;
        font-size: 36px;
        line-height: 41px;
        letter-spacing: -1px;
        color: #000000;
    }
    .cta__button {
        padding: 0;
        width: 100%;
        display: grid;
        grid-template-columns: 24px auto;
        grid-gap: 24px;
        color: #ffff;
        background: #000000;
        box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);
        padding: 18px 18px 20px 18px;
        border: none;
        align-items: center;
        cursor: pointer;
        transform: translateY(0px);
        transition: transform 0.3s ease;

        :hover {
            opacity: 0.7;
        }

        :active {
            transform: translateY(3px);
            &:disabled {
                transform: translateY(0px);
            }
        }
    }

    .addToCart__text {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
    }
    .cart__empty__title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .cart__message {
        text-align: center;
        font-size: 16px;
        margin-bottom: 50px;
    }
    .emptyCart__container {
        display: grid;
        place-content: center;
        max-width: 315px;
        margin: auto;

        svg {
            width: 200px;
            height: 200px;
            margin: auto;
            margin-bottom: 30px;
        }
    }
    .empty__button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    @media screen and (min-width: 481px) {
        .cart__empty {
            display: block;
        }
        .cart__content {
            width: 100%;
        }
    }
`;
