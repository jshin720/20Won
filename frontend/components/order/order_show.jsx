import React from "react";
import { Link } from "react-router-dom";

class OrderShow extends React.Component {
  constructor(props){
    super(props)
  }

  orderItems() {
  let furniture = this.props.furnitures.furniture_id

  return (
    <div className="single-order-container">
      
      <div className="item-1">
        <p className="furniture-name">Name:  {furniture.name} </p>
        <br />

        <p className="furniture-color">Color:  {furniture.color} </p>
        <br />

        <p className="furniture-category">{furniture.category} </p>
        <br />

        <p className="furniture-price"> ${furniture.price}.00 </p>
        <br />
      </div>
    </div>
    )
  }



  render() {
    

    if (Object.values(this.props.orders).length < 1 ) {
      return (
       <h1>"Orders are Empty"</h1> 
      )
    } else {
      return (
        <div>
          <h1>Orders</h1>

        </div>
      )
    }
  }
}


export default OrderShow;