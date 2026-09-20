require 'rspec'
require_relative 'climbing_stairs'

describe '#climb_stairs' do
  it 'passes example 1' do
    expect(climb_stairs(2)).to eq(2)
  end

  it 'passes example 2' do
    expect(climb_stairs(3)).to eq(3)
  end

  it 'handles a single step' do
    expect(climb_stairs(1)).to eq(1)
  end

  it 'follows the fibonacci pattern for small n' do
    expect(climb_stairs(4)).to eq(5)
    expect(climb_stairs(5)).to eq(8)
    expect(climb_stairs(10)).to eq(89)
  end

  # Plain recursion without memoization makes roughly 2^n calls, so this case
  # takes minutes without a cache. It is here to force top-down or bottom-up DP.
  it 'handles the maximum n' do
    expect(climb_stairs(45)).to eq(1_836_311_903)
  end
end
