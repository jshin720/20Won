import { 
  RECEIVE_FURNITURES, 
  RECEIVE_FURNITURE
} from "../actions/furniture_actions";


const FurnitureReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FURNITURES:
    
      return action.furnitures
    case RECEIVE_FURNITURE:
      nextState[action.furniture.id] = action.furniture
      return nextState;
    default:
      return state;
  }
}

export default FurnitureReducer;