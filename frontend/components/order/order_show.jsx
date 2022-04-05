import React from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteOrder } from "../../util/order_api_util";
import * as HiIcon from 'react-icons/hi';
import OrderItem from './order_item'

class OrderShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    this.props.fetchFurnitures();
    this.props.fetchOrders();
  }

  handleContinueShopping() {
    this.props.handleCartDropdown();
    this.props.history.push('/') //comes from the withrouter - it needs 2 parameters (path, state) - leads to another path with the even state
  };

  handleCheckOut() {
    this.props.handleCartDropdown();
    this.props.history.push('/cart') //comes from the withrouter - it needs 2 parameters (path, state) - leads to another path with the even state
  };

  orderItems() {
    // let furniture = this.props.furnitures.furniture_id


    let pennies = Object.values(this.props.orders)

    console.log("orders", pennies)
    return (pennies.map((singleFurniture, i) => (
      <div key={i} id="order-item" >
        <div id="order-furnitures-details" >

          <img src={this.props.furnitures[singleFurniture.furniture_id].photoUrls[1]} />
          <div id="info-order-container">
            <p id="furniture-name"> {singleFurniture.name} </p>
            <p id="furniture-color"> Color: {singleFurniture.color} </p>
            <p id="furniture-category"> Category: {singleFurniture.category} </p>
            <OrderItem
              order={singleFurniture}
              updateOrder={this.props.updateOrder}
              deleteOrder={this.props.deleteOrder}
            />
          </div>

        </div>

      </div>
    ))
    )
  }



  render() {
    if (!this.props.orders) return null;
    if (!this.props.furnitures || Object.keys(this.props.furnitures).length < 1) return null;

    let total = 0;
    const allOrders = Object.values(this.props.orders);

    allOrders.map((singleOrder) => (
      total += singleOrder.price * singleOrder.quantity
    ))
    //  console.log('order total', total)
    return (
      <div id="orders-container">
        <h1 id="order-title">Cart</h1>

        {Object.values(this.props.orders).length < 1 ?
          <h1 id="empty-order">
            Looks like your shopping cart is empty at the moment.
          </h1>
          :
          <div>
            {this.orderItems()}
            
            <div id="total-amount-container">
              <p id="subtotal">Subtotal: </p>
              <p id="subtotal-price">$ {total}.00 </p>
            </div>
              <p id="shipping-notice">Shipping, taxes and discounts calculated at checkout. </p>
          </div>
        }
        <div id="order-furniture-buttons" >
          <button id="continue-shopping-button" onClick={() => this.handleContinueShopping()}>Continue Shopping</button>
          <button id="checkout-button" onClick={() => this.handleCheckOut()}>Proceed to Checkout</button>
        </div>
      </div>
    )
  }
}

export default withRouter(OrderShow);