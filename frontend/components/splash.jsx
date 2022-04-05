import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchFurnitures } from "../actions/furniture_actions"
import PopularItemIndexContainer from "./furnitures/popular_item_index_container";


class Splash extends React.Component {

  componentDidMount() {
    fetchFurnitures();
  }


  render() {
    return (
      <div className="main-page-container">
        <div className="top-container">
          <p className="mid-title">The Art of Comfort.</p>
          <img src="https://cdn.5280.com/2018/11/3.-Sixpenny_Devyn-Sofa.jpg" alt="" />
          <Link to="/furnitures/shopall"><button>Shop Furniture</button></Link>
        </div>
        {/* <div className="best-selling-furnitures">
          <PopularItemIndexContainer/>
        </div> */}
      </div>
    )
  }
}

export default Splash;