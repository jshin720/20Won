# == Schema Information
#
# Table name: furnitures
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  category    :string           not null
#  color       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  price       :integer          not null
#
class Furniture < ApplicationRecord
  validates :name, :color, :category, :description, :price, presence: true

  has_many :reviews,
      foreign_key: :product_id,
      class_name: :Review

  has_one :order,
      foreign_key: :orders_id,
      class_name: :Order

    has_one_attached :photo
end
