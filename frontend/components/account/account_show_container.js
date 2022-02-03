import React from 'react';
import { connect } from 'react-redux';
import accountPage from './account_show';
import { logout } from '../../actions/session_actions';
import { 
  fetchUser,
  updateUser,
  deleteUser
 } from '../../actions/user_actions';
import { withRouter } from 'react-router';
import { fetchOrder, updateOrder, deleteOrder } from '../../actions/order_actions';
import { openModal } from '../../actions/modal_actions';
// import { updateProduct, deleteProduct } from '../../actions/product_actions';

const mSTP = (state) => {
  
  return(
  {
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id,
    errors: state.errors.session
  }

  // cart: state.entities.cart
  )
}

const mDTP = (dispatch) => ({
  logout: userId => dispatch(logout(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (userId) => dispatch(updateUser(userId)),
  deleteUser: (userId) => dispatch(deleteUser(userId)),
  fetchOrder: OrderId => dispatch(fetchOrder(OrderId)),
  openModal: () => dispatch(openModal())
  // updateOrder: Order => dispatch(updateOrder(Order)),
  // deleteOrder: OrderId => dispatch(deleteOrder(OrderId)),
  // updateFurniture: furniture => dispatch(updateFurniture(furniture)),
  // deleteFurniture: furnitureId => dispatch(deleteFurniture(furnitureId))
})

export default withRouter(connect(mSTP, mDTP)(accountPage))