import React from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteOrder } from "../../util/order_api_util";
import * as HiIcon from 'react-icons/hi';



class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: this.props.price,
      quantity: this.props.quantity
    }
    console.log("orderItem", this.state)
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
  }

  addQuantity() {
    const plusOne = this.state.quantity + 1;
    
    this.setState({
      quantity: plusOne
      
    })
  }

  subtractQuantity(){
    const minusOne = this.state.quantity - 1;
   
    this.setState ({
      quantity: minusOne
     
    })
  }

  render() {
    console.log("order-item-render", this.state)
    return (
      <div className="quantity-container">
        <p className="furniture-price"> $ {this.state.price * this.state.quantity}.00 </p>
        <button className="add-quantity" onClick={this.addQuantity}>
          <HiIcon.HiOutlinePlus />
          </button>  
        <p className="furniture-quantity">{this.state.quantity}</p>
        <button className="subtract-quantity" onClick={this.subtractQuantity}>
        <HiIcon.HiOutlineMinus />
        </button>
      </div>
    )
  }

}

export default OrderItem;