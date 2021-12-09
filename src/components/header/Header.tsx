import React, { useState } from 'react';
import { StyledHeader } from './styles/Header.style';

import { ReactComponent as BooksIcon } from './assets/books.svg';
import { ReactComponent as BrandMobileIcon } from './assets/brand-mobile.svg';
import { ReactComponent as BrandIcon } from './assets/brand.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import { HeaderMobileSearch } from './HeaderMobileSearch';
import { SearchInput } from './SearchInput';
import { toggleCartDisplay, useCartContext } from '../../redux';
import { Link } from 'react-router-dom';

export const Header = () => {
    const {
        state: { isCartOpen, cart },
        dispatch,
    } = useCartContext();

    const handleToggleCart = () => {
        dispatch(toggleCartDisplay());
    };

    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    const handleToggleMobileSearch = () => {
        setIsMobileSearchOpen((isOpen) => !isOpen);
    };

    const handleCalculateCartQuantity = () => {
        const total: number = cart.reduce((a, b) => Number(a) + Number(b.quantity), 0);

        return total;
    };

    return (
        <StyledHeader>
            <HeaderMobileSearch
                handleToggleMobileSearch={handleToggleMobileSearch}
                isMobileSearchOpen={isMobileSearchOpen}
            />
            <div className="logo__container">
                <a href="/" className="logo__mobile">
                    <BrandMobileIcon />
                </a>
                <a href="/" className="logo__desktop">
                    <BrandIcon />
                </a>
            </div>

            <div className="header__desktop__search">
                <SearchInput />
            </div>
            <div className="header__action">
                <button className="action__button search__icon" onClick={handleToggleMobileSearch}>
                    <SearchIcon />
                </button>
                <Link to="/" className="action__button books__index">
                    <BooksIcon />
                </Link>
                <button className="action__button" onClick={handleToggleCart}>
                    <CartIcon />
                    <p className="cart__numbers">{handleCalculateCartQuantity()}</p>
                </button>
            </div>
        </StyledHeader>
    );
};
