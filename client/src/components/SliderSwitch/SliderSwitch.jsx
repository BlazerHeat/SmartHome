import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

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
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
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
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
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
