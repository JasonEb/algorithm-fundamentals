=begin
Split a Circular Linked List — https://leetcode.com/problems/split-a-circular-linked-list/

Full statement is behind LeetCode Premium. From the problem's hints:
split a circular linked list into two halves, each remaining circular;
if the length is odd, the first half gets the extra node.

TODO: paste the full problem statement from the course page here, then
confirm the method signature below matches what's expected.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def split_circular_linked_list(head)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby split_a_circular_linked_list_script.rb ----
