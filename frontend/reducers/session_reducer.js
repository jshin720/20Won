import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER 
} from "../actions/session_actions";

const nullUser = {
  id: null
}

const sessionsReducer = (state = nullUser, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.id = action.currentUser.id
      return newState
    case REMOVE_CURRENT_USER:
      return nullUser
    default:
      return state;
  }
}

export default sessionsReducer;