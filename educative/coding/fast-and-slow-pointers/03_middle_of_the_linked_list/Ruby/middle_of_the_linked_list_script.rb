=begin
Middle of the Linked List — https://leetcode.com/problems/middle-of-the-linked-list/

Given the head of a singly linked list, return the middle node of the
linked list.

If there are two middle nodes, return the second middle node.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def middle_node(head)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby middle_of_the_linked_list_script.rb ----

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

def check(arr, expected)
  result = list_to_array(middle_node(array_to_list(arr)))
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([1, 2, 3, 4, 5], [3, 4, 5])
check([1, 2, 3, 4, 5, 6], [4, 5, 6])
