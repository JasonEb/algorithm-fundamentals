require 'rspec'
require_relative 'length_of_longest_substring'

describe '#length_of_longest_substring' do
  it 'passes example 1' do
    expect(length_of_longest_substring('abcabcbb')).to eq(3)
  end

  it 'passes example 2 (all repeats)' do
    expect(length_of_longest_substring('bbbbb')).to eq(1)
  end

  it 'passes example 3 (substring, not subsequence)' do
    expect(length_of_longest_substring('pwwkew')).to eq(3)
  end

  it 'handles an empty string' do
    expect(length_of_longest_substring('')).to eq(0)
  end

  it 'handles a string with no repeats at all' do
    expect(length_of_longest_substring('abcdef')).to eq(6)
  end
end
