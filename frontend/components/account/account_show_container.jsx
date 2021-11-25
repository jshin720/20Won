import React from 'react';
import { connect } from 'react-redux';
import accountPage from './account_show';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../util/user_api_util';
import { withRouter } from 'react-router';
// import { fetchOrder, updateOrder, deleteOrder } from '../../actions/order_actions';
// import { updateProduct, deleteProduct } from '../../actions/product_actions';

const mSTP = (state, ownProps) => {
  console.log(state)
  return(
  {currentUser: state.entities.users[ownProps.match.params.userId]}
  // cart: state.entities.cart
  )
}

const mDTP = (dispatch, ownProps) => ({
  logout: userId => dispatch(logout(userId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  // fetchOrder: OrderId => dispatch(fetchOrder(OrderId)),
  // updateOrder: Order => dispatch(updateOrder(Order)),
  // deleteOrder: OrderId => dispatch(deleteOrder(OrderId)),
  // updateFurniture: furniture => dispatch(updateFurniture(furniture)),
  // deleteFurniture: furnitureId => dispatch(deleteFurniture(furnitureId))
})

export default withRouter(connect(mSTP, mDTP)(accountPage))