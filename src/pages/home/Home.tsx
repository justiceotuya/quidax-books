import React, { useEffect } from 'react';
import { BookCard, Layout } from '../../components';
import { StyledHome } from './Home.style';
import data from './assets/data.json';
import { useQuery } from '@apollo/client';
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

    return (
        <StyledHome>
            <div className="booksList__container">
                <p className="booksList__title">All Books</p>
                <div className="booksList__content">
                    {/* {loading && <p>Loading .... </p>} */}
                    {data &&
                        bookList.map((item) => {
                            return <BookCard key={item.id} {...item} />;
                        })}
                </div>
            </div>
        </StyledHome>
    );
};
