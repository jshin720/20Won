import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './menu_items';
// import './dropdown.css'
import FurnitureIndexContainer from '../furnitures/furniture_index_container';
import OrderShowContainer from '../order/order_show_container';
import SearchBar from '../search_bar/search_bar';
import SearchBarContainer from '../search_bar/search_bar_container'
// import wishlistContainer from '../wishlist/' // finish this inmport when I finish the wishlist 
import * as Mdicon from 'react-icons/md'

function Dropdown(props) {
  const [click, setClick] = useState(false); // toggles the click in the state 

  const handleClick = () => setClick(!click); // toogles the click 

  const modalSwitch = () => {
    console.log("menuitem", props)
    switch (props.dropdownType) {
      case 'furnitures':
        return <ul 
          className={click ? 'dropdown-menu clicked' : 'dropdown-left'}>
          <Mdicon.MdClose className='close-icon' onClick={props.handleFurnitureDropdown}/>
          {MenuItems.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={props.handleFurnitureDropdown}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      case 'search':
        return <div className={ 'dropdown-middle'}> 
          <Mdicon.MdClose className='close-icon' onClick={props.handleSearchDropdown}/>
          <SearchBarContainer 
            handleSearchDropdown={props.handleSearchDropdown}
          />
          </div>
          
      case 'cart':
        return <div className={'dropdown-right'}> 
          <Mdicon.MdClose className='close-icon' onClick={props.handleCartDropdown} />
            <OrderShowContainer/>
            </div>
      // case "wishlist":
      //   return <wishlistContainer />
      default:
        return null;
    }
  }


  return (
    modalSwitch()
    // <>
    //   {/* <ul onClick={handleClick}
    //     className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
    //     {MenuItems.map((item, i) => {
    //       return (
    //         <li key={i}>
    //           <Link
    //             className={item.cName}
    //             to={item.path}
    //             onClick={() => setClick(false)}
    //           >
    //             {item.title}
    //           </Link>
    //         </li>
    //       )
    //     })}
    //   </ul> */}
    // </>
  )

}

export default Dropdown;