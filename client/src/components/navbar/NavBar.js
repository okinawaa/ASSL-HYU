import React from 'react';
import {Nav, NavbarContainer, NavLogo} from "./navBarStyles";
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";

function NavBar({normal}) {


    return (
        <Nav normal={normal}>
            {
                normal &&
                <Link to={"/"}>
                    <img src={logo}/>
                </Link>
            }
            <NavbarContainer>
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