import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  test('example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  test('example 2 (all repeats)', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  test('example 3 (substring, not subsequence)', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  test('handles an empty string', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
  });

  test('handles a string with no repeats at all', () => {
    expect(lengthOfLongestSubstring('abcdef')).toEqual(6);
  });
});
