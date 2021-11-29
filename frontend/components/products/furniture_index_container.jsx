import { connect } from "react-redux";
import FurnitureIndex from "./furniture_Index"
import { receiveFurnitures } from "../../actions/furniture_actions";


const mSTP = (state) => {

  const furnitures = Object.values(state.entities.furnitures)

  let sofa = furnitures.filter((furniture) => (
    furniture.type === "Sofa"
  ))

  let sectional = furnitures.filter((furniture) => (
    furniture.type === "Sectional"
  ))

  let chair = furnitures.filter((furniture) => (
    furniture.type === "Chair"
  ))

  let table = furnitures.filter((furniture) => (
    furniture.type === "Table"
  ))

  return ({
    furnitures: state.entities.furnitures,
    sofa: sofa,
    sectional: sectional,
    chair: chair,
    table: table
  })
}

const mDTP = dispatch => ({
  fetchFurnitures: () => dispatch(receiveFurnitures())
})

export default connect(mSTP, mDTP)(FurnitureIndex)