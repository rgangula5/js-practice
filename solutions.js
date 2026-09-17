const SOLUTIONS = {
 "1": {
  "title": "Sum all numbers",
  "code": "// Beginner\nconst sum = arr => {\n  let total = 0;\n  for (let i = 0; i < arr.length; i++) total += arr[i];\n  return total;\n};\n\n// Expert\nconst sum = arr => arr.reduce((a, b) => a + b, 0);",
  "why": "`reduce` expresses \"combine into one value\" in one line; beginner loop is fine but verbose."
 },
 "2": {
  "title": "Maximum number",
  "code": "// Beginner\nconst max = arr => {\n  let m = arr[0];\n  for (let i = 1; i < arr.length; i++) if (arr[i] > m) m = arr[i];\n  return m;\n};\n\n// Expert\nconst max = arr => Math.max(...arr);",
  "why": "`Math.max` + spread is idiomatic. (Note: spread can overflow on very huge arrays — then use reduce.)"
 },
 "3": {
  "title": "Minimum number",
  "code": "// Beginner\nconst min = arr => {\n  let m = arr[0];\n  for (let i = 1; i < arr.length; i++) if (arr[i] < m) m = arr[i];\n  return m;\n};\n\n// Expert\nconst min = arr => Math.min(...arr);",
  "why": "Same idea as max — built-in beats manual loop for readability."
 },
 "4": {
  "title": "Average",
  "code": "// Beginner\nconst avg = arr => {\n  let total = 0;\n  for (let i = 0; i < arr.length; i++) total += arr[i];\n  return total / arr.length;\n};\n\n// Expert\nconst avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;",
  "why": "Reuse the sum pattern; guard `arr.length === 0` in real code."
 },
 "5": {
  "title": "Reverse without .reverse()",
  "code": "// Beginner\nconst reverse = arr => {\n  const out = [];\n  for (let i = arr.length - 1; i >= 0; i--) out.push(arr[i]);\n  return out;\n};\n\n// Expert — two-pointer in place, O(1) extra space\nconst reverse = arr => {\n  let l = 0, r = arr.length - 1;\n  while (l < r) { [arr[l], arr[r]] = [arr[r], arr[l]]; l++; r--; }\n  return arr;\n};",
  "why": "Expert uses the **two-pointer** pattern (huge in DSA) and destructuring swap — no extra array."
 },
 "6": {
  "title": "Count evens",
  "code": "// Beginner\nconst countEven = arr => {\n  let c = 0;\n  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) c++;\n  return c;\n};\n\n// Expert\nconst countEven = arr => arr.filter(n => n % 2 === 0).length;",
  "why": "`filter().length` reads as \"how many match.\""
 },
 "7": {
  "title": "Filter odds",
  "code": "// Beginner\nconst odds = arr => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 !== 0) out.push(arr[i]);\n  return out;\n};\n\n// Expert\nconst odds = arr => arr.filter(n => n % 2 !== 0);",
  "why": "`filter` is exactly \"keep the ones matching a condition.\""
 },
 "8": {
  "title": "Double every number",
  "code": "// Beginner\nconst double = arr => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) out.push(arr[i] * 2);\n  return out;\n};\n\n// Expert\nconst double = arr => arr.map(n => n * 2);",
  "why": "`map` = \"transform each element into a new array.\""
 },
 "9": {
  "title": "Remove duplicates",
  "code": "// Beginner\nconst unique = arr => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) if (!out.includes(arr[i])) out.push(arr[i]);\n  return out;\n};\n\n// Expert — O(n) using a Set\nconst unique = arr => [...new Set(arr)];",
  "why": "Beginner is O(n²) (`includes` scans each time). `Set` gives O(n) and one line."
 },
 "10": {
  "title": "Second largest",
  "code": "// Beginner\nconst secondLargest = arr => {\n  const sorted = [...arr].sort((a, b) => b - a);\n  return sorted[1];\n};\n\n// Expert — single pass, O(n), handles duplicates\nconst secondLargest = arr => {\n  let first = -Infinity, second = -Infinity;\n  for (const n of arr) {\n    if (n > first) { second = first; first = n; }\n    else if (n > second && n < first) second = n;\n  }\n  return second;\n};",
  "why": "Sorting is O(n log n); a single pass is O(n) and avoids copying/sorting."
 },
 "11": {
  "title": "Contains value",
  "code": "// Beginner\nconst contains = (arr, val) => {\n  for (let i = 0; i < arr.length; i++) if (arr[i] === val) return true;\n  return false;\n};\n\n// Expert\nconst contains = (arr, val) => arr.includes(val);",
  "why": "`includes` is the built-in for exactly this."
 },
 "12": {
  "title": "Merge two arrays",
  "code": "// Beginner\nconst merge = (a, b) => {\n  const out = [];\n  for (let i = 0; i < a.length; i++) out.push(a[i]);\n  for (let i = 0; i < b.length; i++) out.push(b[i]);\n  return out;\n};\n\n// Expert\nconst merge = (a, b) => [...a, ...b];",
  "why": "Spread is the idiomatic merge; `a.concat(b)` also works."
 },
 "13": {
  "title": "Index of first even",
  "code": "// Beginner\nconst firstEvenIndex = arr => {\n  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) return i;\n  return -1;\n};\n\n// Expert\nconst firstEvenIndex = arr => arr.findIndex(n => n % 2 === 0);",
  "why": "`findIndex` returns the index of the first match (or -1) — exactly this."
 },
 "14": {
  "title": "Count occurrences",
  "code": "// Beginner\nconst count = (arr, target) => {\n  let c = 0;\n  for (let i = 0; i < arr.length; i++) if (arr[i] === target) c++;\n  return c;\n};\n\n// Expert\nconst count = (arr, target) => arr.filter(x => x === target).length;",
  "why": "Same result; `filter().length` is more declarative."
 },
 "15": {
  "title": "Square each",
  "code": "// Beginner\nconst squares = arr => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) out.push(arr[i] ** 2);\n  return out;\n};\n\n// Expert\nconst squares = arr => arr.map(n => n ** 2);",
  "why": "`map` again — transform each element."
 },
 "16": {
  "title": "Sum of positives",
  "code": "// Beginner\nconst sumPositive = arr => {\n  let total = 0;\n  for (let i = 0; i < arr.length; i++) if (arr[i] > 0) total += arr[i];\n  return total;\n};\n\n// Expert\nconst sumPositive = arr => arr.filter(n => n > 0).reduce((a, b) => a + b, 0);",
  "why": "Chain `filter` then `reduce` — read as \"keep positives, then sum.\""
 },
 "17": {
  "title": "Flatten 2D",
  "code": "// Beginner\nconst flatten = arr => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++)\n    for (let j = 0; j < arr[i].length; j++) out.push(arr[i][j]);\n  return out;\n};\n\n// Expert\nconst flatten = arr => arr.flat();",
  "why": "`.flat()` handles one level; `.flat(Infinity)` for any depth (see #94)."
 },
 "18": {
  "title": "Rotate right by 1",
  "code": "// Beginner\nconst rotate = arr => {\n  const last = arr[arr.length - 1];\n  const out = [last];\n  for (let i = 0; i < arr.length - 1; i++) out.push(arr[i]);\n  return out;\n};\n\n// Expert\nconst rotate = arr => [arr[arr.length - 1], ...arr.slice(0, -1)];",
  "why": "Spread + `slice` reads clearly; no manual index juggling."
 },
 "19": {
  "title": "Intersection",
  "code": "// Beginner\nconst intersect = (a, b) => {\n  const out = [];\n  for (let i = 0; i < a.length; i++) if (b.includes(a[i])) out.push(a[i]);\n  return out;\n};\n\n// Expert — O(n+m) using a Set\nconst intersect = (a, b) => {\n  const set = new Set(b);\n  return a.filter(x => set.has(x));\n};",
  "why": "Beginner is O(n*m). Set membership is O(1), so overall O(n+m)."
 },
 "20": {
  "title": "Move zeros to end",
  "code": "// Beginner\nconst moveZeros = arr => {\n  const out = [];\n  for (const n of arr) if (n !== 0) out.push(n);\n  while (out.length < arr.length) out.push(0);\n  return out;\n};\n\n// Expert — in place, two-pointer\nconst moveZeros = arr => {\n  let insert = 0;\n  for (const n of arr) if (n !== 0) arr[insert++] = n;\n  while (insert < arr.length) arr[insert++] = 0;\n  return arr;\n};",
  "why": "Expert modifies in place (O(1) extra space) — classic LeetCode pattern."
 },
 "21": {
  "title": "Product of all",
  "code": "// Beginner\nconst product = arr => {\n  let p = 1;\n  for (let i = 0; i < arr.length; i++) p *= arr[i];\n  return p;\n};\n\n// Expert\nconst product = arr => arr.reduce((a, b) => a * b, 1);",
  "why": "`reduce` with a starting value of 1."
 },
 "22": {
  "title": "Chunk into groups of N",
  "code": "// Beginner\nconst chunk = (arr, n) => {\n  const out = [];\n  let group = [];\n  for (let i = 0; i < arr.length; i++) {\n    group.push(arr[i]);\n    if (group.length === n) { out.push(group); group = []; }\n  }\n  if (group.length) out.push(group);\n  return out;\n};\n\n// Expert\nconst chunk = (arr, n) => {\n  const out = [];\n  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));\n  return out;\n};",
  "why": "Stepping the loop by `n` + `slice` is cleaner and avoids the temp group."
 },
 "23": {
  "title": "Cumulative sum",
  "code": "// Beginner\nconst cumulative = arr => {\n  const out = [];\n  let running = 0;\n  for (let i = 0; i < arr.length; i++) { running += arr[i]; out.push(running); }\n  return out;\n};\n\n// Expert\nconst cumulative = arr => {\n  let running = 0;\n  return arr.map(n => (running += n));\n};",
  "why": "`map` with an accumulator variable is compact (still clear)."
 },
 "24": {
  "title": "Difference (A not in B)",
  "code": "// Beginner\nconst diff = (a, b) => {\n  const out = [];\n  for (const x of a) if (!b.includes(x)) out.push(x);\n  return out;\n};\n\n// Expert\nconst diff = (a, b) => {\n  const set = new Set(b);\n  return a.filter(x => !set.has(x));\n};",
  "why": "Set makes the lookup O(1) instead of scanning `b` each time."
 },
 "25": {
  "title": "Group by even/odd",
  "code": "// Beginner\nconst groupParity = arr => {\n  const result = { even: [], odd: [] };\n  for (const n of arr) {\n    if (n % 2 === 0) result.even.push(n);\n    else result.odd.push(n);\n  }\n  return result;\n};\n\n// Expert\nconst groupParity = arr =>\n  arr.reduce((acc, n) => {\n    (n % 2 === 0 ? acc.even : acc.odd).push(n);\n    return acc;\n  }, { even: [], odd: [] });",
  "why": "`reduce` builds the grouped object in one pass — the \"group by\" pattern."
 },
 "26": {
  "title": "Reverse a string",
  "code": "// Beginner\nconst reverse = str => {\n  let out = \"\";\n  for (let i = str.length - 1; i >= 0; i--) out += str[i];\n  return out;\n};\n\n// Expert\nconst reverse = str => [...str].reverse().join(\"\");",
  "why": "Split → reverse → join is the idiomatic one-liner."
 },
 "27": {
  "title": "Palindrome check",
  "code": "// Beginner\nconst isPalindrome = str => {\n  const rev = str.split(\"\").reverse().join(\"\");\n  return str === rev;\n};\n\n// Expert — two-pointer, no extra string\nconst isPalindrome = str => {\n  let l = 0, r = str.length - 1;\n  while (l < r) if (str[l++] !== str[r--]) return false;\n  return true;\n};",
  "why": "Two-pointer avoids building a reversed copy; O(1) space, early exit."
 },
 "28": {
  "title": "Count vowels",
  "code": "// Beginner\nconst countVowels = str => {\n  let c = 0;\n  const vowels = \"aeiou\";\n  for (const ch of str.toLowerCase()) if (vowels.includes(ch)) c++;\n  return c;\n};\n\n// Expert\nconst countVowels = str => (str.match(/[aeiou]/gi) || []).length;",
  "why": "A regex with the global+insensitive flags counts matches directly."
 },
 "29": {
  "title": "Capitalize each word",
  "code": "// Beginner\nconst titleCase = str => {\n  const words = str.split(\" \");\n  const out = [];\n  for (const w of words) out.push(w[0].toUpperCase() + w.slice(1));\n  return out.join(\" \");\n};\n\n// Expert\nconst titleCase = str =>\n  str.split(\" \").map(w => w[0].toUpperCase() + w.slice(1)).join(\" \");",
  "why": "`split → map → join` is the classic word-transform pipeline."
 },
 "30": {
  "title": "Count each character",
  "code": "// Beginner\nconst charCount = str => {\n  const counts = {};\n  for (const ch of str) {\n    if (counts[ch]) counts[ch]++;\n    else counts[ch] = 1;\n  }\n  return counts;\n};\n\n// Expert\nconst charCount = str =>\n  [...str].reduce((acc, ch) => (acc[ch] = (acc[ch] || 0) + 1, acc), {});",
  "why": "The `(acc[ch] || 0) + 1` frequency-map trick is used constantly."
 },
 "31": {
  "title": "First non-repeating char",
  "code": "// Beginner\nconst firstUnique = str => {\n  for (let i = 0; i < str.length; i++) {\n    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];\n  }\n  return null;\n};\n\n// Expert — count with a Map, then find first with count 1\nconst firstUnique = str => {\n  const counts = {};\n  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;\n  for (const ch of str) if (counts[ch] === 1) return ch;\n  return null;\n};",
  "why": "Beginner is O(n²) (indexOf scans). Two passes with a map = O(n)."
 },
 "32": {
  "title": "Anagram check",
  "code": "// Beginner\nconst isAnagram = (a, b) => {\n  const sortStr = s => s.split(\"\").sort().join(\"\");\n  return sortStr(a) === sortStr(b);\n};\n\n// Expert — count characters, O(n)\nconst isAnagram = (a, b) => {\n  if (a.length !== b.length) return false;\n  const counts = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n  for (const ch of b) {\n    if (!counts[ch]) return false;\n    counts[ch]--;\n  }\n  return true;\n};",
  "why": "Sorting is O(n log n); the count-map version is O(n)."
 },
 "33": {
  "title": "Remove whitespace",
  "code": "// Beginner\nconst removeSpaces = str => {\n  let out = \"\";\n  for (const ch of str) if (ch !== \" \") out += ch;\n  return out;\n};\n\n// Expert\nconst removeSpaces = str => str.replace(/\\s/g, \"\");",
  "why": "`\\s` matches all whitespace (spaces, tabs, newlines), not just spaces."
 },
 "34": {
  "title": "Count words",
  "code": "// Beginner\nconst wordCount = str => {\n  return str.split(\" \").length;\n};\n\n// Expert — handles multiple/leading/trailing spaces\nconst wordCount = str => str.trim().split(/\\s+/).filter(Boolean).length;",
  "why": "Beginner miscounts on double spaces; `\\s+` + `trim` is robust."
 },
 "35": {
  "title": "Longest word",
  "code": "// Beginner\nconst longestWord = str => {\n  const words = str.split(\" \");\n  let longest = \"\";\n  for (const w of words) if (w.length > longest.length) longest = w;\n  return longest;\n};\n\n// Expert\nconst longestWord = str =>\n  str.split(\" \").reduce((a, b) => (b.length > a.length ? b : a), \"\");",
  "why": "`reduce` picking the max-by-length is a common idiom."
 },
 "36": {
  "title": "Replace spaces with dashes",
  "code": "// Beginner\nconst dashify = str => {\n  let out = \"\";\n  for (const ch of str) out += ch === \" \" ? \"-\" : ch;\n  return out;\n};\n\n// Expert\nconst dashify = str => str.replaceAll(\" \", \"-\");",
  "why": "`replaceAll` (or `.replace(/ /g, \"-\")`) is the built-in way."
 },
 "37": {
  "title": "Only digits?",
  "code": "// Beginner\nconst isDigits = str => {\n  for (const ch of str) if (ch < \"0\" || ch > \"9\") return false;\n  return str.length > 0;\n};\n\n// Expert\nconst isDigits = str => /^\\d+$/.test(str);",
  "why": "`^\\d+$` = \"start, one-or-more digits, end\" — clean validation."
 },
 "38": {
  "title": "Most frequent character",
  "code": "// Beginner\nconst mostFrequent = str => {\n  const counts = {};\n  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;\n  let best = \"\", max = 0;\n  for (const ch in counts) if (counts[ch] > max) { max = counts[ch]; best = ch; }\n  return best;\n};\n\n// Expert\nconst mostFrequent = str => {\n  const counts = {};\n  let best = \"\", max = 0;\n  for (const ch of str) {\n    counts[ch] = (counts[ch] || 0) + 1;\n    if (counts[ch] > max) { max = counts[ch]; best = ch; }\n  }\n  return best;\n};",
  "why": "Expert tracks the max in the same pass — one loop instead of two."
 },
 "39": {
  "title": "Truncate with \"...\"",
  "code": "// Beginner\nconst truncate = (str, n) => {\n  if (str.length <= n) return str;\n  return str.slice(0, n) + \"...\";\n};\n\n// Expert — same, but a clean guard/ternary\nconst truncate = (str, n) => (str.length <= n ? str : str.slice(0, n) + \"...\");",
  "why": "Logic is identical; expert is just concise. Correctness over cleverness here."
 },
 "40": {
  "title": "Count upper/lower",
  "code": "// Beginner\nconst caseCount = str => {\n  let upper = 0, lower = 0;\n  for (const ch of str) {\n    if (ch >= \"A\" && ch <= \"Z\") upper++;\n    else if (ch >= \"a\" && ch <= \"z\") lower++;\n  }\n  return { upper, lower };\n};\n\n// Expert\nconst caseCount = str => ({\n  upper: (str.match(/[A-Z]/g) || []).length,\n  lower: (str.match(/[a-z]/g) || []).length,\n});",
  "why": "Regex counts each category directly."
 },
 "41": {
  "title": "Reverse word order",
  "code": "// Beginner\nconst reverseWords = str => {\n  const words = str.split(\" \");\n  const out = [];\n  for (let i = words.length - 1; i >= 0; i--) out.push(words[i]);\n  return out.join(\" \");\n};\n\n// Expert\nconst reverseWords = str => str.split(\" \").reverse().join(\" \");",
  "why": "Split into words → reverse the array → join."
 },
 "42": {
  "title": "Rotation check",
  "code": "// Beginner\nconst isRotation = (a, b) => {\n  if (a.length !== b.length) return false;\n  for (let i = 0; i < a.length; i++) {\n    const rotated = a.slice(i) + a.slice(0, i);\n    if (rotated === b) return true;\n  }\n  return false;\n};\n\n// Expert — the classic (a+a) contains b trick\nconst isRotation = (a, b) => a.length === b.length && (a + a).includes(b);",
  "why": "Every rotation of `a` appears inside `a+a` — one line, no loop."
 },
 "43": {
  "title": "Title case ignoring small words",
  "code": "// Beginner\nconst titleCaseSmart = str => {\n  const small = [\"a\", \"the\", \"of\", \"and\", \"in\"];\n  const words = str.toLowerCase().split(\" \");\n  const out = [];\n  for (let i = 0; i < words.length; i++) {\n    const w = words[i];\n    if (i !== 0 && small.includes(w)) out.push(w);\n    else out.push(w[0].toUpperCase() + w.slice(1));\n  }\n  return out.join(\" \");\n};\n\n// Expert\nconst titleCaseSmart = str => {\n  const small = new Set([\"a\", \"the\", \"of\", \"and\", \"in\"]);\n  return str.toLowerCase().split(\" \")\n    .map((w, i) => (i !== 0 && small.has(w) ? w : w[0].toUpperCase() + w.slice(1)))\n    .join(\" \");\n};",
  "why": "`Set` for O(1) membership + `map` with index; first word always capitalized."
 },
 "44": {
  "title": "Duplicate characters",
  "code": "// Beginner\nconst duplicates = str => {\n  const counts = {};\n  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;\n  const out = [];\n  for (const ch in counts) if (counts[ch] > 1) out.push(ch);\n  return out;\n};\n\n// Expert\nconst duplicates = str => {\n  const seen = new Set(), dup = new Set();\n  for (const ch of str) (seen.has(ch) ? dup : seen).add(ch);\n  return [...dup];\n};",
  "why": "Two Sets track \"seen\" vs \"duplicate\" in a single pass."
 },
 "45": {
  "title": "Run-length encoding",
  "code": "// Beginner\nconst encode = str => {\n  let out = \"\";\n  let i = 0;\n  while (i < str.length) {\n    let count = 1;\n    while (str[i] === str[i + 1]) { count++; i++; }\n    out += str[i] + count;\n    i++;\n  }\n  return out;\n};\n\n// Expert\nconst encode = str => {\n  return str.replace(/(.)\\1*/g, m => m[0] + m.length);\n};",
  "why": "Regex `(.)\\1*` matches runs of the same char; beginner version is clearer to reason about."
 },
 "46": {
  "title": "Frequency map from array",
  "code": "// Beginner\nconst freq = arr => {\n  const counts = {};\n  for (const item of arr) {\n    if (counts[item]) counts[item]++;\n    else counts[item] = 1;\n  }\n  return counts;\n};\n\n// Expert\nconst freq = arr => arr.reduce((acc, x) => (acc[x] = (acc[x] || 0) + 1, acc), {});",
  "why": "The reduce frequency-map is the single most reused snippet in JS interviews."
 },
 "47": {
  "title": "Merge objects",
  "code": "// Beginner\nconst merge = (a, b) => {\n  const out = {};\n  for (const k in a) out[k] = a[k];\n  for (const k in b) out[k] = b[k];\n  return out;\n};\n\n// Expert\nconst merge = (a, b) => ({ ...a, ...b });",
  "why": "Spread merges objects; later keys win (b overrides a). `Object.assign` also works."
 },
 "48": {
  "title": "Keys as array",
  "code": "// Beginner\nconst keys = obj => {\n  const out = [];\n  for (const k in obj) out.push(k);\n  return out;\n};\n\n// Expert\nconst keys = obj => Object.keys(obj);",
  "why": "`Object.keys` is the built-in."
 },
 "49": {
  "title": "Values as array",
  "code": "// Beginner\nconst values = obj => {\n  const out = [];\n  for (const k in obj) out.push(obj[k]);\n  return out;\n};\n\n// Expert\nconst values = obj => Object.values(obj);",
  "why": "`Object.values` built-in."
 },
 "50": {
  "title": "Invert object",
  "code": "// Beginner\nconst invert = obj => {\n  const out = {};\n  for (const k in obj) out[obj[k]] = k;\n  return out;\n};\n\n// Expert\nconst invert = obj =>\n  Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));",
  "why": "`entries → map swap → fromEntries` is the idiomatic transform."
 },
 "51": {
  "title": "Key with highest value",
  "code": "// Beginner\nconst maxKey = obj => {\n  let best = null, max = -Infinity;\n  for (const k in obj) if (obj[k] > max) { max = obj[k]; best = k; }\n  return best;\n};\n\n// Expert\nconst maxKey = obj =>\n  Object.keys(obj).reduce((a, b) => (obj[b] > obj[a] ? b : a));",
  "why": "`reduce` comparing values picks the winning key."
 },
 "52": {
  "title": "Is object empty?",
  "code": "// Beginner\nconst isEmpty = obj => {\n  for (const k in obj) return false;\n  return true;\n};\n\n// Expert\nconst isEmpty = obj => Object.keys(obj).length === 0;",
  "why": "`Object.keys().length` is the standard check."
 },
 "53": {
  "title": "Sum numeric values",
  "code": "// Beginner\nconst sumValues = obj => {\n  let total = 0;\n  for (const k in obj) total += obj[k];\n  return total;\n};\n\n// Expert\nconst sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);",
  "why": "`values` then `reduce` — reuse the sum pattern."
 },
 "54": {
  "title": "Remove a key (no mutation)",
  "code": "// Beginner\nconst removeKey = (obj, key) => {\n  const out = {};\n  for (const k in obj) if (k !== key) out[k] = obj[k];\n  return out;\n};\n\n// Expert — destructuring rest\nconst removeKey = (obj, key) => {\n  const { [key]: _, ...rest } = obj;\n  return rest;\n};",
  "why": "Destructuring the key out leaves `rest` without it — no mutation."
 },
 "55": {
  "title": "Group array of objects by property",
  "code": "// Beginner\nconst groupBy = (arr, prop) => {\n  const out = {};\n  for (const item of arr) {\n    const key = item[prop];\n    if (!out[key]) out[key] = [];\n    out[key].push(item);\n  }\n  return out;\n};\n\n// Expert\nconst groupBy = (arr, prop) =>\n  arr.reduce((acc, item) => {\n    (acc[item[prop]] ||= []).push(item);\n    return acc;\n  }, {});",
  "why": "`||=` (logical-assign) initializes the array only if missing — the group-by idiom."
 },
 "56": {
  "title": "Dedupe with Set",
  "code": "// Beginner\nconst dedupe = arr => {\n  const out = [];\n  for (const x of arr) if (!out.includes(x)) out.push(x);\n  return out;\n};\n\n// Expert\nconst dedupe = arr => [...new Set(arr)];",
  "why": "Set removes dupes in O(n); beginner `includes` is O(n²)."
 },
 "57": {
  "title": "Common elements via Set",
  "code": "// Beginner\nconst common = (a, b) => {\n  const out = [];\n  for (const x of a) if (b.includes(x)) out.push(x);\n  return out;\n};\n\n// Expert\nconst common = (a, b) => {\n  const set = new Set(b);\n  return [...new Set(a.filter(x => set.has(x)))];\n};",
  "why": "Set membership O(1); outer Set removes duplicate matches."
 },
 "58": {
  "title": "Count unique values",
  "code": "// Beginner\nconst countUnique = arr => {\n  const seen = [];\n  for (const x of arr) if (!seen.includes(x)) seen.push(x);\n  return seen.length;\n};\n\n// Expert\nconst countUnique = arr => new Set(arr).size;",
  "why": "`Set.size` gives the unique count directly."
 },
 "59": {
  "title": "Pairs → object",
  "code": "// Beginner\nconst toObject = pairs => {\n  const out = {};\n  for (const [k, v] of pairs) out[k] = v;\n  return out;\n};\n\n// Expert\nconst toObject = pairs => Object.fromEntries(pairs);",
  "why": "`Object.fromEntries` is literally built for `[key,value]` pairs."
 },
 "60": {
  "title": "Keys that differ in value",
  "code": "// Beginner\nconst diffKeys = (a, b) => {\n  const out = [];\n  for (const k in a) if (a[k] !== b[k]) out.push(k);\n  return out;\n};\n\n// Expert\nconst diffKeys = (a, b) => Object.keys(a).filter(k => a[k] !== b[k]);",
  "why": "`keys().filter()` reads as \"keys where values differ.\" (Real code should also check keys only in `b`.)"
 },
 "61": {
  "title": "Even or odd",
  "code": "// Beginner\nconst evenOrOdd = n => {\n  if (n % 2 === 0) return \"even\";\n  return \"odd\";\n};\n\n// Expert\nconst evenOrOdd = n => (n % 2 === 0 ? \"even\" : \"odd\");",
  "why": "Ternary for a simple two-way choice."
 },
 "62": {
  "title": "Prime check",
  "code": "// Beginner\nconst isPrime = n => {\n  if (n < 2) return false;\n  for (let i = 2; i < n; i++) if (n % i === 0) return false;\n  return true;\n};\n\n// Expert — only check up to sqrt(n)\nconst isPrime = n => {\n  if (n < 2) return false;\n  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;\n  return true;\n};",
  "why": "A factor larger than √n pairs with one smaller — so checking to √n is enough. Much faster."
 },
 "63": {
  "title": "Factorial (loop)",
  "code": "// Beginner\nconst factorial = n => {\n  let result = 1;\n  for (let i = 2; i <= n; i++) result *= i;\n  return result;\n};\n\n// Expert\nconst factorial = n => Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);",
  "why": "Beginner loop is actually clearer here; the expert one shows `Array.from` + reduce. (Recursion in #93.)"
 },
 "64": {
  "title": "Fibonacci up to N terms",
  "code": "// Beginner\nconst fib = n => {\n  const out = [];\n  for (let i = 0; i < n; i++) {\n    if (i < 2) out.push(i);\n    else out.push(out[i - 1] + out[i - 2]);\n  }\n  return out;\n};\n\n// Expert — two variables, O(1) space per step\nconst fib = n => {\n  const out = [];\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) { out.push(a); [a, b] = [b, a + b]; }\n  return out;\n};",
  "why": "Expert avoids indexing back into the array; destructuring swap advances the pair."
 },
 "65": {
  "title": "Sum of digits",
  "code": "// Beginner\nconst digitSum = n => {\n  let sum = 0;\n  const str = String(n);\n  for (const ch of str) sum += Number(ch);\n  return sum;\n};\n\n// Expert — math, no string conversion\nconst digitSum = n => {\n  let sum = 0;\n  n = Math.abs(n);\n  while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }\n  return sum;\n};",
  "why": "`% 10` grabs the last digit, `/10` drops it — the core digit-manipulation trick."
 },
 "66": {
  "title": "Reverse digits",
  "code": "// Beginner\nconst reverseNum = n => {\n  return Number(String(n).split(\"\").reverse().join(\"\"));\n};\n\n// Expert — math\nconst reverseNum = n => {\n  let rev = 0;\n  while (n > 0) { rev = rev * 10 + (n % 10); n = Math.floor(n / 10); }\n  return rev;\n};",
  "why": "`rev*10 + lastDigit` builds the reversed number — the digit-building pattern."
 },
 "67": {
  "title": "Number palindrome",
  "code": "// Beginner\nconst isNumPalindrome = n => {\n  const s = String(n);\n  return s === s.split(\"\").reverse().join(\"\");\n};\n\n// Expert — reuse reverse-digits math\nconst isNumPalindrome = n => {\n  let original = n, rev = 0;\n  while (n > 0) { rev = rev * 10 + (n % 10); n = Math.floor(n / 10); }\n  return rev === original;\n};",
  "why": "Reverse and compare — no string conversion needed."
 },
 "68": {
  "title": "GCD",
  "code": "// Beginner\nconst gcd = (a, b) => {\n  let small = Math.min(a, b), g = 1;\n  for (let i = 1; i <= small; i++) if (a % i === 0 && b % i === 0) g = i;\n  return g;\n};\n\n// Expert — Euclid's algorithm, O(log n)\nconst gcd = (a, b) => {\n  while (b) [a, b] = [b, a % b];\n  return a;\n};",
  "why": "Euclid's algorithm is dramatically faster and a must-know."
 },
 "69": {
  "title": "Celsius ↔ Fahrenheit",
  "code": "// Beginner\nconst cToF = c => c * 9 / 5 + 32;\nconst fToC = f => (f - 32) * 5 / 9;\n\n// Expert (same math, arrow form)\nconst cToF = c => (c * 9) / 5 + 32;\nconst fToC = f => ((f - 32) * 5) / 9;",
  "why": "Pure formula — clarity matters more than cleverness."
 },
 "70": {
  "title": "Primes up to N",
  "code": "// Beginner\nconst primesUpTo = n => {\n  const out = [];\n  for (let i = 2; i <= n; i++) {\n    let prime = true;\n    for (let j = 2; j * j <= i; j++) if (i % j === 0) { prime = false; break; }\n    if (prime) out.push(i);\n  }\n  return out;\n};\n\n// Expert — Sieve of Eratosthenes, O(n log log n)\nconst primesUpTo = n => {\n  const sieve = new Array(n + 1).fill(true);\n  sieve[0] = sieve[1] = false;\n  for (let i = 2; i * i <= n; i++)\n    if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;\n  return sieve.flatMap((isP, i) => (isP ? [i] : []));\n};",
  "why": "The Sieve marks multiples once — far faster than testing each number."
 },
 "71": {
  "title": "Perfect square?",
  "code": "// Beginner\nconst isPerfectSquare = n => {\n  for (let i = 0; i * i <= n; i++) if (i * i === n) return true;\n  return false;\n};\n\n// Expert\nconst isPerfectSquare = n => Number.isInteger(Math.sqrt(n));",
  "why": "`sqrt` + integer check is O(1); beginner loop is O(√n)."
 },
 "72": {
  "title": "Count digits",
  "code": "// Beginner\nconst digitCount = n => {\n  return String(Math.abs(n)).length;\n};\n\n// Expert — math\nconst digitCount = n => {\n  n = Math.abs(n);\n  if (n === 0) return 1;\n  let count = 0;\n  while (n > 0) { count++; n = Math.floor(n / 10); }\n  return count;\n};",
  "why": "String length is simplest; math version avoids conversion."
 },
 "73": {
  "title": "Largest digit",
  "code": "// Beginner\nconst largestDigit = n => {\n  const digits = String(Math.abs(n)).split(\"\");\n  let max = 0;\n  for (const d of digits) if (Number(d) > max) max = Number(d);\n  return max;\n};\n\n// Expert — math\nconst largestDigit = n => {\n  n = Math.abs(n);\n  let max = 0;\n  while (n > 0) { max = Math.max(max, n % 10); n = Math.floor(n / 10); }\n  return max;\n};",
  "why": "`% 10` per digit with a running max — no string split."
 },
 "74": {
  "title": "Armstrong number",
  "code": "// Beginner\nconst isArmstrong = n => {\n  const digits = String(n).split(\"\");\n  const power = digits.length;\n  let sum = 0;\n  for (const d of digits) sum += Number(d) ** power;\n  return sum === n;\n};\n\n// Expert\nconst isArmstrong = n => {\n  const digits = [...String(n)];\n  return digits.reduce((s, d) => s + Number(d) ** digits.length, 0) === n;\n};",
  "why": "Same logic; expert uses reduce. Clarity is fine either way."
 },
 "75": {
  "title": "Round to N decimals",
  "code": "// Beginner\nconst round = (n, places) => {\n  const factor = 10 ** places;\n  return Math.round(n * factor) / factor;\n};\n\n// Expert\nconst round = (n, places) => Number(n.toFixed(places));",
  "why": "`toFixed` returns a string, so wrap in `Number`. Both are valid; know both."
 },
 "76": {
  "title": "Print 1 to N",
  "code": "// Beginner\nconst printN = n => {\n  for (let i = 1; i <= n; i++) console.log(i);\n};\n\n// Expert\nconst printN = n => Array.from({ length: n }, (_, i) => i + 1).forEach(x => console.log(x));",
  "why": "Loop is clearest; expert shows `Array.from` range generation."
 },
 "77": {
  "title": "Multiplication table",
  "code": "// Beginner\nconst table = n => {\n  for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);\n};\n\n// Expert\nconst table = n =>\n  Array.from({ length: 10 }, (_, i) => `${n} x ${i + 1} = ${n * (i + 1)}`).join(\"\\n\");",
  "why": "Expert returns a string (testable) instead of only logging."
 },
 "78": {
  "title": "FizzBuzz",
  "code": "// Beginner\nconst fizzBuzz = n => {\n  for (let i = 1; i <= n; i++) {\n    if (i % 3 === 0 && i % 5 === 0) console.log(\"FizzBuzz\");\n    else if (i % 3 === 0) console.log(\"Fizz\");\n    else if (i % 5 === 0) console.log(\"Buzz\");\n    else console.log(i);\n  }\n};\n\n// Expert — build the string\nconst fizzBuzz = n => {\n  for (let i = 1; i <= n; i++) {\n    let out = \"\";\n    if (i % 3 === 0) out += \"Fizz\";\n    if (i % 5 === 0) out += \"Buzz\";\n    console.log(out || i);\n  }\n};",
  "why": "Expert avoids the combined condition — appending scales to more rules cleanly."
 },
 "79": {
  "title": "Right triangle of stars",
  "code": "// Beginner\nconst triangle = n => {\n  for (let i = 1; i <= n; i++) {\n    let row = \"\";\n    for (let j = 0; j < i; j++) row += \"*\";\n    console.log(row);\n  }\n};\n\n// Expert\nconst triangle = n => {\n  for (let i = 1; i <= n; i++) console.log(\"*\".repeat(i));\n};",
  "why": "`\"*\".repeat(i)` replaces the inner loop."
 },
 "80": {
  "title": "1 to 100 skipping multiples of 7",
  "code": "// Beginner\nconst skip7 = () => {\n  for (let i = 1; i <= 100; i++) {\n    if (i % 7 === 0) continue;\n    console.log(i);\n  }\n};\n\n// Expert\nconst skip7 = () =>\n  Array.from({ length: 100 }, (_, i) => i + 1).filter(n => n % 7 !== 0);",
  "why": "`continue` skips iterations; expert returns a filtered array."
 },
 "81": {
  "title": "Sum evens 1..N",
  "code": "// Beginner\nconst sumEvens = n => {\n  let sum = 0;\n  for (let i = 2; i <= n; i += 2) sum += i;\n  return sum;\n};\n\n// Expert — arithmetic formula, O(1)\nconst sumEvens = n => {\n  const count = Math.floor(n / 2);\n  return count * (count + 1);\n};",
  "why": "Sum of first k evens = k(k+1). O(1) instead of looping."
 },
 "82": {
  "title": "Countdown N to 1",
  "code": "// Beginner\nconst countdown = n => {\n  for (let i = n; i >= 1; i--) console.log(i);\n};\n\n// Expert\nconst countdown = n =>\n  Array.from({ length: n }, (_, i) => n - i).forEach(x => console.log(x));",
  "why": "Loop is clearest; expert shows range generation counting down."
 },
 "83": {
  "title": "Sum of first N naturals",
  "code": "// Beginner\nconst sumNaturals = n => {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) sum += i;\n  return sum;\n};\n\n// Expert — Gauss formula, O(1)\nconst sumNaturals = n => (n * (n + 1)) / 2;",
  "why": "Gauss's formula computes it instantly without a loop."
 },
 "84": {
  "title": "Prime status 1..N",
  "code": "// Beginner\nconst primeStatus = n => {\n  for (let i = 1; i <= n; i++) {\n    let prime = i >= 2;\n    for (let j = 2; j < i; j++) if (i % j === 0) { prime = false; break; }\n    console.log(`${i}: ${prime}`);\n  }\n};\n\n// Expert — reuse sqrt prime check\nconst isPrime = x => {\n  if (x < 2) return false;\n  for (let i = 2; i * i <= x; i++) if (x % i === 0) return false;\n  return true;\n};\nconst primeStatus = n => {\n  for (let i = 1; i <= n; i++) console.log(`${i}: ${isPrime(i)}`);\n};",
  "why": "Extracting `isPrime` (reusable) + √n check = cleaner and faster."
 },
 "85": {
  "title": "Pyramid pattern",
  "code": "// Beginner\nconst pyramid = n => {\n  for (let i = 1; i <= n; i++) {\n    let row = \"\";\n    for (let s = 0; s < n - i; s++) row += \" \";\n    for (let star = 0; star < 2 * i - 1; star++) row += \"*\";\n    console.log(row);\n  }\n};\n\n// Expert\nconst pyramid = n => {\n  for (let i = 1; i <= n; i++)\n    console.log(\" \".repeat(n - i) + \"*\".repeat(2 * i - 1));\n};",
  "why": "`repeat` replaces both inner loops; the math (`n-i` spaces, `2i-1` stars) stays the same."
 },
 "86": {
  "title": "Square function",
  "code": "// Beginner\nfunction square(n) { return n * n; }\n\n// Expert\nconst square = n => n * n;",
  "why": "Arrow syntax for a one-liner."
 },
 "87": {
  "title": "Call a callback 3 times",
  "code": "// Beginner\nconst callThrice = cb => {\n  cb();\n  cb();\n  cb();\n};\n\n// Expert\nconst callThrice = cb => { for (let i = 0; i < 3; i++) cb(i); };",
  "why": "Loop scales to N and can pass the index to the callback."
 },
 "88": {
  "title": "Implement map",
  "code": "// Beginner\nconst myMap = (arr, fn) => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i]));\n  return out;\n};\n\n// Expert — pass index and array like the real map\nconst myMap = (arr, fn) => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i, arr));\n  return out;\n};",
  "why": "Real `map` gives the callback `(element, index, array)` — matching that is more complete."
 },
 "89": {
  "title": "Implement filter",
  "code": "// Beginner\nconst myFilter = (arr, fn) => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) out.push(arr[i]);\n  return out;\n};\n\n// Expert\nconst myFilter = (arr, fn) => {\n  const out = [];\n  for (let i = 0; i < arr.length; i++) if (fn(arr[i], i, arr)) out.push(arr[i]);\n  return out;\n};",
  "why": "Same completeness note — pass index & array to the predicate."
 },
 "90": {
  "title": "Implement reduce",
  "code": "// Beginner\nconst myReduce = (arr, fn, initial) => {\n  let acc = initial;\n  for (let i = 0; i < arr.length; i++) acc = fn(acc, arr[i]);\n  return acc;\n};\n\n// Expert — handle missing initial value like real reduce\nconst myReduce = (arr, fn, initial) => {\n  let acc = initial;\n  let start = 0;\n  if (initial === undefined) { acc = arr[0]; start = 1; }\n  for (let i = start; i < arr.length; i++) acc = fn(acc, arr[i], i, arr);\n  return acc;\n};",
  "why": "Real `reduce` uses the first element as the seed when no initial value is given — the expert version replicates that edge case."
 },
 "91": {
  "title": "Sum array with recursion",
  "code": "// Beginner\nconst sumRec = arr => {\n  if (arr.length === 0) return 0;          // base case\n  return arr[0] + sumRec(arr.slice(1));    // recursive case\n};\n\n// Expert — index-based, avoids slicing (no array copies)\nconst sumRec = (arr, i = 0) => {\n  if (i === arr.length) return 0;\n  return arr[i] + sumRec(arr, i + 1);\n};",
  "why": "`slice` copies the array each call (O(n²) total); passing an index is O(n)."
 },
 "92": {
  "title": "Reverse string with recursion",
  "code": "// Beginner\nconst reverseRec = str => {\n  if (str === \"\") return \"\";\n  return reverseRec(str.slice(1)) + str[0];\n};\n\n// Expert\nconst reverseRec = str => (str ? reverseRec(str.slice(1)) + str[0] : \"\");",
  "why": "Same recursion; expert is a compact arrow. Base case = empty string."
 },
 "93": {
  "title": "Factorial with recursion",
  "code": "// Beginner\nconst factRec = n => {\n  if (n <= 1) return 1;         // base case\n  return n * factRec(n - 1);    // recursive case\n};\n\n// Expert (tail-style)\nconst factRec = (n, acc = 1) => (n <= 1 ? acc : factRec(n - 1, acc * n));",
  "why": "The accumulator version carries the running product (tail-recursion style)."
 },
 "94": {
  "title": "Flatten any depth",
  "code": "// Beginner\nconst flattenDeep = arr => {\n  let out = [];\n  for (const item of arr) {\n    if (Array.isArray(item)) out = out.concat(flattenDeep(item));\n    else out.push(item);\n  }\n  return out;\n};\n\n// Expert\nconst flattenDeep = arr =>\n  arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? flattenDeep(x) : x), []);\n// or simply: arr.flat(Infinity)",
  "why": "Recursion handles arbitrary nesting; `Array.isArray` is the check. `flat(Infinity)` is the built-in shortcut."
 },
 "95": {
  "title": "Curry: add(1)(2)(3)",
  "code": "// Beginner\nfunction add(a) {\n  return function (b) {\n    return function (c) {\n      return a + b + c;\n    };\n  };\n}\n\n// Expert\nconst add = a => b => c => a + b + c;",
  "why": "Each function returns the next, remembering earlier args via **closure**. Arrows make it tiny."
 },
 "96": {
  "title": "Debounce",
  "code": "// Beginner / standard\nconst debounce = (fn, delay) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);                       // cancel previous\n    timer = setTimeout(() => fn(...args), delay); // schedule new\n  };\n};\n\n// Usage\nconst log = debounce(() => console.log(\"ran\"), 300);\nlog(); log(); log();   // only runs once, 300ms after the last call",
  "why": "Uses closure to hold `timer`; each call cancels the pending one — only the final call fires. (Core for search inputs, resize handlers.)"
 },
 "97": {
  "title": "Memoize",
  "code": "// Beginner / standard\nconst memoize = fn => {\n  const cache = {};\n  return n => {\n    if (n in cache) return cache[n];     // return cached\n    const result = fn(n);\n    cache[n] = result;                   // store\n    return result;\n  };\n};\n\n// Usage\nconst slowSquare = n => { for (let i = 0; i < 1e6; i++) {} return n * n; };\nconst fast = memoize(slowSquare);\nfast(5); // computes\nfast(5); // instant (cached)",
  "why": "Closure holds the `cache`; repeated inputs skip recomputation. Foundation of DP optimization."
 },
 "98": {
  "title": "Count target in nested array (recursion)",
  "code": "// Beginner\nconst countNested = (arr, target) => {\n  let count = 0;\n  for (const item of arr) {\n    if (Array.isArray(item)) count += countNested(item, target);\n    else if (item === target) count++;\n  }\n  return count;\n};\n\n// Expert\nconst countNested = (arr, target) =>\n  arr.reduce((c, x) =>\n    c + (Array.isArray(x) ? countNested(x, target) : x === target ? 1 : 0), 0);",
  "why": "Recurse into sub-arrays, count matches at the leaves. Same pattern as flatten."
 },
 "99": {
  "title": "Basic Promise.all",
  "code": "// Standard implementation\nfunction myPromiseAll(promises) {\n  return new Promise((resolve, reject) => {\n    const results = [];\n    let completed = 0;\n    if (promises.length === 0) return resolve([]);\n    promises.forEach((p, i) => {\n      Promise.resolve(p)\n        .then(value => {\n          results[i] = value;               // keep order by index\n          completed++;\n          if (completed === promises.length) resolve(results);\n        })\n        .catch(reject);                       // any rejection rejects all\n    });\n  });\n}\n\n// Usage\nmyPromiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // [1,2]",
  "why": "Resolves when ALL complete (tracking a counter), preserves order via index, rejects if any fails."
 },
 "100": {
  "title": "Sequential vs parallel async",
  "code": "// helper: a promise that resolves after `ms` with a label\nconst task = (label, ms) =>\n  new Promise(res => setTimeout(() => { console.log(label, \"done\"); res(label); }, ms));\n\n// SEQUENTIAL — one after another (total ≈ sum of times)\nasync function sequential() {\n  console.time(\"sequential\");\n  await task(\"A\", 300);\n  await task(\"B\", 300);\n  await task(\"C\", 300);\n  console.timeEnd(\"sequential\");   // ~900ms\n}\n\n// PARALLEL — all at once (total ≈ the slowest one)\nasync function parallel() {\n  console.time(\"parallel\");\n  await Promise.all([task(\"A\", 300), task(\"B\", 300), task(\"C\", 300)]);\n  console.timeEnd(\"parallel\");     // ~300ms\n}\n\nsequential().then(parallel);",
  "why": "`await` in a row waits for each (slow). `Promise.all` starts them together (fast). This is THE async performance lesson: use `Promise.all` for independent tasks. 1. Cover the solution. Solve in a `.js` file. Run with `node`. 2. Get the **beginner** version working first — correctness beats cleverness. 3. Then rewrite it as the **expert** version and understand *why* it's better. 4. Re-do any you struggled with a few days later (spaced repetition). - **Frequency map** (`counts[x] = (counts[x] || 0) + 1`) — #14, 30, 32, 38, 46 - **Two pointers** — #5, 27, 20 - **Set for O(1) lookup / dedupe** — #9, 19, 24, 56, 57, 58 - **map / filter / reduce** — everywhere - **Digit math** (`% 10`, `/ 10`) — #65, 66, 67, 73 - **Recursion** (base case + recursive case) — #91–94, 98 - **Closures** (debounce, memoize, curry) — #95, 96, 97 Master these patterns and LeetCode Easy will feel familiar. 🚀"
 }
};
