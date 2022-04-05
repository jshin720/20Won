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
          <div className="furniture-index-container" > 
            <ul className="furniture-ul-container-ul">
            {names.map(name => (
              <FurnitureIndexItem
                furniture={name}
                key={name.id}
              />
            )
            )}
          </ul>
          </div>
        </div>
      )
    } else if (colors.length > 0 && !keywordArr.includes(keyword)) {
      return (
        <div className="search-result">
          <h1 className="result-number"> {colors.length} Search Results </h1>
          <div className="furniture-index-container" >
            <ul className="furniture-ul-container-ul">
            {colors.map(color => (
              <FurnitureIndexItem
                furniture={color}
                key={color.id}
              />

            )
            )}
          </ul>
          </div>
        </div>
      )
    } else if (keywordArr.includes(keyword)) {
      return (
        <div className="search-result-container">
          <h1 className="result-number"> {keywordFilter.length} Search Results </h1>
          <div className="furniture-index-container" >
            <ul className="furniture-ul-container-ul">
            {keywordFilter.map(newKeyword => (
              <FurnitureIndexItem
                furniture={newKeyword}
                key={newKeyword.id}
              />
            )
            )}
          </ul>
          </div>
        </div>
      )
    } else {
      return (
        <h1 className="result-number">
          No Search Results for "{keyword}"
        </h1>
      )
    }
  }


  render() {
    let furnitureCategory = this.keywordString(this.props.match.url);
    const notKeyword = this.props.match.params.keyword;
    console.log("furnitures", furnitureCategory);
    const { sofas, sectionals, tables, chairs, furnitures } = this.props
    console.log("furnitures2", sofas)

    if (furnitureCategory === 'sofa' && !notKeyword) {
      return (
        <div className="index-main-container">
          <div className="furniture-index-header-container">
            <img src="https://cdn.shopify.com/s/files/1/0332/0384/7212/products/neva-sofa-washed-cotton-linen-corn-silk-lifestyle-PDP1-84_2610x.jpg?v=1615479434" className="header-picture" />
            <h1>Sofas</h1>
            <div className="intro-container">
              <h2 className="intro">FEELS LIKE HOME</h2>
              <br />
              <p className="type-description">Luxurious, feather-filled sofas in all-natural, life-friendly fabrics</p>
            </div>
          </div>
          <div className="empty-space">
          </div>
          <div className="furniture-index-container" >
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
          <div className="furniture-index-header-container">
            <img src="https://cdn.shopify.com/s/files/1/0332/0384/7212/products/neva-chaise-sectional-medium-weight-linen-jasmine-rice-lifestyle-PDP1-5-pc_2610x.jpg?v=1605807532" className="header-picture" />
            <h1>Sectionals</h1>
            <div className="intro-container">
              <h2 className="intro">ALWAYS ROOM FOR ONE MORE</h2>
              <br />
              <p className="type-description">Shape-shifting sectionals for all of life's changing needs.</p>
            </div>
          </div>
          <div className="empty-space">
          </div>
          <div className="furniture-index-container" >
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
          <div className="furniture-index-header-container">
            <img src="https://roomsforrentblog.com/wp-content/uploads/2019/08/New-SIXPENNY-Chairs-1891-1024x675.jpg" className="header-picture" />
            <h1>Chairs</h1>
            <div className="intro-container">
              <h2 className="intro">CURL UP IN COMFORT</h2>
              <p className="type-description">Turn any corner into an effortless, lounge-ready oasis.</p>
            </div>
          </div>
          <div className="empty-space">
          </div>
          <div className="furniture-index-container" >
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
          <div className="furniture-index-header-container">
            <img src="https://cdn.shopify.com/s/files/1/0332/0384/7212/products/leona-dining-table-lifestyle-pdp1_4edcd692-ce4b-4bfa-bd15-3e4d06c1a81b_2610x.jpg?v=1632967559" className="header-picture" />
            <h1>Tables</h1>
            <div className="intro-container">
              <h2 className="intro">HOLD IT ALL TOGETHER</h2>
              <p className="type-description">Handmade modern classics, crafted from storied solid woods.</p>
            </div>
          </div>
          <div className="empty-space"> </div>
          <div className="furniture-index-container" >
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
          <div className="furniture-index-header-container">
            <img src="https://images.squarespace-cdn.com/content/v1/5f738a94c508e4669e6ecbd8/1601407651801-OTFEYA1QNAFA4CL0G3MP/image-asset.jpeg" className="header-picture" />
            <h1>All Furnitures</h1>
            <div className="intro-container">
              <h2 className="intro">RELAX. REFOCUS.</h2>
              <p className="type-description">The many shapes of extraordinary comfort, slipcovered in all-natural materials, and crafted to last a lifetime.</p>
            </div>
          </div>
          <div className="empty-space">
          </div>
          <div className="furniture-index-container" >
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