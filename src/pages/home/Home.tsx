import React, { useEffect } from 'react';
import { BookCard, BooksCarousel, Layout } from '../../components';
import { StyledHome } from './Home.style';
import data from './assets/data.json';
import { useLazyQuery, useQuery } from '@apollo/client';
import { getBooksList } from '../../services/queries/getBooksList';
import { Book } from '../../types';
import { useBookListContext } from '../../redux/slice';
import { saveBookList } from '../../redux';
interface Props {}

interface BookListData {
    books: Book[];
}

export const Home = (props: Props) => {
    const {
        state: { bookList },
        dispatch,
    } = useBookListContext();
    const [fetchData, { loading, error, data }] = useLazyQuery(getBooksList);

    //fetch data on load
    useEffect(() => {
        //we are using redux data, if redux data is empty, fetch data from
        //server and populate the reddux store
        if (bookList.length === 0) {
            !data ? fetchData() : dispatch(saveBookList(data.books));
        }
    }, [data, bookList]);

    return (
        <StyledHome>
            {loading && <p>Loading .... </p>}
            {bookList && !loading && (
                <>
                    <div className="carousel__container">
                        <p className="carousel__title">Featured Books</p>
                        <BooksCarousel data={bookList} />
                    </div>
                    <div className="booksList__container">
                        <p className="booksList__title">All Books</p>
                        <div className="booksList__content">
                            {bookList.map((item) => {
                                return <BookCard key={item.id} {...item} />;
                            })}
                        </div>
                    </div>
                </>
            )}
        </StyledHome>
    );
};
