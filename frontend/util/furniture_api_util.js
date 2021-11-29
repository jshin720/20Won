export const fetchFurnitures = () => {
  return $.ajax({
    method: "get",
    url: "/api/furnitures"
  })
}

export const fetchFurniture = furnitureId => {
    return $.ajax({
      method: "get",
      url: `/api/furnitures/${furnitureId}`
  })
}
