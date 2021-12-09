import React from 'react';
import { StyledCartItem } from './styles/CartItem.style';
import BookImage from './assets/book-cover.png';
interface Props {}

export const CartItem = (props: Props) => {
    return (
        <StyledCartItem>
            <div className="book__details__container">
                <img src={BookImage} alt="book image" className="book__image" />

                <div className="book__details">
                    <p className="book__title">The Effective Engineer</p>
                    <p className="book__author">Edmond Lau</p>
                    <button className="remove__button">remove</button>
                </div>
            </div>
            <div className="book__quantity__container">
                <p className="book__price">$29.99</p>
                <div className="book__action__container">
                    <button className="action__button subtract__button">-</button>
                    <input type="text" className="quantity__input" />
                    <button className="action__button add__button">+</button>
                </div>
                <p className="book__total__price">$59.98</p>
            </div>
        </StyledCartItem>
    );
};
