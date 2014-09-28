class ShortLink < ActiveRecord::Base
  before_validation :assign_token, on: :create

  private
  def assign_token
    self.token = loop do
      random_token = SecureRandom.hex(3)
      break random_token unless self.class.exists?(token: random_token)
    end
  end
end
