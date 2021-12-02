import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import FurnitureReducer from "./furniture_reducer";
import OrderReducer from "./orders_reducer";


export default combineReducers({
  users: UserReducer,
  furnitures: FurnitureReducer,
  orders: OrderReducer
});