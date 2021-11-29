# == Schema Information
#
# Table name: furnitures
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  type        :string           not null
#  color       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  price       :integer          not null
#
class Furniture < ApplicationRecord
  validates :name, :size, :color, :type, :description, :price, presence: true

  has_many :reviews,
      foreign_key: :product_id,
      class_name: :Review

  belongs_to :orders,
      foreign_key: :orders_id,
      class_name: :Order


end
