import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ReviewErrorReducer from "./review_errors_reducer";
import UpdateUserErrorsReducer from "./user_update_errors_reducer";


const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  reviews: ReviewErrorReducer,
  users: UpdateUserErrorsReducer
})

export default ErrorsReducer;