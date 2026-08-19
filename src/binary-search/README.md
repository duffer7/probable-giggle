# Binary Search Algorithm

A TypeScript implementation of the **Binary Search** algorithm, an efficient search technique that finds the position of a target value within a **sorted array** in logarithmic time.

## ⚡ Complexity Analysis

### Time Complexity

- **Best Case:** $O(1)$  
  Occurs when the `target` element is located right at the middle index on the very first check.

- **Average Case:** $O(\log N)$  
  On each iteration, the search space is halved, leading to logarithmic search time.

- **Worst Case:** $O(\log N)$  
  Occurs when the `target` is located at the outer edges of the array or does not exist at all.

#### Why $O(\log N)$?

After $k$ iterations, the size of the remaining search interval is $\frac{N}{2^k}$.  
The loop terminates when the interval size shrinks to 1:

$$\frac{N}{2^k} = 1 \implies 2^k = N \implies k = \log_2 N$$

- **Comparison Example:**  
  For an array of **1,000,000 elements**:
    - **Linear Search ($O(N)$):** Up to **1,000,000** operations.
    - **Binary Search ($O(\log N)$):** At most **20** operations ($\log_2(1,000,000) \approx 19.93$).

### Space Complexity

- **Iterative Approach:** $O(1)$  
  Operates strictly in-place. It requires a constant amount of extra memory to maintain pointer variables (`left`, `right`, `mid`).

- **Recursive Approach:** $O(\log N)$  
  If implemented recursively, it consumes memory on the call stack proportional to the maximum recursion depth ($\log N$).

### Summary Table

| Metric              | Complexity      | Description                                            |
| :------------------ | :-------------- | :----------------------------------------------------- |
| **Time Complexity** | **$O(\log N)$** | Halves the remaining search range in every step.       |
| **Auxiliary Space** | **$O(1)$**      | Uses constant extra memory (iterative implementation). |
| **Prerequisite**    | **Sorted Data** | The input array must be sorted prior to searching.     |

## 📌 Problem Description

Given a **sorted array** of numbers and a `target` value, return the zero-based index of the `target` if it exists in the array. If the `target` is not present, return `-1`.

### Examples

- **Input:** `arr = [1, 3, 5, 7, 9, 11]`, `target = 7` $\rightarrow$ **Output:** `3`
- **Input:** `arr = [1, 3, 5, 7, 9, 11]`, `target = 2` $\rightarrow$ **Output:** `-1`

## 🛠️ How It Works (Divide and Conquer)

Binary Search works by repeatedly dividing the search interval in half:

1. **Initialize Pointers:** Set `left = 0` and `right = array.length - 1`.
2. **Calculate Middle Index:** Compute `mid = Math.floor(left + (right - left) / 2)`.
3. **Compare:**
    - If `arr[mid] === target`: Return `mid` (Element found).
    - If `arr[mid] < target`: The target lies in the right half. Move `left = mid + 1`.
    - If `arr[mid] > target`: The target lies in the left half. Move `right = mid - 1`.
4. **Repeat:** Continue until `left > right`. If the interval closes without finding the element, return `-1`.
