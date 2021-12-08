import styled from 'styled-components';

export const StyledHeaderMobileSearch = styled.div<{ isMobileSearchOpen: boolean }>`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.04);
    z-index: ${(props) => (props.isMobileSearchOpen ? '2' : '-1')};
    transition: ${(props) => (props.isMobileSearchOpen ? 'z-index 0.01s ease-in;' : 'z-index 0.2s ease-in 0.2s;')};

    .search__top {
        display: flex;
        width: 100%;
        align-items: center;
        /* justify-content: space-between; */
        padding: 15px 30px 15px 23px;
        background: #ffffff;
        border: 1px solid #eeeeee;
        box-shadow: 0px 0px 40px rgb(0 0 0 / 5%);
        transform: ${(props) => (props.isMobileSearchOpen ? 'translateY(0%)' : 'translateY(-100%)')};
        transition: transform 0.1s ease-in 0.1s;
    }
    .back__button {
        margin: 0;
        margin-right: 23px;
        padding: 0;
        border: none;
        background: none;
        height: 24px;
        width: 24px;
        display: grid;
        place-items: center;
    }

    .search__bottom {
    }
    @media screen and (min-width: 720px) {
        display: none;
    }
`;
