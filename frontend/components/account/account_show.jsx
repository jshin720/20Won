import React from 'react';
import { Link } from 'react-router-dom';
import EditUserContainer from './edit_user_container';
import Modal from './modal';
import AccountRender from './account_render';
import * as MdIcon from 'react-icons/md'


class accountPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: true,
      history: false,
      address: false,
      renderType: ""
    }

    this.renderProfile = this.renderProfile.bind(this);
    this.renderHistory = this.renderHistory.bind(this);
    this.renderAddress = this.renderAddress.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.sessionId)
  }

  // toggleProfile(e) {
  //   if (this.state.history === true) {
  //     this.setState({
  //       history: false
  //     })
  //   }
  //   if (this.state.address === true) {
  //     this.setState({
  //       address: false
  //     })
  //   }
  //   this.setState({
  //     profile: true
  //   });
  // }

  // toggleHistory(e) {
  //   if (this.state.profile === true) {
  //     this.setState({
  //       profile: false
  //     })
  //   }
  //   if (this.state.address === true) {
  //     this.setState({
  //       address: false
  //     })
  //   }
  //   this.setState({
  //     history: true
  //   });
  // }

  // toggleAddress(e) {
  //   if (this.state.history === true) {
  //     this.setState({
  //       history: false
  //     })
  //   }
  //   if (this.state.profile === true) {
  //     this.setState({
  //       profile: false
  //     })
  //   }
  //   this.setState({
  //     address: true
  //   });


  renderProfile() {
    this.setState({
      renderType: "profile"
    })
  }

  renderHistory() {
    this.setState({
      renderType: "orderHistory"
    })
  }

  renderAddress() {
    this.setState({
      renderType: "addressBook"
    })
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
        <div className="left-profile-container">
          <h1 className="accounts-header">Hi {this.props.currentUser.first_name}</h1>
          <div className="profile-buttons-container">
            <span className="profile-button" onClick={this.renderProfile}>
              My PROFILE <MdIcon.MdArrowForwardIos />
            </span>
            <span className="profile-button" onClick={this.renderHistory}>
              ORDER HISTORY <MdIcon.MdArrowForwardIos />
            </span>
            <span className="profile-button" onClick={this.renderAddress}>
              ADDRESS BOOK <MdIcon.MdArrowForwardIos />
            </span>
            <div className="logout-button">
              <Link to="/"><button onClick={() => this.props.logout(this.props.currentUser)}>Logout</button></Link>
            </div>
          </div>
        </div>
        <div className="accounts-container">
          <AccountRender
            editButton={editButton}
            deleteUser={this.props.deleteUser}
            currentUser={this.props.currentUser}
            renderType={this.state.renderType}
          />
        </div>
      </div>
    )
  }
}

export default accountPage;