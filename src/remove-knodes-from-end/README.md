# One-Pass Removal of $k$-th Node from End

A TypeScript solution to remove the $k$-th node from the end of a singly linked list in a **single traversal ($O(N)$ time)** with **$O(1)$ auxiliary space**.

## 📊 Complexity Summary

| Metric               | Complexity | Description                                                |
| :------------------- | :--------- | :--------------------------------------------------------- |
| **Time Complexity**  | **$O(N)$** | Traverses the linked list in a single pass of $N$ nodes    |
| **Space Complexity** | **$O(1)$** | Uses two pointer variables without extra memory allocation |

---

## 📌 Problem Statement

Given the head of a singly linked list and an integer $k$, remove the $k$-th node from the end of the list in one traversal and return the updated head.

- If $k$ is invalid (e.g., $k \le 0$ or $k$ is greater than the list length), return the original list.

---

## 🚀 Implementation

```typescript
/*
 * SinglyLinkedListNode definition:
 * class SinglyLinkedListNode {
 *     data: number;
 *     next: SinglyLinkedListNode | null;
 * }
 */

function removeKthNodeFromEnd(
    head: SinglyLinkedListNode | null,
    k: number,
): SinglyLinkedListNode | null {
    // Edge case: invalid k or empty list
    if (!head || k <= 0) return head;

    // Use a dummy node to easily handle edge cases (e.g., removing the head node)
    const dummy = new SinglyLinkedListNode(0);
    dummy.next = head;

    let fast: SinglyLinkedListNode | null = dummy;
    let slow: SinglyLinkedListNode | null = dummy;

    // Advance fast pointer by k steps to create a gap of size k
    for (let i = 0; i < k; i++) {
        fast = fast.next;
        // If k exceeds the length of the list, return original head
        if (!fast) {
            return head;
        }
    }

    // Move both pointers simultaneously until fast reaches the last node
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next!;
    }

    // Bypass/unlink the target node
    slow.next = slow.next!.next;

    return dummy.next;
}
```
