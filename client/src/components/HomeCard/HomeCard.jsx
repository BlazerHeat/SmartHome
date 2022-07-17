import React from 'react';
import { HomeCardDiv } from './HomeCard.styled';
import { AiOutlineArrowRight, AiOutlineHome } from 'react-icons/ai';

function HomeCard({ home_name, total_components, home_id, setSelectedHomeId }) {
    const handleClick = () => {
        setSelectedHomeId(home_id);
    };
    return (
        <HomeCardDiv>
            <div className="main">
                <h3 className="heading">
                    {home_name}
                    <AiOutlineHome />
                </h3>
                <p className="desc">Total Components: {total_components}</p>
            </div>
            <button onClick={handleClick}>
                Control
                <AiOutlineArrowRight />
            </button>
        </HomeCardDiv>
    );
}

export default HomeCard;
