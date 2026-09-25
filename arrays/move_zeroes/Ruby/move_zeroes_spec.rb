require 'rspec'
require_relative 'move_zeroes'

describe '#move_zeroes' do
  def check(nums, expected)
    move_zeroes(nums)
    expect(nums).to eq(expected)
  end

  it 'passes example 1' do
    check([0, 1, 0, 3, 12], [1, 3, 12, 0, 0])
  end

  it 'passes example 2' do
    check([0], [0])
  end

  it 'leads with zeroes' do
    check([0, 0, 1], [1, 0, 0])
  end

  it 'handles no zeroes at all' do
    check([1, 2, 3], [1, 2, 3])
  end

  it 'handles every element being zero' do
    check([0, 0, 0], [0, 0, 0])
  end

  it 'handles a single element' do
    check([1], [1])
  end

  it 'keeps the relative order of the non-zero elements' do
    check([4, 0, 5, 0, 0, 6], [4, 5, 6, 0, 0, 0])
  end
end
