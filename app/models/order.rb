# == Schema Information
#
# Table name: orders
#
#  id           :bigint           not null, primary key
#  quantity     :integer          not null
#  user_id      :integer          not null
#  furniture_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Order < ApplicationRecord

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :furniture,
    foreign_key: :furniture_id,
    class_name: :Furniture
end
