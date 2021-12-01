import { connect } from 'react-redux'
import { fetchFurnitures, fetchFurniture} from "../../actions/furniture_actions"
import FurnitureShow from './furniture_show'

const mSTP = (state, ownProps) => ({
  furniture: state.entities.furniture[ownProps.match.params.furnitureId],
  furnitures: Object.values(state.entities.furniture),
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.Errors.responseJSON
})

const mDTP = (dispatch, ownProps) => ({
  fetchFurniture: () => dispatch(fetchFurniture(ownProps.match.params.furnitureId)),
  fetchFurnitures: () => dispatch(fetchFurnitures())
})

export default connect(mSTP, mDTP)(FurnitureShow)