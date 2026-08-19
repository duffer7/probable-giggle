# Find Smallest Missing Positive Integer

A TypeScript implementation of an optimal algorithm to find the **smallest missing positive integer** (starting from `1`) in an unsorted array of numbers.

### Time Complexity: $O(N)$

- **Worst-case:** $O(N)$
- **Average-case:** $O(N)$
- **Best-case:** $O(N)$

#### Why $O(N)$ when the `while` loop doesn't always increment `index`?

While the `while` loop lacks an explicit `index++` on swaps, the overall complexity remains strictly linear:

1. **Bounded Swaps:** Every successful swap places at least one number into its permanent, correct position ($item \rightarrow targetIndex$). An array of size $N$ can undergo at most $N$ swaps.
2. **Bounded Pointer Increments:** The `index` pointer only advances when an element is either already in its correct slot or falls outside the valid range ($item \le 0$ or $item > N$). It moves from $0$ to $N$ exactly once.

The total number of `while` iterations is capped at **$2N$** ($N$ swaps + $N$ increments). The subsequent `for` loop takes **$N$** iterations.  
Total operations $\approx 3N$, which simplifies to **$O(N)$**.

### Space Complexity: $O(1)$

- **Auxiliary Space:** $O(1)$
- **Total Space:** $O(1)$ _(excluding the input array)_

The algorithm operates **in-place** by mutating the input array (`orderNumbers`). It allocates only a few primitive variables (`index`, `item`, `targetIndex`, `oldEl`, `i`), requiring $O(1)$ additional memory regardless of the input size $N$.

## 📌 Problem Description

Given an array of integers `orderNumbers`, find the smallest positive integer that is not present in the array.

Under ideal conditions, positive numbers $1, 2, 3, \dots, N$ should occupy indices $0, 1, 2, \dots, N-1$ respectively.

### Examples

- **Input:** `[3, 4, -1, 1]` $\rightarrow$ **Output:** `2`
- **Input:** `[1, 2, 0]` $\rightarrow$ **Output:** `3`
- **Input:** `[7, 8, 9, 11, 12]` $\rightarrow$ **Output:** `1`

---

## 🛠️ How Algorithm Works (Cyclic Sort)

The algorithm attempts to place each positive integer $X$ at its "correct" index, which is $X - 1$.

1. **In-place Swapping (`while` loop):**
    - Iterate through the array using a pointer `index`.
    - For the current value `item`, calculate its intended position: `targetIndex = item - 1`.
    - If `item > 0`, is not already at its correct position (`item !== index + 1`), and the element at `targetIndex` is not a duplicate (`item !== orderNumbers[targetIndex]`), **swap** them.
    - Do **not** increment `index` on a successful swap so that the newly swapped element at `index` can be evaluated immediately.
    - If no swap condition is met, advance `index++`.

2. **First Discrepancy Search (`for` loop):**
    - Traverse the array after rearranging.
    - The first index `i` where `orderNumbers[i] !== i + 1` identifies the missing positive number `i + 1`.

3. **Edge Cases:**
    - If all numbers from $1$ to $N$ are present in their proper slots, the smallest missing positive integer is $N + 1$.
    - An empty array returns `1`.
