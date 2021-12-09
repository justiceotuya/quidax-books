import React from 'react';
import { StyledBookDetails } from './BookDetails.style';
import details from './assets/book-details.json';
import { ReactComponent as BackArrowIcon } from './assets/arrow-back.svg';
import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as PeopleIcon } from './assets/people.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';

import { RatingStars } from '../../components';
import { Link } from 'react-router-dom';
interface Props {}

export const BookDetails = (props: Props) => {
    const {
        id,
        title,
        publisher,
        genres,
        image_url,
        price,
        currency,
        rating,
        authors,
        available_copies,
        featured,
        likes,
        release_date,
        number_of_purchases,
        full_description,
        tags,
    } = details;

    const handleRenderAuthors = () => {
        const authorNames = authors.map((item) => item.name);
        return authorNames.join(', ');
    };

    const handleRenderGenre = () => {
        const genreNames = genres.map((item) => item.name);
        return genreNames.join(', ');
    };
    const handleRenderTags = () => {
        const tagNames = tags.map((item) => item.name);
        return tagNames.join(', ');
    };

    const handleParseYear = () => new Date(release_date).getFullYear();
    return (
        <StyledBookDetails>
            <Link to="/" className="back__button">
                <BackArrowIcon />
                <span className="button__text">Back</span>
            </Link>

            <div className="book__desktop__wrapper">
                <div className="book__image">
                    <img src={image_url} alt={title} />

                    <div className="cta__button__desktop">
                        <p className="available__text">23 Copies Available</p>
                        <p className="book__price">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price)}
                        </p>
                    </div>

                    {available_copies > 0 && (
                        <button className="cta__button cta__button__desktop">
                            <div className="button__details">
                                <CartIcon />
                                <div className="button__text">
                                    <p className="addToCart__text">Add to Cart</p>
                                </div>
                            </div>
                        </button>
                    )}
                </div>

                <div className="book__details__content">
                    <h1 className="book__title">{title}</h1>
                    <div className="book__author">
                        <p className="author__name">{handleRenderAuthors()}</p>
                        <p className="book__year">{handleParseYear()}</p>
                    </div>

                    <div className="book__details__container">
                        <div className="book__details">
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
                                    <p className="rating__number">
                                        <strong>Ratings</strong>: {rating}
                                    </p>
                                    <RatingStars rating={rating} />
                                </div>
                            </div>

                            <div className="book__genre">
                                <p className="book__details__title">Genre</p>
                                <p className="book__details__text">{handleRenderGenre()}</p>
                            </div>
                            <div className="book__tags">
                                <p className="book__details__title">tags</p>
                                <p className="book__details__text">{handleRenderTags()}</p>
                            </div>
                            <div className="book__publisher">
                                <p className="book__details__title">publisher</p>
                                <p className="book__details__text">{publisher}</p>
                            </div>
                            <div className="book__released">
                                <p className="book__details__title">released</p>
                                <p className="book__details__text">{new Date(release_date).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="description__container">
                        <p className="description">{full_description}</p>
                    </div>
                </div>
            </div>
            {available_copies > 0 && (
                <button className="cta__button cta__button__mobile">
                    <div className="button__details">
                        <CartIcon />
                        <div className="button__text">
                            <p className="addToCart__text">Add to Cart</p>
                            <p className="available__text">23 Copies Available</p>
                        </div>
                    </div>

                    <p className="book__price">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price)}
                    </p>
                </button>
            )}
        </StyledBookDetails>
    );
};
