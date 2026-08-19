# Min-Tracking Stack (MinStack)

A custom Stack implementation in TypeScript that supports `push`, `pop`, `top`, and `getMin` operations in **$O(1)$ constant time**.

## 📊 Complexity Summary

| Operation       | Time Complexity | Space Complexity | Description                                        |
| :-------------- | :-------------- | :--------------- | :------------------------------------------------- |
| **`push(val)`** | **$O(1)$**      | $O(1)$           | Adds element to the stack and updates min tracking |
| **`pop()`**     | **$O(1)$**      | $O(1)$           | Removes top element from the stack                 |
| **`top()`**     | **$O(1)$**      | $O(1)$           | Returns top element without removing it            |
| **`getMin()`**  | **$O(1)$**      | $O(1)$           | Returns current minimum element                    |

- **Overall Auxiliary Space Complexity:** **$O(N)$** to store stack elements.

## 📌 Problem Statement

Design a stack that supports retrieving the minimum element in constant time $O(1)$.

Standard stack operations (`push`, `pop`, `top`) natively run in $O(1)$ time. However, finding the minimum element in a standard stack typically takes $O(N)$ time by iterating through all elements. The challenge is to maintain $O(1)$ efficiency for `getMin` without slowing down other operations.
