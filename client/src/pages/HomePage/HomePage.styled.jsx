import styled from 'styled-components';
import bp from '../../breakpoints';
import { CenterDiv } from '../../components';
import { Fade, Flip } from 'react-reveal';
import withReveal from 'react-reveal/withReveal';

const Main = styled(CenterDiv)`
    color: white;

    font-size: 2rem;

    text-align: center;

    @media screen and (max-width: ${bp.sm}) {
        font-size: 1.3rem;
    }
`;

const Contents = withReveal(
    styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    <Fade bottom />
);

const InfoSection = styled.section`
    height: 100vh;
    color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    .heading {
        position: absolute;
        top: 0;

        font-weight: bold;
        font-size: 2em;

        border-bottom: 5px solid black;

        margin-top: 100px;
    }
`;

const IconsDiv = withReveal(
    styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        flex-wrap: wrap;

        margin: 0 1em;
    `,
    <Flip bottom cascade />
);

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px;

    svg {
        font-size: 5em;
        color: #0091ff;
    }

    p {
        margin-left: 10px;
        font-size: 1.5em;
    }

    .icon-desc {
        font-weight: bold;
        color: #646464;
    }
`;

export { Main, Contents, InfoSection, IconsDiv, IconWrapper };
