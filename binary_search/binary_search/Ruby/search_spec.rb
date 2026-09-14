require 'rspec'
require_relative 'search'

describe '#search' do
  it 'finds a target in the middle' do
    expect(search([1, 3, 5, 7, 9], 5)).to eq(2)
  end

  it 'finds a target at the low end' do
    expect(search([1, 3, 5, 7, 9], 1)).to eq(0)
  end

  it 'finds a target at the high end' do
    expect(search([1, 3, 5, 7, 9], 9)).to eq(4)
  end

  it 'returns -1 when the target is missing' do
    expect(search([1, 3, 5, 7, 9], 4)).to eq(-1)
  end

  it 'handles an empty array' do
    expect(search([], 5)).to eq(-1)
  end

  it 'handles a single-element array' do
    expect(search([5], 5)).to eq(0)
    expect(search([5], 3)).to eq(-1)
  end
end
