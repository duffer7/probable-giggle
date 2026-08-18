# 📊 Count Response Time Regressions

Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

## 📖 Overview

The `countResponseTimeRegressions` function analyzes an array of positive integers representing response times.  
It counts how many elements are **strictly greater than the average of all previous elements**.  
The first element is skipped since it has no preceding values.

## 🧮 Algorithm

1. Initialize a counter `count = 0` and a running sum `sum = 0`.
2. Iterate through the array starting from index `1` (skip the first element).
3. For each element:
    - Compute the average of all previous elements: `avg = sum / i`.
    - If the current element is greater than `avg`, increment `count`.
    - Update the running sum by adding the current element.
4. Return the final `count`.

## ⏱️ Complexity

- **Time Complexity**: `O(n)` — each element is processed once.
- **Space Complexity**: `O(1)` — only a few variables are used.
