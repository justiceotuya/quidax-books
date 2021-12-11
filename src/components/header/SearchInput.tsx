import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSearchText, useSearchContext } from '../../redux';

import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import { StyledSearchInput } from './styles/SearchInput.style';
interface Props {}

export const SearchInput = (props: Props) => {
    const navigate = useNavigate();
    const {
        dispatch,
        state: { searchText },
    } = useSearchContext();
    const [searchInputText, setSearchInputText] = useState('');

    const handleClickInputButton = () => {
        //reset the input
        if (searchInputText !== '') {
            setSearchInputText('');
            dispatch(updateSearchText(''));
        }
    };

    const handleChangeSearchInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        navigate('/books/search');
        setSearchInputText(e.target.value);
        dispatch(updateSearchText(e.target.value));
    };
    return (
        <StyledSearchInput>
            <div className="search__container">
                <input
                    type="text"
                    className="search__box"
                    value={searchInputText}
                    onChange={handleChangeSearchInputText}
                    placeholder="Search books, genres, authors, etc."
                />
                <button className="search__button" onClick={handleClickInputButton}>
                    {searchInputText === '' ? <SearchIcon /> : <CloseIcon />}
                </button>
            </div>
        </StyledSearchInput>
    );
};
