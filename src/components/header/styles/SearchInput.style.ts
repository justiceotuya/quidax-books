import styled from 'styled-components';

export const StyledSearchInput = styled.div`
    width: 100%;
    .search__container {
        width: 100%;
        height: 40px;
        display: grid;
        grid-template-columns: 1fr 40px;
    }
    .search__box {
        width: 100%;
        border: none;
        background: #ffffff;
        border: 1px solid #dddddd;
        box-sizing: border-box;
        border-right: none;
        padding: 8px 22px;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .search__button {
        background: #f9f9fb;
        border: 1px solid #dddddd;
        box-sizing: border-box;
        display: grid;
        place-items: center;
        padding: 0;
        width: 40px;
    }
`;
