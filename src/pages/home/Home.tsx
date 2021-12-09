import React from 'react';
import { BookCard, Layout } from '../../components';
import { StyledHome } from './Home.style';
import data from './assets/data.json';
interface Props {}

export const Home = (props: Props) => {
    return (
        <StyledHome>
            <div className="booksList__container">
                <p className="booksList__title">All Books</p>
                <div className="booksList__content">
                    {data.map((item) => {
                        return <BookCard key={item.id} {...item} />;
                    })}
                </div>
            </div>
        </StyledHome>
    );
};
