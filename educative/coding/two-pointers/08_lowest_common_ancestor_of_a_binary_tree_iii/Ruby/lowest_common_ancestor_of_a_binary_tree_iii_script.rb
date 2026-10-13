=begin
Lowest Common Ancestor of a Binary Tree III — https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/

Given two nodes p and q of a binary tree, where each node also has a
pointer to its parent, return their lowest common ancestor.
=end

class Node
  attr_accessor :val, :left, :right, :parent

  def initialize(val = 0)
    @val = val
    @left = nil
    @right = nil
    @parent = nil
  end
end

def lowest_common_ancestor(p, q)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby lowest_common_ancestor_of_a_binary_tree_iii_script.rb ----

three = Node.new(3)
five = Node.new(5)
one = Node.new(1)
six = Node.new(6)
two = Node.new(2)
zero = Node.new(0)
eight = Node.new(8)
seven = Node.new(7)
four = Node.new(4)

three.left = five
three.right = one
five.parent = three
one.parent = three

five.left = six
five.right = two
six.parent = five
two.parent = five

one.left = zero
one.right = eight
zero.parent = one
eight.parent = one

two.left = seven
two.right = four
seven.parent = two
four.parent = two

def check(p, q, expected)
  result = lowest_common_ancestor(p, q).val
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: p=#{p.val} q=#{q.val} -> #{result} (expected #{expected})"
end

check(five, one, 3)
check(five, four, 5)
check(six, six, 6)
