import styled from 'styled-components';

const HomeCardDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: max-content;

    padding: 1em;
    border-radius: 4px;

    background-color: #0091ff;

    .main {
        margin-right: 10px;
        border-right: 2px solid white;
    }

    .heading {
        border-bottom: 2px solid white;

        display: flex;
        align-items: center;
        padding-right: 10px;
        svg {
            margin-left: 5px;
        }
    }

    .desc {
        color: #f4f4f4;
        margin-top: 10px;
        padding-right: 10px;
    }

    button {
        border: none;
        background: transparent;
        font-size: 1em;

        cursor: pointer;

        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        svg {
            margin-left: 5px;
            transition: all 0.1s ease-in-out;
        }

        :hover {
            svg {
                transform: translateX(5px);
            }
        }
    }
`;

export { HomeCardDiv };
