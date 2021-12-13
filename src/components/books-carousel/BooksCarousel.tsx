import React, { useRef, useState } from 'react';
import { StyledBooksCarousel, StyledIndicator, StyledImageContainerLink } from './BooksCarousel.style';
import { ReactComponent as ArrowLeft } from './assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from './assets/arrow-right.svg';
import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as PeopleIcon } from './assets/people.svg';
import TinySlider from 'tiny-slider-react';

import { IModifiedBook } from '../../redux/slice/bookListSlice';
import { RatingStars } from '..';
import { handleParseYear, handleRenderAuthors, handleRenderGenre, handleRenderTags } from '../../utils';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
    data: IModifiedBook[];
}

export const BooksCarousel = (props: Props) => {
    const { data } = props;
    const sliderRef = useRef<any>(null);

    const [featuredBookList, setFeaturedBookList] = useState([] as IModifiedBook[]);
    const [selected, setSelected] = useState(0);

    React.useEffect(() => {
        if (data) {
            const featuredBooks = data.filter((item) => item.featured);
            //to great the slide effect double the featured item
            setFeaturedBookList([...featuredBooks]);
        }
    }, [data]);

    const handleClickRightButton = () => {
        if (selected === featuredBookList.length - 1) {
            setSelected(0);
        } else {
            setSelected((selected) => selected + 1);
        }
    };

    const handleClickLeftButton = () => {
        if (selected === 0) {
            setSelected(featuredBookList.length - 1);
        } else {
            setSelected((selected) => selected - 1);
        }
    };
    const handleClickNavButton = (dir: string) => sliderRef.current.slider.goTo(dir);

    const settings = {
        lazyload: true,
        center: true,
        navPosition: 'bottom',
        mouseDrag: true,
        loop: true,
        startIndex: 0,
        items: 2,
        gutter: 5,
        controls: false,
        nav: true,
        responsive: {
            420: {
                items: 3,
                gutter: 5,
            },
            720: {
                items: 4,
                gutter: 10,
            },
            1000: {
                items: 6,
                gutter: 20,
            },
        },
    };

    return (
        <StyledBooksCarousel arrayLength={featuredBookList.length} selected={selected}>
            <button className="carousel__control carousel__left" onClick={() => handleClickNavButton('prev')}>
                <ArrowLeft />
            </button>
            <TinySlider settings={settings} ref={sliderRef}>
                {featuredBookList.map((item, index) => (
                    <StyledImageContainerLink
                        to={`/books/${item.id}`}
                        key={item.id}
                        selected={selected}
                        position={index}
                    >
                        <img src={item.image_url} alt="" srcSet="" />
                        <div className="book__details">
                            {item.available_copies > 0 ? (
                                <p className="book__availability">Available</p>
                            ) : (
                                <p className="book__availability no_copies">Out of stock</p>
                            )}

                            <p className="book__title">{item.title}</p>

                            <p className="book__author">
                                {handleRenderAuthors(item.authors)}
                                <br />
                                {handleParseYear(item.release_date)}
                            </p>

                            <div className="book__genre">
                                <p className="book__details__title">Genre</p>
                                <p className="book__details__text">{handleRenderGenre(item.genres)}</p>
                            </div>

                            <div className="book__tags">
                                <p className="book__details__title">Tags</p>
                                <p className="book__details__text">{handleRenderTags(item.tags)}</p>
                            </div>

                            <div className="book__performance">
                                <div className="book__people">
                                    <div className="book__readers">
                                        <PeopleIcon />
                                        <p className="readers__count">{item.number_of_purchases}</p>
                                    </div>
                                    <div className="book__readers">
                                        <HeartIcon />
                                        <p className="readers__count">{item.likes}</p>
                                    </div>
                                </div>

                                <hr className="divider" />

                                <div className="book__ratings">
                                    <p className="rating__number">Rating: {item.rating}</p>
                                    <RatingStars rating={item.rating} />
                                </div>
                            </div>
                        </div>
                    </StyledImageContainerLink>
                ))}
            </TinySlider>

            <button className="carousel__control carousel__right" onClick={() => handleClickNavButton('next')}>
                <ArrowRight />
            </button>
            {/* <button className="carousel__control carousel__left" onClick={handleClickLeftButton}>
                <ArrowLeft />
            </button>
            <div className="imageSlider">
                {featuredBookList.map((item, index) => (
                    <StyledImageContainerLink
                        to={`/books/${item.id}`}
                        key={item.id}
                        selected={selected}
                        position={index}
                    >
                        <img src={item.image_url} alt="" srcSet="" />
                        <div className="book__details">
                            {item.available_copies > 0 ? (
                                <p className="book__availability">Available</p>
                            ) : (
                                <p className="book__availability no_copies">Out of stock</p>
                            )}

                            <p className="book__title">{item.title}</p>

                            <p className="book__author">
                                {handleRenderAuthors(item.authors)}
                                <br />
                                {handleParseYear(item.release_date)}
                            </p>

                            <div className="book__genre">
                                <p className="book__details__title">Genre</p>
                                <p className="book__details__text">{handleRenderGenre(item.genres)}</p>
                            </div>

                            <div className="book__tags">
                                <p className="book__details__title">Tags</p>
                                <p className="book__details__text">{handleRenderTags(item.tags)}</p>
                            </div>

                            <div className="book__performance">
                                <div className="book__people">
                                    <div className="book__readers">
                                        <PeopleIcon />
                                        <p className="readers__count">{item.number_of_purchases}</p>
                                    </div>
                                    <div className="book__readers">
                                        <HeartIcon />
                                        <p className="readers__count">{item.likes}</p>
                                    </div>
                                </div>

                                <hr className="divider" />

                                <div className="book__ratings">
                                    <p className="rating__number">Rating: {item.rating}</p>
                                    <RatingStars rating={item.rating} />
                                </div>
                            </div>
                        </div>
                    </StyledImageContainerLink>
                ))}
            </div>
            <button className="carousel__control carousel__right" onClick={handleClickRightButton}>
                <ArrowRight />
            </button> */}
            {/* height: 210px; width: 140px; */}

            {/* <div className="indicator__container">
                {featuredBookList.map((item, index) => (
                    <StyledIndicator
                        key={index}
                        selected={selected}
                        position={index}
                        onClick={() => setSelected(index)}
                    />
                ))}
            </div> */}
        </StyledBooksCarousel>
    );
};
