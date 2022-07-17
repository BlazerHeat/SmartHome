import React from 'react';
import { StyledFooter } from './Footer.styled';

function Footer() {
    return (
        <StyledFooter>
            Copyright&copy; SmartHome&trade;, Since {new Date().getFullYear()}.
        </StyledFooter>
    );
}

export default Footer;
