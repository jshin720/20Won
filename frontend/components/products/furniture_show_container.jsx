// import { connect } from "react-redux"
// import ProductShow from "./product_show"
// import { ThunkReceiveProduct } from "../../actions/product_actions"
// import { ThunkCreateCartItem, ThunkDeleteCartItem } from "../../actions/cart_items_actions"
// import { ThunkFetchReview, ThunkFetchAllReviews, ThunkDeleteReview, ThunkCreateReview, ThunkUpdateReview } from "../../actions/review_actions";
// import { openModal } from "../../actions/modal_actions";

// const mSTP = (state, ownProps) => {
//   const product = state.entities.products[ownProps.match.params.productId];
//   const productId = parseInt(ownProps.match.params.productId);
//   const reviewsArray = Object.values(state.entities.reviews)
//   const productReviews = reviewsArray.filter((review) => review.product_id === productId)

//   const reviews = Object.values(state.entities.reviews)

//   let photoUrls;
//   if (product === undefined) {
//     photoUrls = [];
//   } else {
//     photoUrls = product.photoUrls;
//   }
//   return ({
//     reviewErrors: state.errors.review,
//     product: product,
//     photoUrls: photoUrls,
//     cartId: state.entities.cart.id,
//     cartItems: state.entities.cartItems,
//     currentUser: state.entities.users[state.session.id],
//     errors: state.errors,
//     reviews: state.entities.reviews,
//     productId: productId,
//     currentUserId: state.session.id,
//     sessionId: state.session.id,
//     reviewsArray: reviewsArray,
//     productReviews: productReviews,


//   })
// }

// const mDTP = dispatch => ({
//   fetchProduct: productId => dispatch(ThunkReceiveProduct(productId)),
//   createCartItem: (productId, quantity) => dispatch(ThunkCreateCartItem(productId, quantity)),
//   deleteCartItem: cartItemId => dispatch(ThunkDeleteCartItem(cartItemId)),
//   openModal: (modal) => dispatch(openModal(modal)),
//   fetchReview: reviewId => dispatch(ThunkFetchReview(reviewId)),
//   fetchAllReviews: () => dispatch(ThunkFetchAllReviews()),
//   deleteReview: reviewId => dispatch(ThunkDeleteReview(reviewId)),
//   createReview: review => dispatch(ThunkCreateReview(review)),
//   updateReview: review => dispatch(ThunkUpdateReview(review)),
// })


// export default connect(mSTP, mDTP)(ProductShow)