require 'rspec'
require_relative 'duplicate_zeros'

describe '#duplicate_zeros' do
  it 'passes example 1' do
    input = [1, 0, 2, 3, 0, 4, 5, 0]
    answer = [1, 0, 0, 2, 3, 0, 0, 4]
    result = duplicate_zeros(input)

    expect(result).to eq(answer)
  end

  it 'passes example 2' do
    input = [1, 2, 3]
    answer = [1, 2, 3]
    duplicate_zeros(input)

    expect(input).to eq(answer)
  end

  it 'passes example 3' do
    input = [0, 1, 2, 3]
    answer = [0, 0, 1, 2]
    duplicate_zeros(input)

    expect(input).to eq(answer)
  end

  it 'passes example 4' do
    input = [1, 2, 3, 0]
    answer = [1, 2, 3, 0]
    duplicate_zeros(input)

    expect(input).to eq(answer)
  end

  it 'passes example 5' do
    input = [8, 4, 5, 0, 0, 0, 0, 7]
    answer = [8, 4, 5, 0, 0, 0, 0, 0]
    duplicate_zeros(input)

    expect(input).to eq(answer)
  end
end
