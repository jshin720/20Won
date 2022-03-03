import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import furnitureContainer from '../furnitures/furniture_index_container';
import searchbar from '../search_bar/search_bar_container';
import cartShow from '../order/order_show_container';
// import wishListContainter from '../wishlist/wishlist_containter'
import * as Icons from 'react-icons/fa'



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContainer: false,
      showSidenav: false,
      clickToggle: false
    }
    this.getLinks = this.getLinks.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }


  toggleSideNav() {
    document.getElementById("chevron-icon").classList.toggle("change");
    if (!this.state.showSidenav) {
      this.setState({ showSidenav: true });
      document.getElementById("side-nav").style.width = "350px";
    } else {
      this.setState({ showSidenav: false });
      document.getElementById("side-nav").style.width = "0";
    }
  }

  openDropdown(type) {
    switch (type) {
      case 'showContainer':
        this.setState({ showContainer: true })
        break;
      default:
        return
    }
  }

  closeDropdown(e) {
    e.stopPropagation()
    this.setState({ showSettings: false })
  }

  getLinks() {
    
    return (
      <div className="NavBar">
        <div id="chevron-icon" onClick={this.toggleSideNav}>
        </div>
        <div id="furniture-nav">
          <furnitureContainer toggleSideNav={this.toggleSideNav} />
        </div>
        <div id='searchbar-nav' onClick={this.toggleSideNav}>
          <searchbar toggleSideNav={this.toggleSideNav}/>
        </div>
        <div id="nav-logo" >
          <Link id="nav-logo-link" to='/'><h1 className="title-middle">TWENTYWON</h1></Link>
        </div>
        {/* <div id='wishlist-nav' onClick={this.toggleSideNav}>
          <wishlistContainter toggleSideNav={this.toggleSideNav} />
        </div> */}
        <div id='cart-nav' onClick={this.toggleSideNav}>
          <cartShow toggleSideNav={this.toggleSideNav} />
        </div>
        <div id='user-menu' onMouseEnter={() => this.openDropdown('showSettings')}>Menu
          {
            this.state.showSettings ? (
              <div className='dropdown-menu' onMouseLeave={this.closeDropdown}>
                <Link to='/profile'>Profile</Link>
                <Link to='/gamedartstart'>GameDart It!</Link>
                <Link to='/developers'>Developers</Link>
                <a onClick={this.logoutUser}>Logout</a>
              </div>
            ) : (null)
          }
        </div>
      </div>
    );

  }

  render() {
    return this.getLinks();
    // return (
    //   <div>
    //       { this.getLinks() }
    //   </div>
    // );
  }
}

export default withRouter(NavBar);