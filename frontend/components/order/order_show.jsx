import React from "react";
import { Link } from "react-router-dom";
import { deleteOrder } from "../../util/order_api_util";

class OrderShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchOrders()
  }

  orderItems() {
    // let furniture = this.props.furnitures.furniture_id
    if (!this.props.orders) {
      return null;
    }
    let pennies = Object.values(this.props.orders)
    
    return (pennies.map((singleFurniture, i) => (
      <div key={i} className="tile" >
        <div className="order-item" >
          <h1 className="order-title">Orders</h1>
        </div>
        <div className="order-furnitures-details" >
          <div>
            <p className="furniture-name"> {singleFurniture.name} </p>
            <p className="furniture-color"> {singleFurniture.color} </p>
            <p className="furniture-category"> {singleFurniture.category} </p>
            <p className="furniture-price"> ${singleFurniture.price}.00 </p>
            <p className="furniture-quantity">{singleFurniture.quantity}</p>
          </div>
        </div>
        <div className="order-furniture-buttons" >
          <button onClick={() => this.props.deleteOrder(singleFurniture.id)}>Remove</button>
        </div>
      </div>
      ))
    )
  }



  render() {
    

    if (Object.values(this.props.orders).length < 1 ) {
      return (
       <h1 className="empty-order">"Orders are Empty"</h1> 
      )
    } else {
      return (
        <div>
          {this.orderItems()}
        </div>
      )
    }
  }
}


export default OrderShow;