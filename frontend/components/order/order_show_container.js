import { connect } from 'react-redux';
import { fetchOrder, deleteOrder, fetchOrders  } from '../../actions/order_actions';
import OrderShow from './order_show'


const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  orders: state.entities.orders
  
  
})

const mDTP = (dispatch) => ({
  fetchOrder: orderId => dispatch(fetchOrder(orderId)),
  deleteOrder: orderId => dispatch(deleteOrder(orderId)),
  fetchOrders: () => dispatch(fetchOrders())
})

export default connect(mSTP, mDTP)(OrderShow)