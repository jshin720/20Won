class UpdateTables < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    rename_column :users, :username, :email

    add_column :furnitures, :price, :integer, null: false
  end
end
