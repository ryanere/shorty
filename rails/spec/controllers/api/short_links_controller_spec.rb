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
      expect(response.body).to include "short_links"
    end
  end

  describe '#create' do
    before do
      post :create, short_link: { url: "http://awesome.com" }, format: :json
    end
    
    it "should respond with ok status code" do
      expect(response).to be_success
    end

    it 'should create a link' do
      expect(ShortLink.last.url).to eq "http://awesome.com"
    end
  end

end
