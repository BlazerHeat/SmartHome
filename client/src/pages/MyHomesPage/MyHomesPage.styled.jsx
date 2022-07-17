import styled from 'styled-components';
import { CenterDiv } from '../../components';

const Main = styled(CenterDiv)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: var(--navbar-height);

    color: white;
`;

const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
`;

const CardsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    width: max-content;

    li {
        margin: 10px 0;
    }
`;

export { Main, CardsList, Container };
