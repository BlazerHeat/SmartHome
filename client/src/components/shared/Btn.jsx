import styled from 'styled-components';

const Btn = styled.button`
    cursor: pointer;

    padding: 0.5rem 1rem;
    line-height: 1.5;

    font-size: 16px;
    font-weight: bold;
    border: none;
    min-width: 140px;

    color: #fff;
    background-color: #007bff;

    border: 3px;

    transition: background-color 0.25s ease;

    :hover {
        background-color: #0099ff !important;
    }
`;

export default Btn;
