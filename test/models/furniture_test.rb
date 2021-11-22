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
require 'test_helper'

class FurnitureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
