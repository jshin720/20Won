import React from 'react';


class FurnitureShow extends React.Component {
  constructor(props) {
    super(props)

    this.addToCartHandler = this.addToCartHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)

  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);

  }

  addToOrders(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createCartItem(this.props.furniture.id, this.state.quantity)
    } 
  }

  render () {
    if (product === undefined) {
      return null;
    }

    return (

      <div className="furniture-show-container">
        <div className="furniture-show-info">
          <p className="furniture-type">{furniture.type} </p>
          <br />
          <p className="furniture-name">Name:  {furniture.name} </p>
          <p className="furniture-color">Color:  {furniture.color} </p>
          <div id="price-container">
            <p className="furniture-price"><span></span> ${furniture.price}.00 </p>
            </div>
            <p className="furniture-description"> {furniture.description} </p>
        </div>    
        <button type="submit" onClick={this.addToOrders}>Add To Cart</button>

      </div>
    ) 
  }

}

export default FurnitureShow;