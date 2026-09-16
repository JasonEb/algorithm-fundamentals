require 'rspec'
require_relative 'two_sum_ii_sorted'

describe '#two_sum_ii' do
  it 'passes example 1' do
    expect(two_sum_ii([2, 7, 11, 15], 9)).to eq([1, 2])
  end

  it 'passes example 2' do
    expect(two_sum_ii([2, 3, 4], 6)).to eq([1, 3])
  end

  it 'passes example 3 (negative numbers)' do
    expect(two_sum_ii([-1, 0], -1)).to eq([1, 2])
  end

  it 'handles the match landing in the middle of a longer array' do
    expect(two_sum_ii([1, 2, 3, 4, 4, 9, 56, 90], 8)).to eq([4, 5])
  end

  it 'handles duplicate values that are themselves the answer' do
    expect(two_sum_ii([3, 3], 6)).to eq([1, 2])
  end
end
