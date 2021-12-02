class RenameColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :furnitures, :type, :category
  end
end
