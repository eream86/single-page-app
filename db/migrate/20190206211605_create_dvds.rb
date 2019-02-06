class CreateDvds < ActiveRecord::Migration[5.2]
  def change
    create_table :dvds do |t|
      t.string :title
      t.integer :year
      t.string :genre

      t.timestamps
    end
  end
end
