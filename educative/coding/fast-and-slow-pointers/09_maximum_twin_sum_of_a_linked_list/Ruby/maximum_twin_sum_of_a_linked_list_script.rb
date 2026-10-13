=begin
Maximum Twin Sum of a Linked List — https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

In a linked list of size n, where n is even, the ith node (0-indexed) of
the linked list is known as the twin of the (n-1-i)th node, if
0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is
the twin of node 2. These are the only nodes with twins for n = 4.

The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum
twin sum of the linked list.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def max_twin_sum(head)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby maximum_twin_sum_of_a_linked_list_script.rb ----

def array_to_list(arr)
  dummy = ListNode.new(0)
  cur = dummy
  arr.each do |val|
    cur.next = ListNode.new(val)
    cur = cur.next
  end
  dummy.next
end

def check(arr, expected)
  result = max_twin_sum(array_to_list(arr))
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([5, 4, 2, 1], 6)
check([4, 2, 2, 3], 7)
check([1, 100000], 100001)
