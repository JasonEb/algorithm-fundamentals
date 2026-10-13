=begin
Intersection of Two Linked Lists — https://leetcode.com/problems/intersection-of-two-linked-lists/

Given the heads of two singly linked lists, return the node at which
the two lists intersect, or nil if they do not intersect.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def get_intersection_node(head_a, head_b)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby intersection_of_two_linked_lists_script.rb ----

def array_to_list(arr)
  dummy = ListNode.new(0)
  cur = dummy
  arr.each do |val|
    cur.next = ListNode.new(val)
    cur = cur.next
  end
  dummy.next
end

def last_node(head)
  head = head.next while head.next
  head
end

intersection = array_to_list([8, 4, 5])
a = array_to_list([4, 1])
b = array_to_list([5, 6, 1])
last_node(a).next = intersection
last_node(b).next = intersection

result = get_intersection_node(a, b)
puts "#{result && result.val == 8 ? 'PASS' : 'FAIL'}: intersecting lists -> #{result&.val.inspect} (expected 8)"

no_a = array_to_list([2, 6, 4])
no_b = array_to_list([1, 5])
no_result = get_intersection_node(no_a, no_b)
puts "#{no_result.nil? ? 'PASS' : 'FAIL'}: non-intersecting lists -> #{no_result.inspect} (expected nil)"
