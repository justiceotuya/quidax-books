import React from 'react';
import { Layout } from '../../components';
import { StyledHome } from './Home.style';

interface Props {}

export const Home = (props: Props) => {
    return (
        <Layout>
            <StyledHome>
                <p className="home">This is my home</p>
            </StyledHome>
        </Layout>
    );
};
