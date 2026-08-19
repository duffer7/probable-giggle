# Find First and Last Occurrence (Binary Search)

TypeScript implementations to find the **first** and **last** index of a target element in a **sorted array with duplicates** using Binary Search.

## ⚡ Complexity Analysis

### Time Complexity

- **Best Case:** $O(1)$  
  Occurs when the middle element matches the `target` on the first iteration and search bounds collapse immediately.

- **Average Case:** $O(\log N)$  
  The search space is halved on each step, running in standard logarithmic time.

- **Worst Case:** $O(\log N)$  
  Even after finding a matching element, the loop continues halving the array until `left > right` to guarantee finding the boundary (first/last) occurrence.

### Space Complexity

- **Auxiliary Space:** $O(1)$  
  Operates strictly in-place using constant extra memory for scalar variables (`left`, `right`, `mid`, `result`).

### Summary Table

| Metric              | Complexity      | Description                                                         |
| :------------------ | :-------------- | :------------------------------------------------------------------ |
| **Time Complexity** | **$O(\log N)$** | Logarithmic execution time by continually halving the search space. |
| **Auxiliary Space** | **$O(1)$**      | Constant extra memory usage (Iterative implementation).             |
| **Prerequisite**    | **Sorted Data** | The input array must be sorted prior to execution.                  |

## 📌 Problem Description

Given a sorted array of integers that may contain repeated numbers, find:

1. The **first occurrence** (leftmost index) of a `target` value.
2. The **last occurrence** (rightmost index) of a `target` value.

If the element is not present in the array, return `-1`.

### Examples

- **Array:** `[1, 2, 4, 4, 4, 5, 6]`, `target = 4`
    - **First Occurrence Index:** `2`
    - **Last Occurrence Index:** `4`
- **Array:** `[1, 2, 4, 4, 4, 5, 6]`, `target = 3`
    - **Output:** `-1` (Element not found)
