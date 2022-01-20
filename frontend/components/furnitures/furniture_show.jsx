import React from 'react';
import { withRouter } from 'react-router-dom';
import CreateReviewForm from '../reviews/create_review';
import ReviewItemContainer from '../reviews/review_item_container';

class FurnitureShow extends React.Component {
  constructor(props) {
    super(props)

    this.addToOrders = this.addToOrders.bind(this)
    // this.onChangeHandler = this.onChangeHandler.bind(this)
    this.toggleCreateReview = this.toggleCreateReview.bind(this);
    this.state = { createReview: false };

  }

  componentDidMount() {
    this.props.fetchFurniture(this.props.match.params.furnitureId);
    this.props.fetchReviews();

  }

  componentDidUpdate(prevProps) {
    if (Object.values(this.props.reviews).length !== Object.values(prevProps.reviews).length) {
      this.props.fetchReviews()
    }

    if (prevProps.match.params.gameId != this.props.match.params.gameId) {
      this.props.fetchGames()
      this.props.fetchReviews()
    }
  }

  componentWillUnmount() {
    this.props.clearReviews();
  }

  toggleCreateReview() {
    this.setState({ createReview: !this.state.createReview })
  }



  addToOrders(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      // if (this.props.currentUser.order[furnitureid] === undefined) {
      let order = { furniture_id: this.props.furniture.id, quantity: 1, user_id: this.props.currentUser.id }
      this.props.createOrder(order)
      // } else {
      //   let order = { quantity: 1++}
      //   this.props.createOrder(order)
      // }
    }
  }

  avgRating(obj) {
    let arr = Object.values(obj)
    if (arr.length === 0) {
      return "n/a"
    }

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].rating;
    }
    let avg = sum / arr.length;

    return Math.round(avg * 10) / 10
  }

  madeReview(userId) {
    for (let review in this.props.reviews) {
      if (this.props.reviews[review].author === userId) {
        return true;
      }
    }

    return false;
  }


  render() {
    let { furniture } = this.props
    if (!furniture) {
      return null;
    }

    return (

      <div className="furniture-show-container">

        <div className="furniture-show-info">
          <p className="furniture-name">Name: {furniture.name} </p>
          <br />
          <p className="furniture-color">Color: {furniture.color} </p>
          <p className="furniture-category">{furniture.category} </p>
          <div id="price-container">
            <p className="furniture-price"> {`${furniture.price}.00`} </p>
          </div>
          <p className="furniture-description"> {furniture.description} </p>
        </div>
        <button type="submit" onClick={this.addToOrders}>Add To Cart</button>

        <div className="review-section">

          {!this.state.createReview ?
            <div className="review-container">
              <h1>Reviews</h1>
              <ul>
                {
                  Object.values(this.props.reviews).map((review, i) => {
                    return <ReviewItemContainer
                      key={i}
                      review={review}
                      updateReview={this.props.updateReview}
                      deleteReview={this.props.deleteReview}
                    />
                  })
                }
              </ul>
              {!this.state.createReview && !this.madeReview(this.props.currentUserId) ?

                <>
                  <span onClick={this.toggleCreateReview} className="material-icons-outlined add-review">add_circle</span>
                </>

                : null
              }

            </div>

            :

            <div className="toggle-review">
              {
                this.madeReview(this.props.currentUserId) ? null :
                  <>{createForm}</>
              }
            </div>
          }
        </div>

      </div >
    )
  }

}

export default FurnitureShow;