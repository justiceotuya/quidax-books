import React from 'react';
import { StyledCart } from './styles/Cart.style';
import { ReactComponent as BackArrowIcon } from './assets/back-arrow.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import { CartItem } from './CartItem';
interface Props {
    handleToggleCart: () => void;
    isCartOpen: boolean;
}

export const Cart = (props: Props) => {
    const { handleToggleCart, isCartOpen } = props;
    return (
        <StyledCart isCartOpen={isCartOpen}>
            <div className="cart__empty"></div>
            <div className="cart__content">
                <div className="cart__header">
                    <button className="back__button" onClick={handleToggleCart}>
                        <BackArrowIcon />
                        <span className="button__text">Back</span>
                    </button>

                    <div className="cart__info">
                        <p className="cart__text">Your cart</p>
                        <CartIcon />
                    </div>
                </div>
                <div className="cart__content__body">
                    <div className="cart__items">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className="book__cta">
                        <div className="subtotal__container">
                            <p className="subtotal__title">Subtotal</p>
                            <p className="subtotal__price">$94.76</p>
                        </div>

                        <button className="cta__button">
                            <CartIcon />
                            <p className="addToCart__text">Proceed to Checkout</p>
                        </button>
                    </div>
                </div>
            </div>
        </StyledCart>
    );
};
