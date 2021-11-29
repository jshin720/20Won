import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.demoUser = { 
      email: 'six@six.com',
      password: "sixpenny" 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  } 

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  handleDemo() {
    this.props.action(this.demoUser)
  }
  
  renderErrors() {
    const errors = this.props.errors;
    return (
      <div className="errors-container">
        <ul className="errors">
          {
            errors.map((error) => {
              return (
                <li className="error" >
                 {error}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }



  render() {
    return (
      <div className="login-form-container">
        <form className="account-form" onSubmit={this.handleSubmit}>
          <h2>'Hi, Please sign in to your account.'</h2>
          <br/>
           {this.props.formType}
            <br/>
            <label id="email">Email: 
              <input type="text" value={this.state.email} onChange={this.update('email')}/>
            </label>
            <br/>
            <label id="password">Password:
              <input type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
            <br/>

          <div>
            {
              this.props.errors.length > 0 ? (
                this.renderErrors()
              ) : ("")
            }
          </div>
          
          <input type="submit" value={this.props.formType} className="demo"/>
        </form>
        <input type="submit" onClick={this.handleDemo} className="demo" value="DEMO USER" />
        <div>
          <h3>New Customer</h3>
          <Link to="/signup">Create New Customer</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
