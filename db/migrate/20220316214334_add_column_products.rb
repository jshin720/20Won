class AddColumnProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :furnitures, :dimensions, :string
  end
end
