require 'rspec'
require_relative 'remove_duplicates_from_sorted_array'

describe '#remove_duplicates' do
  # Unlike Remove Element, order DOES matter here — the array is sorted going
  # in, and the kept prefix must stay in sorted order. Straight positional
  # comparison is correct, no sorting needed on either side.
  def check(nums, expected)
    k = remove_duplicates(nums)

    expect(k).to eq(expected.length)
    expect(nums[0...k]).to eq(expected)
  end

  it 'passes example 1' do
    check([1, 1, 2], [1, 2])
  end

  it 'passes example 2' do
    check([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4])
  end

  it 'handles a single element' do
    check([5], [5])
  end

  it 'handles no duplicates at all' do
    check([1, 2, 3], [1, 2, 3])
  end

  it 'handles every element being the same' do
    check([9, 9, 9, 9], [9])
  end
end
