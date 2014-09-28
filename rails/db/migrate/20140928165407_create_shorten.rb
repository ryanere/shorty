class CreateShorten < ActiveRecord::Migration
  def change
    create_table :shortens do |t|
      t.string :url

      t.timestamps
    end
  end
end
