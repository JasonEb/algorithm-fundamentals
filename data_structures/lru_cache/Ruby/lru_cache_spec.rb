require 'rspec'
require_relative 'lru_cache'

describe LRUCache do
  it 'passes the official LeetCode example' do
    cache = LRUCache.new(2)
    expect(cache.put(1, 1)).to be_nil
    expect(cache.put(2, 2)).to be_nil
    expect(cache.get(1)).to eq(1)
    expect(cache.put(3, 3)).to be_nil   # evicts key 2 (LRU)
    expect(cache.get(2)).to eq(-1)
    expect(cache.put(4, 4)).to be_nil   # evicts key 1 (LRU)
    expect(cache.get(1)).to eq(-1)
    expect(cache.get(3)).to eq(3)
    expect(cache.get(4)).to eq(4)
  end

  it 'handles capacity of 1' do
    cache = LRUCache.new(1)
    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).to eq(-1)
    expect(cache.get(2)).to eq(2)
  end

  it 'refreshes recency when an existing key is updated via put, not just via get' do
    cache = LRUCache.new(2)
    cache.put(1, 1)
    cache.put(2, 2)
    cache.put(1, 10)   # updates key 1's value AND marks it most-recently-used
    cache.put(3, 3)    # capacity exceeded -> evicts key 2, NOT key 1
    expect(cache.get(2)).to eq(-1)
    expect(cache.get(1)).to eq(10)
    expect(cache.get(3)).to eq(3)
  end

  it 'returns -1 for a key that was never inserted' do
    cache = LRUCache.new(2)
    expect(cache.get(99)).to eq(-1)
  end
end
