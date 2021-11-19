import React, {useState} from 'react';
import {Nav, NavbarContainer, NavLogo, ResearchLogoContainer, SubLogo, SubNavContainer} from "./navBarStyles";
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";
import {isMobile} from 'react-device-detect';

function NavBar({normal}) {
    const [showSubLogo, setShowSubLogo] = useState(false)
    let timer;

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
                <NavLogo to={"/research"}
                         onMouseEnter={() => {
                             clearTimeout(timer)
                             setShowSubLogo(true);
                         }} onMouseLeave={() => {
                    timer = setTimeout(() => {
                        setShowSubLogo(false);
                    }, 2000)
                }}>
                    Research
                    <ResearchLogoContainer onMouseEnter={(e) => {
                        e.preventDefault()
                        clearTimeout(timer)
                        setShowSubLogo(true)
                    }}>
                        {showSubLogo && <SubNavContainer>
                            <SubLogo to={"/research"}>
                                Main Research
                            </SubLogo>
                            <SubLogo to={"/publication"}>
                                Publication
                            </SubLogo>
                            <SubLogo to={"/ongoingResearch"}>
                                Ongoing research
                            </SubLogo>
                        </SubNavContainer>}
                    </ResearchLogoContainer>
                </NavLogo>
                <NavLogo to={"/news"}>
                    News
                </NavLogo>
            </NavbarContainer>
        </Nav>

    )
}

export default NavBar;