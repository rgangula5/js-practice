const PROBLEMS = [
  {
    "id": 1,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Sum all numbers in an array. `[1,2,3,4]` → `10`"
  },
  {
    "id": 2,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the maximum number in an array. `[3,7,2,9,4]` → `9`"
  },
  {
    "id": 3,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the minimum number in an array. `[3,7,2,9,4]` → `2`"
  },
  {
    "id": 4,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Calculate the average of an array. `[2,4,6]` → `4`"
  },
  {
    "id": 5,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Reverse an array **without** using `.reverse()`. `[1,2,3]` → `[3,2,1]`"
  },
  {
    "id": 6,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Count how many even numbers are in an array. `[1,2,3,4,5,6]` → `3`"
  },
  {
    "id": 7,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Filter out only the odd numbers. `[1,2,3,4,5]` → `[1,3,5]`"
  },
  {
    "id": 8,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Double every number in an array. `[1,2,3]` → `[2,4,6]`"
  },
  {
    "id": 9,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Remove duplicates from an array. `[1,2,2,3,3,3]` → `[1,2,3]`"
  },
  {
    "id": 10,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the second largest number. `[10,5,20,8]` → `10`"
  },
  {
    "id": 11,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Check if an array contains a given value (return true/false). `([1,2,3], 2)` → `true`"
  },
  {
    "id": 12,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Merge two arrays into one. `([1,2],[3,4])` → `[1,2,3,4]`"
  },
  {
    "id": 13,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the index of the first even number. `[1,3,4,7]` → `2`"
  },
  {
    "id": 14,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Count occurrences of a target value. `([1,2,2,3,2], 2)` → `3`"
  },
  {
    "id": 15,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Return a new array with each element squared. `[1,2,3]` → `[1,4,9]`"
  },
  {
    "id": 16,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the sum of only the positive numbers. `[-1,2,-3,4]` → `6`"
  },
  {
    "id": 17,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Flatten a 2D array into 1D. `[[1,2],[3,4]]` → `[1,2,3,4]`"
  },
  {
    "id": 18,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Rotate an array to the right by 1. `[1,2,3,4]` → `[4,1,2,3]`"
  },
  {
    "id": 19,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the intersection of two arrays (common values). `([1,2,3],[2,3,4])` → `[2,3]`"
  },
  {
    "id": 20,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Move all zeros to the end. `[0,1,0,3,12]` → `[1,3,12,0,0]`"
  },
  {
    "id": 21,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the product of all numbers. `[1,2,3,4]` → `24`"
  },
  {
    "id": 22,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Chunk an array into groups of N. `([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`"
  },
  {
    "id": 23,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Return the running/cumulative sum. `[1,2,3,4]` → `[1,3,6,10]`"
  },
  {
    "id": 24,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Find the difference between two arrays (in A but not in B). `([1,2,3,4],[2,4])` → `[1,3]`"
  },
  {
    "id": 25,
    "section": "SECTION 1 — Arrays (1–25)",
    "text": "Group array elements by even/odd. `[1,2,3,4]` → `{ even:[2,4], odd:[1,3] }`"
  },
  {
    "id": 26,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Reverse a string. `\"hello\"` → `\"olleh\"`"
  },
  {
    "id": 27,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Check if a string is a palindrome. `\"racecar\"` → `true`"
  },
  {
    "id": 28,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Count the vowels in a string. `\"hello\"` → `2`"
  },
  {
    "id": 29,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Capitalize the first letter of each word. `\"hello world\"` → `\"Hello World\"`"
  },
  {
    "id": 30,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Count occurrences of each character. `\"aabbc\"` → `{ a:2, b:2, c:1 }`"
  },
  {
    "id": 31,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Find the first non-repeating character. `\"aabbcdd\"` → `\"c\"`"
  },
  {
    "id": 32,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Check if two strings are anagrams. `(\"listen\",\"silent\")` → `true`"
  },
  {
    "id": 33,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Remove all whitespace from a string. `\"a b c\"` → `\"abc\"`"
  },
  {
    "id": 34,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Count words in a sentence. `\"the quick brown fox\"` → `4`"
  },
  {
    "id": 35,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Find the longest word in a sentence. `\"I love programming\"` → `\"programming\"`"
  },
  {
    "id": 36,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Replace all spaces with dashes. `\"hello world foo\"` → `\"hello-world-foo\"`"
  },
  {
    "id": 37,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Check if a string contains only digits. `\"12345\"` → `true`, `\"12a45\"` → `false`"
  },
  {
    "id": 38,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Return the character(s) that appear most frequently. `\"aabbbc\"` → `\"b\"`"
  },
  {
    "id": 39,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Truncate a string to N chars and add \"...\". `(\"hello world\", 5)` → `\"hello...\"`"
  },
  {
    "id": 40,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Count uppercase and lowercase letters. `\"Hello World\"` → `{ upper:2, lower:8 }`"
  },
  {
    "id": 41,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Reverse the words in a sentence (keep word order chars intact... actually reverse order). `\"hello world\"` → `\"world hello\"`"
  },
  {
    "id": 42,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Check if a string is a rotation of another. `(\"abcd\",\"cdab\")` → `true`"
  },
  {
    "id": 43,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Convert a string to title case, ignoring small words like \"a\", \"the\", \"of\"."
  },
  {
    "id": 44,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Find all the duplicate characters in a string. `\"programming\"` → `[\"r\",\"g\",\"m\"]`"
  },
  {
    "id": 45,
    "section": "SECTION 2 — Strings (26–45)",
    "text": "Compress a string (run-length encoding). `\"aaabbc\"` → `\"a3b2c1\"`"
  },
  {
    "id": 46,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Count the frequency of items in an array using an object. `[\"a\",\"b\",\"a\"]` → `{a:2,b:1}`"
  },
  {
    "id": 47,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Merge two objects. `({a:1},{b:2})` → `{a:1,b:2}`"
  },
  {
    "id": 48,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Get all the keys of an object as an array."
  },
  {
    "id": 49,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Get all the values of an object as an array."
  },
  {
    "id": 50,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Invert an object (swap keys and values). `{a:1,b:2}` → `{1:\"a\",2:\"b\"}`"
  },
  {
    "id": 51,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Find the key with the highest value. `{a:3,b:7,c:2}` → `\"b\"`"
  },
  {
    "id": 52,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Check if an object is empty. `{}` → `true`"
  },
  {
    "id": 53,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Sum all the numeric values in an object. `{a:1,b:2,c:3}` → `6`"
  },
  {
    "id": 54,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Remove a key from an object (return a new object without mutating)."
  },
  {
    "id": 55,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Group an array of objects by a property. `[{name:\"A\",age:20},{name:\"B\",age:20},{name:\"C\",age:30}]` grouped by age."
  },
  {
    "id": 56,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Deduplicate an array using a Set. `[1,1,2,3,3]` → `[1,2,3]`"
  },
  {
    "id": 57,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Find common elements between two arrays using a Set."
  },
  {
    "id": 58,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Count unique values in an array. `[1,2,2,3,3,3]` → `3`"
  },
  {
    "id": 59,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Convert an array of `[key, value]` pairs into an object. `[[\"a\",1],[\"b\",2]]` → `{a:1,b:2}`"
  },
  {
    "id": 60,
    "section": "SECTION 3 — Objects / Maps / Sets (46–60)",
    "text": "Given two objects, return the keys that differ in value."
  },
  {
    "id": 61,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Check if a number is even or odd."
  },
  {
    "id": 62,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Check if a number is prime. `7` → `true`, `8` → `false`"
  },
  {
    "id": 63,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Find the factorial of a number. `5` → `120`"
  },
  {
    "id": 64,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Print the Fibonacci sequence up to N terms. `5` → `[0,1,1,2,3]`"
  },
  {
    "id": 65,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Sum of digits of a number. `1234` → `10`"
  },
  {
    "id": 66,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Reverse the digits of a number. `1234` → `4321`"
  },
  {
    "id": 67,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Check if a number is a palindrome. `121` → `true`"
  },
  {
    "id": 68,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Find the GCD (greatest common divisor) of two numbers. `(12,18)` → `6`"
  },
  {
    "id": 69,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Convert Celsius to Fahrenheit and back."
  },
  {
    "id": 70,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Find all prime numbers up to N. `10` → `[2,3,5,7]`"
  },
  {
    "id": 71,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Check if a number is a perfect square. `16` → `true`, `15` → `false`"
  },
  {
    "id": 72,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Count the number of digits in a number. `12345` → `5`"
  },
  {
    "id": 73,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Find the largest digit in a number. `2846` → `8`"
  },
  {
    "id": 74,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Check if a number is an Armstrong number. `153` → `true` (1³+5³+3³=153)"
  },
  {
    "id": 75,
    "section": "SECTION 4 — Math / Numbers (61–75)",
    "text": "Round a number to N decimal places. `(3.14159, 2)` → `3.14`"
  },
  {
    "id": 76,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Print numbers 1 to N."
  },
  {
    "id": 77,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Print the multiplication table of a number."
  },
  {
    "id": 78,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "FizzBuzz: 1 to N, \"Fizz\" for /3, \"Buzz\" for /5, \"FizzBuzz\" for both."
  },
  {
    "id": 79,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Print a right-angled triangle of stars for N rows."
  },
  {
    "id": 80,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Print numbers 1 to 100 but skip multiples of 7."
  },
  {
    "id": 81,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Sum all even numbers between 1 and N."
  },
  {
    "id": 82,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Count down from N to 1."
  },
  {
    "id": 83,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Print the sum of the first N natural numbers (using a loop)."
  },
  {
    "id": 84,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Given a number N, print whether each number 1..N is prime."
  },
  {
    "id": 85,
    "section": "SECTION 5 — Loops / Logic / Patterns (76–85)",
    "text": "Print a pyramid pattern of stars for N rows."
  },
  {
    "id": 86,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Write a function that returns the square of a number."
  },
  {
    "id": 87,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Write a function that takes a callback and calls it 3 times."
  },
  {
    "id": 88,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Implement your own version of `Array.map` (a function `myMap(arr, fn)`)."
  },
  {
    "id": 89,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Implement your own version of `Array.filter`."
  },
  {
    "id": 90,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Implement your own version of `Array.reduce`."
  },
  {
    "id": 91,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Sum an array **using recursion** (no loops)."
  },
  {
    "id": 92,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Reverse a string **using recursion**."
  },
  {
    "id": 93,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Factorial **using recursion**."
  },
  {
    "id": 94,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Flatten a nested array of any depth. `[1,[2,[3,[4]]]]` → `[1,2,3,4]`"
  },
  {
    "id": 95,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Write a `curry` function: `add(1)(2)(3)` → `6`."
  },
  {
    "id": 96,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Write a `debounce` function (delay execution until N ms after the last call)."
  },
  {
    "id": 97,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Write a function that memoizes (caches) the results of a slow function."
  },
  {
    "id": 98,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Count occurrences of a target in a nested array **using recursion**."
  },
  {
    "id": 99,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Implement `Promise.all` behavior for an array of promises (basic version)."
  },
  {
    "id": 100,
    "section": "SECTION 6 — Functions / Recursion / Higher-Order (86–100)",
    "text": "Write an async function that fetches 3 things in sequence, then all 3 in parallel, and logs which is faster (simulate with `setTimeout`-based promises). - **1–60** → core fluency (arrays, strings, objects). Do these first. - **61–85** → math & loops (great for logic and interview warmups like FizzBuzz). - **86–100** → functions, recursion, higher-order & async (the bridge into real DSA). When these feel easy, you're ready for **LeetCode Easy**. 🚀"
  }
];
