# Maximum Number of Non-Overlapping Intervals (Interval Scheduling)

A TypeScript solution for the classic Interval Scheduling Problem using a Greedy Algorithm approach.

## 📊 Complexity Summary

| Metric               | Complexity        | Description                                                          |
| :------------------- | :---------------- | :------------------------------------------------------------------- |
| **Time Complexity**  | **$O(N \log N)$** | Dominated by array sorting ($N$ is the number of intervals)          |
| **Space Complexity** | **$O(N)$**        | Required for creating an array copy (or $O(1)$ if mutating in-place) |

---

## 📌 Problem Description

Given an array of intervals `meetings` where each interval is represented as `[start, end]`, return the **maximum number of non-overlapping intervals**.

> **Note:** Intervals are considered non-overlapping if the end time of one interval is less than or equal to the start time of the next (`start >= lastEnd`).

---

## 🚀 Implementation

```typescript
function maximizeNonOverlappingMeetings(meetings: number[][]): number {
    if (meetings.length === 0) return 0;

    // Sort intervals by their end time in ascending order
    const sorted = [...meetings].sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = -Infinity;

    for (let i = 0; i < sorted.length; i++) {
        const [start, end] = sorted[i];

        // If current interval starts at or after the previous one ends
        if (start >= lastEnd) {
            count++;
            lastEnd = end;
        }
    }

    return count;
}
```
