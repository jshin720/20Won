json.extract! furniture, :id, :name, :description, :category, :color, :price, :dimension, :highlight
json.photoUrls furniture.images.map { |image| url_for(image)}
  

