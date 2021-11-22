class CreateFurnitures < ActiveRecord::Migration[5.2]
  def change
    create_table :furnitures do |t|
      t.string :furniture_name, null: false
      t.string :furniture_type, null: false
      t.string :furniture_color, null: false
      t.string :description, null: false
      t.timestamps  
    end
  end
end
