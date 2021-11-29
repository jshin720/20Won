import { 
  RECEIVE_FURNITURES, 
  RECEIVE_FURNITURE
} from "../actions/furniture_actions";


const FurnitureReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FURNITURE:
      const nextState = Object.assign({}, oldState);
      return action.furnitures
    case RECEIVE_FURNITURES:
      return Object.assign({}, state, { [action.furniture.id]: action.furniture })
    default:
      return state;
  }
}

export default FurnitureReducer;