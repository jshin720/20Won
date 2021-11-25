import { combineReducers } from "redux";
import sessionsReducer from "./session_reducer";
import userReducer from "./user_reducer";
import entitiesReducer from "./entities_reducer";


const rootReducer = combineReducers({
  session: sessionsReducer,
  entities: entitiesReducer
})

export default rootReducer;