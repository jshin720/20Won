# == Schema Information
#
# Table name: reviews
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  body         :text             not null
#  stars        :integer          not null
#  reviewer_id  :integer          not null
#  furniture_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Review < ApplicationRecord
  validates :title, :body, :stars, :furniture_id, :reviewer_id, presence: true
  validates :title, :body, length: { minimum: 10 }
  validates :stars, numericality: {greater_than: 0, less_than: 6}
# debugger
  belongs_to :user,
      foreign_key: :reviewer_id,
      class_name: :User
      
  belongs_to :furniture,
      foreign_key: :furniture_id,
      class_name: :Furniture
      
end
