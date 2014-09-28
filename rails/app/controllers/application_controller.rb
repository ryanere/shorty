class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def outbound
    short_link = ShortLink.where(token: params[:token]).first
    redirect_to short_link.url
  end
end
