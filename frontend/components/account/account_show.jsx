import React from 'react'
import { Link } from 'react-router-dom'


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
    this.setState({
      profile: this.state.profile ? false : true
    });
  }

  toggleHistory(e) {
    this.setState({
      history: this.state.history ? false : true
    });
  }

  toggleAddress(e) {
    this.setState({
      address: this.state.address ? false : true
    });
  }


  render() {
   if (!this.props.currentUser) {
     return 'loading...'
   }
    return (
      <div className='main-user-page'>
        <h1 className="account-username">Hi {this.props.currentUser.first_name}</h1>

        <div className="links-container">
          <button onClick={() => this.toggleProfile()}>MY PROFILE</button>
          <div style={this.state.profile ? {display:"block"} : {display:"none"}}>
            <h2 id="profile">My Profile</h2>
            <ul>
              <li>
                <h3>NAME</h3>
                {this.props.currentUser.first_name} {this.props.currentUser.last_name}
              </li>
              <li>
                <h3>EMAIL ADDRESS</h3>
                {this.props.currentUser.email}
              </li>
            </ul>
          </div>

          <button onClick={() => this.toggleHistory()}>ORDER HISTORY</button>
          <div style={this.state.history ? { display: "block" } : { display: "none" }}>
            <h2 id="history">Order History</h2>
              <li>
                <h3>PRODUCTS</h3>
                <ul>Currently, you have no orders made.</ul>
              </li>
          </div>

          <button onClick={() => this.toggleAddress()}>ADDRESS BOOK</button>
          <div style={this.state.address ? { display: "block" } : { display: "none" }}>
            <h2 id="Address">Address Book</h2>
            <h3>ADD A NEW ADDRESS</h3>
          </div>
        </div>
          <button onClick={() => this.props.logout(this.props.currentUser)}><Link to="/">Logout</Link></button>
      </div>
    )
  }
}

export default accountPage;