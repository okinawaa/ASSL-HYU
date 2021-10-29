import React from 'react';
import {Nav, NavbarContainer, NavLogo} from "./navBarStyles";
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";
import {isMobile} from 'react-device-detect';

function NavBar({normal}) {


    return (
        <Nav normal={normal}>
            {
                normal &&
                <Link to={"/"}>
                    <img src={logo} alt={logo}/>
                </Link>
            }
            <NavbarContainer isMobile={isMobile}>
                <NavLogo to={"/"}>
                    Home
                </NavLogo>
                <NavLogo to={"/members"}>
                    Members
                </NavLogo>
                <NavLogo to={"/research"}>
                    Research
                </NavLogo>
                <NavLogo to={"/publication"}>
                    Publication
                </NavLogo>
            </NavbarContainer>
        </Nav>

    )
}

export default NavBar;