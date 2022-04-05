import React, { useState } from 'react';
import { Link } from "react-router-dom"

function AccountRender(props) {

  const profileRender = () => {
    console.log("profile render", props)
    return (
      <div className="accounts-switch">

        <h1 className="accounts-header">My Profile</h1>


        <div className='info-container'>
          <div className="names-profile-container">
            <h3>NAME</h3>
            <p>
              {props.currentUser.first_name} {props.currentUser.last_name}
            </p>
          </div>
          <div className="email-profile-container">
            <h3>EMAIL ADDRESS</h3>
            <p>
              {props.currentUser.email}
            </p>
          </div>
        </div>
          <div className="user-edit-buttons">
            {props.editButton}
            <button
              className='user-delete-button'
              onClick={() => props.deleteUser(props.currentUser)}
            >Delete</button>
          </div>
      </div >
    )
  }

  const renderSwitch = () => {
    console.log("account render", props)
    switch (props.renderType) {
      case 'profile':
        return (profileRender())
      case 'orderHistory':
        return (
          <div className="accounts-switch">

            <h1 className="accounts-header">Order History</h1>

            <div className="products-profile-container">
              <h3>PRODUCTS:</h3>
              <p>Currently, you have no orders made.</p>

            </div>
          </div>
        )
      case "addressBook":
        return (
          <div className="accounts-switch">

            <h1 className="accounts-header">Address Book</h1>

            <div className="products-profile-container">
              <h3>ADD A NEW ADDRESS</h3>
            </div>
          </div>
        )
      default:
        return (profileRender())
    }
  }

  return (
    renderSwitch()
  )

}

export default AccountRender;