import styled from 'styled-components';

export const StyledBookDetails = styled.div`
    .back__button {
        border: none;
        background: none;
        width: 77px;
        padding: 0;
        display: grid;
        grid-template-columns: 18px 1fr;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 26px;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        text-decoration: none;
    }
    .button__text {
        display: block;
        width: 100%;
        text-align: center;
        text-decoration: none;
    }
    .book__image {
        width: 100%;
        max-width: 133.33px;
        height: 200px;
        background: #ffffff;
        box-shadow: 0px 30px 30px rgb(0 0 0 / 15%);
        margin-bottom: 32px;
    }
    .book__title {
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: #000000;
        margin-bottom: 25px;
    }
    .book__author {
    }
    .author__name,
    .book__year {
        font-weight: bold;
        font-size: 14px;
        line-height: 15px;
        color: #000000;
        margin-bottom: 25px;
    }
    .author__name {
        margin-bottom: 7px;
    }
    .book__year {
        font-weight: normal;
    }
    .divider {
    }
    .book__details__container {
        border-top: 1px solid #eeeeee;
        padding: 15px 0;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 37px;
    }
    .book__performance {
        display: flex;
        grid-area: 1/1/2/3;
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
    .book__details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .book__genre {
    }
    .book__details__title,
    .book__details__text {
        font-size: 14px;
        line-height: 15px;
        color: #000000;
    }
    .book__details__title {
        margin-bottom: 7px;
        font-weight: bold;
        text-transform: capitalize;
    }
    .description__container {
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #000000;
        white-space: break-spaces;
        margin-bottom: 150px;
    }
    .description {
    }
    .cta__button {
        padding: 0;
        width: 100%;
        display: flex;
        align-items: center;
        color: #ffff;
        background: #000000;
        box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);
        padding: 18px 18px 20px 18px;
        justify-content: space-between;
        gap: 10px;
        border: none;
    }
    .cta__button__mobile {
        width: calc(100% - 60px);
        position: fixed;
        bottom: 20px;
    }
    .cta__button__desktop {
        display: none;
    }
    .button__details {
        display: flex;
        align-items: center;
    }
    .button__text {
        padding-left: 23px;
        text-align: left;
    }
    .addToCart__text {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
    }
    .available__text {
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #65c100;
    }
    .book__price {
        font-weight: 300;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
        color: #ffffff;
    }

    @media screen and (min-width: 720px) {
        .book__desktop__wrapper {
            display: grid;
            grid-template-columns: 243px auto;
            grid-gap: 30px;
        }
        .book__details__content {
            max-width: 837px;
        }

        .book__image {
            max-width: unset;
            height: 364.5px;
        }
        .book__image img {
            height: 100%;
            width: 100%;
            margin-bottom: 70px;
        }
        .book__details {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
        }
        .cta__button__mobile {
            display: none;
        }
        .cta__button__desktop {
            display: block;
            .book__price {
                color: #000000;
                margin-bottom: 18px;
                font-size: 36px;
            }
            .available__text {
                margin-bottom: 6px;
                font-size: 14px;
            }
            svg {
                width: 24px;
                height: 24px;
            }
            .addToCart__text {
                text-align: center;
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #ffffff;
            }
        }
    }

    @media screen and (min-width: 1020px) {
        .book__desktop__wrapper {
            grid-gap: 100px;
        }
    }
`;
