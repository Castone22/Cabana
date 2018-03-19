class AddRowsToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :description, :string
    add_column :books, :read, :boolean
    add_column :books, :pages_read, :integer
    add_column :books, :google_id, :string
  end
end
