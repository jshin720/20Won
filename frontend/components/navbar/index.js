import React from 'react';
import { 
  Nav, 
  NavMenu,
  NavBtnLink,
  NavLink
} from './navbar_elements';

import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <Nav className='navbar-container'>
        <div className="links-container"> 

          <NavLink to="/furnitures" >
            FURNITURES
          </NavLink>

          {/* <NavLink to="/" >
          Table
          </NavLink> */}

          <NavLink to="/cart" >
            SHOPPING CART
          </NavLink>

        </div>
        <NavLink to="/" className="title-middle">
          <h1 className="title">TWENTYWON</h1>
        </NavLink>
        {/* <Bars /> */}

        
       
        
       
        <NavBtnLink to="/login" className="accounts-button"> <img src="img/user.png" height="20" width="20"/>
          </NavBtnLink>  {/*this is be an image instead of accounts*/}
      
      </Nav>
    </div>
  );
}

export default NavBar;
