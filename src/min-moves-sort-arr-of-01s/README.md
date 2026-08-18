# MinMoves Algorithm Approaches

## 📌 Linear Counting Approach

The **linear counting** method calculates the minimum number of adjacent swaps by scanning the array twice:

- **Zeros on the left**: For each `0`, count how many `1`s appeared before it.
- **Ones on the left**: For each `1`, count how many `0`s appeared before it.
- The minimum of these two totals is the answer.

**Complexity**:

- Time: `O(n)` (single pass for each strategy)
- Space: `O(1)` (constant memory usage)

This approach is optimal for large arrays and very straightforward to implement.

---

## 📌 Position Summation Approach

The **position summation** method compares the actual positions of elements with their ideal positions in a sorted array:

- Collect indices of all `0`s and all `1`s.
- If zeros should be on the left, compare each zero’s current index with its target index (`0, 1, 2, ...`).
- If ones should be on the left, compare each one’s current index with its target index.
- The sum of differences gives the number of swaps needed.
- The minimum of the two sums is the final result.

**Complexity**:

- Time: `O(n)` (single pass to collect indices, then summation)
- Space: `O(n)` (storing indices)

This approach is intuitive and makes the swap calculation explicit by aligning positions.

---

## 📊 Comparison

| Approach               | Time Complexity | Space Complexity | Notes                                   |
| ---------------------- | --------------- | ---------------- | --------------------------------------- |
| **Linear Counting**    | O(n)            | O(1)             | Fastest and simplest implementation     |
| **Position Summation** | O(n)            | O(n)             | More intuitive, explicit position check |
