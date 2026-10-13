=begin
Palindrome Linked List — https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a
palindrome or false otherwise.
=end

class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

def palindrome_linked_list?(head)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby palindrome_linked_list_script.rb ----

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
  result = palindrome_linked_list?(array_to_list(arr))
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([1, 2, 2, 1], true)
check([1, 2], false)
