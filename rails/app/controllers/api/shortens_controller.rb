class Api::ShortensController < ApplicationController
  def index
    render json: Shorten.all
  end
end
