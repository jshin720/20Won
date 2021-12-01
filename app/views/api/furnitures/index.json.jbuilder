@furnitures.each do |furniture|
    json.set! furniture.id do
        json.partial! "api/furnitures/furniture", furniture: furniture
    end
end
