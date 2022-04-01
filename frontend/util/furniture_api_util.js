export const fetchFurnitures = async() => {
  const res = await $.ajax({
    method: "get",
    url: "/api/furnitures"
  })
  return res;
}

export const fetchFurniture = furnitureId => {
    return $.ajax({
      method: "get",
      url: `/api/furnitures/${furnitureId}`
  })
}
