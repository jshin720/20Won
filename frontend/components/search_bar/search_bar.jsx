import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   this.props.receiveProducts()
  // }

  // filterByState(field, e){
  //   let filteredProducts = [];
  //   this.setState({ [field]: e.currentTarget.value })
  //   filteredProducts.forEach((product) => {
  //     if (product.color === this.state.field && !this.props.filteredByState.includes(product)) {
  //       this.props.filteredByState.push(product)
  //     }
  //   })
  // }

  update(e) {
    this.setState({ 
      keyword: e.target.value
    }, () => console.log('state', this.state.keyword))
  }

  handleSubmit() {
    console.log('search', this.state.keyword)
    this.props.handleSearchDropdown();
    this.props.history.push(`/search/${this.state.keyword}`)
  }


  render(){
    
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='tell me your wish' onChange={this.update}/>
      </form>
    )
   
  }
} 

export default withRouter(SearchBar);