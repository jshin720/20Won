class ReviseColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :furnitures, :furniture_name, :name
    rename_column :furnitures, :furniture_type, :type
    rename_column :furnitures, :furniture_color, :color

  end
end
