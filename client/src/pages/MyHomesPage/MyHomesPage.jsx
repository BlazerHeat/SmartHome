import React, { useContext, useEffect, useState } from 'react';
import { axiosClinet } from '../../api/axiosClient';
import { ControlPage, HomeCard } from '../../components';
import UserContext from '../../utils/UserContext';
import { CardsList, Main, Container } from './MyHomesPage.styled';
function MyHomesPage() {
    const { user } = useContext(UserContext);
    const [cardData, setCardData] = useState([]);
    const [componentsData, setComponentsData] = useState([]);
    const [selectedHomeId, setSelectedHomeId] = useState(1);

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
                                />
                            </li>
                        );
                    })}
                </CardsList>
                {componentsData.length > 0 && (
                    <ControlPage
                        {...{
                            selectedHomeId,
                            componentsData,
                            setComponentsData,
                        }}
                    />
                )}
            </Container>
        </Main>
    );
}

export default MyHomesPage;
