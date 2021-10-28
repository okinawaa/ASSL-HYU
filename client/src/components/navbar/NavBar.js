import React, {useState} from 'react';
import {Nav, NavbarContainer, NavLogo} from "./navBarStyles";
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";
import {BrowserView, isMobile, MobileView} from 'react-device-detect';
import {Button, Menu} from "antd";
import {MenuFoldOutlined, MenuOutlined} from "@ant-design/icons";
import styled from "styled-components";


const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: black;
    border: none;
  }
`;


function NavBar({normal}) {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBar, setToggleBar] = useState(true)

    const toggleChange = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const onMenuClick = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }


    return (
                <Nav normal={normal}>
                    {
                        normal &&
                        <Link to={"/"}>
                            <img src={logo}/>
                        </Link>
                    }
                    <NavbarContainer isMobile={isMobile}>
                        <NavLogo isMobile={isMobile} to={"/"}>
                            Home
                        </NavLogo>
                        <NavLogo isMobile={isMobile} to={"/members"}>
                            Members
                        </NavLogo>
                        <NavLogo isMobile={isMobile} to={"/research"}>
                            Research
                        </NavLogo>
                        <NavLogo isMobile={isMobile} to={"/publication"}>
                            Publication
                        </NavLogo>
                    </NavbarContainer>
                </Nav>

    )
}

export default NavBar;