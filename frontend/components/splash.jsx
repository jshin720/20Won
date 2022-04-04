import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { BrowserRouter as Router} from 'react-router-dom';
import {fetchFurnitures} from "../actions/furniture_actions"


class Splash extends React.Component {

  componentDidMount() {
    fetchFurnitures();
  }


  render() {
    return (
      <div className="top-container"> 
        <p className="mid-title">The loveliest season of all.</p>
      </div>
    )
  }
}

export default Splash;