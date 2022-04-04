import React from "react";
import { withRouter } from 'react-router-dom';
import { closeModal } from "../../actions/modal_actions";
import { RECEIVE_USER_ERRORS } from "../../actions/user_actions";

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      email: this.props.user.email,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      password: this.props.user.id === this.props.sessionId ? "password" : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }

  // componentWillUpdate(nextProps) {
  //   this.setState({ errors: nextProps.errors })
  // }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  // the field in the update function refers to the state on lines 7-12

  handleSubmit(e) {
    e.preventDefault();
    // let user = {
    //   id: this.state.id,
    //   email: this.state.email,
    //   first_name: this.state.first_name,
    //   last_name: this.state.last_name,
    //   password: this.state.password
    // }
    this.props.updateUser(this.state)
      .then(res => {
        if (res.type !== RECEIVE_USER_ERRORS) {
          this.props.closeModal();
        }
        // if (Object.keys(this.state.errors).length === 0) {
        //   this.props.closeModal;
        // }
        // console.log('return errors', this.props.errors)
      })


  }

  renderErrors() {
    if (!this.props.errors) {
      return null;
    }
    return (
      <div className="errors-container">
        {this.props.errors && (this.props.errors).length > 0 ? (
          <ul className="errors">
            {
              this.props.errors.map((error, idx) => {
                return (
                  <li key={idx} className="error" >
                    {error}
                  </li>
                )
              })
            }
          </ul>
        ) : ("")
        }
      </div>
    )
  }


  render() {
    return (
      <div className="edit-modal-container">
        <h1 id="edit-header">Update Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              placeholder="First Name"
            />
            <br />
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              placeholder="Last Name"
            />
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            {this.props.user.id === this.props.sessionId ?
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              /> :
              null}
            <br />
            <div>
              {this.renderErrors()}
            </div>
            <div className="user-edit-buttons">
              <input type="submit" value="Submit" id="submit-button" onClick={this.handleSubmit} />
              <button className="cancel-button" onClick={this.props.closeModal}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUserForm;