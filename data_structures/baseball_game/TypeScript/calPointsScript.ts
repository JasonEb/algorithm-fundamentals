/**
 * Baseball Game
 * https://leetcode.com/problems/baseball-game/
 *
 * You are keeping the scores for a baseball game with strange rules. At
 * the beginning of the game, you start with an empty record.
 *
 * You are given a list of strings operations, where operations[i] is
 * the ith operation you must apply to the record and is one of the
 * following:
 *
 * - An integer x — Record a new score of x.
 * - "+" — Record a new score that is the sum of the previous two scores.
 * - "D" — Record a new score that is the double of the previous score.
 * - "C" — Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all the
 * operations.
 */

function calPoints(ops: string[]): number {
  const record: number[] = []

  for(const op of ops) {
    switch(op) {
      case '+':
        record.push(record.at(-1) + record.at(-2))
        break
      case 'D': 
        record.push(record.at(-1) * 2)
        break
      case 'C':
        record.pop()
        break
      default:
        record.push(parseInt(op, 10))
    }
  }
  
  return record.reduce((acc,x) => acc + x, 0)
}

// ---- driver code — no jest, just plain TS, run with: npx ts-node calPointsScript.ts ----

function check(operations: string[], expected: number): void {
  let result: number | string;

  try {
    result = calPoints(operations);
  } catch (e) {
    result = `threw: ${(e as Error).message}`;
  }

  const ok = result === expected;
  const status = ok ? 'PASS' : 'FAIL';
  console.log(`${status}: operations=${JSON.stringify(operations)} -> ${JSON.stringify(result)} (expected ${expected})`);
}

check(['5', '2', 'C', 'D', '+'], 30);
check(['5', '-2', '4', 'C', 'D', '9', '+', '+'], 27);
check(['1'], 1);
