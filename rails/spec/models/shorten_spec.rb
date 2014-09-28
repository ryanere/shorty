require 'rails_helper'
require 'spec_helper'

describe Shorten do

  context '#create' do
    let!(:shorten) { Shorten.create(url: 'http://awesome.com') }

    it 'has url attribute' do
      expect(shorten.url).to eq 'http://awesome.com'
    end

    it 'has token attribute' do
      expect(shorten.token).to match /[a-z\d{6}]/i
    end
  end

end
