import { connect } from "react-redux";
import PopularItemIndex from "./popular_item_index"
import { fetchFurnitures } from "../../actions/furniture_actions";


const mSTP = (state, ownProps) => {

  return ({
    furnitures: Object.values(state.entities.furnitures),
  })
}

const mDTP = dispatch => ({
  fetchFurnitures: () => dispatch(fetchFurnitures())
})

export default connect(mSTP, mDTP)(PopularItemIndex)