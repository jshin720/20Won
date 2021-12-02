import { connect } from 'react-redux'
import { fetchFurnitures, fetchFurniture} from "../../actions/furniture_actions"
import FurnitureShow from './furniture_show'
import { createOrder } from '../../actions/order_actions'

const mSTP = (state, ownProps) => { console.log(state)
  let furniture
  if (state.entities.furnitures) {
    furniture = state.entities.furnitures[ownProps.match.params.furnitureId]
  }
  return ({
    furniture,
    currentUser: state.entities.users[state.session.id]
  // furnitures: Object.values(state.entities.furniture)
  })
}

const mDTP = (dispatch, ownProps) => ({
  fetchFurniture: (furnitureId) => dispatch(fetchFurniture(furnitureId)),
  fetchFurnitures: () => dispatch(fetchFurnitures()),
  createOrder: (order) => dispatch(createOrder(order))
})

export default connect(mSTP, mDTP)(FurnitureShow)