export const fetchReviews = (furnitureId) => {
  return $.ajax({
    method: "get",
    url: `/api/furnitures/${furnitureId}/reviews`
  })
}

export const fetchReview = (review) => {
  return $.ajax({
    method: "get",
    url: `/api/furnitures/${review.furniture_id}/reviews/${review.id}`
  })
}

export const createReview = (review) => {
  return $.ajax({
    method: "post",
    url: `/api/furnitures/${review.furniture_id}/reviews`,
    data: { review }
  })
}

export const updateReview = (review) => {
  return $.ajax({
    method: "patch",
    url: `/api/furnitures/${review.furniture_id}/reviews/${review.id}`,
    data: { review }
  })
}


export const deleteReview = (review) => {
  return $.ajax({
    method: "delete",
    url: `/api/furnitures/${review.furniture_id}/reviews/${review.id}`
  })
}
