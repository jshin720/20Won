import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER 
} from "../actions/session_actions";

const _nullUser = {
  id: null
}

const sessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.id = action.currentUser.id
      return newState
    case REMOVE_CURRENT_USER:
      return _nullUser
    default:
      return state;
  }
}

export default sessionsReducer;