import React from 'react';
import { withRouter } from 'react-router'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchFurnitures() 
  }

  update(e) {
    this.setState({
      keyword: e.target.value
    }, () => console.log('state', this.state.keyword))
  }

  handleSubmit() {

    this.props.handleSearchDropdown();
    this.props.history.push(`/search/${this.state.keyword}`)
  }

  popularSearchesFilter() {
    let randomNums = [];
    while(randomNums.length < 4) {
      let num = Math.floor(Math.random() * this.props.furnitures.length)
      if (!randomNums.includes(num)) {
        randomNums.push(num);
      }
    }
    console.log(randomNums)
    return (
      randomNums.map((randomNum, i) => {
        let randomFurniture = this.props.furnitures[randomNum];
        return(
        <li key={i}>
          {randomFurniture.name}
        </li>
        )
      })
    )
  }


  render() {
    console.log('search', this.props)
    if (this.props.furnitures.length === 0) {
      return null;
    } 
    return (
      <div className='searchbar-container'>
        <div id="wrap">
          <form onSubmit={this.handleSubmit}>
            <input id='search' type="text" placeholder='Search our site' onChange={this.update} />
            <span id="search-submit"> </span>
          </form>
        </div>
        <div className='popular-searches'>
          <h3 className="popular-search-headers">POPULAR SEARCHES</h3>
          <ul className='popular-searched-items'>
            {this.popularSearchesFilter()}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);