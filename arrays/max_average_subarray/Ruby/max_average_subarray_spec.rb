require 'rspec'
require_relative 'max_average_subarray'

describe '#max_average_subarray' do
  it 'passes example 1' do
    expect(max_average_subarray([1, 12, -5, -6, 50, 3], 4)).to be_within(1e-5).of(12.75)
  end

  it 'passes example 2 (single element, k = 1)' do
    expect(max_average_subarray([5], 1)).to be_within(1e-5).of(5.0)
  end

  it 'handles k equal to the full array length' do
    expect(max_average_subarray([1, 2, 3, 4], 4)).to be_within(1e-5).of(2.5)
  end

  it 'handles all negative numbers' do
    expect(max_average_subarray([-1, -12, -5, -6, -50, -3], 4)).to be_within(1e-5).of(-6.0)
  end
end
