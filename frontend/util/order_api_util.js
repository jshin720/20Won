
export const createOrder = (order) => {
  return $.ajax({
    method: "post",
    url: '/api/orders',
    data:{ order }
  })
}

export const updateOrder = (order) => {
  return $.ajax({
    method: "patch",
    url: `/api/orders/${order.id}`,
    data: {order}
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

export const fetchOrders = () => {
  return $.ajax({
    method: "get",
    url: "/api/orders/"
  })
}