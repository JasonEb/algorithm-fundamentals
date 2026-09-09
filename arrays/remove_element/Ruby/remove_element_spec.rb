require 'rspec'
require_relative 'remove_element'

describe '#remove_element' do
  # Order doesn't matter for this problem — only k (the count) and the
  # *contents* of the first k elements are checked, same as LeetCode's judge.
  def check(nums, val, expected)
    k = remove_element(nums, val)

    expect(k).to eq(expected.length)
    expect(nums[0...k].sort).to eq(expected.sort)
  end

  it 'passes example 1' do
    check([3, 2, 2, 3], 3, [2, 2])
  end

  it 'passes example 2' do
    check([0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 0, 1, 3, 4])
  end

  it 'handles an empty array' do
    check([], 5, [])
  end

  it 'handles val not present in the array' do
    check([1, 2, 3], 9, [1, 2, 3])
  end

  it 'handles every element equal to val' do
    check([7, 7, 7], 7, [])
  end
end
