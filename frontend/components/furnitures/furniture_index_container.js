import { connect } from "react-redux";
import FurnitureIndex from "./furniture_index"
import { fetchFurnitures } from "../../actions/furniture_actions";


const mSTP = (state) => {

  const furnitures = Object.values(state.entities.furnitures)

  let sofa = furnitures.filter((furniture) => (
    furniture.category === "Sofa"
  ))

  let sectional = furnitures.filter((furniture) => (
    furniture.category === "Sectional"
  ))

  let chair = furnitures.filter((furniture) => (
    furniture.category === "Chair"
  ))

  let table = furnitures.filter((furniture) => (
    furniture.category === "Table"
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