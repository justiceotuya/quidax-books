import React, { useState, useEffect } from 'react';
import { StyledBookDetails } from './BookDetails.style';
import details from './assets/book-details.json';
import { ReactComponent as BackArrowIcon } from './assets/arrow-back.svg';
import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as PeopleIcon } from './assets/people.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';

import { RatingStars } from '../../components';
import { Link } from 'react-router-dom';

import { useLazyQuery, useQuery } from '@apollo/client';
import { Book } from '../../types';
import { getBookDetail } from '../../services/queries/getBookDetails';
import {
    useCartContext,
    addItemToCart,
    toggleCartDisplay,
    subtractQuantityFromBookItem,
    getCurrentActiveBook,
    saveBookList,
} from '../../redux';
import { useBookListContext } from '../../redux/slice';
import { getBooksList } from '../../services/queries/getBooksList';
import {
    handleParseYear,
    handleRenderAuthors,
    handleRenderGenre,
    handleRenderTags,
    handleFormatCurrency,
} from '../../utils';

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

    const { dispatch, state } = useCartContext();
    const {
        state: { currentBook, bookList },
    } = useBookListContext();

    const [fetchData, { loading, error, data }] = useLazyQuery(getBooksList);

    const [bookData, setBookData] = useState({});

    //on load hold a copy of the book data, this is what is to be sent to the redux
    //store
    useEffect(() => {
        currentBook && setBookData(currentBook);
    }, [currentBook]);

    //fetch data on load
    useEffect(() => {
        // fetch whole book data so that current book can be populated, this only runs if there is no book data or when user directly access the page from the link instead of from the home page
        const handleFetchWholeBookDataIfBookDataIsNotPresent = () => {
            if (bookList.length === 0) {
                !data ? fetchData() : dispatch(saveBookList(data.books));
            }
        };

        handleFetchWholeBookDataIfBookDataIsNotPresent();
    }, [data, bookList]);

    useEffect(() => {
        dispatch(getCurrentActiveBook({ id: bookId }));
    }, [bookList]);

    const getFullDate = (date: string) => {
        const day = new Date(date).getDay();
        const monthName = months[new Date(date).getMonth()];
        const year = new Date(date).getFullYear();
        return `${day} ${monthName}, ${year}`;
    };

    const handleAddItemToCart = (event: any) => {
        //add item to cart
        dispatch(addItemToCart({ ...bookData, available_copies: currentBook.availableStoreBooks }));
        //subtract item from the items list
        dispatch(subtractQuantityFromBookItem(bookData));
        //get current active book, which refreshes the page and sync the changes
        dispatch(getCurrentActiveBook({ id: bookId }));
        //open the cart
        dispatch(toggleCartDisplay());
    };

    // const handleParseYear = () => new Date(currentBook.release_date).getFullYear();
    return (
        <StyledBookDetails>
            <Link to="/" className="back__button">
                <BackArrowIcon />
                <span className="button__text">Back</span>
            </Link>
            {/* TODO: skeleton screen for loading */}
            {loading && <p>Loading...</p>}
            {Object.keys(currentBook).length > 0 && (
                <>
                    <div className="book__desktop__wrapper">
                        <div className="book__image">
                            <img src={currentBook.image_url} alt={currentBook.title} />

                            <div className="cta__button__desktop">
                                {/* <p className="available__text">23 Copies Available</p> */}
                                {currentBook.available_copies > 0 ? (
                                    <p className="available__text">{currentBook.available_copies} Copies Available</p>
                                ) : (
                                    <p className="available__text no_copies">Out of stock</p>
                                )}
                                <p className="book__price">
                                    {handleFormatCurrency(currentBook['currency'], currentBook.price)}
                                </p>
                            </div>

                            {currentBook.available_copies > 0 && (
                                <button className="cta__button cta__button__desktop" onClick={handleAddItemToCart}>
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
                            <h1 className="book__title">{currentBook.title}</h1>
                            <div className="book__author">
                                <p className="author__name">{handleRenderAuthors(currentBook.authors)}</p>
                                <p className="book__year">{handleParseYear(currentBook.release_date)}</p>
                            </div>

                            <div className="book__details__container">
                                <div className="book__details">
                                    <div className="book__performance">
                                        <div className="book__people">
                                            <div className="book__readers">
                                                <PeopleIcon />
                                                <p className="readers__count">{currentBook.number_of_purchases}</p>
                                            </div>
                                            <div className="book__readers">
                                                <HeartIcon />
                                                <p className="readers__count">{currentBook.likes}</p>
                                            </div>
                                        </div>

                                        <hr className="divider" />

                                        <div className="book__ratings">
                                            <p className="rating__number">
                                                <strong>Ratings</strong>: {currentBook.rating}
                                            </p>
                                            <RatingStars rating={currentBook.rating} />
                                        </div>
                                    </div>

                                    <div className="book__genre">
                                        <p className="book__details__title">Genre</p>
                                        <p className="book__details__text">{handleRenderGenre(currentBook.genres)}</p>
                                    </div>
                                    <div className="book__tags">
                                        <p className="book__details__title">tags</p>
                                        <p className="book__details__text">{handleRenderTags(currentBook.tags)}</p>
                                    </div>
                                    <div className="book__publisher">
                                        <p className="book__details__title">publisher</p>
                                        <p className="book__details__text">{currentBook.publisher}</p>
                                    </div>
                                    <div className="book__released">
                                        <p className="book__details__title">released</p>
                                        <p className="book__details__text">{getFullDate(currentBook.release_date)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description__container">
                                <p className="description">{currentBook.full_description}</p>
                            </div>
                        </div>
                    </div>
                    {currentBook.available_copies > 0 && (
                        <button className="cta__button cta__button__mobile" onClick={handleAddItemToCart}>
                            <div className="button__details">
                                <CartIcon />
                                <div className="button__text">
                                    <p className="addToCart__text">Add to Cart</p>
                                    {currentBook.available_copies > 0 ? (
                                        <p className="available__text">
                                            {currentBook.available_copies} Copies Available
                                        </p>
                                    ) : (
                                        <p className="available__text no_copies">Out of stock</p>
                                    )}
                                </div>
                            </div>

                            <p className="book__price">
                                {handleFormatCurrency(currentBook['currency'], currentBook.price)}
                            </p>
                        </button>
                    )}
                </>
            )}
        </StyledBookDetails>
    );
};
