import React from 'react';
import { StyledBookCard } from './BookCard.style';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as PeopleIcon } from './assets/people.svg';
import BookCover from './assets/book-cover.png';
import { RatingStars } from '..';

interface Props {
    id: string;
    title: string;
    image_url: string;
    authors: { name: string; id: string }[];
    release_date: string;
    likes: number;
    currency: string;
    price: number;
    number_of_purchases: number;
    available_copies: number;
    genres: { name: string; id: string }[];
    rating: number;
}

export const BookCard = (props: Props) => {
    const {
        id,
        title,
        image_url,
        authors,
        release_date,
        genres,
        currency,
        price,
        available_copies,
        likes,
        rating,
        number_of_purchases,
    } = props;

    const handleRenderAuthors = () => {
        const authorNames = authors.map((item) => item.name);
        return authorNames.join(', ');
    };

    const handleRenderGenre = () => {
        const genreNames = genres.map((item) => item.name);
        return genreNames.join(', ');
    };

    const handleParseYear = () => new Date(release_date).getFullYear();
    return (
        <StyledBookCard to={`/books/${id}`}>
            <div className="book__image">
                <img src={image_url} alt="book cover" />
            </div>
            <div className="book__details">
                <p className="book__title">{title}</p>
                <p className="book__author">
                    {handleRenderAuthors()} - {handleParseYear()}
                </p>
                <p className="book__genre">{handleRenderGenre()}</p>
                <div className="book__performance">
                    <div className="book__people">
                        <div className="book__readers">
                            <PeopleIcon />
                            <p className="readers__count">{number_of_purchases}</p>
                        </div>
                        <div className="book__readers">
                            <HeartIcon />
                            <p className="readers__count">{likes}</p>
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="book__ratings">
                        <p className="rating__number">Rating: {rating}</p>
                        <RatingStars rating={rating} />
                    </div>
                </div>
                <div className="book__availability__container">
                    <p className="book__price">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price)}
                    </p>
                    {available_copies > 0 ? (
                        <p className="book__availability">{available_copies} Copies Available</p>
                    ) : (
                        <p className="book__availability no_copies">Out of stock</p>
                    )}
                </div>

                {available_copies > 0 && (
                    <button className="addToCart__button">
                        <CartIcon />
                        <span className="button__text">Add to Cart</span>
                    </button>
                )}
            </div>
        </StyledBookCard>
    );
};
