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

    if (prevProps.match.params.furniture_id !== this.props.match.params.furniture_id) {
      this.props.fetchFurniture()
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

  madeReview(userId) {
    for (let review in this.props.reviews) {
      console.log("review", review)
      if (this.props.reviews[review].reviewer_id === this.props.currentUser.id) {
        return true;
      }
    }

    return false;
  }


  render() {
    console.log("show before", this.props.currentUser)
    let { furniture } = this.props
    if (!furniture) {
      return null;
    }

    return (

      <div className="furniture-show-container">

        <div className="furniture-show-info">
          <p className="furniture-name">Name: {furniture.name} </p>
          <br />
          <div id="price-container">
            <p className="furniture-price"> {`${furniture.price}.00`} </p>
          </div>
          <p className="furniture-color">Color: {furniture.color} </p>
          <p className="furniture-category">{furniture.category} </p>
          <p className="furniture-description"> {furniture.description} </p>
        </div>
        <button type="submit" onClick={this.addToOrders}>Add To Cart</button>
        <div className='extra-details'>
          <p className='dimensions'>{furniture.dimensions}</p>
          <p className='highlights'>{furniture.highlight}</p>

        </div>
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
              {(!this.state.createReview && this.madeReview(this.props.currentUser)) || (!this.state.createReview && !this.props.currentUser) ?

                null
                :
                <>
                  <button type="submit" onClick={this.toggleCreateReview} className="material-icons-outlined add-review">WRITE A REVIEW</button>
                </>
              }

            </div>

            :

            <div className="toggle-review">
              {
                this.madeReview(this.props.currentUser) || !this.props.currentUser ? null :
                  <CreateReviewForm
                    currentUser={this.props.currentUser}
                    furniture={this.props.furniture}
                    errors={this.props.errors}
                    removeReviewErrors={this.props.removeReviewErrors}
                    createReview={this.props.createReview}
                    toggleCreateReview={this.toggleCreateReview}
                  />
              }
            </div>
          }
        </div>

      </div>
    )
  }

}

export default FurnitureShow;