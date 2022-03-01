import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';





function Navbar() {
  const [click, setClick] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleFurnitureDropdown = () => setFurniture(!furniture);
  const handleSearchDropdown = () => setSearch(!search);
  const handleCartDropdown = () => setCart(!cart);
  const handleWishlistDropdown = () => setWishlist(!wishlist);
  const closeMobileMenu = () => setClick(false);

  // for the more responsive dropdown
  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false)
  //   } else {
  //     setDropdown(true)
  //   };
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false)
  //   } else {
  //     setDropdown(false)
  //   };
  // };
  // console.log("click",)
  return (
    // have to change the search, wishlist and cart to icons later
    <>
      <nav className='navbar'>
        {/* <div className='menu-icon' onClick={handleClick}>

          <i className={click ? 'fas fa-times' : 'fas fa-fa-bars'} />
        </div> */}
        <div className="nav-menu">
          
          <div className='nav-menu-left'>
            <span className='nav-items' onClick={handleFurnitureDropdown} >
              FURNITURES
              <i className={furniture ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} />
            </span>
              {furniture && <Dropdown
                dropdownType={'furnitures'} 
                handleFurnitureDropdown={handleFurnitureDropdown}
              />}

            <span className='nav-items'
              onClick={handleSearchDropdown}
            >
              <BsIcons.BsSearch className='Icons'/>
            </span>

              {search && <Dropdown
                dropdownType={'search'}
                handleSearchDropdown={handleSearchDropdown}
              />}
          </div>

          <div className='nav-menu-middle'>
            <li className='nav-items'>
              <Link to='/' className='title' style={{textDecoration: 'none'}}>
                TWENTYWON
              </Link>
            </li>
          </div>

          <div className='nav-menu-right'>
            <span className='nav-items'>
              <Link to='/' className='nav-links' onClick={handleWishlistDropdown}>
                WISHLIST
              </Link>
              {/* {wishlist && <Dropdown
              dropdownType={'wishlist'}
              handleWishlist={handleWishlistDropdown}
            />} */}
            </span>

            <span className='nav-items'
              onClick={handleCartDropdown}
            >
              <BsIcons.BsHandbag className='Icons'/>
            </span>
              {cart && <Dropdown
                dropdownType={'cart'}
                handleCartDropdown={handleCartDropdown}
              />}

            <span className='nav-items'>
              <Link to='/login' className='accounts-button'>
                <BiIcons.BiUser className='Icons'/>
              </Link>
            </span>

          </div>
        </div>

      </nav>
    </>
  );
}


export default Navbar;