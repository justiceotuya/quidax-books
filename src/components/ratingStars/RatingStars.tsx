import React from 'react';
import { StyledStarIcon, StyledRatingStars } from './RatingStars.style';
interface Props {
    rating: number;
}
export const RatingStars = (props: Props) => {
    const { rating } = props;
    return (
        <StyledRatingStars>
            {Array.from(new Array(5)).map((item, index) => (
                <StyledStarIcon key={index} rating={Math.floor(rating)} position={index} />
            ))}
        </StyledRatingStars>
    );
};
