require 'rspec'
require_relative 'str_str'

describe '#str_str' do
  it 'passes example 1' do
    expect(str_str('sadbutsad', 'sad')).to eq(0)
  end

  it 'passes example 2 (no match)' do
    expect(str_str('leetcode', 'leeto')).to eq(-1)
  end

  it 'handles needle equal to haystack' do
    expect(str_str('a', 'a')).to eq(0)
  end

  it 'handles a match in the middle of a longer string' do
    expect(str_str('mississippi', 'issip')).to eq(4)
  end

  it 'handles needle longer than haystack' do
    expect(str_str('ab', 'abc')).to eq(-1)
  end
end
