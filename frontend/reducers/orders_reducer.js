
import { RECEIVE_ALL_ORDERS, RECEIVE_ORDER, REMOVE_ORDER } from "../actions/order_actions";
import { REMOVE_CURRENT_USER } from "../actions/session_actions";

const OrderReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  
  switch (action.type) {
    case REMOVE_CURRENT_USER:
      return {}
    case RECEIVE_ORDER:
      
      // if (nextState[action.order.furniture_id]) {
      //   nextState[action.order.furniture_id]['quantity'] += 1
      // } else {
        nextState[action.order.id] = action.order;
      // }
      return nextState;
    case RECEIVE_ALL_ORDERS:
      return action.orders;
    case REMOVE_ORDER:
      delete nextState[action.orderId]
      return nextState;
    default:
      return state;
  }
}


export default OrderReducer;