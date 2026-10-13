=begin
Remove Nth Node From End of List — https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from the end of the
list and return its head.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def remove_nth_from_end(head, n)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby remove_nth_node_from_end_of_list_script.rb ----

def array_to_list(arr)
  dummy = ListNode.new(0)
  cur = dummy
  arr.each do |val|
    cur.next = ListNode.new(val)
    cur = cur.next
  end
  dummy.next
end

def list_to_array(head)
  result = []
  while head
    result << head.val
    head = head.next
  end
  result
end

def check(arr, n, expected)
  result = list_to_array(remove_nth_from_end(array_to_list(arr), n))
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} n=#{n} -> #{result.inspect} (expected #{expected.inspect})"
end

check([1, 2, 3, 4, 5], 2, [1, 2, 3, 5])
check([1], 1, [])
check([1, 2], 2, [2])
