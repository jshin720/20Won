export const createOrderItem = (furnitureId, quantity) => (
  $.ajax({
    method: "POST",
    url: "/api/order_items",
    data: { orderItem: { furnitureId: furnitureId, quantity: quantity } }
  })
)

export const receiveOrderItems = () => (
  $.ajax({
    url: '/api/order_items'
  })
)

export const deleteOrderItem = (OrderItemId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/order_items/${orderItemId}`,
  })
)

export const updateOrderItem = (orderItem) => (
  $.ajax({
    method: "PATCH",
    url: `/api/order_items/${orderItem.id}`,
    data: { orderItem }
  })
)