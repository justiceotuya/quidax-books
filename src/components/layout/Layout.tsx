import React, { useState } from 'react';
import Cart from '../cart';
import Header from '../header';
import { StyledLayout } from './Layout.style';
import { ILayoutProps } from './types';

export const Layout = (props: ILayoutProps) => {
    const { children } = props;
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleToggleCart = () => setIsCartOpen((isOpen) => !isOpen);

    return (
        <StyledLayout>
            <Header isCartOpen={isCartOpen} handleToggleCart={handleToggleCart} />
            <Cart isCartOpen={isCartOpen} handleToggleCart={handleToggleCart} />
            <main className="layout__content">{children}</main>
        </StyledLayout>
    );
};
