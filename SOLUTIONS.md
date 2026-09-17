# Solutions — 100 JavaScript Fundamentals (Backend / Node.js)

> Each problem shows a **Beginner** solution (clear, straightforward — how you'd first solve it)
> and an **Expert** solution (idiomatic / optimized — how you'd write it with experience),
> plus a short **Why** explaining the difference.
>
> Run any snippet with `node`. Don't just read — type them out.

---

## SECTION 1 — Arrays

### 1. Sum all numbers
```js
// Beginner
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

// Expert
const sum = arr => arr.reduce((a, b) => a + b, 0);
```
**Why:** `reduce` expresses "combine into one value" in one line; beginner loop is fine but verbose.

### 2. Maximum number
```js
// Beginner
function max(arr) {
  let m = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > m) m = arr[i];
  return m;
}

// Expert
const max = arr => Math.max(...arr);
```
**Why:** `Math.max` + spread is idiomatic. (Note: spread can overflow on very huge arrays — then use reduce.)

### 3. Minimum number
```js
// Beginner
function min(arr) {
  let m = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] < m) m = arr[i];
  return m;
}

// Expert
const min = arr => Math.min(...arr);
```
**Why:** Same idea as max — built-in beats manual loop for readability.

### 4. Average
```js
// Beginner
function avg(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total / arr.length;
}

// Expert
const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
```
**Why:** Reuse the sum pattern; guard `arr.length === 0` in real code.

### 5. Reverse without .reverse()
```js
// Beginner
function reverse(arr) {
  const out = [];
  for (let i = arr.length - 1; i >= 0; i--) out.push(arr[i]);
  return out;
}

// Expert — two-pointer in place, O(1) extra space
function reverse(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) { [arr[l], arr[r]] = [arr[r], arr[l]]; l++; r--; }
  return arr;
}
```
**Why:** Expert uses the **two-pointer** pattern (huge in DSA) and destructuring swap — no extra array.

### 6. Count evens
```js
// Beginner
function countEven(arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) c++;
  return c;
}

// Expert
const countEven = arr => arr.filter(n => n % 2 === 0).length;
```
**Why:** `filter().length` reads as "how many match."

### 7. Filter odds
```js
// Beginner
function odds(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 !== 0) out.push(arr[i]);
  return out;
}

// Expert
const odds = arr => arr.filter(n => n % 2 !== 0);
```
**Why:** `filter` is exactly "keep the ones matching a condition."

### 8. Double every number
```js
// Beginner
function double(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(arr[i] * 2);
  return out;
}

// Expert
const double = arr => arr.map(n => n * 2);
```
**Why:** `map` = "transform each element into a new array."

### 9. Remove duplicates
```js
// Beginner
function unique(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++) if (!out.includes(arr[i])) out.push(arr[i]);
  return out;
}

// Expert — O(n) using a Set
const unique = arr => [...new Set(arr)];
```
**Why:** Beginner is O(n²) (`includes` scans each time). `Set` gives O(n) and one line.

### 10. Second largest
```js
// Beginner
function secondLargest(arr) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[1];
}

// Expert — single pass, O(n), handles duplicates
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (const n of arr) {
    if (n > first) { second = first; first = n; }
    else if (n > second && n < first) second = n;
  }
  return second;
}
```
**Why:** Sorting is O(n log n); a single pass is O(n) and avoids copying/sorting.

### 11. Contains value
```js
// Beginner
function contains(arr, val) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === val) return true;
  return false;
}

// Expert
const contains = (arr, val) => arr.includes(val);
```
**Why:** `includes` is the built-in for exactly this.

### 12. Merge two arrays
```js
// Beginner
function merge(a, b) {
  const out = [];
  for (let i = 0; i < a.length; i++) out.push(a[i]);
  for (let i = 0; i < b.length; i++) out.push(b[i]);
  return out;
}

// Expert
const merge = (a, b) => [...a, ...b];
```
**Why:** Spread is the idiomatic merge; `a.concat(b)` also works.

### 13. Index of first even
```js
// Beginner
function firstEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) return i;
  return -1;
}

// Expert
const firstEvenIndex = arr => arr.findIndex(n => n % 2 === 0);
```
**Why:** `findIndex` returns the index of the first match (or -1) — exactly this.

### 14. Count occurrences
```js
// Beginner
function count(arr, target) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) c++;
  return c;
}

// Expert
const count = (arr, target) => arr.filter(x => x === target).length;
```
**Why:** Same result; `filter().length` is more declarative.

### 15. Square each
```js
// Beginner
function squares(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(arr[i] ** 2);
  return out;
}

// Expert
const squares = arr => arr.map(n => n ** 2);
```
**Why:** `map` again — transform each element.

### 16. Sum of positives
```js
// Beginner
function sumPositive(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] > 0) total += arr[i];
  return total;
}

// Expert
const sumPositive = arr => arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
```
**Why:** Chain `filter` then `reduce` — read as "keep positives, then sum."

### 17. Flatten 2D
```js
// Beginner
function flatten(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++) out.push(arr[i][j]);
  return out;
}

// Expert
const flatten = arr => arr.flat();
```
**Why:** `.flat()` handles one level; `.flat(Infinity)` for any depth (see #94).

### 18. Rotate right by 1
```js
// Beginner
function rotate(arr) {
  const last = arr[arr.length - 1];
  const out = [last];
  for (let i = 0; i < arr.length - 1; i++) out.push(arr[i]);
  return out;
}

// Expert
const rotate = arr => [arr[arr.length - 1], ...arr.slice(0, -1)];
```
**Why:** Spread + `slice` reads clearly; no manual index juggling.

### 19. Intersection
```js
// Beginner
function intersect(a, b) {
  const out = [];
  for (let i = 0; i < a.length; i++) if (b.includes(a[i])) out.push(a[i]);
  return out;
}

// Expert — O(n+m) using a Set
function intersect(a, b) {
  const set = new Set(b);
  return a.filter(x => set.has(x));
}
```
**Why:** Beginner is O(n*m). Set membership is O(1), so overall O(n+m).

### 20. Move zeros to end
```js
// Beginner
function moveZeros(arr) {
  const out = [];
  for (const n of arr) if (n !== 0) out.push(n);
  while (out.length < arr.length) out.push(0);
  return out;
}

// Expert — in place, two-pointer
function moveZeros(arr) {
  let insert = 0;
  for (const n of arr) if (n !== 0) arr[insert++] = n;
  while (insert < arr.length) arr[insert++] = 0;
  return arr;
}
```
**Why:** Expert modifies in place (O(1) extra space) — classic LeetCode pattern.

### 21. Product of all
```js
// Beginner
function product(arr) {
  let p = 1;
  for (let i = 0; i < arr.length; i++) p *= arr[i];
  return p;
}

// Expert
const product = arr => arr.reduce((a, b) => a * b, 1);
```
**Why:** `reduce` with a starting value of 1.

### 22. Chunk into groups of N
```js
// Beginner
function chunk(arr, n) {
  const out = [];
  let group = [];
  for (let i = 0; i < arr.length; i++) {
    group.push(arr[i]);
    if (group.length === n) { out.push(group); group = []; }
  }
  if (group.length) out.push(group);
  return out;
}

// Expert
function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}
```
**Why:** Stepping the loop by `n` + `slice` is cleaner and avoids the temp group.

### 23. Cumulative sum
```js
// Beginner
function cumulative(arr) {
  const out = [];
  let running = 0;
  for (let i = 0; i < arr.length; i++) { running += arr[i]; out.push(running); }
  return out;
}

// Expert
function cumulative(arr) {
  let running = 0;
  return arr.map(n => (running += n));
}
```
**Why:** `map` with an accumulator variable is compact (still clear).

### 24. Difference (A not in B)
```js
// Beginner
function diff(a, b) {
  const out = [];
  for (const x of a) if (!b.includes(x)) out.push(x);
  return out;
}

// Expert
function diff(a, b) {
  const set = new Set(b);
  return a.filter(x => !set.has(x));
}
```
**Why:** Set makes the lookup O(1) instead of scanning `b` each time.

### 25. Group by even/odd
```js
// Beginner
function groupParity(arr) {
  const result = { even: [], odd: [] };
  for (const n of arr) {
    if (n % 2 === 0) result.even.push(n);
    else result.odd.push(n);
  }
  return result;
}

// Expert
const groupParity = arr =>
  arr.reduce((acc, n) => {
    (n % 2 === 0 ? acc.even : acc.odd).push(n);
    return acc;
  }, { even: [], odd: [] });
```
**Why:** `reduce` builds the grouped object in one pass — the "group by" pattern.

---

## SECTION 2 — Strings

### 26. Reverse a string
```js
// Beginner
function reverse(str) {
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) out += str[i];
  return out;
}

// Expert
const reverse = str => [...str].reverse().join("");
```
**Why:** Split → reverse → join is the idiomatic one-liner.

### 27. Palindrome check
```js
// Beginner
function isPalindrome(str) {
  const rev = str.split("").reverse().join("");
  return str === rev;
}

// Expert — two-pointer, no extra string
function isPalindrome(str) {
  let l = 0, r = str.length - 1;
  while (l < r) if (str[l++] !== str[r--]) return false;
  return true;
}
```
**Why:** Two-pointer avoids building a reversed copy; O(1) space, early exit.

### 28. Count vowels
```js
// Beginner
function countVowels(str) {
  let c = 0;
  const vowels = "aeiou";
  for (const ch of str.toLowerCase()) if (vowels.includes(ch)) c++;
  return c;
}

// Expert
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
```
**Why:** A regex with the global+insensitive flags counts matches directly.

### 29. Capitalize each word
```js
// Beginner
function titleCase(str) {
  const words = str.split(" ");
  const out = [];
  for (const w of words) out.push(w[0].toUpperCase() + w.slice(1));
  return out.join(" ");
}

// Expert
const titleCase = str =>
  str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
```
**Why:** `split → map → join` is the classic word-transform pipeline.

### 30. Count each character
```js
// Beginner
function charCount(str) {
  const counts = {};
  for (const ch of str) {
    if (counts[ch]) counts[ch]++;
    else counts[ch] = 1;
  }
  return counts;
}

// Expert
const charCount = str =>
  [...str].reduce((acc, ch) => (acc[ch] = (acc[ch] || 0) + 1, acc), {});
```
**Why:** The `(acc[ch] || 0) + 1` frequency-map trick is used constantly.

### 31. First non-repeating char
```js
// Beginner
function firstUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];
  }
  return null;
}

// Expert — count with a Map, then find first with count 1
function firstUnique(str) {
  const counts = {};
  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;
  for (const ch of str) if (counts[ch] === 1) return ch;
  return null;
}
```
**Why:** Beginner is O(n²) (indexOf scans). Two passes with a map = O(n).

### 32. Anagram check
```js
// Beginner
function isAnagram(a, b) {
  const sortStr = s => s.split("").sort().join("");
  return sortStr(a) === sortStr(b);
}

// Expert — count characters, O(n)
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const counts = {};
  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;
  for (const ch of b) {
    if (!counts[ch]) return false;
    counts[ch]--;
  }
  return true;
}
```
**Why:** Sorting is O(n log n); the count-map version is O(n).

### 33. Remove whitespace
```js
// Beginner
function removeSpaces(str) {
  let out = "";
  for (const ch of str) if (ch !== " ") out += ch;
  return out;
}

// Expert
const removeSpaces = str => str.replace(/\s/g, "");
```
**Why:** `\s` matches all whitespace (spaces, tabs, newlines), not just spaces.

### 34. Count words
```js
// Beginner
function wordCount(str) {
  return str.split(" ").length;
}

// Expert — handles multiple/leading/trailing spaces
const wordCount = str => str.trim().split(/\s+/).filter(Boolean).length;
```
**Why:** Beginner miscounts on double spaces; `\s+` + `trim` is robust.

### 35. Longest word
```js
// Beginner
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (const w of words) if (w.length > longest.length) longest = w;
  return longest;
}

// Expert
const longestWord = str =>
  str.split(" ").reduce((a, b) => (b.length > a.length ? b : a), "");
```
**Why:** `reduce` picking the max-by-length is a common idiom.

### 36. Replace spaces with dashes
```js
// Beginner
function dashify(str) {
  let out = "";
  for (const ch of str) out += ch === " " ? "-" : ch;
  return out;
}

// Expert
const dashify = str => str.replaceAll(" ", "-");
```
**Why:** `replaceAll` (or `.replace(/ /g, "-")`) is the built-in way.

### 37. Only digits?
```js
// Beginner
function isDigits(str) {
  for (const ch of str) if (ch < "0" || ch > "9") return false;
  return str.length > 0;
}

// Expert
const isDigits = str => /^\d+$/.test(str);
```
**Why:** `^\d+$` = "start, one-or-more digits, end" — clean validation.

### 38. Most frequent character
```js
// Beginner
function mostFrequent(str) {
  const counts = {};
  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;
  let best = "", max = 0;
  for (const ch in counts) if (counts[ch] > max) { max = counts[ch]; best = ch; }
  return best;
}

// Expert
function mostFrequent(str) {
  const counts = {};
  let best = "", max = 0;
  for (const ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
    if (counts[ch] > max) { max = counts[ch]; best = ch; }
  }
  return best;
}
```
**Why:** Expert tracks the max in the same pass — one loop instead of two.

### 39. Truncate with "..."
```js
// Beginner
function truncate(str, n) {
  if (str.length <= n) return str;
  return str.slice(0, n) + "...";
}

// Expert — same, but a clean guard/ternary
const truncate = (str, n) => (str.length <= n ? str : str.slice(0, n) + "...");
```
**Why:** Logic is identical; expert is just concise. Correctness over cleverness here.

### 40. Count upper/lower
```js
// Beginner
function caseCount(str) {
  let upper = 0, lower = 0;
  for (const ch of str) {
    if (ch >= "A" && ch <= "Z") upper++;
    else if (ch >= "a" && ch <= "z") lower++;
  }
  return { upper, lower };
}

// Expert
const caseCount = str => ({
  upper: (str.match(/[A-Z]/g) || []).length,
  lower: (str.match(/[a-z]/g) || []).length,
});
```
**Why:** Regex counts each category directly.

### 41. Reverse word order
```js
// Beginner
function reverseWords(str) {
  const words = str.split(" ");
  const out = [];
  for (let i = words.length - 1; i >= 0; i--) out.push(words[i]);
  return out.join(" ");
}

// Expert
const reverseWords = str => str.split(" ").reverse().join(" ");
```
**Why:** Split into words → reverse the array → join.

### 42. Rotation check
```js
// Beginner
function isRotation(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const rotated = a.slice(i) + a.slice(0, i);
    if (rotated === b) return true;
  }
  return false;
}

// Expert — the classic (a+a) contains b trick
const isRotation = (a, b) => a.length === b.length && (a + a).includes(b);
```
**Why:** Every rotation of `a` appears inside `a+a` — one line, no loop.

### 43. Title case ignoring small words
```js
// Beginner
function titleCaseSmart(str) {
  const small = ["a", "the", "of", "and", "in"];
  const words = str.toLowerCase().split(" ");
  const out = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (i !== 0 && small.includes(w)) out.push(w);
    else out.push(w[0].toUpperCase() + w.slice(1));
  }
  return out.join(" ");
}

// Expert
function titleCaseSmart(str) {
  const small = new Set(["a", "the", "of", "and", "in"]);
  return str.toLowerCase().split(" ")
    .map((w, i) => (i !== 0 && small.has(w) ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}
```
**Why:** `Set` for O(1) membership + `map` with index; first word always capitalized.

### 44. Duplicate characters
```js
// Beginner
function duplicates(str) {
  const counts = {};
  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;
  const out = [];
  for (const ch in counts) if (counts[ch] > 1) out.push(ch);
  return out;
}

// Expert
function duplicates(str) {
  const seen = new Set(), dup = new Set();
  for (const ch of str) (seen.has(ch) ? dup : seen).add(ch);
  return [...dup];
}
```
**Why:** Two Sets track "seen" vs "duplicate" in a single pass.

### 45. Run-length encoding
```js
// Beginner
function encode(str) {
  let out = "";
  let i = 0;
  while (i < str.length) {
    let count = 1;
    while (str[i] === str[i + 1]) { count++; i++; }
    out += str[i] + count;
    i++;
  }
  return out;
}

// Expert
function encode(str) {
  return str.replace(/(.)\1*/g, m => m[0] + m.length);
}
```
**Why:** Regex `(.)\1*` matches runs of the same char; beginner version is clearer to reason about.

---

## SECTION 3 — Objects / Maps / Sets

### 46. Frequency map from array
```js
// Beginner
function freq(arr) {
  const counts = {};
  for (const item of arr) {
    if (counts[item]) counts[item]++;
    else counts[item] = 1;
  }
  return counts;
}

// Expert
const freq = arr => arr.reduce((acc, x) => (acc[x] = (acc[x] || 0) + 1, acc), {});
```
**Why:** The reduce frequency-map is the single most reused snippet in JS interviews.

### 47. Merge objects
```js
// Beginner
function merge(a, b) {
  const out = {};
  for (const k in a) out[k] = a[k];
  for (const k in b) out[k] = b[k];
  return out;
}

// Expert
const merge = (a, b) => ({ ...a, ...b });
```
**Why:** Spread merges objects; later keys win (b overrides a). `Object.assign` also works.

### 48. Keys as array
```js
// Beginner
function keys(obj) {
  const out = [];
  for (const k in obj) out.push(k);
  return out;
}

// Expert
const keys = obj => Object.keys(obj);
```
**Why:** `Object.keys` is the built-in.

### 49. Values as array
```js
// Beginner
function values(obj) {
  const out = [];
  for (const k in obj) out.push(obj[k]);
  return out;
}

// Expert
const values = obj => Object.values(obj);
```
**Why:** `Object.values` built-in.

### 50. Invert object
```js
// Beginner
function invert(obj) {
  const out = {};
  for (const k in obj) out[obj[k]] = k;
  return out;
}

// Expert
const invert = obj =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
```
**Why:** `entries → map swap → fromEntries` is the idiomatic transform.

### 51. Key with highest value
```js
// Beginner
function maxKey(obj) {
  let best = null, max = -Infinity;
  for (const k in obj) if (obj[k] > max) { max = obj[k]; best = k; }
  return best;
}

// Expert
const maxKey = obj =>
  Object.keys(obj).reduce((a, b) => (obj[b] > obj[a] ? b : a));
```
**Why:** `reduce` comparing values picks the winning key.

### 52. Is object empty?
```js
// Beginner
function isEmpty(obj) {
  for (const k in obj) return false;
  return true;
}

// Expert
const isEmpty = obj => Object.keys(obj).length === 0;
```
**Why:** `Object.keys().length` is the standard check.

### 53. Sum numeric values
```js
// Beginner
function sumValues(obj) {
  let total = 0;
  for (const k in obj) total += obj[k];
  return total;
}

// Expert
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
```
**Why:** `values` then `reduce` — reuse the sum pattern.

### 54. Remove a key (no mutation)
```js
// Beginner
function removeKey(obj, key) {
  const out = {};
  for (const k in obj) if (k !== key) out[k] = obj[k];
  return out;
}

// Expert — destructuring rest
const removeKey = (obj, key) => {
  const { [key]: _, ...rest } = obj;
  return rest;
};
```
**Why:** Destructuring the key out leaves `rest` without it — no mutation.

### 55. Group array of objects by property
```js
// Beginner
function groupBy(arr, prop) {
  const out = {};
  for (const item of arr) {
    const key = item[prop];
    if (!out[key]) out[key] = [];
    out[key].push(item);
  }
  return out;
}

// Expert
const groupBy = (arr, prop) =>
  arr.reduce((acc, item) => {
    (acc[item[prop]] ||= []).push(item);
    return acc;
  }, {});
```
**Why:** `||=` (logical-assign) initializes the array only if missing — the group-by idiom.

### 56. Dedupe with Set
```js
// Beginner
function dedupe(arr) {
  const out = [];
  for (const x of arr) if (!out.includes(x)) out.push(x);
  return out;
}

// Expert
const dedupe = arr => [...new Set(arr)];
```
**Why:** Set removes dupes in O(n); beginner `includes` is O(n²).

### 57. Common elements via Set
```js
// Beginner
function common(a, b) {
  const out = [];
  for (const x of a) if (b.includes(x)) out.push(x);
  return out;
}

// Expert
const common = (a, b) => {
  const set = new Set(b);
  return [...new Set(a.filter(x => set.has(x)))];
};
```
**Why:** Set membership O(1); outer Set removes duplicate matches.

### 58. Count unique values
```js
// Beginner
function countUnique(arr) {
  const seen = [];
  for (const x of arr) if (!seen.includes(x)) seen.push(x);
  return seen.length;
}

// Expert
const countUnique = arr => new Set(arr).size;
```
**Why:** `Set.size` gives the unique count directly.

### 59. Pairs → object
```js
// Beginner
function toObject(pairs) {
  const out = {};
  for (const [k, v] of pairs) out[k] = v;
  return out;
}

// Expert
const toObject = pairs => Object.fromEntries(pairs);
```
**Why:** `Object.fromEntries` is literally built for `[key,value]` pairs.

### 60. Keys that differ in value
```js
// Beginner
function diffKeys(a, b) {
  const out = [];
  for (const k in a) if (a[k] !== b[k]) out.push(k);
  return out;
}

// Expert
const diffKeys = (a, b) => Object.keys(a).filter(k => a[k] !== b[k]);
```
**Why:** `keys().filter()` reads as "keys where values differ." (Real code should also check keys only in `b`.)

---

## SECTION 4 — Math / Numbers

### 61. Even or odd
```js
// Beginner
function evenOrOdd(n) {
  if (n % 2 === 0) return "even";
  return "odd";
}

// Expert
const evenOrOdd = n => (n % 2 === 0 ? "even" : "odd");
```
**Why:** Ternary for a simple two-way choice.

### 62. Prime check
```js
// Beginner
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
}

// Expert — only check up to sqrt(n)
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
```
**Why:** A factor larger than √n pairs with one smaller — so checking to √n is enough. Much faster.

### 63. Factorial (loop)
```js
// Beginner
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Expert
const factorial = n => Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
```
**Why:** Beginner loop is actually clearer here; the expert one shows `Array.from` + reduce. (Recursion in #93.)

### 64. Fibonacci up to N terms
```js
// Beginner
function fib(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) out.push(i);
    else out.push(out[i - 1] + out[i - 2]);
  }
  return out;
}

// Expert — two variables, O(1) space per step
function fib(n) {
  const out = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) { out.push(a); [a, b] = [b, a + b]; }
  return out;
}
```
**Why:** Expert avoids indexing back into the array; destructuring swap advances the pair.

### 65. Sum of digits
```js
// Beginner
function digitSum(n) {
  let sum = 0;
  const str = String(n);
  for (const ch of str) sum += Number(ch);
  return sum;
}

// Expert — math, no string conversion
function digitSum(n) {
  let sum = 0;
  n = Math.abs(n);
  while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }
  return sum;
}
```
**Why:** `% 10` grabs the last digit, `/10` drops it — the core digit-manipulation trick.

### 66. Reverse digits
```js
// Beginner
function reverseNum(n) {
  return Number(String(n).split("").reverse().join(""));
}

// Expert — math
function reverseNum(n) {
  let rev = 0;
  while (n > 0) { rev = rev * 10 + (n % 10); n = Math.floor(n / 10); }
  return rev;
}
```
**Why:** `rev*10 + lastDigit` builds the reversed number — the digit-building pattern.

### 67. Number palindrome
```js
// Beginner
function isNumPalindrome(n) {
  const s = String(n);
  return s === s.split("").reverse().join("");
}

// Expert — reuse reverse-digits math
function isNumPalindrome(n) {
  let original = n, rev = 0;
  while (n > 0) { rev = rev * 10 + (n % 10); n = Math.floor(n / 10); }
  return rev === original;
}
```
**Why:** Reverse and compare — no string conversion needed.

### 68. GCD
```js
// Beginner
function gcd(a, b) {
  let small = Math.min(a, b), g = 1;
  for (let i = 1; i <= small; i++) if (a % i === 0 && b % i === 0) g = i;
  return g;
}

// Expert — Euclid's algorithm, O(log n)
function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}
```
**Why:** Euclid's algorithm is dramatically faster and a must-know.

### 69. Celsius ↔ Fahrenheit
```js
// Beginner
function cToF(c) { return c * 9 / 5 + 32; }
function fToC(f) { return (f - 32) * 5 / 9; }

// Expert (same math, arrow form)
const cToF = c => (c * 9) / 5 + 32;
const fToC = f => ((f - 32) * 5) / 9;
```
**Why:** Pure formula — clarity matters more than cleverness.

### 70. Primes up to N
```js
// Beginner
function primesUpTo(n) {
  const out = [];
  for (let i = 2; i <= n; i++) {
    let prime = true;
    for (let j = 2; j * j <= i; j++) if (i % j === 0) { prime = false; break; }
    if (prime) out.push(i);
  }
  return out;
}

// Expert — Sieve of Eratosthenes, O(n log log n)
function primesUpTo(n) {
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++)
    if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;
  return sieve.flatMap((isP, i) => (isP ? [i] : []));
}
```
**Why:** The Sieve marks multiples once — far faster than testing each number.

### 71. Perfect square?
```js
// Beginner
function isPerfectSquare(n) {
  for (let i = 0; i * i <= n; i++) if (i * i === n) return true;
  return false;
}

// Expert
const isPerfectSquare = n => Number.isInteger(Math.sqrt(n));
```
**Why:** `sqrt` + integer check is O(1); beginner loop is O(√n).

### 72. Count digits
```js
// Beginner
function digitCount(n) {
  return String(Math.abs(n)).length;
}

// Expert — math
function digitCount(n) {
  n = Math.abs(n);
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) { count++; n = Math.floor(n / 10); }
  return count;
}
```
**Why:** String length is simplest; math version avoids conversion.

### 73. Largest digit
```js
// Beginner
function largestDigit(n) {
  const digits = String(Math.abs(n)).split("");
  let max = 0;
  for (const d of digits) if (Number(d) > max) max = Number(d);
  return max;
}

// Expert — math
function largestDigit(n) {
  n = Math.abs(n);
  let max = 0;
  while (n > 0) { max = Math.max(max, n % 10); n = Math.floor(n / 10); }
  return max;
}
```
**Why:** `% 10` per digit with a running max — no string split.

### 74. Armstrong number
```js
// Beginner
function isArmstrong(n) {
  const digits = String(n).split("");
  const power = digits.length;
  let sum = 0;
  for (const d of digits) sum += Number(d) ** power;
  return sum === n;
}

// Expert
const isArmstrong = n => {
  const digits = [...String(n)];
  return digits.reduce((s, d) => s + Number(d) ** digits.length, 0) === n;
};
```
**Why:** Same logic; expert uses reduce. Clarity is fine either way.

### 75. Round to N decimals
```js
// Beginner
function round(n, places) {
  const factor = 10 ** places;
  return Math.round(n * factor) / factor;
}

// Expert
const round = (n, places) => Number(n.toFixed(places));
```
**Why:** `toFixed` returns a string, so wrap in `Number`. Both are valid; know both.

---

## SECTION 5 — Loops / Logic / Patterns

### 76. Print 1 to N
```js
// Beginner
function printN(n) {
  for (let i = 1; i <= n; i++) console.log(i);
}

// Expert
const printN = n => Array.from({ length: n }, (_, i) => i + 1).forEach(x => console.log(x));
```
**Why:** Loop is clearest; expert shows `Array.from` range generation.

### 77. Multiplication table
```js
// Beginner
function table(n) {
  for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);
}

// Expert
const table = n =>
  Array.from({ length: 10 }, (_, i) => `${n} x ${i + 1} = ${n * (i + 1)}`).join("\n");
```
**Why:** Expert returns a string (testable) instead of only logging.

### 78. FizzBuzz
```js
// Beginner
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// Expert — build the string
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let out = "";
    if (i % 3 === 0) out += "Fizz";
    if (i % 5 === 0) out += "Buzz";
    console.log(out || i);
  }
}
```
**Why:** Expert avoids the combined condition — appending scales to more rules cleanly.

### 79. Right triangle of stars
```js
// Beginner
function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) row += "*";
    console.log(row);
  }
}

// Expert
function triangle(n) {
  for (let i = 1; i <= n; i++) console.log("*".repeat(i));
}
```
**Why:** `"*".repeat(i)` replaces the inner loop.

### 80. 1 to 100 skipping multiples of 7
```js
// Beginner
function skip7() {
  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) continue;
    console.log(i);
  }
}

// Expert
const skip7 = () =>
  Array.from({ length: 100 }, (_, i) => i + 1).filter(n => n % 7 !== 0);
```
**Why:** `continue` skips iterations; expert returns a filtered array.

### 81. Sum evens 1..N
```js
// Beginner
function sumEvens(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) sum += i;
  return sum;
}

// Expert — arithmetic formula, O(1)
function sumEvens(n) {
  const count = Math.floor(n / 2);
  return count * (count + 1);
}
```
**Why:** Sum of first k evens = k(k+1). O(1) instead of looping.

### 82. Countdown N to 1
```js
// Beginner
function countdown(n) {
  for (let i = n; i >= 1; i--) console.log(i);
}

// Expert
const countdown = n =>
  Array.from({ length: n }, (_, i) => n - i).forEach(x => console.log(x));
```
**Why:** Loop is clearest; expert shows range generation counting down.

### 83. Sum of first N naturals
```js
// Beginner
function sumNaturals(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// Expert — Gauss formula, O(1)
const sumNaturals = n => (n * (n + 1)) / 2;
```
**Why:** Gauss's formula computes it instantly without a loop.

### 84. Prime status 1..N
```js
// Beginner
function primeStatus(n) {
  for (let i = 1; i <= n; i++) {
    let prime = i >= 2;
    for (let j = 2; j < i; j++) if (i % j === 0) { prime = false; break; }
    console.log(`${i}: ${prime}`);
  }
}

// Expert — reuse sqrt prime check
function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i * i <= x; i++) if (x % i === 0) return false;
  return true;
}
function primeStatus(n) {
  for (let i = 1; i <= n; i++) console.log(`${i}: ${isPrime(i)}`);
}
```
**Why:** Extracting `isPrime` (reusable) + √n check = cleaner and faster.

### 85. Pyramid pattern
```js
// Beginner
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 0; s < n - i; s++) row += " ";
    for (let star = 0; star < 2 * i - 1; star++) row += "*";
    console.log(row);
  }
}

// Expert
function pyramid(n) {
  for (let i = 1; i <= n; i++)
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
```
**Why:** `repeat` replaces both inner loops; the math (`n-i` spaces, `2i-1` stars) stays the same.

---

## SECTION 6 — Functions / Recursion / Higher-Order / Async

### 86. Square function
```js
// Beginner
function square(n) { return n * n; }

// Expert
const square = n => n * n;
```
**Why:** Arrow syntax for a one-liner.

### 87. Call a callback 3 times
```js
// Beginner
function callThrice(cb) {
  cb();
  cb();
  cb();
}

// Expert
const callThrice = cb => { for (let i = 0; i < 3; i++) cb(i); };
```
**Why:** Loop scales to N and can pass the index to the callback.

### 88. Implement map
```js
// Beginner
function myMap(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i]));
  return out;
}

// Expert — pass index and array like the real map
function myMap(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i, arr));
  return out;
}
```
**Why:** Real `map` gives the callback `(element, index, array)` — matching that is more complete.

### 89. Implement filter
```js
// Beginner
function myFilter(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) out.push(arr[i]);
  return out;
}

// Expert
function myFilter(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i], i, arr)) out.push(arr[i]);
  return out;
}
```
**Why:** Same completeness note — pass index & array to the predicate.

### 90. Implement reduce
```js
// Beginner
function myReduce(arr, fn, initial) {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) acc = fn(acc, arr[i]);
  return acc;
}

// Expert — handle missing initial value like real reduce
function myReduce(arr, fn, initial) {
  let acc = initial;
  let start = 0;
  if (initial === undefined) { acc = arr[0]; start = 1; }
  for (let i = start; i < arr.length; i++) acc = fn(acc, arr[i], i, arr);
  return acc;
}
```
**Why:** Real `reduce` uses the first element as the seed when no initial value is given — the expert version replicates that edge case.

### 91. Sum array with recursion
```js
// Beginner
function sumRec(arr) {
  if (arr.length === 0) return 0;          // base case
  return arr[0] + sumRec(arr.slice(1));    // recursive case
}

// Expert — index-based, avoids slicing (no array copies)
function sumRec(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumRec(arr, i + 1);
}
```
**Why:** `slice` copies the array each call (O(n²) total); passing an index is O(n).

### 92. Reverse string with recursion
```js
// Beginner
function reverseRec(str) {
  if (str === "") return "";
  return reverseRec(str.slice(1)) + str[0];
}

// Expert
const reverseRec = str => (str ? reverseRec(str.slice(1)) + str[0] : "");
```
**Why:** Same recursion; expert is a compact arrow. Base case = empty string.

### 93. Factorial with recursion
```js
// Beginner
function factRec(n) {
  if (n <= 1) return 1;         // base case
  return n * factRec(n - 1);    // recursive case
}

// Expert (tail-style)
const factRec = (n, acc = 1) => (n <= 1 ? acc : factRec(n - 1, acc * n));
```
**Why:** The accumulator version carries the running product (tail-recursion style).

### 94. Flatten any depth
```js
// Beginner
function flattenDeep(arr) {
  let out = [];
  for (const item of arr) {
    if (Array.isArray(item)) out = out.concat(flattenDeep(item));
    else out.push(item);
  }
  return out;
}

// Expert
const flattenDeep = arr =>
  arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? flattenDeep(x) : x), []);
// or simply: arr.flat(Infinity)
```
**Why:** Recursion handles arbitrary nesting; `Array.isArray` is the check. `flat(Infinity)` is the built-in shortcut.

### 95. Curry: add(1)(2)(3)
```js
// Beginner
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Expert
const add = a => b => c => a + b + c;
```
**Why:** Each function returns the next, remembering earlier args via **closure**. Arrows make it tiny.

### 96. Debounce
```js
// Beginner / standard
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);                       // cancel previous
    timer = setTimeout(() => fn(...args), delay); // schedule new
  };
}

// Usage
const log = debounce(() => console.log("ran"), 300);
log(); log(); log();   // only runs once, 300ms after the last call
```
**Why:** Uses closure to hold `timer`; each call cancels the pending one — only the final call fires. (Core for search inputs, resize handlers.)

### 97. Memoize
```js
// Beginner / standard
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];     // return cached
    const result = fn(n);
    cache[n] = result;                   // store
    return result;
  };
}

// Usage
const slowSquare = n => { for (let i = 0; i < 1e6; i++) {} return n * n; };
const fast = memoize(slowSquare);
fast(5); // computes
fast(5); // instant (cached)
```
**Why:** Closure holds the `cache`; repeated inputs skip recomputation. Foundation of DP optimization.

### 98. Count target in nested array (recursion)
```js
// Beginner
function countNested(arr, target) {
  let count = 0;
  for (const item of arr) {
    if (Array.isArray(item)) count += countNested(item, target);
    else if (item === target) count++;
  }
  return count;
}

// Expert
const countNested = (arr, target) =>
  arr.reduce((c, x) =>
    c + (Array.isArray(x) ? countNested(x, target) : x === target ? 1 : 0), 0);
```
**Why:** Recurse into sub-arrays, count matches at the leaves. Same pattern as flatten.

### 99. Basic Promise.all
```js
// Standard implementation
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) return resolve([]);
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = value;               // keep order by index
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject);                       // any rejection rejects all
    });
  });
}

// Usage
myPromiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // [1,2]
```
**Why:** Resolves when ALL complete (tracking a counter), preserves order via index, rejects if any fails.

### 100. Sequential vs parallel async
```js
// helper: a promise that resolves after `ms` with a label
const task = (label, ms) =>
  new Promise(res => setTimeout(() => { console.log(label, "done"); res(label); }, ms));

// SEQUENTIAL — one after another (total ≈ sum of times)
async function sequential() {
  console.time("sequential");
  await task("A", 300);
  await task("B", 300);
  await task("C", 300);
  console.timeEnd("sequential");   // ~900ms
}

// PARALLEL — all at once (total ≈ the slowest one)
async function parallel() {
  console.time("parallel");
  await Promise.all([task("A", 300), task("B", 300), task("C", 300)]);
  console.timeEnd("parallel");     // ~300ms
}

sequential().then(parallel);
```
**Why:** `await` in a row waits for each (slow). `Promise.all` starts them together (fast). This is THE async performance lesson: use `Promise.all` for independent tasks.

---

## How to practice these
1. Cover the solution. Solve in a `.js` file. Run with `node`.
2. Get the **beginner** version working first — correctness beats cleverness.
3. Then rewrite it as the **expert** version and understand *why* it's better.
4. Re-do any you struggled with a few days later (spaced repetition).

### Patterns you'll see repeat (these are the real takeaways)
- **Frequency map** (`counts[x] = (counts[x] || 0) + 1`) — #14, 30, 32, 38, 46
- **Two pointers** — #5, 27, 20
- **Set for O(1) lookup / dedupe** — #9, 19, 24, 56, 57, 58
- **map / filter / reduce** — everywhere
- **Digit math** (`% 10`, `/ 10`) — #65, 66, 67, 73
- **Recursion** (base case + recursive case) — #91–94, 98
- **Closures** (debounce, memoize, curry) — #95, 96, 97

Master these patterns and LeetCode Easy will feel familiar. 🚀
