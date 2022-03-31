import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import ReviewItem from './review_item';
import { $removeReviewErrors, fetchReviews } from '../../actions/review_actions';


const mSTP = (state) => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.reviews,
  furniture: state.entities.furnitures
  
})

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  removeReviewErrors: () => dispatch($removeReviewErrors()),
  fetchReviews: (furnitureId) => dispatch(fetchReviews(furnitureId))
})

export default connect(mSTP, mDTP)(ReviewItem)