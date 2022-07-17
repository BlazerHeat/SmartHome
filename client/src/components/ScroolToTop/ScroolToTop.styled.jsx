import styled, { css } from 'styled-components';

const ScroolToTopDiv = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;

    margin: 10px;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    background-color: #0488e1;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    font-size: 2em;

    cursor: pointer;

    transition: bottom 0.2s ease-in-out;
    z-index: 90;

    ${({ hide }) =>
        hide &&
        css`
            bottom: -70px;
        `}
`;

export { ScroolToTopDiv };
