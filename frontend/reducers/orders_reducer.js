
import { RECEIVE_ORDER, REMOVE_ORDER } from "../actions/order_actions";
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FURNITURE, REMOVE_FURNITURE } from "../actions/furniture_actions";

const cartReducer = (state = { furniture: {} }, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case REMOVE_CURRENT_USER:
      return { products: {} };
    
    case RECEIVE_CART:
      newState = action.cart
      let temp = action.cart.products
      newState.products = {}

      temp.forEach(prod => {
        newState.products[Object.values(prod)[0].id] = Object.values(prod)[0]
      })
      return newState
    case RECEIVE_SHARED_CART:
      newState.products = {}
      action.cart.products.forEach(prod => {
        newState.products[Object.values(prod)[0].id] = Object.values(prod)[0]
      })
      newState["foreignCart"] = true;
      return newState
    case REMOVE_PRODUCT:
      delete newState.products[action.productId]
      return newState
    case RECEIVE_PRODUCT:
      newState.products[action.product.id] = action.product
      return newState
    case REMOVE_CART:
      delete newState[action.cartId]
      return {};
    default:
      return oldState
  }
}
