import * as OrderApiUtil from '../util/order_api_util'

export const RECEIVE_ORDER = "RECEIVE_ORDER"
export const REMOVE_ORDER = "REMOVE_ORDER"

export const receiveOrder= (order) => ({
  type: RECEIVE_ORDER,
  order
})

export const removeOrder = (orderId) => ({
  type: REMOVE_ORDER,
  orderId
})

export const createOrder = (order) => (dispatch) => (
  OrderApiUtil.createOrder(order)
    .then(res => dispatch(receiveCart(res)))
)

export const fetchOrder = (orderId) => (dispatch) => (
  OrderApiUtil.fetchOrder(orderId)
    .then(res => dispatch(receiveOrder(res)))
)

export const updateOrder = (order) => (dispatch) => (
  OrderApiUtil.updateOrder(order)
    .then(res => dispatch(receiveOrder(res)))
)

export const deleteOrder = (orderId) => (dispatch) => (
  OrderApiUtil.deleteOrder(orderId)
    .then(() => dispatch(deleteOrder(orderId)))
)