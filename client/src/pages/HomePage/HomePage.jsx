import React, { useRef, useEffect, useContext, useState } from 'react';
import Typed from 'typed.js';
import UserContext from '../../utils/UserContext';
import {
    Contents,
    IconsDiv,
    IconWrapper,
    InfoSection,
    Main,
} from './HomePage.styled';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { MdDevices } from 'react-icons/md';
import CountUp from 'react-countup';
import { axiosClinet } from '../../api/axiosClient';

const typings = ['Create your own!', 'SmartHome!'];
function formatName(name) {
    return name.toLowerCase().charAt(0).toUpperCase() + name.slice(1);
}

function HomePage() {
    const { user, status } = useContext(UserContext);
    const [counts, setCounts] = useState({ users: 0, homes: 0, components: 0 });

    const el = useRef(null);

    useEffect(
        () => {
            const typed = new Typed(el.current, {
                strings: typings,
                typeSpeed: 20,
                backSpeed: 20,
                backDelay: 700,
                loop: true,
            });

            axiosClinet
                .get('/db/counts')
                .then((res) => {
                    const { usersCount, homesCount, componentsCount } =
                        res.data;
                    setCounts({
                        users: usersCount,
                        homes: homesCount,
                        components: componentsCount,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });

            return () => {
                typed.destroy();
            };
        },
        // eslint-disable-next-line
        []
    );

    return (
        <>
            <Main bgimg="/images/bg2.jpeg">
                <Contents>
                    <h1>
                        Welcome{' '}
                        {status === 'authenticated'
                            ? formatName(user.username)
                            : 'To'}
                        ,
                    </h1>
                    <h2>SmartHome Technologies&trade;</h2>
                    <div>
                        <span ref={el}></span>
                    </div>
                </Contents>
            </Main>

            <InfoSection>
                <h1 className="heading">STATISTICS</h1>
                <IconsDiv>
                    <IconWrapper>
                        <AiOutlineUser />
                        <p>
                            <CountUp
                                end={counts.users * 1000 * Math.random()}
                                separator=","
                            />
                            <br />
                            <span className="icon-desc">Users</span>
                        </p>
                    </IconWrapper>
                    <IconWrapper>
                        <AiOutlineHome />
                        <p>
                            <CountUp
                                end={counts.homes * 1000 * Math.random()}
                                separator=","
                            />
                            <br />
                            <span className="icon-desc">Homes</span>
                        </p>
                    </IconWrapper>
                    <IconWrapper>
                        <MdDevices />
                        <p>
                            <CountUp
                                end={counts.components * 10000 * Math.random()}
                                separator=","
                            />
                            <br />
                            <span className="icon-desc">Components</span>
                        </p>
                    </IconWrapper>
                </IconsDiv>
            </InfoSection>
        </>
    );
}

export default HomePage;
