import styled from 'styled-components';

const Container = styled.div`
    margin: 1em;
    padding: 1em;
    border-radius: 5px;

    color: black;
    width: 100%;
    background-color: white;

    @media screen and (max-width: 720px) {

        margin: 0;
        position: absolute;
        
        margin-top: 10px;
        width: calc(100% - 10px);

        left: 50%;
        transform: translateX(-50%);

        /* display: none; */
    }
`;

const Heading = styled.h4`
    border-bottom: 2px solid black;
    width: 100%;
`;

const ComponentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
`;
const Component = styled.div`
    margin: 10px;
    border: 2px solid black;

    width: 200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    border-radius: 12000px;

    p {
        margin-right: 5px;
    }
`;

export { Container, Heading, ComponentsContainer, Component };
