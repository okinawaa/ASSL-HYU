import styled from 'styled-components'
import {Link} from "react-router-dom";


export const Nav = styled.nav`
  z-index: 3;
  margin: 15px 0;
  background: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 40px;
  z-index: 1;
  width: 100%;
  justify-content: space-evenly;
`

export const NavLogo = styled(Link)`
  margin-top: 0.2rem;
  color: #7F7F7F;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px #ffffff, 4px 4px 0px #dad7d7;

`;



