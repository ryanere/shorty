require 'rails_helper'
require 'spec_helper'

describe ShortLink do

  context '#create' do
    let!(:short_link) { ShortLink.create(url: 'http://awesome.com') }

    it 'has url attribute' do
      expect(short_link.url).to eq 'http://awesome.com'
    end

    it 'has token attribute' do
      expect(short_link.token).to match /[a-z\d{6}]/i
    end
  end

end
