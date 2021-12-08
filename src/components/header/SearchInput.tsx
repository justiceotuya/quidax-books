import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import { StyledSearchInput } from './styles/SearchInput.style';
interface Props {}

export const SearchInput = (props: Props) => {
    const [searchText, setSearchText] = useState('');

    const handleClickInputButton = () => {
        //reset the input
        if (searchText !== '') {
            setSearchText('');
        } else {
            alert(`searching ${searchText}`);
        }
    };

    const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };
    return (
        <StyledSearchInput>
            <div className="search__container">
                <input
                    type="text"
                    className="search__box"
                    value={searchText}
                    onChange={handleChangeSearchText}
                    placeholder="Search books, genres, authors, etc."
                />
                <button className="search__button" onClick={handleClickInputButton}>
                    {searchText === '' ? <SearchIcon /> : <CloseIcon />}
                </button>
            </div>
        </StyledSearchInput>
    );
};
