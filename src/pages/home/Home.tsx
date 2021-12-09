import React from 'react';
import { BookCard, Layout } from '../../components';
import { StyledHome } from './Home.style';
import data from './assets/data.json';
import { useQuery } from '@apollo/client';
import { getBooksList } from '../../services/queries/getBooksList';
import { Book } from '../../types';
interface Props {}

interface BookListData {
    books: Book[];
}

export const Home = (props: Props) => {
    const { loading, error, data } = useQuery<BookListData>(getBooksList);
    return (
        <StyledHome>
            <div className="booksList__container">
                <p className="booksList__title">All Books</p>
                <div className="booksList__content">
                    {data &&
                        data.books.map((item) => {
                            return <BookCard key={item.id} {...item} />;
                        })}
                </div>
            </div>
        </StyledHome>
    );
};
