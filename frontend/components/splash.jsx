import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { BrowserRouter as Router} from 'react-router-dom';


class Splash extends React.Component {
  render() {
    return (
      <div className="top-container"> 
        <p className="mid-title">The loveliest season of all.</p>
      </div>
    )
  }
}

export default Splash;