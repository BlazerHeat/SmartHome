import styled from 'styled-components';

const Form = styled.form`
    color: black;

    padding: 30px;
    margin: 0 1em;

    width: 400px;

    background: white;
    border-radius: 3px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

    font-family: 'Roboto', sans-serif;

    h2 {
        font-size: 1.5em;
        color: #333;
        font-weight: bolder;

        line-height: 1.2;
    }
    p {
        color: #999;
        margin-bottom: 1rem;
    }

    hr {
        margin: 0 -30px 20px;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export default Form;
