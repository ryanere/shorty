class RenameShortensTable < ActiveRecord::Migration
  def change
    rename_table :shortens, :short_links
  end
end
