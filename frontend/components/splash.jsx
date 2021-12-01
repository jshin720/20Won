import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { BrowserRouter as Router} from 'react-router-dom';


class Splash extends React.Component {
  render() {
    return (
      <div> <h1>TwentyWon</h1> 
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
      </div>
    )
  }
}

export default Splash;