import React, { useEffect, useState } from 'react';
import { ScroolToTopDiv } from './ScroolToTop.styled';
import { RiArrowUpSLine } from 'react-icons/ri';

function ScroolToTop() {
    const [toHide, setToHide] = useState(true);

    const handleScrool = () => {
        setToHide(window.scrollY <= 10);
    };
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrool);

        return () => {
            window.removeEventListener('scroll', handleScrool);
        };
    }, []);

    return (
        <ScroolToTopDiv
            hide={toHide}
            onClick={handleClick}
            title="Scrool to Top"
        >
            <RiArrowUpSLine />
        </ScroolToTopDiv>
    );
}

export default ScroolToTop;
