require 'rspec'
require_relative 'house_robber'

describe '#rob' do
  it 'passes example 1' do
    expect(rob([1, 2, 3, 1])).to eq(4)
  end

  it 'passes example 2' do
    expect(rob([2, 7, 9, 3, 1])).to eq(12)
  end

  it 'skips a small house between two large ones' do
    expect(rob([2, 7, 1, 1, 9])).to eq(16)
  end

  it 'handles a single house' do
    expect(rob([5])).to eq(5)
  end

  it 'handles two houses by taking the larger' do
    expect(rob([2, 1])).to eq(2)
    expect(rob([1, 2])).to eq(2)
  end

  it 'handles houses with nothing in them' do
    expect(rob([0, 0, 0])).to eq(0)
  end

  it 'prefers the two ends over the middle' do
    expect(rob([100, 1, 1, 100])).to eq(200)
  end

  it 'takes every other house in an increasing row' do
    expect(rob([1, 2, 3, 4, 5])).to eq(9)
  end

  # Plain recursion without a cache makes roughly 2^n calls, so this case does
  # not finish without memoization or a loop. It forces real DP.
  it 'handles the maximum number of houses' do
    expect(rob([400] * 100)).to eq(20_000)
  end
end
