class Api::ShortLinksController < ApplicationController
  respond_to :json

  def index
    render json: ShortLink.all
  end

  def create
    @short_link = ShortLink.new(permitted_params)
    @short_link.save

    render json: @short_link
  end

  private

  def permitted_params
    params.require(:short_link).permit(:url)
  end
end
