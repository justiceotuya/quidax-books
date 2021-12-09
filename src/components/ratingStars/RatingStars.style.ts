import styled from 'styled-components';
import { ReactComponent as StarIcon } from './assets/star.svg';

export const StyledStarIcon = styled(StarIcon)<{
    position: number;
    rating: number;
}>`
    color: ${(props) => (props.rating <= props.position ? '#dddddd' : '#EBA430')};
`;
export const StyledRatingStars = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;
