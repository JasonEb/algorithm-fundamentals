=begin
Linked List Cycle — https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has
a cycle in it.

There is a cycle in a linked list if there is some node in the list that
can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next
pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return
false.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def linked_list_cycle?(head)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby linked_list_cycle_script.rb ----

def array_to_cyclic_list(arr, pos)
  return nil if arr.empty?

  nodes = arr.map { |val| ListNode.new(val) }
  nodes.each_with_index { |node, i| node.next = nodes[i + 1] if i + 1 < nodes.size }
  nodes.last.next = nodes[pos] if pos >= 0
  nodes.first
end

def check(arr, pos, expected)
  result = linked_list_cycle?(array_to_cyclic_list(arr, pos))
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} pos=#{pos} -> #{result.inspect} (expected #{expected.inspect})"
end

check([3, 2, 0, -4], 1, true)
check([1, 2], 0, true)
check([1], -1, false)
