class Shorten < ActiveRecord::Base
  before_validation(:assign_token)

  private
  def assign_token
    self.token = loop do
      random_token = SecureRandom.hex(3)
      break random_token unless self.class.exists?(token: random_token)
    end
  end
end
