json.extract! @order, :id, :user_id, :furniture_id, :quantity
json.name @order.furniture.name
json.category @order.furniture.category
json.color @order.furniture.color
json.price @order.furniture.price