import { combineReducers } from "redux";
// import userReducer from "./user_reducer";
import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import ReviewReducer from "./review_reducer";


const rootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  reviews: ReviewReducer
})

export default rootReducer;