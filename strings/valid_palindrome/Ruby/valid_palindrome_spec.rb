require 'rspec'
require_relative 'valid_palindrome'

describe '#valid_palindrome' do
  it 'passes example 1' do
    expect(valid_palindrome('A man, a plan, a canal: Panama')).to eq(true)
  end

  it 'passes example 2' do
    expect(valid_palindrome('race a car')).to eq(false)
  end

  it 'passes example 3 (blank after filtering)' do
    expect(valid_palindrome(' ')).to eq(true)
  end

  it 'is case- and digit-sensitive to order, not just letters' do
    # "0p" reversed is "p0" — a classic trap for solutions that only
    # handle letters, or that forget to lowercase before comparing.
    expect(valid_palindrome('0P')).to eq(false)
  end

  it 'strips non-alphanumeric characters like underscores' do
    expect(valid_palindrome('ab_a')).to eq(true)
  end
end
