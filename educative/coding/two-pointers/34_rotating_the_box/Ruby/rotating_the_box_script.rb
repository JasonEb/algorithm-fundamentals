=begin
Rotating the Box — https://leetcode.com/problems/rotating-the-box/

You are given an m x n matrix of characters representing a box viewed
from the side: '#' is a stone, '*' is a fixed obstacle, and '.' is
empty space. The box is rotated 90 degrees clockwise; stones fall due
to gravity until they hit an obstacle, another stone, or the bottom.
Return the resulting box.
=end

def apply_gravity!(row)
end

def rotate_the_box(box)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby rotating_the_box_script.rb ----

def check(box, expected)
  result = rotate_the_box(box)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: result=#{result.inspect} (expected #{expected.inspect})"
end

check([['#', '.', '#']], [['.'], ['#'], ['#']])
check([['#', '.', '*', '.']], [['.'], ['#'], ['*'], ['.']])
check(
  [['#', '#'], ['*', '.'], ['#', '#'], ['#', '*'], ['.', '.']],
  [['.', '#', '#', '*', '#'], ['.', '*', '#', '.', '#']]
)
