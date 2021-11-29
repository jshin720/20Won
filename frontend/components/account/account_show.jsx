import React from 'react'
import { Link } from 'react-router-dom'


class accountPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: true
    }
    this.state = {
      history: false
    }
    this.state = {
      address: false
    }
    this.toggleProfile = this.toggleProfile.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.toggleAddress = this.toggleAddress.bing(this);
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  toggleProfile(e) {
    this.setState({
      profile: false
    });
  }

  toggleHistory(e) {
    this.setState({
      profile: false
    });
  }

  toggleAddress(e) {
    this.setState({
      profile: false
    });
  }



  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div className='main-user-page'>
        <h2 id="username">Hi {this.props.currentUser.first_name}</h2>

        <button onClick={() => this.toggleProfile()}></button>
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

        <button onClick={() => this.toggleHistory()}></button>
        <div style={this.state.history ? { display: "block" } : { display: "none" }}>
          <h2 id="history">Order Histoty</h2>
            <li>
              <h3>PRODUCTS</h3>
              <ul>Currently, you have no orders made.</ul>
            </li>
        </div>

        <button onClick={() => this.toggleAddress()}></button>
        <div style={this.state.address ? { display: "block" } : { display: "none" }}>
          <h2 id="Address">Address Book</h2>
          <h3>ADD A NEW ADDRESS</h3>
        </div>

        <button onClick={() => this.props.logout(this.props.currentUser)}><Link to="/">Logout</Link></button>
        {/* <div className='account-details'>
          <ul>
            <li>You haven't placed any orders yet.</li>
          </ul>
          <ul className='user-details'>
            <li>{this.props.currentUser.email}</li>
          </ul> */}
        {/* </div> */}
      </div>
    )
  }
}

export default accountPage;