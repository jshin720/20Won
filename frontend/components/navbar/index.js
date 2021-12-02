import React from 'react';
import { 
  Nav, 
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink
} from './navbar_elements';

import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>TwentyWon</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/furnitures" >
            Furnitures
          </NavLink>
          {/* <NavLink to="/" >
            Table
          </NavLink> */}
          <NavLink to="/cart" >
            Shopping Cart
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Accounts</NavBtnLink>  {/*this is be an image instead of accounts*/}
        </NavBtn>

      </Nav>
    </>
  );
}

export default NavBar;
