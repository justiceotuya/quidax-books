import styled from 'styled-components';

export const StyledBookCard = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    :hover {
        background: #ffffff;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.15);
    }
    .book__image {
        margin-right: 13px;
        height: 100%;
    }
    .book__details {
    }
    .book__title {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin-bottom: 6px;
    }
    .book__author {
        margin-bottom: 1px;
    }
    .book__author,
    .book__genre {
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        color: #000000;
    }
    .book__genre {
        margin-bottom: 14px;
    }
    .book__performance {
        display: flex;
        margin-bottom: 19px;
    }
    .book__people {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .book__readers {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .readers__count {
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        color: #000000;
    }
    .divider {
    }
    .book__ratings {
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }
    .rating__number {
    }
    .book__availability__container {
        display: flex;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        margin-bottom: 11px;
    }
    .book__price {
        margin-right: 6px;
    }
    .book__availability {
        color: #65c100;
    }
    .addToCart__button {
        border: none;
        padding: 0;
        margin: 0;
        background: none;
        display: flex;
        cursor: pointer;
        align-items: center;

        svg {
            height: 18px;
            width: 18px;
        }
    }
    .button__text {
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        margin-left: 5px;
    }
`;
