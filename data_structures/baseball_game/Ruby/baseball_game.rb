=begin
Baseball Game — https://leetcode.com/problems/baseball-game/

You are keeping the scores for a baseball game with strange rules. At
the beginning of the game, you start with an empty record.

You are given a list of strings ops, where ops[i] is the ith operation
you must apply to the record and is one of the following:

- An integer x — Record a new score of x.
- "+" — Record a new score that is the sum of the previous two scores.
- "D" — Record a new score that is the double of the previous score.
- "C" — Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the
operations.

ops = ["5", "2", "C", "D", "+"] # => 30

What data structure makes "the previous score" and "the previous two
scores" cheap to look at and undo?
=end
def cal_points(ops)
  # TODO: implement
end
