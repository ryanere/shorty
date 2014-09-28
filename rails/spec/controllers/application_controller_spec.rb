require 'rails_helper'
require 'spec_helper'

describe ApplicationController, :type => :controller do
  let!(:short_link) { ShortLink.create(url: 'http://awesome.com') }

  describe "#outbound" do
    it 'should redirect to short_link url' do
      get :outbound, token: short_link.token
      expect(response).to redirect_to short_link.url
    end
  end

end
