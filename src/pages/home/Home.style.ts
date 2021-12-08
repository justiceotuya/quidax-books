import styled from 'styled-components';

export const StyledHome = styled.div`
    display: grid;
    grid-auto-rows: 183px;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 78px;

    @media screen and (min-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`;
