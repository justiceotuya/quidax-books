import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledBookCard = styled(Link)`
    display: grid;
    grid-template-columns: 110px 1fr;
    /* align-items: center; */
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        background: #ffffff;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.15);
    }
    .book__image {
        /* margin-right: 13px; */
        height: 100%;
        width: 100%;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .book__details {
        padding: 13px;
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
        max-width: 198px;
        align-items: center;
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
        height: 36px;
        width: 1px;
        background: #eeeeee;
        border: none;
        margin: 0 10px;
    }
    .book__ratings {
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }
    .rating__number {
        margin-bottom: 1.5px;
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
    .no_copies {
        color: #c12300;
    }
    .addToCart__button {
        border: none;
        padding: 0;
        margin: 0;
        background: none;
        display: flex;
        cursor: pointer;
        align-items: center;
        transform: translateY(0px);
        transition: transform 0.3s ease;

        :hover {
            opacity: 0.7;
        }

        :active {
            transform: translateY(3px);
            &:disabled {
                transform: translateY(0px);
            }
        }
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
