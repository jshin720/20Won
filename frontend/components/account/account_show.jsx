import React from 'react'
import { Link } from 'react-router-dom'


class accountPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: true
    }
    this.toggleProfile = this.toggleProfile.bind(this)
  }
  
  // componentDidMount() {
  //   this.props.fetchUser(this.props.currentUser.id)
  // }

  toggleProfile(e) {
    this.setState({
      profile: false
    });
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div className='main-user-page'>
        <h2 id="username">Hi {this.props.currentUser}</h2>
        <button onClick={() => this.toggleProfile()}></button>
        <div style={this.state.profile ? {display:"block"} : {display:"none"}}>
          <h2 id="profile">My Profile</h2>

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