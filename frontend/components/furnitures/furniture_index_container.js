import { connect } from "react-redux";
import FurnitureIndex from "./furniture_index"
import { fetchFurnitures } from "../../actions/furniture_actions";


const mSTP = (state) => {

  const furnitures = Object.values(state.entities.furnitures)

  let sofa = furnitures.filter((furniture) => (
    furniture.category === "sofa"
  ))

  let sectional = furnitures.filter((furniture) => (
    furniture.category === "sectional"
  ))

  let chair = furnitures.filter((furniture) => (
    furniture.category === "chair"
  ))

  let table = furnitures.filter((furniture) => (
    furniture.category === "table"
  ))

  return ({
    furnitures: Object.values(state.entities.furnitures),
    sofa: sofa,
    sectional: sectional,
    chair: chair,
    table: table
  })
}

const mDTP = dispatch => ({
  fetchFurnitures: () => dispatch(fetchFurnitures())
})

export default connect(mSTP, mDTP)(FurnitureIndex)