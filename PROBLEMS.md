# 100 JavaScript Fundamentals Problems (Backend / Node.js)

> **Goal:** Build rock-solid hands-on with arrays, strings, objects/Maps, math, loops,
> and recursion — the real prerequisites before LeetCode & DSA.
>
> **How to use:** Solve each one yourself first. Write it in a `.js` file and run with
> `node file.js`. Only then check `SOLUTIONS.md`, which shows a **beginner** version
> and an **expert** version for each.
>
> No React. Pure JavaScript you can run in Node.

---

## SECTION 1 — Arrays (1–25)

1. **[Easy]** Sum all numbers in an array. `[1,2,3,4]` → `10`
2. **[Easy]** Find the maximum number in an array. `[3,7,2,9,4]` → `9`
3. **[Easy]** Find the minimum number in an array. `[3,7,2,9,4]` → `2`
4. **[Easy]** Calculate the average of an array. `[2,4,6]` → `4`
5. **[Easy]** Reverse an array **without** using `.reverse()`. `[1,2,3]` → `[3,2,1]`
6. **[Easy]** Count how many even numbers are in an array. `[1,2,3,4,5,6]` → `3`
7. **[Easy]** Filter out only the odd numbers. `[1,2,3,4,5]` → `[1,3,5]`
8. **[Easy]** Double every number in an array. `[1,2,3]` → `[2,4,6]`
9. **[Easy]** Remove duplicates from an array. `[1,2,2,3,3,3]` → `[1,2,3]`
10. **[Medium]** Find the second largest number. `[10,5,20,8]` → `10`
11. **[Easy]** Check if an array contains a given value (return true/false). `([1,2,3], 2)` → `true`
12. **[Easy]** Merge two arrays into one. `([1,2],[3,4])` → `[1,2,3,4]`
13. **[Easy]** Find the index of the first even number. `[1,3,4,7]` → `2`
14. **[Easy]** Count occurrences of a target value. `([1,2,2,3,2], 2)` → `3`
15. **[Easy]** Return a new array with each element squared. `[1,2,3]` → `[1,4,9]`
16. **[Easy]** Find the sum of only the positive numbers. `[-1,2,-3,4]` → `6`
17. **[Easy]** Flatten a 2D array into 1D. `[[1,2],[3,4]]` → `[1,2,3,4]`
18. **[Easy]** Rotate an array to the right by 1. `[1,2,3,4]` → `[4,1,2,3]`
19. **[Medium]** Find the intersection of two arrays (common values). `([1,2,3],[2,3,4])` → `[2,3]`
20. **[Medium]** Move all zeros to the end. `[0,1,0,3,12]` → `[1,3,12,0,0]`
21. **[Easy]** Find the product of all numbers. `[1,2,3,4]` → `24`
22. **[Medium]** Chunk an array into groups of N. `([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`
23. **[Medium]** Return the running/cumulative sum. `[1,2,3,4]` → `[1,3,6,10]`
24. **[Medium]** Find the difference between two arrays (in A but not in B). `([1,2,3,4],[2,4])` → `[1,3]`
25. **[Medium]** Group array elements by even/odd. `[1,2,3,4]` → `{ even:[2,4], odd:[1,3] }`

---

## SECTION 2 — Strings (26–45)

26. **[Easy]** Reverse a string. `"hello"` → `"olleh"`
27. **[Easy]** Check if a string is a palindrome. `"racecar"` → `true`
28. **[Easy]** Count the vowels in a string. `"hello"` → `2`
29. **[Easy]** Capitalize the first letter of each word. `"hello world"` → `"Hello World"`
30. **[Easy]** Count occurrences of each character. `"aabbc"` → `{ a:2, b:2, c:1 }`
31. **[Medium]** Find the first non-repeating character. `"aabbcdd"` → `"c"`
32. **[Medium]** Check if two strings are anagrams. `("listen","silent")` → `true`
33. **[Easy]** Remove all whitespace from a string. `"a b c"` → `"abc"`
34. **[Easy]** Count words in a sentence. `"the quick brown fox"` → `4`
35. **[Easy]** Find the longest word in a sentence. `"I love programming"` → `"programming"`
36. **[Easy]** Replace all spaces with dashes. `"hello world foo"` → `"hello-world-foo"`
37. **[Easy]** Check if a string contains only digits. `"12345"` → `true`, `"12a45"` → `false`
38. **[Medium]** Return the character(s) that appear most frequently. `"aabbbc"` → `"b"`
39. **[Easy]** Truncate a string to N chars and add "...". `("hello world", 5)` → `"hello..."`
40. **[Easy]** Count uppercase and lowercase letters. `"Hello World"` → `{ upper:2, lower:8 }`
41. **[Easy]** Reverse the words in a sentence (keep word order chars intact... actually reverse order). `"hello world"` → `"world hello"`
42. **[Medium]** Check if a string is a rotation of another. `("abcd","cdab")` → `true`
43. **[Medium]** Convert a string to title case, ignoring small words like "a", "the", "of".
44. **[Medium]** Find all the duplicate characters in a string. `"programming"` → `["r","g","m"]`
45. **[Medium]** Compress a string (run-length encoding). `"aaabbc"` → `"a3b2c1"`

---

## SECTION 3 — Objects / Maps / Sets (46–60)

46. **[Easy]** Count the frequency of items in an array using an object. `["a","b","a"]` → `{a:2,b:1}`
47. **[Easy]** Merge two objects. `({a:1},{b:2})` → `{a:1,b:2}`
48. **[Easy]** Get all the keys of an object as an array.
49. **[Easy]** Get all the values of an object as an array.
50. **[Easy]** Invert an object (swap keys and values). `{a:1,b:2}` → `{1:"a",2:"b"}`
51. **[Medium]** Find the key with the highest value. `{a:3,b:7,c:2}` → `"b"`
52. **[Easy]** Check if an object is empty. `{}` → `true`
53. **[Easy]** Sum all the numeric values in an object. `{a:1,b:2,c:3}` → `6`
54. **[Easy]** Remove a key from an object (return a new object without mutating).
55. **[Medium]** Group an array of objects by a property.
    `[{name:"A",age:20},{name:"B",age:20},{name:"C",age:30}]` grouped by age.
56. **[Easy]** Deduplicate an array using a Set. `[1,1,2,3,3]` → `[1,2,3]`
57. **[Medium]** Find common elements between two arrays using a Set.
58. **[Easy]** Count unique values in an array. `[1,2,2,3,3,3]` → `3`
59. **[Easy]** Convert an array of `[key, value]` pairs into an object.
    `[["a",1],["b",2]]` → `{a:1,b:2}`
60. **[Medium]** Given two objects, return the keys that differ in value.

---

## SECTION 4 — Math / Numbers (61–75)

61. **[Easy]** Check if a number is even or odd.
62. **[Medium]** Check if a number is prime. `7` → `true`, `8` → `false`
63. **[Easy]** Find the factorial of a number. `5` → `120`
64. **[Medium]** Print the Fibonacci sequence up to N terms. `5` → `[0,1,1,2,3]`
65. **[Easy]** Sum of digits of a number. `1234` → `10`
66. **[Easy]** Reverse the digits of a number. `1234` → `4321`
67. **[Easy]** Check if a number is a palindrome. `121` → `true`
68. **[Medium]** Find the GCD (greatest common divisor) of two numbers. `(12,18)` → `6`
69. **[Easy]** Convert Celsius to Fahrenheit and back.
70. **[Medium]** Find all prime numbers up to N. `10` → `[2,3,5,7]`
71. **[Easy]** Check if a number is a perfect square. `16` → `true`, `15` → `false`
72. **[Easy]** Count the number of digits in a number. `12345` → `5`
73. **[Easy]** Find the largest digit in a number. `2846` → `8`
74. **[Medium]** Check if a number is an Armstrong number. `153` → `true` (1³+5³+3³=153)
75. **[Easy]** Round a number to N decimal places. `(3.14159, 2)` → `3.14`

---

## SECTION 5 — Loops / Logic / Patterns (76–85)

76. **[Easy]** Print numbers 1 to N.
77. **[Easy]** Print the multiplication table of a number.
78. **[Easy]** FizzBuzz: 1 to N, "Fizz" for /3, "Buzz" for /5, "FizzBuzz" for both.
79. **[Easy]** Print a right-angled triangle of stars for N rows.
80. **[Easy]** Print numbers 1 to 100 but skip multiples of 7.
81. **[Easy]** Sum all even numbers between 1 and N.
82. **[Easy]** Count down from N to 1.
83. **[Easy]** Print the sum of the first N natural numbers (using a loop).
84. **[Medium]** Given a number N, print whether each number 1..N is prime.
85. **[Medium]** Print a pyramid pattern of stars for N rows.

---

## SECTION 6 — Functions / Recursion / Higher-Order (86–100)

86. **[Easy]** Write a function that returns the square of a number.
87. **[Easy]** Write a function that takes a callback and calls it 3 times.
88. **[Medium]** Implement your own version of `Array.map` (a function `myMap(arr, fn)`).
89. **[Medium]** Implement your own version of `Array.filter`.
90. **[Medium]** Implement your own version of `Array.reduce`.
91. **[Medium]** Sum an array **using recursion** (no loops).
92. **[Medium]** Reverse a string **using recursion**.
93. **[Medium]** Factorial **using recursion**.
94. **[Hard]** Flatten a nested array of any depth. `[1,[2,[3,[4]]]]` → `[1,2,3,4]`
95. **[Hard]** Write a `curry` function: `add(1)(2)(3)` → `6`.
96. **[Hard]** Write a `debounce` function (delay execution until N ms after the last call).
97. **[Hard]** Write a function that memoizes (caches) the results of a slow function.
98. **[Medium]** Count occurrences of a target in a nested array **using recursion**.
99. **[Hard]** Implement `Promise.all` behavior for an array of promises (basic version).
100. **[Hard]** Write an async function that fetches 3 things in sequence, then all 3 in parallel,
     and logs which is faster (simulate with `setTimeout`-based promises).

---

### Difficulty flow
- **1–60** → core fluency (arrays, strings, objects). Do these first.
- **61–85** → math & loops (great for logic and interview warmups like FizzBuzz).
- **86–100** → functions, recursion, higher-order & async (the bridge into real DSA).

When these feel easy, you're ready for **LeetCode Easy**. 🚀
