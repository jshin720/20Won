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

  keywordString(url) {
    let furniturePath = this.props.match.url;

    for (let i = furniturePath.length - 1; i > 0; i--) {
      if (furniturePath[i] === '/') {
        return furniturePath.slice(i + 1).toLowerCase();
      }
    }
  }

  searchResults(url) {
    let keyword = this.keywordString(url);

    let names = this.props.furnitures.filter((furniture) => (
      furniture.name.toLowerCase().includes(keyword)
      ))
      
    let colors = this.props.furnitures.filter((furniture) => (
      furniture.color.toLowerCase() === keyword
    ))

    let keywordFilter = this.props.furnitures.filter((furniture) => (
      furniture.category.toLowerCase() === keyword 
    ))

    const keywordArr = ['sofa', 'sectional', 'chair', 'table', 'chairs', 'sofas', 'sectionals', 'tables']
    
    if (names.length > 0 && !keywordArr.includes(keyword)) {
      console.log('keyword', names)
      return (
        <div className="search-result">
          <h1 className="result-number"> {names.length} Search Results </h1>
          <ul className="results-container">
            {names.map(name => (
              <FurnitureIndexItem
                furniture={name}
                key={name.id}
              />
            )
            )}
          </ul>
        </div>
      )
    } else if (colors.length > 0 && !keywordArr.includes(keyword)) {
      return (
        <div className="search-result">
          <h1 className="result-number"> {colors.length} Search Results </h1>
          <ul className="results-container">
            {colors.map(color => (
              <FurnitureIndexItem
                furniture={color}
                key={color.id}
              />

            )
            )}
          </ul>
        </div>
      )
    } else if (keywordArr.includes(keyword)) {
      return (
        <div className="search-result">
          <h1 className="result-number"> {keywordFilter.length} Search Results </h1>
          <ul className="results-container">
            {keywordFilter.map(newKeyword => (
              <FurnitureIndexItem
                furniture={newKeyword}
                key={newKeyword.id}
              />
            )
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <h1>
          No Search Results
        </h1>
      )
    }
  }


  render() {
    let furnitureCategory = this.keywordString(this.props.match.url);
    const notKeyword = this.props.match.params.keyword;
    console.log("furnitures", furnitureCategory);
    console.log("furnitures2", this.props)
    if (furnitureCategory === 'sofa' && !notKeyword) {
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
    } else if (furnitureCategory === 'sectional' && !notKeyword) {
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
    } else if (furnitureCategory === 'chair' && !notKeyword) {
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
    } else if (furnitureCategory === 'table' && !notKeyword) {
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
    } else if (furnitureCategory === 'shopall' && !notKeyword) {
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
    } else {
      return this.searchResults(this.props.match.url);
    }
  }
}

export default withRouter(FurnitureIndex);