import React from 'react';
import { Link } from 'react-router-dom';
import EditUserContainer from './edit_user_container';
import Modal from './modal';


class accountPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: true,
      history: false,
      address: false
    }
    
    this.toggleProfile = this.toggleProfile.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.toggleAddress = this.toggleAddress.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchUser(this.props.sessionId)
  }
  
  toggleProfile(e) {
    if (this.state.history === true) {
      this.setState({
        history: false
      })
    }
    if (this.state.address === true) {
      this.setState({
        address: false
      })
    }
    this.setState({
      profile: true
    });
  }

  toggleHistory(e) {
    if (this.state.profile === true) {
      this.setState({
        profile: false
      })
    }
    if (this.state.address === true) {
      this.setState({
        address: false
      })
    }
    this.setState({
      history: true
    });
  }

  toggleAddress(e) {
    if (this.state.history === true) {
      this.setState({
        history: false
      })
    }
    if (this.state.profile === true) {
      this.setState({
        profile: false
      })
    }
    this.setState({
      address: true
    });
  }


  render() {
  const editButton = <div id="edit-profile-button" >
    <button onClick={this.props.openModal}>Edit Info</button>
        </div >
   if (!this.props.currentUser) {
     return 'loading...'
   }
    return (
      <div className='main-user-page'>
     

        <div className="accounts-container">
          <button className='profile-button' onClick={this.toggleProfile}>MY PROFILE</button>
          <div style={this.state.profile ? {display:"block"} : {display:"none"}}>
            <div className="accounts-header">
              <h1 className="account-username">Hi {this.props.currentUser.first_name}</h1>
              <h1 id="profile">My Profile</h1>
            </div>
            <div className="names-profile-container">
                <h3>NAME</h3>
                <p>
                {this.props.currentUser.first_name} {this.props.currentUser.last_name}
                </p> 
            </div>
            <div className="email-profile-container">
                <h3>EMAIL ADDRESS</h3>
                <p>
                {this.props.currentUser.email}
                </p>
            </div>
            <div className="user-edit-buttons">
              { editButton }  
              <button
              className='user-delete-button' 
              onClick={() => this.props.deleteUser(this.props.currentUser)}
              >Delete</button>
            </div>
          </div>

          <button className='profile-button' onClick={this.toggleHistory}>ORDER HISTORY</button>
          <div style={this.state.history ? { display: "block" } : { display: "none" }}>
            <div className="accounts-header">
              <h1 className="account-username">Hi {this.props.currentUser.first_name}</h1>
              <h1 id="history">Order History</h1>
            </div>
              <div className="products-profile-container">
                <h3>PRODUCTS</h3>
                <p>Currently, you have no orders made.</p>

              </div>
          </div>

          <button className='profile-button' onClick={this.toggleAddress}>ADDRESS BOOK</button>
          <div style={this.state.address ? { display: "block" } : { display: "none" }}>
            <div className="accounts-header">
              <h1 className="account-username">Hi {this.props.currentUser.first_name}</h1>
              <h1 id="Address">Address Book</h1> 
            </div>
            <h3>ADD A NEW ADDRESS</h3>
          </div>
        </div>
        <div className="logout-button">
        <Link to="/"><button onClick={() => this.props.logout(this.props.currentUser)}>Logout</button></Link>

        </div>
      </div>
    )
  }
}

export default accountPage;