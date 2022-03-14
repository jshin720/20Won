import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.fetchFurnitures() 
  };

  // componentWillUnmount(){
  //   this.props.popularSearchesFilter();
  // }
 
  update(e) {
    this.setState({
      keyword: e.target.value
    }, () => console.log('state', this.state.keyword))
  };

  handleSubmit() {

    this.props.handleSearchDropdown();
    this.props.history.push(`/search/${this.state.keyword}`) //comes from the withrouter - it needs 2 parameters (path, state) - leads to another path with the even state
  };

  popularSearchesFilter() {
    let randomNums = [];
    while(randomNums.length < 4) {
      let num = Math.floor(Math.random() * this.props.furnitures.length)
      if (!randomNums.includes(num)) {
        randomNums.push(num);
      };
    };
    
    return (
      randomNums.map((randomNum, i) => {
        let randomFurniture = this.props.furnitures[randomNum];
        return(
        <li>
          <Link to={`/furnitures/${randomFurniture.id}`} 
            onClick={this.props.handleSearchDropdown}
            style={{color: 'black'}}
          >
          {randomFurniture.name}
          </Link>
        </li>
        )
      })
    )
  };


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
            <span id="search-submit" onSubmit={this.handleSubmit}> </span>
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