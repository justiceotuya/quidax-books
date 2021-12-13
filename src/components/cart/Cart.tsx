import React from 'react';
import { StyledCart } from './styles/Cart.style';
import { ReactComponent as BackArrowIcon } from './assets/back-arrow.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import { ReactComponent as EmptyIcon } from './assets/empty__cart.svg';
import { CartItem } from './CartItem';
import { toggleCartDisplay, useCartContext } from '../../redux';
import { Link } from 'react-router-dom';
import { handleFormatCurrency } from '../../utils';

export const Cart = () => {
    const {
        state: { isCartOpen, cart },
        dispatch,
    } = useCartContext();

    const handleToggleCart = () => {
        dispatch(toggleCartDisplay());
    };

    const handleCalculateCartSubTotal = () => {
        const totalPrice = cart.reduce((a, b) => a + b.totalPrice, 0);
        // return new Intl.NumberFormat('en-US', {
        //     style: 'currency',
        //     currency: 'USD',
        // }).format(totalPrice);

        return handleFormatCurrency('USD', totalPrice);
    };

    return (
        <StyledCart isCartOpen={isCartOpen}>
            <div className="cart__empty" onClick={handleToggleCart}></div>
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
                    {cart.length > 0 ? (
                        <>
                            <div className="cart__items">
                                {cart.map((item) => {
                                    return <CartItem key={item.id} {...item} />;
                                })}
                            </div>
                            <div className="book__cta">
                                <div className="subtotal__container">
                                    <p className="subtotal__title">Subtotal</p>
                                    <p className="subtotal__price">{handleCalculateCartSubTotal()}</p>
                                </div>

                                <button className="cta__button">
                                    <CartIcon />
                                    <p className="addToCart__text">Proceed to Checkout</p>
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="emptyCart__container">
                            <EmptyIcon />
                            <h1 className="cart__empty__title">Your cart is empty</h1>
                            <p className="cart__message">Looks like you have not added any new books yet</p>

                            <Link to="/" className="cta__button empty__button" onClick={handleToggleCart}>
                                Back to books list
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </StyledCart>
    );
};
