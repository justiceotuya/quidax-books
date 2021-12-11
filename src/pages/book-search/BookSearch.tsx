import React, { useState, useEffect } from 'react';
import { BookCard } from '../../components';
import { useSearchContext } from '../../redux';
import { useBookListContext } from '../../redux/slice';
import { IModifiedBook } from '../../redux/slice/bookListSlice';
import { StyledBookSearch } from './BookSearch.style';

interface Props {}

export const BookSearch = (props: Props) => {
    const {
        state: { searchText },
    } = useSearchContext();

    const {
        state: { bookList },
    } = useBookListContext();

    const [bookListResult, setBookListResult] = useState([] as IModifiedBook[]);

    useEffect(() => {
        const handleBookSearch = () => {
            if (searchText === '') {
                setBookListResult([]);
            } else {
                const newBookList = bookList.filter(
                    (item) =>
                        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.authors.filter((author) => author.name.toLowerCase().includes(searchText.toLowerCase()))
                            .length > 0 ||
                        item.genres.filter((genre) => genre.name.toLowerCase().includes(searchText.toLowerCase()))
                            .length > 0 ||
                        item.tags.filter((tag) => tag.name.toLowerCase().includes(searchText.toLowerCase())).length > 0,
                );
                setBookListResult(newBookList);
            }
        };

        handleBookSearch();
    }, [searchText, bookList]);

    const handleResultText = () => {
        if (searchText === '' && bookListResult.length === 0) {
            return <p className="booksList__title">Please search for books</p>;
        } else {
            if (bookListResult.length === 0) {
                return (
                    <p className="booksList__title">
                        no results <span>found for</span> {searchText};
                    </p>
                );
            } else {
                return (
                    <p className="booksList__title">
                        {bookListResult.length} results <span>found for</span> `{searchText}`
                    </p>
                );
            }
        }
    };

    return (
        <StyledBookSearch>
            <div className="booksList__container">
                {handleResultText()}
                <div className="booksList__content">
                    {bookListResult &&
                        bookListResult.map((item) => {
                            return <BookCard key={item.id} {...item} />;
                        })}
                </div>
            </div>
        </StyledBookSearch>
    );
};
