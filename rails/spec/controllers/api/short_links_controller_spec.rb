require 'rails_helper'
require 'spec_helper'

describe Api::ShortLinksController, :type => :controller do

  describe "#index" do

    it "should respond with ok status code" do
      get :index
      expect(response).to be_success
    end

    it "renders json with all posts" do
      get :index
      expect(response.body).to include "shortens"
    end
  end

end
