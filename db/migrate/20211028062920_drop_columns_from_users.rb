class DropColumnsFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :email_address
    remove_column :users, :password
  end
end
