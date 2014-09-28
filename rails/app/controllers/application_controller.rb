class ApplicationController < ActionController::Base
  def outbound
    short_link = ShortLink.where(token: params[:token]).first
    redirect_to short_link.url
  end
end
