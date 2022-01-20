import * as reviewAPIUtil from "../util/review_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const CLEAR_REVIEWS = "CLEAR_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS";

export const $receiveAllReviews = furnitureId => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const $receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const $createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const $deleteReview = review => ({
  type: DELETE_REVIEW,
  review
});

export const $updateReview = review => ({
  type: UPDATE_REVIEW,
  review
});

export const $clearReviews = () => ({
  type: CLEAR_REVIEWS
});

export const $receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const $removeReviewErrors = errors => ({
  type: REMOVE_REVIEW_ERRORS
});


export const fetchReviews = (furnitureId) => dispatch => (
  reviewAPIUtil.fetchReviews(furnitureId)
    .then(res => dispatch($receiveAllReviews(res)),
    err => dispatch($receiveReviewErrors(err.responseJSON))
  )
);

export const fetchReview = (review) => dispatch => (
  reviewAPIUtil.fetchReview(review)
    .then(res => dispatch($receiveReview(res)),
      err => dispatch($receiveReviewErrors(err.responseJSON))
  )
);

export const createReview = (review) => dispatch => (
  reviewAPIUtil.createReview(review) 
    .then(res => dispatch($createReview(res)),
      err => dispatch($receiveReviewErrors(err.responseJSON))
  )
);

export const updateReview = (review) => dispatch => (
  reviewAPIUtil.updateReview(review)
    .then(res => dispatch($updateReview(res)),
      err => dispatch($receiveReviewErrors(err.responseJSON))
  )
);

export const deleteReview = review => dispatch => (
  reviewAPIUtil.deleteReview(review)
    .then(res => dispatch($deleteReview(res)),
      err => dispatch($receiveReviewErrors(err.responseJSON))
  )
);

