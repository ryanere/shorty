class Api::ShortLinksController < ApplicationController
  respond_to :json

  def index
    render json: ShortLink.all
  end

  def create
    @short_link = ShortLink.new(permitted_params)

    if @short_link.save
      render json: @short_link
    else
      render json: { errors: @short_link.errors }, status: :unprocessable_entity
    end
  end

  private

  def permitted_params
    params.require(:short_link).permit(:url)
  end
end
