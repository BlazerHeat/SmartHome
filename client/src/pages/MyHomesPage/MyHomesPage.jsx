import React, { useContext, useEffect, useState } from 'react';
import { axiosClinet } from '../../api/axiosClient';
import { ControlPage, HomeCard } from '../../components';
import UserContext from '../../utils/UserContext';
import { CardsList, Main, Container } from './MyHomesPage.styled';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: 100,
    },
};

function MyHomesPage() {
    const { user } = useContext(UserContext);
    const [cardData, setCardData] = useState([]);
    const [componentsData, setComponentsData] = useState([]);
    const [selectedHomeId, setSelectedHomeId] = useState(1);
    const [controllerStatus, setControllerStatus] = useState('offline');

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(
        () => {
            axiosClinet
                .get(`/db/userhomes/${user.email}`)
                .then((res) => {
                    setCardData(res.data.cardData);
                    setComponentsData(res.data.componentsData);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        // eslint-disable-next-line
        []
    );

    useEffect(() => {
        axiosClinet
            .get(`/controllerstatus/${selectedHomeId}`)
            .then((res) => {
                console.log(res);
                setControllerStatus(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [selectedHomeId]);

    return (
        <Main bgimg="/images/bg2.jpeg">
            <h1>Homes registered to {user.email}</h1>
            <Container>
                <CardsList>
                    {cardData.map((home) => {
                        return (
                            <li key={home.home_id}>
                                <HomeCard
                                    {...home}
                                    setSelectedHomeId={setSelectedHomeId}
                                    openModal={openModal}
                                />
                            </li>
                        );
                    })}
                </CardsList>
                {componentsData.length > 0 &&
                    (window.innerWidth > 720 ? (
                        <ControlPage
                            {...{
                                selectedHomeId,
                                componentsData,
                                setComponentsData,
                                controllerStatus,
                            }}
                        />
                    ) : (
                        <Modal isOpen={modalIsOpen} style={customStyles}>
                            <button onClick={closeModal}>Close Panel</button>
                            <ControlPage
                                {...{
                                    selectedHomeId,
                                    componentsData,
                                    setComponentsData,
                                    controllerStatus,
                                }}
                            />
                        </Modal>
                    ))}
            </Container>
        </Main>
    );
}

export default MyHomesPage;
