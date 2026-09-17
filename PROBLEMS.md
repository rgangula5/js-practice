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

1. Sum all numbers in an array. `[1,2,3,4]` → `10`
2. Find the maximum number in an array. `[3,7,2,9,4]` → `9`
3. Find the minimum number in an array. `[3,7,2,9,4]` → `2`
4. Calculate the average of an array. `[2,4,6]` → `4`
5. Reverse an array **without** using `.reverse()`. `[1,2,3]` → `[3,2,1]`
6. Count how many even numbers are in an array. `[1,2,3,4,5,6]` → `3`
7. Filter out only the odd numbers. `[1,2,3,4,5]` → `[1,3,5]`
8. Double every number in an array. `[1,2,3]` → `[2,4,6]`
9. Remove duplicates from an array. `[1,2,2,3,3,3]` → `[1,2,3]`
10. Find the second largest number. `[10,5,20,8]` → `10`
11. Check if an array contains a given value (return true/false). `([1,2,3], 2)` → `true`
12. Merge two arrays into one. `([1,2],[3,4])` → `[1,2,3,4]`
13. Find the index of the first even number. `[1,3,4,7]` → `2`
14. Count occurrences of a target value. `([1,2,2,3,2], 2)` → `3`
15. Return a new array with each element squared. `[1,2,3]` → `[1,4,9]`
16. Find the sum of only the positive numbers. `[-1,2,-3,4]` → `6`
17. Flatten a 2D array into 1D. `[[1,2],[3,4]]` → `[1,2,3,4]`
18. Rotate an array to the right by 1. `[1,2,3,4]` → `[4,1,2,3]`
19. Find the intersection of two arrays (common values). `([1,2,3],[2,3,4])` → `[2,3]`
20. Move all zeros to the end. `[0,1,0,3,12]` → `[1,3,12,0,0]`
21. Find the product of all numbers. `[1,2,3,4]` → `24`
22. Chunk an array into groups of N. `([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`
23. Return the running/cumulative sum. `[1,2,3,4]` → `[1,3,6,10]`
24. Find the difference between two arrays (in A but not in B). `([1,2,3,4],[2,4])` → `[1,3]`
25. Group array elements by even/odd. `[1,2,3,4]` → `{ even:[2,4], odd:[1,3] }`

---

## SECTION 2 — Strings (26–45)

26. Reverse a string. `"hello"` → `"olleh"`
27. Check if a string is a palindrome. `"racecar"` → `true`
28. Count the vowels in a string. `"hello"` → `2`
29. Capitalize the first letter of each word. `"hello world"` → `"Hello World"`
30. Count occurrences of each character. `"aabbc"` → `{ a:2, b:2, c:1 }`
31. Find the first non-repeating character. `"aabbcdd"` → `"c"`
32. Check if two strings are anagrams. `("listen","silent")` → `true`
33. Remove all whitespace from a string. `"a b c"` → `"abc"`
34. Count words in a sentence. `"the quick brown fox"` → `4`
35. Find the longest word in a sentence. `"I love programming"` → `"programming"`
36. Replace all spaces with dashes. `"hello world foo"` → `"hello-world-foo"`
37. Check if a string contains only digits. `"12345"` → `true`, `"12a45"` → `false`
38. Return the character(s) that appear most frequently. `"aabbbc"` → `"b"`
39. Truncate a string to N chars and add "...". `("hello world", 5)` → `"hello..."`
40. Count uppercase and lowercase letters. `"Hello World"` → `{ upper:2, lower:8 }`
41. Reverse the words in a sentence (keep word order chars intact... actually reverse order). `"hello world"` → `"world hello"`
42. Check if a string is a rotation of another. `("abcd","cdab")` → `true`
43. Convert a string to title case, ignoring small words like "a", "the", "of".
44. Find all the duplicate characters in a string. `"programming"` → `["r","g","m"]`
45. Compress a string (run-length encoding). `"aaabbc"` → `"a3b2c1"`

---

## SECTION 3 — Objects / Maps / Sets (46–60)

46. Count the frequency of items in an array using an object. `["a","b","a"]` → `{a:2,b:1}`
47. Merge two objects. `({a:1},{b:2})` → `{a:1,b:2}`
48. Get all the keys of an object as an array.
49. Get all the values of an object as an array.
50. Invert an object (swap keys and values). `{a:1,b:2}` → `{1:"a",2:"b"}`
51. Find the key with the highest value. `{a:3,b:7,c:2}` → `"b"`
52. Check if an object is empty. `{}` → `true`
53. Sum all the numeric values in an object. `{a:1,b:2,c:3}` → `6`
54. Remove a key from an object (return a new object without mutating).
55. Group an array of objects by a property.
    `[{name:"A",age:20},{name:"B",age:20},{name:"C",age:30}]` grouped by age.
56. Deduplicate an array using a Set. `[1,1,2,3,3]` → `[1,2,3]`
57. Find common elements between two arrays using a Set.
58. Count unique values in an array. `[1,2,2,3,3,3]` → `3`
59. Convert an array of `[key, value]` pairs into an object.
    `[["a",1],["b",2]]` → `{a:1,b:2}`
60. Given two objects, return the keys that differ in value.

---

## SECTION 4 — Math / Numbers (61–75)

61. Check if a number is even or odd.
62. Check if a number is prime. `7` → `true`, `8` → `false`
63. Find the factorial of a number. `5` → `120`
64. Print the Fibonacci sequence up to N terms. `5` → `[0,1,1,2,3]`
65. Sum of digits of a number. `1234` → `10`
66. Reverse the digits of a number. `1234` → `4321`
67. Check if a number is a palindrome. `121` → `true`
68. Find the GCD (greatest common divisor) of two numbers. `(12,18)` → `6`
69. Convert Celsius to Fahrenheit and back.
70. Find all prime numbers up to N. `10` → `[2,3,5,7]`
71. Check if a number is a perfect square. `16` → `true`, `15` → `false`
72. Count the number of digits in a number. `12345` → `5`
73. Find the largest digit in a number. `2846` → `8`
74. Check if a number is an Armstrong number. `153` → `true` (1³+5³+3³=153)
75. Round a number to N decimal places. `(3.14159, 2)` → `3.14`

---

## SECTION 5 — Loops / Logic / Patterns (76–85)

76. Print numbers 1 to N.
77. Print the multiplication table of a number.
78. FizzBuzz: 1 to N, "Fizz" for /3, "Buzz" for /5, "FizzBuzz" for both.
79. Print a right-angled triangle of stars for N rows.
80. Print numbers 1 to 100 but skip multiples of 7.
81. Sum all even numbers between 1 and N.
82. Count down from N to 1.
83. Print the sum of the first N natural numbers (using a loop).
84. Given a number N, print whether each number 1..N is prime.
85. Print a pyramid pattern of stars for N rows.

---

## SECTION 6 — Functions / Recursion / Higher-Order (86–100)

86. Write a function that returns the square of a number.
87. Write a function that takes a callback and calls it 3 times.
88. Implement your own version of `Array.map` (a function `myMap(arr, fn)`).
89. Implement your own version of `Array.filter`.
90. Implement your own version of `Array.reduce`.
91. Sum an array **using recursion** (no loops).
92. Reverse a string **using recursion**.
93. Factorial **using recursion**.
94. Flatten a nested array of any depth. `[1,[2,[3,[4]]]]` → `[1,2,3,4]`
95. Write a `curry` function: `add(1)(2)(3)` → `6`.
96. Write a `debounce` function (delay execution until N ms after the last call).
97. Write a function that memoizes (caches) the results of a slow function.
98. Count occurrences of a target in a nested array **using recursion**.
99. Implement `Promise.all` behavior for an array of promises (basic version).
100. Write an async function that fetches 3 things in sequence, then all 3 in parallel,
     and logs which is faster (simulate with `setTimeout`-based promises).

---

### Difficulty flow
- **1–60** → core fluency (arrays, strings, objects). Do these first.
- **61–85** → math & loops (great for logic and interview warmups like FizzBuzz).
- **86–100** → functions, recursion, higher-order & async (the bridge into real DSA).

When these feel easy, you're ready for **LeetCode Easy**. 🚀
