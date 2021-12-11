import React, { useState } from 'react';
import { ReactComponent as BackIcon } from './assets/back-arrow.svg';
import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import { SearchInput } from './SearchInput';
import { StyledHeaderMobileSearch } from './styles/HeaderMobileSearch.style';
interface Props {
    isMobileSearchOpen: boolean;
    handleToggleMobileSearch: () => void;
}

export const HeaderMobileSearch = (props: Props) => {
    const [searchText, setSearchText] = useState('');
    const { isMobileSearchOpen, handleToggleMobileSearch } = props;

    const handleupdateSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleClickInputButton = () => {
        //reset the input
        if (searchText !== '') {
            setSearchText('');
        } else {
            alert(`searching ${searchText}`);
        }
    };

    return (
        <StyledHeaderMobileSearch isMobileSearchOpen={isMobileSearchOpen}>
            <div className="search__top">
                <button className="back__button" onClick={handleToggleMobileSearch}>
                    <BackIcon />
                </button>

                <SearchInput />
            </div>
            <div className="search__bottom" onClick={handleToggleMobileSearch}></div>
        </StyledHeaderMobileSearch>
    );
};
