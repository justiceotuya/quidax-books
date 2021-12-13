import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledIndicator = styled.button<{
    selected: number;
    position: number;
}>`
    background: ${(props) => (props.selected === props.position ? '#64C000' : '#dddddd')};
    border: ${(props) => (props.selected === props.position ? '1px solid #64C000' : 'none')};
    width: 8px;
    height: 8px;
    padding: 0;
    cursor: pointer;
    border-radius: 100%;
    margin-right: 5px;
    transition: background 0.3s ease-in;
    :last-of-type {
        margin-right: 0;
    }
`;

export const StyledImageContainerLink = styled(Link)<{ selected: number; position: number }>`
    margin-right: 5px;
    height: 210px;
    width: 140px;
    background: #ffffff;
    /* box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15); */
    position: relative;
    /* transform: ${(props) => props.selected === props.position && 'scale(1.1)'}; */
    transition: transform 0.2s ease-in, box-shadow 0.2s ease-in;
    z-index: ${(props) => (props.selected === props.position ? '2' : '1')};

    :hover {
        .book__details {
            visibility: visible;
            opacity: 1;
        }
    }
    img {
        height: 100%;
        width: 100%;
        box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);

        /* object-fit: cover; */
    }

    .book__details {
        position: absolute;
        inset: 0 20px 0 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.607988) 0%, #000000 79.7%);
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 30px 12px;
        /* visibility:hidden; */
        opacity: 0;
        transition: 0.5s opacity ease-in;
    }
    .book__availability {
        color: #65c100;
        margin-bottom: 15px;
        font-size: 12px;
        line-height: 15px;
    }
    .no_copies {
        color: #c12300;
    }
    .book__title {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        margin-bottom: 6px;
    }
    .book__author {
        margin-bottom: 1px;
        font-size: 12px;
        line-height: 15px;
        color: #ffffff;
        margin-bottom: 19px;
    }
    .book__genre,
    .book__tags {
        font-size: 12px;
        line-height: 15px;
        color: #ffffff;
        margin-bottom: 19px;
    }
    .book__details__title,
    .book__details__title {
        font-weight: bold;
    }
    .book__details__text {
    }
    .book__ratings {
    }
    .rating__number {
    }

    .book__performance {
        display: flex;
        margin-bottom: 19px;
        max-width: 166px;
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
        color: #fff;
    }
    .divider {
        height: 36px;
        width: 1px;
        border: none;
        margin: 0 10px;
        box-shadow: 0px 0px 0px 0.3px #333333;
    }
    .book__ratings {
        font-size: 12px;
        line-height: 14px;
        color: #fff;
    }
    .rating__number {
        margin-bottom: 1.5px;
    }

    @media screen and (min-width: 720px) {
        /* margin-right: 20px; */
        width: 220px;
        height: 330px;
        /* transform: ${(props) => props.selected === props.position && 'scale(1.1)'}; */
        box-shadow: ${(props) => props.selected === props.position && '0px 15px 15px rgba(0, 0, 0, 0.15)'};
    }
`;

export const StyledBooksCarousel = styled.div<{ arrayLength: number; selected: number }>`
    overflow: hidden;
    position: relative;
    height: 271px;
    .tns-ovh {
        height: 271px;
    }
    .tns-nav {
        position: relative;
        top: -50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            background: #dddddd;
            width: 8px;
            height: 8px;
            padding: 0;
            border: none;
            cursor: pointer;
            border-radius: 100%;
            margin-right: 5px;
            transition: background 0.3s ease-in;
            :last-of-type {
                margin-right: 0;
            }
        }
        .tns-nav-active {
            background: #64c000;
            border: 1px solid #64c000;
        }
    }
    .imageSlider {
        margin-top: 20px;
        display: flex;
        /* width: ${(props) => `${props.arrayLength * 145}px`}; */
        /* transform: ${(props) =>
            `translateX(${
                (props.selected - 1) * -145 + window.innerWidth - 145 > 0
                    ? 0
                    : props.selected * -145 + window.innerWidth - 145
            }px)`}; */
        /* transform: ${(props) => `translateX(${props.selected * -window.innerWidth + 145}px)`};
        transition: transform 0.2s ease-in; */
    }

    .carousel__control {
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
        z-index: 3;
        background: linear-gradient(180deg, rgba(248, 248, 250, 0.8) 0%, #f8f8fa 51.36%, rgba(248, 248, 250, 0.8) 100%);
        opacity: 0.8;
        border: none;
        width: 30px;
        cursor: pointer;
        :active {
            opacity: 1;
        }

        svg {
            position: relative;
            top: -30px;
        }
    }
    .carousel__left {
        left: 0;
    }
    .carousel__right {
    }
    .indicator__container {
        margin-top: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 720px) {
        height: 405px;
        .tns-ovh {
            height: 405px;
        }
        .imageSlider {
            /* width: ${(props) => `${props.arrayLength * 220}px`}; */
            /* transform: ${(props) =>
                `translateX(${
                    (props.selected - 1) * -220 + window.innerWidth - 220 > 0
                        ? 0
                        : props.selected * -220 + (window.innerWidth - 220)
                }px)`}; */
            margin-top: 20px;
        }
        .indicator__container {
            margin-top: 42px;
        }
    }
    @media screen and (min-width: 1440px) {
        .imageSlider {
            transform: ${(props) =>
                `translateX(${
                    (props.selected - 1) * -220 + 1440 - 220 > 0 ? 0 : props.selected * -220 + (1440 - 220)
                }px)`};
        }
    }
`;
