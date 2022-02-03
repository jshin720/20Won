import React from "react";
import { withRouter } from "react";

class EditUserForm extends React.Component {
  constructor(props) {
    console.log("edit-user",props)
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

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      id: this.state.id,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password
    }
    this.props.updateUser(user)
      .then(() => {
        if (Object.keys(this.state.errors).length === 0) {
          this.props.closeModal();
        }
      })
  }

  renderErrors() {
    if (!this.props.errors) {
      return null;
    }
    return (
      <div className="errors-container">
        {this.props.errors && Object.values(this.props.errors).length > 0 ? (
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
      <div className="edit-modal">
        <p id="edit-header">Update Profile</p>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            {this.renderErrors()}
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder={this.state.email}
            />
            <br />
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('First Name')}
              placeholder={this.state.first_name}
            />
            <br />
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('Last Name')}
              placeholder={this.state.last_name}
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
            <input type="submit" value="Submit" id="submit-button" />
          </div>
        </form>
      </div>
    )
  }
}

export default EditUserForm;