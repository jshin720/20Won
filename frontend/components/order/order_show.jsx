import React from "react";
import { Link } from "react-router-dom";

class OrderShow extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    
    return (

      <div className="shopping-cart">
        <h1>Cart</h1>
        <div className="item-1">
          <p className="order-name">Name:  {furniture.name} </p>
          <br />
          <p className="furniture-color">Color:  {furniture.color} </p>
          <p className="furniture-category">{furniture.category} </p>
          <div id="price-container">
            <p className="furniture-price"> ${furniture.price}.00 </p>
          </div>
          <p className="furniture-description"> {furniture.description} </p>
        </div>
        <button type="submit" onClick={this.addToOrders}>Add To Cart</button>

      </div>
    )
  }

}


export default OrderShow;