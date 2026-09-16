require 'rspec'
require_relative 'find_pivot_idx'

describe '#pivot_index' do
  it 'passes example 1' do
    expect(pivot_index([1, 7, 3, 6, 5, 6])).to eq(3)
  end

  it 'passes example 2 (no pivot exists)' do
    expect(pivot_index([1, 2, 3])).to eq(-1)
  end

  it 'passes example 3 (pivot at the left edge)' do
    expect(pivot_index([2, 1, -1])).to eq(0)
  end

  it 'handles a single element' do
    expect(pivot_index([0])).to eq(0)
  end

  it 'handles negative numbers and returns the leftmost pivot' do
    expect(pivot_index([-1, -1, -1, 0, 1, 1])).to eq(0)
  end
end
