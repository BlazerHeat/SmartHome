import React from 'react';
import { SliderSwitch } from '../';
import {
    ComponentsContainer,
    Container,
    Heading,
    Component,
} from './ControlPage.styled';
import { axiosClinet } from '../../api/axiosClient';
import { toast } from 'react-toastify';
import deafultToastConfig from '../../defaultToastConfig.json';

function ControlPage({ selectedHomeId, componentsData, setComponentsData }) {
    const formatComponentName = (name) => {
        const words = name.split(' ');

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(' ');
    };
    const handleClick = (component_name, state, setState) => {
        const id = toast.loading('Updating state...', deafultToastConfig);

        axiosClinet
            .post('/db/changestate', {
                home_id: selectedHomeId,
                component_name,
                state: !state,
            })
            .then((res) => {
                componentsData.find(
                    (x) =>
                        x.home_id === selectedHomeId &&
                        x.component === component_name
                ).state = !state;
                setComponentsData(componentsData);

                toast.update(id, {
                    ...deafultToastConfig,
                    render: res.data.message,
                    type: 'success',
                    isLoading: false,
                });

                setState(!state);
            })
            .catch((err) => {
                console.error(err);

                const message = err.response.data.error || err.message;

                toast.update(id, {
                    ...deafultToastConfig,
                    render: message,
                    type: 'error',
                    isLoading: false,
                    position: 'top-left',
                });
            });
    };

    return (
        <Container>
            <Heading>Home ID: {selectedHomeId}</Heading>
            <ComponentsContainer>
                {componentsData
                    .filter((x) => x.home_id === selectedHomeId)
                    .map((x, i) => {
                        return (
                            <Component
                                key={`${selectedHomeId}-${x.component_name}-${x.state}-${i}`}
                            >
                                <p>
                                    {formatComponentName(
                                        x.component.replace('_', ' ')
                                    )}
                                </p>
                                <SliderSwitch
                                    checked={x.state}
                                    handleChange={(setState) => {
                                        handleClick(
                                            x.component,
                                            x.state,
                                            setState
                                        );
                                    }}
                                />
                            </Component>
                        );
                    })}
            </ComponentsContainer>
        </Container>
    );
}

export default ControlPage;
