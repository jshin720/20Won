import React from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteOrder } from "../../util/order_api_util";
import * as HiIcon from 'react-icons/hi';



class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.order.category,
      color: this.props.order.color,
      furniture_id: this.props.order.furniture_id,
      id: this.props.order.id,
      name: this.props.order.name,
      price: this.props.order.price,
      quantity: this.props.order.quantity,
      user_id: this.props.order.user_id
    }
    console.log("orderItem", this.state)
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
  }

  addQuantity() {
    const plusOne = this.state.quantity + 1;

    this.setState({
      quantity: plusOne,
    }, () => this.props.updateOrder(this.state))

  }

  subtractQuantity() {
    const minusOne = this.state.quantity - 1;

    this.setState({
      quantity: minusOne
    }, () => this.props.updateOrder(this.state))

  }

  render() {
    console.log("order-item-render", this.state)
    return (
      <div className="quantity-container">
        <p className="furniture-price"> Price: $ {this.state.price * this.state.quantity}.00 </p>
        <div className="buttons-container">
          <div className="quantity-button-container">
            <button className="quantity-button" onClick={this.subtractQuantity}>
              <HiIcon.HiOutlineMinus />
            </button>
            <p className="furniture-quantity"> Qty: {this.state.quantity}</p>
            <button className="quantity-button" onClick={this.addQuantity}>
              <HiIcon.HiOutlinePlus />
            </button>
          </div>
          <button className="remove-item" onClick={() => this.props.deleteOrder(this.state.id)}>Remove</button>
        </div>
        <p className="shipping-info"> Shipping:
          This product is made to order. Estimated delivery: 14-16 weeks.
        </p>
      </div>
    )
  }

}

export default OrderItem;