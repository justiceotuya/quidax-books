import styled from 'styled-components';

export const StyledLayout = styled.div`
    min-height: 100vh;
    /* width: 100vw; */
    background: #fefefe;
    .layout__content {
        max-width: 1440px;
        margin: 0 auto;
        padding: 40px;
        min-height: calc(100vh - 100px);
    }
`;
