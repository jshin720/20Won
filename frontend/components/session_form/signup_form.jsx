import React from 'react';
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    },
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = false;
    this.toggleTerms = this.toggleTerms.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state);

  }

  update(field) {
    return e => this.setState({ 
      [field]: e.target.value });
  }

  toggleTerms(e){
    console.log('first', this.toggle)
    if (e.target.checked) {
      this.toggle = true;
    } else {
      this.toggle = false;
    } console.log('second', this.toggle)
    // this.toggle = (this.toggle === false ? true : false) 
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
    // console.log('thank you ')
    return (
      <div className='signup-form-container'>
        <h2>Welcome. Please create an account.</h2>
       
        <form className="account-form" onSubmit={this.handleSubmit}>
          <label >First Name</label>
          <input type="text" onChange={this.update('first_name')} value={this.state.first_name} />
          <br/>
          <label >Last Name</label>
          <input type="text" onChange={this.update('last_name')} value={this.state.last_name} />
          <br/>
          <label >Email</label>
          <input type="email" onChange={this.update('email')} value={this.state.email} />
          <br/>
          <label >Password</label>
          <input type="password" onChange={this.update('password')} value={this.state.password} />
          <div>
            {
              this.props.errors.length > 0 ? (
                this.renderErrors()
              ) : ("")
            }
          </div>
          <label htmlFor="terms">By signing up for an account you accept our Terms and Privacy Policy.</label>
          <input onClick={this.toggleTerms} type="checkbox" id="terms" value=""/> 
          {/* toggle is false but the button appears on page -- have to figure out why it is rendering eventhough itis false */}
          <button type={this.toggle ? "submit" : "hidden"}>{this.props.formEvent}</button>
          
        </form>
        <div>
          <h3>Existing Customer</h3>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    )
  }
}

export default SignupForm;