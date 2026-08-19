# Cycle Sort Algorithm

A TypeScript implementation of the **Cycle Sort** algorithm. Cycle Sort is an in-place, non-stable sorting algorithm that is theoretically optimal in terms of the total number of memory writes.

---

## 📌 Description

Cycle Sort is based on the idea that the array to be sorted can be divided into cycles. Each element is placed into its correct position by counting how many elements are smaller than it in the array.

### Key Feature

Unlike algorithms like QuickSort or MergeSort, Cycle Sort performs **at most $O(N)$ memory writes**. Each element is written to its final destination **at most once** (if it's not already in place).

---

## 🛠️ How It Works

1. **Find Cycle Start (`cycle_start`):** Iterate through the array from `0` to `n - 2`.
2. **Find Correct Position (`pos`):** Count how many elements after `cycle_start` are smaller than the current `item`.
3. **Handle Duplicates:** If the element at `arr[pos]` is equal to `item`, increment `pos` to place duplicate values side-by-side.
4. **Swap Element:**
    - Place `item` into its correct slot `arr[pos]`.
    - The element previously residing at `arr[pos]` becomes the new `item`.
5. **Rotate Cycle:** Repeat the process for the displaced `item` until the element that originated from `cycle_start` returns back to `cycle_start`, closing the loop.

## ⚡ Complexity Analysis

### Time Complexity

- **Worst-Case:** $O(N^2)$
- **Average-Case:** $O(N^2)$
- **Best-Case:** $O(N^2)$

#### Why is Time Complexity always $O(N^2)$?

For every element in the array, the algorithm scans all remaining elements to calculate its correct index by counting how many elements are smaller than it. Even if the array is already sorted, these linear index-counting scans are executed for each element, leading to $O(N^2)$ comparison operations in all cases.

---

### Space Complexity: $O(1)$

- **Auxiliary Space:** $O(1)$
- **Total Space:** $O(1)$ _(in-place)_

The algorithm is strictly **in-place**. It modifies the input array directly and only uses a few primitive variables (`cycle_start`, `item`, `pos`, `temp`, `i`), requiring constant extra memory regardless of the array size.

---

### 💾 Memory Writes Complexity: $O(N)$

- **Max Memory Writes:** At most $N - 1$ writes

This is the key advantage of **Cycle Sort**. While other comparison-based sorting algorithms (like QuickSort or BubbleSort) perform $O(N \log N)$ or $O(N^2)$ memory writes, Cycle Sort places each element into its correct final position with **at most 1 write operation** (if the element is not already in place).

---

### Summary Table

| Metric              | Complexity   | Description                                                    |
| :------------------ | :----------- | :------------------------------------------------------------- |
| **Time Complexity** | **$O(N^2)$** | Requires $O(N)$ comparison loops for each of the $N$ elements. |
| **Auxiliary Space** | **$O(1)$**   | Modifies the array in-place without auxiliary data structures. |
| **Memory Writes**   | **$O(N)$**   | Optimal number of writes (at most $N - 1$ swaps total).        |
| **Stability**       | **Unstable** | Does not preserve the relative order of duplicate keys.        |
