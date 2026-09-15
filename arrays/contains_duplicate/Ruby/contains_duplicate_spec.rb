require 'rspec'
require_relative 'contains_duplicate'

describe '#contains_duplicate' do
  it 'passes example 1' do
    expect(contains_duplicate([1, 2, 3, 1])).to eq(true)
  end

  it 'passes example 2' do
    expect(contains_duplicate([1, 2, 3, 4])).to eq(false)
  end

  it 'passes example 3' do
    expect(contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).to eq(true)
  end

  it 'handles a single element' do
    expect(contains_duplicate([7])).to eq(false)
  end

  it 'handles negative numbers' do
    expect(contains_duplicate([-1, -2, -3, -1])).to eq(true)
  end
end
