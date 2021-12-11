import styled from 'styled-components';

export const StyledHome = styled.div`
    .booksList__container {
    }
    .booksList__title {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        padding-bottom: 14px;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 25px;
    }
    .booksList__content {
        display: grid;
        grid-auto-rows: fit-content;
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
        grid-column-gap: 78px;
    }

    @media screen and (min-width: 720px) {
        .booksList__content {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }
    }
`;
