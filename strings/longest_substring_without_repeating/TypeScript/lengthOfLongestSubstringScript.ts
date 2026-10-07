function lengthOfLongestSubstring(s: string): number {
  throw new Error('Not implemented');
}

// ---- driver code — no jest, just plain TS, run with: npx ts-node lengthOfLongestSubstringScript.ts ----

function check(s: string, expected: number): void {
  let result: number | string;

  try {
    result = lengthOfLongestSubstring(s);
  } catch (e) {
    result = `threw: ${(e as Error).message}`;
  }

  const ok = result === expected;
  const status = ok ? 'PASS' : 'FAIL';
  console.log(`${status}: s=${JSON.stringify(s)} -> ${JSON.stringify(result)} (expected ${expected})`);
}

check('abcabcbb', 3);
check('bbbbb', 1);
check('pwwkew', 3);
check('', 0);
check('abcdef', 6);
