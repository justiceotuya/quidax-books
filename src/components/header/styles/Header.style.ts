import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;

    .logo__container {
    }
    .logo__mobile {
        display: block;
        display: flex;
    }
    .logo__desktop {
        display: none;
    }
    .header__action {
        display: flex;
        gap: 5px;
    }
    .action__button {
        border: none;
        padding: 0;
        margin: none;
        background: none;
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        position: relative;
    }
    .cart__numbers {
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        background: #65c100;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        display: grid;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .header__desktop__search {
        display: none;
    }

    @media screen and (min-width: 720px) {
        margin: 0 auto;
        padding: 25px 40px;
        height: 100px;
        gap: 40px;
        .logo__desktop {
            display: flex;
        }
        .logo__mobile {
            display: none;
        }
        .books__index {
            background: #f9f9fb;
            border-radius: 100%;
        }
        .search__icon {
            display: none;
        }
        .header__desktop__search {
            display: block;
            max-width: 540px;
            width: 100%;
        }
    }
`;
