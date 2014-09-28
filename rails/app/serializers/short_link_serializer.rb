class ShortLinkSerializer < ActiveModel::Serializer
  attributes :id, :url, :token
end
