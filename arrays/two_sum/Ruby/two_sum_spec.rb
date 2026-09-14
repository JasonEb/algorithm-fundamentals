require 'rspec'
require_relative 'two_sum'

describe '#two_sum' do
  # Checks correctness rather than a hardcoded index pair, since a
  # valid answer's index order can depend on your approach.
  def check(nums, target, expected_length: 2)
    result = two_sum(nums, target)
    i, j = result

    expect(result.length).to eq(expected_length)
    expect(i).not_to eq(j)
    expect(nums[i] + nums[j]).to eq(target)
  end

  it 'passes example 1' do
    check([2, 7, 11, 15], 9)
  end

  it 'passes example 2' do
    check([3, 2, 4], 6)
  end

  it 'handles duplicate values summing to target' do
    check([3, 3], 6)
  end

  it 'handles negative numbers' do
    check([-3, 4, 3, 90], 0)
  end
end
