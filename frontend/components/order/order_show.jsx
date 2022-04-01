import React from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteOrder } from "../../util/order_api_util";
import * as HiIcon from 'react-icons/hi';
import OrderItem from './order_item'

class OrderShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFurnitures();
    this.props.fetchOrders();
  }

  

  orderItems() {
    // let furniture = this.props.furnitures.furniture_id
    console.log("orders", this.props)
    
   
    let pennies = Object.values(this.props.orders)

    return (pennies.map((singleFurniture, i) => (
      <div key={i} className="tile" >

        <div className="order-item" >
        </div>
        <div className="order-furnitures-details" >
          <div>
            <img src={this.props.furnitures[singleFurniture.furniture_id].photoUrls[1]}/>
            <div className="info-order-container">
              <p className="furniture-name"> {singleFurniture.name} </p>
            <p className="furniture-color"> {singleFurniture.color} </p>
            <p className="furniture-category"> {singleFurniture.category} </p>
            </div>
            
              <OrderItem
                price={singleFurniture.price}
                quantity={singleFurniture.quantity}
              />           
            <button onClick={() => this.props.deleteOrder(singleFurniture.id)}>Remove</button>
          </div>
        </div>
              
      </div>
    ))
    )
  }



  render() {
    if (!this.props.orders) return null;
    if (!this.props.furnitures || Object.keys(this.props.furnitures).length < 1) return null;



    return (
      <div className="orders-container">
        <h1 className="order-title">Cart</h1>

        {Object.values(this.props.orders).length < 1 ?
          <h1 className="empty-order">
            "Looks like your shopping cart is empty at the moment."
          </h1>
          :
          <div>
            {this.orderItems()}
          </div>
        }
        <p className="shipping-info"> Shipping:
          This product is made to order. Estimated delivery: 14-16 weeks.
        </p>
        <div className="order-furniture-buttons" >
          <button className="continue-shopping-container" onClick={() => this.props.history.push('/')}>Continue Shopping</button>
        </div>
      </div>
    )
  }
}


export default withRouter(OrderShow);