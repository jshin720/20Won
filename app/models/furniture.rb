# == Schema Information
#
# Table name: furnitures
#
#  id              :integer          not null, primary key
#  furniture_name  :string           not null
#  furniture_type  :string           not null
#  furniture_color :string           not null
#  description     :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Furniture < ApplicationRecord
  validates :furniture_name, :size, :colorway, :type, presence: true

  has_many :reviews,
      foreign_key: :product_id,
      class_name: :Review

  belongs_to :orders,
      foreign_key: :orders_id,
      class_name: :Order


end
