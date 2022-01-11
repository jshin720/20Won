json.extract! review, :id, :title, :body, :stars, :reviewer_id, :furniture_id
json.user review.user
json.furniture review.furniture