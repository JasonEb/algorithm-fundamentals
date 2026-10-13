# [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

```
Given a string s, return true if it is a palindrome after converting all
uppercase letters to lowercase and removing all non-alphanumeric
characters, and false otherwise.
```

## Notes

V1 is a two-pointer solution with nested skip-loops (one loop advances `l`
past non-alphanumeric chars, another advances `r`). Getting it correct took
a few passes:

- Typo: the right-side skip-loop reassigned `b = s[l]` instead of `s[r]`,
  so it never actually tracked the right pointer's character.

  ```ruby
  while (!is_alphanumeric?(b))
      r -= 1
      b = s[l]   # bug: should be s[r]
  end
  ```

- The right-side skip-loop's condition was briefly `!alphanumeric?(b) &&
  !alphanumeric?(a)`, which meant it only kept skipping when *both* sides
  were non-alphanumeric — so `b` could get stuck on punctuation whenever
  `a` had already settled on a letter.

  ```ruby
  while (!is_alphanumeric?(b) && !is_alphanumeric?(a))  # bug: should only check b
      r -= 1
      b = s[r].downcase
  end
  ```

- Reassigning `a`/`b` inside the skip-loops without `.downcase` interacted
  badly with a case-sensitive regex (`/[a-z0-9]/` with no `i` flag), which
  caused uppercase letters to be misread as non-alphanumeric and skipped
  — e.g. the `P` in "Panama" got silently skipped past.

  ```ruby
  def is_alphanumeric?(c)
    c.match?(/[a-z0-9]/)  # bug: no `i` flag, 'P' doesn't match
  end

  while (!is_alphanumeric?(a))
      l += 1
      a = s[l]   # bug: not downcased, feeds an uppercase char back in
  end
  ```

- The skip-loops had no `l < r` bound, so an all-punctuation string (e.g.
  `".,"`) would walk a pointer off the end of the string and crash on
  `nil.downcase`.

  ```ruby
  while (!is_alphanumeric?(a))   # bug: no l < r guard
      l += 1
      a = s[l].downcase         # l can exceed the string length -> nil.downcase
  end
  ```

V2 came out of comparing V1 against top-voted LeetCode solutions. A C++
"super clean" solution used `continue` instead of nested skip-loops — one
non-alphanumeric char skipped per outer-loop pass instead of draining a
whole run at once. V2 is that shape in Ruby, using `next` in place of
`continue`, which also sidesteps the out-of-bounds bug entirely since
there are no inner loops left to bound.
