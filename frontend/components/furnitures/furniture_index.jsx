import React from "react";
import FurnitureIndexItem from "./furniture_index_item"
import { withRouter } from "react-router";


class FurnitureIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFurnitures()
  }

  render() {
    console.log("furnitures", this.props)
    return (

      <div className="index-main-container">
        <h1>Sofa</h1>
        <div className="furniture-index-container" >
          <h2 className="index-container-logo">Feels like Home</h2>
          <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
          <ul className="furniture-ul-container-ul">
            {
              this.props.furnitures.map(furniture => (
// have to make a conditional statement here that is fileter out of the products 
                <FurnitureIndexItem
                  furniture={furniture}
                  key={furniture.id}
                />
              )
              )}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(FurnitureIndex);