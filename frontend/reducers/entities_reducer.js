import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import furnitureReducer from "./furniture_reducer";


export default combineReducers({
  users: userReducer,
  furnitures: furnitureReducer
});