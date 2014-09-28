class AddTokenToShortens < ActiveRecord::Migration
  def change
    add_column(:shortens, :token, :string)
  end
end
