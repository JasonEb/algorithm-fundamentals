# Writing style

Keep prose concise. Avoid superlatives and the word "genuinely".

# Running TypeScript scratch scripts

The Node version here (managed by mise, currently v26) has native TypeScript
support — run a `*Script.ts` file directly with `node <file>.ts`, no
`ts-node` or transpile step needed. This is type-stripping only (no type
checking), which is fine for these scratch/driver scripts. The `.test.ts`
files still go through jest/ts-jest as configured in package.json.
