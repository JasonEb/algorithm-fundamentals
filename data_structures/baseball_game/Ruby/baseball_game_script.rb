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
=end

# @param {String[]} operations
# @return {Integer}
def cal_points(ops)
    record = []
    ops.each do |op|
        record_op(op, record)
    end
    record.sum
end

def record_op(op, record)
    case op
    when '+'
        record << (record[-1] + record[-2])
    when 'D'
        record << 2 * record[-1]
    when 'C'
        record.pop
    else
        # assume integer
        record << op.to_i
    end

    record
end


# ---- driver code — no rspec, just plain Ruby, run with: ruby baseball_game_script.rb ----

def check(ops, expected)
  result = cal_points(ops)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: ops=#{ops.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check(["5", "2", "C", "D", "+"], 30)
check(["5", "-2", "4", "C", "D", "9", "+", "+"], 27)
check(["1"], 1)
