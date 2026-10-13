=begin
Remove Duplicates from Sorted List II — https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

Given the head of a sorted linked list, delete all nodes that have
duplicate numbers, keeping only the distinct numbers. Return the
linked list sorted as well.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def delete_duplicates(head)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby remove_duplicates_from_sorted_list_ii_script.rb ----

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
  result = list_to_array(delete_duplicates(array_to_list(arr)))
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([1, 2, 3, 3, 4, 4, 5], [1, 2, 5])
check([1, 1, 1, 2, 3], [2, 3])
check([1, 2, 3], [1, 2, 3])
