import React from 'react';
import Header from '../header';
import { StyledLayout } from './Layout.style';
import { ILayoutProps } from './types';

export const Layout = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <StyledLayout>
            <Header />
            <main className="layout__content">{children}</main>
        </StyledLayout>
    );
};
