import React from 'react';
import { StyledBookCard } from './BookCard.style';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as PeopleIcon } from './assets/people.svg';
import BookCover from './assets/book-cover.png';
interface Props {}

export const BookCard = (props: Props) => {
    return (
        <StyledBookCard>
            <div className="book__image">
                <img src={BookCover} alt="book cover" />
            </div>
            <div className="book__details">
                <p className="book__title">The Effective Engineer</p>
                <p className="book__author">Edmond Lau - 2009</p>
                <p className="book__genre">Motivational</p>
                <div className="book__performance">
                    <div className="book__people">
                        <div className="book__readers">
                            <PeopleIcon />
                            <p className="readers__count">31</p>
                        </div>
                        <div className="book__readers">
                            <HeartIcon />
                            <p className="readers__count">29</p>
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="book__ratings">
                        <p className="rating__number">Rating: 4.0 </p>
                    </div>
                </div>
                <div className="book__availability__container">
                    <p className="book__price">$29.99</p>
                    <p className="book__availability">23 Copies Available</p>
                </div>

                <button className="addToCart__button">
                    <CartIcon />
                    <span className="button__text">Add to Cart</span>
                </button>
            </div>
        </StyledBookCard>
    );
};
