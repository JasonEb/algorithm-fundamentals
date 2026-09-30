# Approaching number_letter_counts

**Naive cost:** O(n) — one pass over 1 to `upper_bound`, each call to `words_for` doing a small, bounded amount of work.

**Memo/tabulation fit: Yes — already baked into the naive solution itself.** `ONES` and `TENS` are precomputed lookup tables for word-parts, built once and reused across all 1,000 numbers, instead of re-deriving "eleven" or "thirty" from scratch every time they're needed. Worth recognizing this as tabulation-in-disguise — it doesn't look like the usual "build a table bottom-up" shape, but the principle (compute a reusable piece once, look it up repeatedly) is the same one.
