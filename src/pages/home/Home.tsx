import React from 'react';
import { BookCard, Layout } from '../../components';
import { StyledHome } from './Home.style';

interface Props {}

export const Home = (props: Props) => {
    return (
        <Layout>
            <StyledHome>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </StyledHome>
        </Layout>
    );
};
