import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
  REMOVE_REVIEW_ERRORS,
  CLEAR_REVIEWS
}
  from "../actions/review_actions";

const ReviewErrorReducer = (state = {}, action ) => {
  console.log("reviews reducer", action)
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case REMOVE_REVIEW_ERRORS:
      return [];
    case CLEAR_REVIEWS:
      return [];
    default:
      return state;
  }
}

export default ReviewErrorReducer;