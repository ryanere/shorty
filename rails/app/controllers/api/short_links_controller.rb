class Api::ShortLinksController < ApplicationController
  def index
    render json: ShortLink.all
  end
end
