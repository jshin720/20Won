import * as FurnitureAPIUtil from "../util/furniture_api_util";


export const RECEIVE_FURNITURE = "RECEIVE_FURNITURE";
export const RECEIVE_FURNITURES = "RECEIVE_FURNITURES";

export const receiveFurnitures = (furnitures) => ({
  type: RECEIVE_FURNITURES,
  furnitures
})

export const receiveFurniture = (furniture) => ({
  type: RECEIVE_FURNITURE,
  furniture
})

export const fetchFurnitures = () => (dispatch) => (
  FurnitureAPIUtil.fetchFurnitures()
    .then(res => dispatch(receiveFurnitures(res)))
)

export const fetchfurniture = furnitureId => (dispatch) => (
  FurnitureAPIUtil.fetchFurniture(furnitureId)
    .then(res => dispatch(receiveFurniture(res)))
)
