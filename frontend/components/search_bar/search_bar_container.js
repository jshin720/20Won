import { connect } from "react-redux";
import { receiveFurnitures } from "../../actions/furniture_actions"
import SearchBar from "./search_bar";

const mSTP = (state, ownProps) => ({
  furnitures: Object.values(state.entities.furnitures),
  keyword: ownProps.match.params.keyword
})

const mDTP = (dispatch) => ({
  receiveFurnitures: () => dispatch(ReceiveFurnitures())
})


export default connect(mSTP, mDTP)(SearchBar)