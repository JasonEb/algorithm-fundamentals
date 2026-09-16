=begin
LRU Cache — https://leetcode.com/problems/lru-cache/

Design a data structure that follows the constraints of a Least Recently
Used (LRU) cache.

  LRUCache(capacity)   initialize with a positive size capacity
  get(key)             return the value if key exists, else -1
  put(key, value)      insert/update key-value; if this pushes the cache
                        over capacity, evict the least recently used key

get and put must each run in O(1) average time.
=end

class LRUCache
  def initialize(capacity)
  end

  def get(key)
  end

  def put(key, value)
  end
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby lru_cache_script.rb ----

def check(label, actual, expected)
  ok = actual == expected
  status = ok ? "PASS" : "FAIL"
  puts "#{status}: #{label} -> #{actual.inspect} (expected #{expected.inspect})"
end

# The official LeetCode example, one call at a time
cache = LRUCache.new(2)
check("put(1,1)", cache.put(1, 1), nil)
check("put(2,2)", cache.put(2, 2), nil)
check("get(1)", cache.get(1), 1)
check("put(3,3) [evicts 2]", cache.put(3, 3), nil)
check("get(2)", cache.get(2), -1)
check("put(4,4) [evicts 1]", cache.put(4, 4), nil)
check("get(1)", cache.get(1), -1)
check("get(3)", cache.get(3), 3)
check("get(4)", cache.get(4), 4)

puts

# Capacity of 1
c1 = LRUCache.new(1)
c1.put(1, 1)
c1.put(2, 2)
check("cap=1 get(1)", c1.get(1), -1)
check("cap=1 get(2)", c1.get(2), 2)

puts

# Updating an existing key via put should refresh its recency too
c2 = LRUCache.new(2)
c2.put(1, 1)
c2.put(2, 2)
c2.put(1, 10)
c2.put(3, 3)
check("refresh get(2) [should be evicted]", c2.get(2), -1)
check("refresh get(1) [updated value]", c2.get(1), 10)
check("refresh get(3)", c2.get(3), 3)
