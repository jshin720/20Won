import { 
  RECEIVE_ALL_REVIEWS, 
  RECEIVE_REVIEW,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  CLEAR_REVIEWS
} from "../actions/review_actions";

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      let reviews = Object.values(action.reviews);
      let newState = {};
      reviews.forEach((review) => {
        newState[review.id] = review
      })
      return newState;
    case RECEIVE_REVIEW:
      return action.reviews
    case CREATE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    case UPDATE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    case DELETE_REVIEW:
      delete nextState[action.review.id]
      return nextState
    case CLEAR_REVIEWS:
      return {};
    default:
      return state;
  }
}

export default ReviewReducer;