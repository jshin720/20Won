
export const createOrder = (userId) => {
  return $.ajax({
    method: "post",
    url: '/api/orders',
    data: {
      order: {
        user_id: userId
      }
    }
  })
}

export const updateOrder = (order) => {
  return $.ajax({
    method: "patch",
    url: `/api/orders/${order.id}`,
    data: {order }
  })
}

export const fetchOrder = (orderId) => {
  return $.ajax({
    method: "get",
    url: `/api/order/${orderId}`
  })
}

export const deleteOrder = (orderId) => {
  return $.ajax({
    method: "delete",
    url: `/api/orders/${orderId}`
  })
}
