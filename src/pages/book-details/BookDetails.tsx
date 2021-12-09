import React, { useState, useEffect } from 'react';
import { StyledBookDetails } from './BookDetails.style';
import details from './assets/book-details.json';
import { ReactComponent as BackArrowIcon } from './assets/arrow-back.svg';
import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as PeopleIcon } from './assets/people.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';

import { RatingStars } from '../../components';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { Book } from '../../types';
import { getBookDetail } from '../../services/queries/getBookDetails';
interface Props {}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

interface IBookResult {
    book: Book;
}
export const BookDetails = (props: Props) => {
    const pathname = window.location.pathname.split('/');

    const bookId = pathname[pathname.length - 1];

    const { loading, error, data } = useQuery<IBookResult>(getBookDetail, {
        variables: { id: bookId },
    });
    const [bookDetails, setBookDetails] = useState({} as Book);

    useEffect(() => {
        if (data) {
            setBookDetails(data.book);
        }
    }, [data]);

    const handleRenderAuthors = () => {
        const authorNames = (bookDetails && bookDetails?.authors?.map((item) => item.name)) || [];
        return authorNames.join(', ');
    };

    const handleRenderGenre = () => {
        const genreNames = (bookDetails && bookDetails?.genres?.map((item) => item.name)) || [];
        return genreNames.join(', ');
    };
    const handleRenderTags = () => {
        const tagNames = (bookDetails && bookDetails?.tags?.map((item) => item.name)) || [];
        return tagNames.join(', ');
    };

    const getFullDate = (date: string) => {
        const day = new Date(date).getDay();
        const monthName = months[new Date(date).getMonth()];
        const year = new Date(date).getFullYear();
        return `${day} ${monthName}, ${year}`;
    };

    const handleParseYear = () => new Date(bookDetails.release_date).getFullYear();
    return (
        <StyledBookDetails>
            <Link to="/" className="back__button">
                <BackArrowIcon />
                <span className="button__text">Back</span>
            </Link>

            {data && (
                <>
                    <div className="book__desktop__wrapper">
                        <div className="book__image">
                            <img src={bookDetails.image_url} alt={bookDetails.title} />

                            <div className="cta__button__desktop">
                                {/* <p className="available__text">23 Copies Available</p> */}
                                {bookDetails.available_copies > 0 ? (
                                    <p className="available__text">{bookDetails.available_copies} Copies Available</p>
                                ) : (
                                    <p className="available__text no_copies">Out of stock</p>
                                )}
                                <p className="book__price">
                                    {/* {console.log({ currency: bookDetails['currency'] })}
                                    {console.log(bookDetails.currency)} */}
                                    {bookDetails?.currency &&
                                        new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: bookDetails['currency'],
                                        }).format(bookDetails.price)}
                                </p>
                            </div>

                            {bookDetails.available_copies > 0 && (
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
                            <h1 className="book__title">{bookDetails.title}</h1>
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
                                                <p className="readers__count">{bookDetails.number_of_purchases}</p>
                                            </div>
                                            <div className="book__readers">
                                                <HeartIcon />
                                                <p className="readers__count">{bookDetails.likes}</p>
                                            </div>
                                        </div>

                                        <hr className="divider" />

                                        <div className="book__ratings">
                                            <p className="rating__number">
                                                <strong>Ratings</strong>: {bookDetails.rating}
                                            </p>
                                            <RatingStars rating={bookDetails.rating} />
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
                                        <p className="book__details__text">{bookDetails.publisher}</p>
                                    </div>
                                    <div className="book__released">
                                        <p className="book__details__title">released</p>
                                        <p className="book__details__text">{getFullDate(bookDetails.release_date)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description__container">
                                <p className="description">{bookDetails.full_description}</p>
                            </div>
                        </div>
                    </div>
                    {bookDetails.available_copies > 0 && (
                        <button className="cta__button cta__button__mobile">
                            <div className="button__details">
                                <CartIcon />
                                <div className="button__text">
                                    <p className="addToCart__text">Add to Cart</p>
                                    {bookDetails.available_copies > 0 ? (
                                        <p className="available__text">
                                            {bookDetails.available_copies} Copies Available
                                        </p>
                                    ) : (
                                        <p className="available__text no_copies">Out of stock</p>
                                    )}
                                </div>
                            </div>

                            <p className="book__price">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: bookDetails['currency'],
                                }).format(bookDetails.price)}
                            </p>
                        </button>
                    )}
                </>
            )}
        </StyledBookDetails>
    );
};
