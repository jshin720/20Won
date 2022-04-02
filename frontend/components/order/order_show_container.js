import { connect } from 'react-redux';
import { fetchOrder, deleteOrder, fetchOrders, updateOrder  } from '../../actions/order_actions';
import { fetchFurniture, fetchFurnitures } from "../../actions/furniture_actions"
import OrderShow from './order_show'


const mSTP = (state) => {
  console.log('orders-container', state)

  return ({
    currentUser: state.entities.users[state.session.id],
    furnitures: state.entities.furnitures,
    orders: state.entities.orders
  })
}

const mDTP = (dispatch) => ({
  fetchFurnitures: () => dispatch(fetchFurnitures()),
  fetchFurniture: furnitureId => dispatch(fetchFurniture(furnitureId)),
  fetchOrder: orderId => dispatch(fetchOrder(orderId)),
  deleteOrder: orderId => dispatch(deleteOrder(orderId)),
  fetchOrders: () => dispatch(fetchOrders()),
  updateOrder: orderId => dispatch(updateOrder(orderId))
})

export default connect(mSTP, mDTP)(OrderShow)