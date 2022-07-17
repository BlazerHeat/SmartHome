import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Header, Nav, Logo, NavList, Icon } from './Navbar.styled';
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import UserContext from '../../utils/UserContext';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const { status, logout } = useContext(UserContext);

    return (
        <Header>
            <Nav>
                <Logo>
                    <NavLink to="/">
                        <img src="logo.png" alt="logo" />
                        <h1>SmartHome</h1>
                    </NavLink>
                </Logo>

                <NavList toshow={showMenu}>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>

                    {status === 'authenticated' ? (
                        <>
                            <li>
                                <NavLink to="/myhomes">My Homes</NavLink>
                            </li>
                            <li>
                                <Link to="/" onClick={logout}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">Signup</NavLink>
                            </li>
                        </>
                    )}
                </NavList>
                <Icon onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? (
                        <ImCross />
                    ) : (
                        <FiMenu style={{ transform: 'scale(2)' }} />
                    )}
                </Icon>
            </Nav>
        </Header>
    );
}

export default Navbar;
