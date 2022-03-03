import React from "react";
import FurnitureIndexItem from "./furniture_index_item"
import { withRouter } from "react-router";
// import { MenuItems } from "../nav/menu_items"


class FurnitureIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFurnitures()
  }

  categoryString(path) {
    let furniturePath = this.props.match.path;

    for (let i = furniturePath.length - 1; i > 0; i--) {
      if (furniturePath[i] === '/') {
        return furniturePath.slice(i + 1);
      } 
    }
  }


  render() {
    let furnitureCategory = this.categoryString(this.props.match.path);
    
    console.log("furnitures", this.props)
    if (furnitureCategory === 'sofa'){
      return (
        <div className="index-main-container">
          <h1>Sofa</h1>
          <div className="furniture-index-container" >
            <h2 className="index-container-logo">Feels like Home</h2>
            <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
            <ul className="furniture-ul-container-ul">
              {
                this.props.sofas.map(sofa => (
                  <FurnitureIndexItem
                    furniture={sofa}
                    key={sofa.id}
                  />
                )
                )}
            </ul>
          </div>
        </div>
      )
    } else if (furnitureCategory === 'sectional') {
      return (
        <div className="index-main-container">
          <h1>Sectionals</h1>
          <div className="furniture-index-container" >
            <h2 className="index-container-logo">Feels like Home</h2>
            <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
            <ul className="furniture-ul-container-ul">
              {
                this.props.sectionals.map(sectional => (
                  <FurnitureIndexItem
                    furniture={sectional}
                    key={sectional.id}
                  />
                )
                )}
            </ul>
          </div>
        </div>
      )
    } else if (furnitureCategory === 'chair') {
      return (
        <div className="index-main-container">
          <h1>Chairs</h1>
          <div className="furniture-index-container" >
            <h2 className="index-container-logo">Feels like Home</h2>
            <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
            <ul className="furniture-ul-container-ul">
              {
                this.props.chairs.map(chair => (
                  <FurnitureIndexItem
                    furniture={chair}
                    key={chair.id}
                  />
                )
                )}
            </ul>
          </div>
        </div>
      )
    } else if (furnitureCategory === 'table') {
      return (
        <div className="index-main-container">
          <h1>table</h1>
          <div className="furniture-index-container" >
            <h2 className="index-container-logo">Feels like Home</h2>
            <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
            <ul className="furniture-ul-container-ul">
              {
                this.props.tables.map(table => (
                  <FurnitureIndexItem
                    furniture={table}
                    key={table.id}
                  />
                )
                )}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="index-main-container">
          <h1>Shop All</h1>
          <div className="furniture-index-container" >
            <h2 className="index-container-logo">Feels like Home</h2>
            <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
            <ul className="furniture-ul-container-ul">
              {
                this.props.furnitures.map(furniture => (
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
}

export default withRouter(FurnitureIndex);