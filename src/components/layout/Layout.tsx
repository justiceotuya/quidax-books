import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { saveBookList } from '../../redux';
import { useBookListContext } from '../../redux/slice';
import { getBooksList } from '../../services/queries/getBooksList';
import Cart from '../cart';
import Header from '../header';
import { StyledLayout } from './Layout.style';
import { ILayoutProps } from './types';

export const Layout = (props: ILayoutProps) => {
    const { children } = props;

    return (
        <StyledLayout>
            <Header />
            <Cart />
            <main className="layout__content">{children}</main>
        </StyledLayout>
    );
};
