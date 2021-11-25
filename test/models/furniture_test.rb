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
require 'test_helper'

class FurnitureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
