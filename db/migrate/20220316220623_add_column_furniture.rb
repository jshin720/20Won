class AddColumnFurniture < ActiveRecord::Migration[5.2]
  def change
    add_column :furnitures, :highlight, :text
    rename_column :furnitures, :dimensions, :dimension
    change_column :furnitures, :description, :text
  end
end
