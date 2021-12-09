import styled from 'styled-components';

export const StyledCartItem = styled.div`
    padding-bottom: 25px;
    border-bottom: 1px solid #eeeeee;
    padding-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :nth-of-type(1) {
        padding-top: 0;
    }
    .book__details__container {
        display: flex;
    }
    .book__image {
        width: 60px;
        height: 90px;
        margin-right: 10px;
    }
    .book__details {
    }
    .book__title {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin-bottom: 5px;
    }
    .book__author {
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin-bottom: 29px;
    }
    .remove__button {
        border: none;
        padding: 0;
        margin: 0;
        background: none;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        cursor: pointer;
        padding: 3px 19px 3px 2px;
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
    }
    .book__quantity__container {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
    .book__price {
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin-bottom: 5px;
    }
    .book__action__container {
        display: flex;
        width: 89px;
        height: 30px;
        border: 1px solid #dddddd;
        margin-bottom: 17px;
    }
    .quantity__input,
    .action__button {
        width: 30px;
    }
    .quantity__input {
        width: 30px;
        border: none;
        border-right: 1px solid #dddddd;
        border-left: 1px solid #dddddd;
        padding: 0;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .action__button {
        border: none;
        margin: 0;
        padding: 0;
        display: grid;
        place-content: center;
        background: #f9f9fb;
        height: 28px;
        cursor: pointer;
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
    }
    .add__button {
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
    }
    .book__total__price {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }
`;
