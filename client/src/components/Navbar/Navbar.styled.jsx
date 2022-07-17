import styled from 'styled-components';
import bp from '../../breakpoints';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: var(--navbar-height);

    color: white;

    background: var(--primary-color);

    z-index: 100;

    user-select: none;

    .active {
        ::before {
            width: 100%;
        }
    }
`;

const Nav = styled.nav`
    width: 90%;
    max-width: ${bp.lg};
    height: 100%;

    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: white;

        img {
            max-height: var(--navbar-height);
            border-radius: 50%;
            padding: 7px;
        }
    }
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    list-style: none;

    li {
        margin: 0 7px;
        position: relative;

        a {
            color: white;
            text-decoration: none;
            padding: 2px 5px;

            position: relative;

            ::before {
                content: '';
                height: 2px;
                width: 0;

                position: absolute;
                bottom: 0;
                left: 0;

                background: white;
                transition: width 0.175s ease;

                border-radius: 2px;
            }

            :hover {
                ::before {
                    width: 100%;
                }
            }
        }
    }

    @media screen and (max-width: ${bp.sm}) {
        position: fixed;
        background-color: rgba(19, 19, 19, 0.897);

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        padding-top: 70px;

        transition: top 0.23s ease-in-out;

        left: 0;

        li {
            margin: 10px 5px;
        }
        top: ${(props) => (props.toshow ? `var(--navbar-height)` : '-100vh')};
    }
`;

const Icon = styled.div`
    cursor: pointer;
    display: none;

    padding: 2px;

    @media screen and (max-width: ${bp.sm}) {
        display: block;
    }
`;

export { Header, Nav, Logo, NavList, Icon };
