import React from 'react';
import { connect } from 'react-redux';
import accountPage from './account_show';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router';
// import { fetchOrder, updateOrder, deleteOrder } from '../../actions/order_actions';
// import { updateProduct, deleteProduct } from '../../actions/product_actions';

const mSTP = (state) => {
  
  return(
  {
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id
  }

  // cart: state.entities.cart
  )
}

const mDTP = (dispatch) => ({
  logout: userId => dispatch(logout(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  // fetchOrder: OrderId => dispatch(fetchOrder(OrderId)),
  // updateOrder: Order => dispatch(updateOrder(Order)),
  // deleteOrder: OrderId => dispatch(deleteOrder(OrderId)),
  // updateFurniture: furniture => dispatch(updateFurniture(furniture)),
  // deleteFurniture: furnitureId => dispatch(deleteFurniture(furnitureId))
})

export default withRouter(connect(mSTP, mDTP)(accountPage))