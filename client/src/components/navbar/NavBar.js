import React, {useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo} from "./navBarStyles";

// const toggleHome = () => {
//     scroll.scrollToTop({
//         duration: 3000,
//     })
// }

function NavBar() {

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to={"/"}>
                    Home
                </NavLogo>
                <NavLogo to={"/"}>
                    Members
                </NavLogo>
                <NavLogo to={"/"}>
                    Research
                </NavLogo>
                <NavLogo to={"/"}>
                    Publication
                </NavLogo>

            </NavbarContainer>
            {/*<NavLogo to='/archive'>asdasd</NavLogo>*/}
        </Nav>
    )
}

export default NavBar;