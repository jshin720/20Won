import React from 'react';


class FurnitureShow extends React.Component {
  constructor(props) {
    super(props)

    this.addToOrders = this.addToOrders.bind(this)
    // this.onChangeHandler = this.onChangeHandler.bind(this)

  }

  componentDidMount() {
    this.props.fetchFurniture(this.props.match.params.furnitureId);

  }

  addToOrders(e) {
    e.preventDefault();
    
    if (this.props.currentUser) {
      // if (this.props.currentUser.order[furnitureid] === undefined) {
      let order = {furniture_id: this.props.furniture.id,  quantity: 1, user_id: this.props.currentUser.id}
      this.props.createOrder(order)
      // } else {
      //   let order = { quantity: 1++}
      //   this.props.createOrder(order)
      // }
    } 
  }

  render () {
    let {furniture} = this.props
    if (!furniture) {
      return null;
    }
    
    return (

      <div className="furniture-show-container">
        
        <div className="furniture-show-info">
          <p className="furniture-name">Name:  {furniture.name} </p>
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

export default FurnitureShow;