import styled from 'styled-components';

export const StyledLayout = styled.div`
    min-height: 100vh;
    /* width: 100vw; */
    background: #fefefe;
    .layout__content {
        /* max-width: 1440px; */
        margin: 0 auto;
        height: calc(100vh - 72px);
        /* padding: 30px; */
        overflow: auto;
    }

    @media screen and (min-width: 720px) {
        .layout__content {
            height: calc(100vh - 100px);
        }
    }
`;
