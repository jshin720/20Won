import React from 'react';
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      toggle: false
    },
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTerms = this.toggleTerms.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.toggleButton = this.toggleButton.bind(this);
    this.toggle = false;
  }
  
  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.toggle === false) {
      return null;
    }
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.action(this.state);
    // this.state
  }

  update(field) {
    return e => this.setState({ 
      [field]: e.target.value });
  }

  toggleTerms(e){
    
    if (e.target.checked) {
      this.setState({toggle: true})
    } else {
      this.setState({ toggle: false })
    } 
    
  }

  // toggleButton() {
  //   if (this. === false ) {
  //     return (
        
  //     ) 
  //   } else {
  //     return (
  //     <button type="submit">{this.props.formEvent}</button>
  //     )
  //   }
  // }
  
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
        <h2>Welcome, Please create an account.</h2>
       
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
          <input onChange={this.toggleTerms} type="checkbox" id="terms" value=""/> 
          {/* toggle is false but the button appears on page -- have to figure out why it is rendering eventhough itis false */}
          {/* <button type={this.toggle ? "submit" : "hidden"}>{this.props.formEvent}</button>
           */}

          < button type="submit"> {this.props.formEvent} </button>
        

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