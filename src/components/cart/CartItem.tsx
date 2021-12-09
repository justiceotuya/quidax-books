import React from 'react';
import { StyledCartItem } from './styles/CartItem.style';
import BookImage from './assets/book-cover.png';
import { ICartProps } from '../../redux/slice/cartSlice';
import {
    useCartContext,
    addItemToCart,
    dropItemFromCart,
    removeItemFromCart,
    subtractQuantityFromBookItem,
    addQuantityToBookItem,
    getCurrentActiveBook,
} from '../../redux';

export const CartItem = (props: ICartProps) => {
    const pathname = window.location.pathname.split('/');
    const bookId = pathname[pathname.length - 1];

    const { id, title, image_url, price, currency, authors, quantity, totalPrice } = props;
    const { dispatch } = useCartContext();

    const handleRenderAuthors = () => {
        const authorNames = authors.map((item) => item.name);
        return authorNames.join(', ');
    };

    const handleFormatCurrency = (currency: string, price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
        }).format(price);
    };

    const handleAddItemToCart = (event: any) => {
        dispatch(addItemToCart(props));
        dispatch(subtractQuantityFromBookItem(props));
        dispatch(getCurrentActiveBook({ id: bookId }));
    };

    const handleDropItemFromCart = (event: any) => {
        dispatch(dropItemFromCart(props));
        dispatch(addQuantityToBookItem(props));
        dispatch(getCurrentActiveBook({ id: bookId }));
    };

    const handleRemoveItemFromCart = (event: any) => {
        dispatch(removeItemFromCart(props));
        dispatch(getCurrentActiveBook({ id: bookId }));
    };

    return (
        <StyledCartItem>
            <div className="book__details__container">
                <img src={image_url} alt={title} className="book__image" />

                <div className="book__details">
                    <p className="book__title">{title}</p>
                    <p className="book__author">{handleRenderAuthors()}</p>
                    <button className="remove__button" onClick={handleRemoveItemFromCart}>
                        remove
                    </button>
                </div>
            </div>
            <div className="book__quantity__container">
                <p className="book__price">{handleFormatCurrency(currency, price)}</p>
                <div className="book__action__container">
                    <button className="action__button subtract__button" onClick={handleDropItemFromCart}>
                        -
                    </button>
                    <input type="text" value={quantity} readOnly className="quantity__input" />
                    <button className="action__button add__button" onClick={handleAddItemToCart}>
                        +
                    </button>
                </div>
                <p className="book__total__price">{handleFormatCurrency(currency, totalPrice)}</p>
            </div>
        </StyledCartItem>
    );
};
