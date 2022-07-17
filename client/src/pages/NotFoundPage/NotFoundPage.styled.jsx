import styled from 'styled-components';
import { CenterDiv } from '../../components';

const ErrorCenterDiv = styled(CenterDiv)`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
    color: white;

    flex-direction: column;

    text-align: center;

    position: relative;

    p {
        font-family: 'Poppins', sans-serif;
        max-width: 400px;
        text-align: left;

        font-size: 15px;
    }

    button {
        font-weight: normal;
    }
`;

const HeadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 72px;
        border-right: 4px solid white;

        line-height: 65px;
        padding-right: 10px;
        margin-right: 10px;
        font-family: 'Brutal', 'Poppins', sans-serif;
    }
    h2 {
        font-size: 28px;
        text-align: left;
    }
`;

export { ErrorCenterDiv, HeadingDiv };
