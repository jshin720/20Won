import { connect } from "react-redux";
import FurnitureIndex from "./furniture_index"
import { fetchFurnitures } from "../../actions/furniture_actions";


const mSTP = (state, ownProps) => {

  const furnitures = Object.values(state.entities.furnitures)

  let sofas = furnitures.filter((furniture) => (
    furniture.category === "sofa"
  ))

  let sectionals = furnitures.filter((furniture) => (
    furniture.category === "sectional"
  ))

  let chairs = furnitures.filter((furniture) => (
    furniture.category === "chair"
  ))

  let tables = furnitures.filter((furniture) => (
    furniture.category === "table"
  ))

  return ({
    furnitures: Object.values(state.entities.furnitures),
    sofas: sofas,
    sectionals: sectionals,
    chairs: chairs,
    tables: tables
  })
}

const mDTP = dispatch => ({
  fetchFurnitures: () => dispatch(fetchFurnitures())
})

export default connect(mSTP, mDTP)(FurnitureIndex)