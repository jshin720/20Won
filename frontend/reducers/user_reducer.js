import { 
  RECEIVE_USER 
} from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.currentUser.id] = action.currentUser
      return newState
    default:
      return state
  }
}

export default userReducer;