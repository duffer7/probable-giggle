# Non-Trivial String Rotation Checker

TypeScript implementations to check if a string `s2` is a **non-trivial (non-identical) rotation** of another string `s1`.

A string `s2` is considered a non-trivial rotation of `s1` if:

1. `s2` can be formed by shifting `s1` cyclically.
2. `s1` and `s2` are **not identical** (`s1 !== s2`).

---

## 📌 Problem Description

Given two strings `s1` and `s2`, determine whether `s2` is a valid cyclic shift of `s1` without being identical to `s1`.

## ⚡ Complexity Analysis

### Comparison Table

| Metric               | Iterative (`isNonTrivialRotation`) | Doubled String (`isNonTrivialRotation1`) |
| :------------------- | :--------------------------------- | :--------------------------------------- |
| **Time Complexity**  | **$O(N^2)$**                       | **$O(N)$**                               |
| **Space Complexity** | **$O(N)$**                         | **$O(N)$**                               |
| **Best Case Time**   | $O(1)$                             | $O(1)$                                   |
| **Recommendation**   | Not Recommended                    | **Recommended**                          |
