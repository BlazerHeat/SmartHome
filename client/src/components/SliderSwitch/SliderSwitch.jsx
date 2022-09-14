import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 37px;
    height: 21px;

    user-select: none;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: all 0.4s;

        ::before {
            position: absolute;
            content: '';
            height: 15px;
            width: 15px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: all 0.4s;
        }
    }

    input:checked + .slider {
        background-color: #2196f3;
    }
    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
        transform: translateX(15px);
    }

    .slider.round {
        border-radius: 10px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

function SliderSwitch({ checked, handleChange }) {
    const [state, setState] = useState(checked);

    return (
        <Switch>
            <input
                type="checkbox"
                checked={state}
                onChange={() => handleChange(setState)}
            />
            <span className="slider round"></span>
        </Switch>
    );
}

export default SliderSwitch;
