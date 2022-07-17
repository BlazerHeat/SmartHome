import styled, { css } from 'styled-components';

const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    padding: 0 1em;

    background: white;
    ${(props) =>
        props.bgimg &&
        css`
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
                url(${props.bgimg});
        `}
    background-position: center;
    background-size: cover;
    object-fit: contain;
`;

export default CenterDiv;
