import { connect } from 'react-redux';
import { fetchFurnitures, fetchFurniture} from "../../actions/furniture_actions";
import FurnitureShow from './furniture_show';
import { createOrder } from '../../actions/order_actions';
import { fetchUser } from '../../actions/user_actions';
import { 
  fetchReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview,
  clearReviews,
  $removeReviewErrors
} from '../../actions/review_actions';


const mSTP = (state, ownProps) => { console.log("container-reviews",state)
  let furniture
  if (state.entities.furnitures) {
    furniture = state.entities.furnitures[ownProps.match.params.furnitureId]
  }
  return ({
    furniture,
    currentUser: state.entities.users[state.session.id],
    reviews: state.reviews,
    errors: state.errors.reviews
    // user: state.user[state.session.users.id]
  // furnitures: Object.values(state.entities.furniture)
  })
}

const mDTP = (dispatch, ownProps) => ({
  fetchFurniture: (furnitureId) => dispatch(fetchFurniture(furnitureId)),
  fetchFurnitures: () => dispatch(fetchFurnitures()),
  createOrder: (order) => dispatch(createOrder(order)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchReviews: () => dispatch(fetchReviews(ownProps.match.params.furnitureId)),
  deleteReview: (review) => dispatch(deleteReview(review)),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  removeReviewErrors: () => dispatch($removeReviewErrors()),
  clearReviews: () => dispatch(clearReviews())
})

export default connect(mSTP, mDTP)(FurnitureShow)