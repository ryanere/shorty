class ShortLink < ActiveRecord::Base
  validates_presence_of :url, presence: true
  validates_url :url, url: true

  before_validation :assign_token, on: :create

  private
  def assign_token
    self.token = loop do
      random_token = SecureRandom.hex(3)
      break random_token unless self.class.exists?(token: random_token)
    end
  end
end
