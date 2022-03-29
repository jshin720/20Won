import React from 'react';
import { withRouter } from 'react-router-dom';
import CreateReviewForm from '../reviews/create_review';
import ReviewItemContainer from '../reviews/review_item_container';
import Carousel from '../carousel/carousel';
import * as MdIcon from 'react-icons/md';
import { Link } from 'react-router-dom'
import LoginFormContainer from '../session_form/login_form_container'


class FurnitureShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createReview: false,
      quantity: 1
    };

    this.addToOrders = this.addToOrders.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this)
    this.toggleCreateReview = this.toggleCreateReview.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);

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

  changeQuantityHandler(e) {
    this.setState({ quantity: e.currentTarget.value })
  }

  addToOrders(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      // if (this.props.currentUser.order[furnitureid] === undefined) {
      let order = { furniture_id: this.props.furniture.id, quantity: this.state.quantity, user_id: this.props.currentUser.id }
      this.props.createOrder(order)
    } else {
      this.props.history.push('/login');
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
  let { furniture } = this.props
  console.log("show before", furniture)
  if (!furniture) {
    return null;
  }

  return (


    <div className="furniture-show-container">
      <div className="return-button">
        <Link to={`/furnitures/${furniture.category}`}> <MdIcon.MdOutlineArrowBackIosNew/>  Return to {furniture.category}
        </Link>
      </div>

      < Carousel
        furniture={furniture}
      />

      <div className="furniture-show-info">

        <h1 className="furniture-name">Name: {furniture.name} </h1>
        <br />
        <div id="price-container">
          <p className="furniture-price"> {`$ ${furniture.price}.00`} </p>
        </div>
        <p className="furniture-color"> Shown in {furniture.color} </p>
        <p className="furniture-category">{furniture.category} </p>
        <p className="furniture-description"> {furniture.description} </p>
      </div>
      <form className="add-to-orders-container" onSubmit={this.addToOrders}>
        <select name="quantity" id="orders-quantity-container" value={this.state.quantity} onChange={this.changeQuantityHandler} >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
          <option value="7"> 7 </option>
          <option value="8"> 8 </option>
          <option value="9"> 9 </option>
        </select>
        <button type="submit" >Add To Cart</button>
      </form>

      <div className='extra-details'>
        <p className='dimensions'>{furniture.dimension}</p>
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

export default withRouter(FurnitureShow);