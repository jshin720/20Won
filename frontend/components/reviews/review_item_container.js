import { connect } from 'react-redux';
import { fetchUser } from "../../actions/user_actions";
import ReviewItem from './review_item';
import { $removeReviewErrors } from '../../actions/review_actions';


const mSTP = (state) => ({
  users: state.user,
  currentId: state.session.user.id,
  errors: state.errors.reviews
})

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  removeReviewErrors: () => dispatch($removeReviewErrors())
})

export default connect(mSTP, mDTP)(ReviewItem)