import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import './navbar.css'
// import BacklogContainer from '../backlog/backlog_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
      showSidenav: false,
    }
    this.getLinks = this.getLinks.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }


  toggleSideNav() {
    document.getElementById("sandwich-icon").classList.toggle("change");
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
      case 'showSettings':
        this.setState({ showSettings: true })
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
        <div id="sandwich-icon" onClick={this.toggleSideNav}>
          <Link id="seating" to="/furnitures"></Link>
        </div>
        <div id="side-nav">
          <BacklogContainer toggleSideNav={this.toggleSideNav} />
        </div>
        <div id="nav-logo" >
          <Link id="nav-logo-link" to='/'><h1 className="title-middle">TWENTYWON</h1></Link>
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