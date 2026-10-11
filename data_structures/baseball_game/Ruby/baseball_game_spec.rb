require 'rspec'
require_relative 'baseball_game'

describe '#cal_points' do
  it 'passes example 1' do
    expect(cal_points(["5", "2", "C", "D", "+"])).to eq(30)
  end

  it 'passes example 2' do
    expect(cal_points(["5", "-2", "4", "C", "D", "9", "+", "+"])).to eq(27)
  end

  it 'passes example 3' do
    expect(cal_points(["1"])).to eq(1)
  end
end
