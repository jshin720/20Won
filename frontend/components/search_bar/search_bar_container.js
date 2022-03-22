import { connect } from "react-redux";
import { fetchFurnitures } from "../../actions/furniture_actions";
import SearchBar from "./search_bar";

const mSTP = (state, ownProps) => {
  console.log('search-container', state)

  return({

    furnitures: Object.values(state.entities.furnitures)
  })
}

const mDTP = dispatch => ({
  fetchFurnitures: () => dispatch(fetchFurnitures())
})


export default connect(mSTP, mDTP)(SearchBar)