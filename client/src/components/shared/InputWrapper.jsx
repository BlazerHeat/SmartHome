import styled from 'styled-components';

const InputWrapper = styled.div`
    margin-bottom: 20px;

    input {
        height: 41px;
        background: #f2f2f2;
        box-shadow: none !important;
        border: none;

        display: block;
        width: 100%;

        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;

        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        ::placeholder {
            color: #495057;
        }
    }
`;

export default InputWrapper;
