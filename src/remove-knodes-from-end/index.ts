class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head: SinglyLinkedListNode, k: number): SinglyLinkedListNode {
    if (!head || k <= 0) return head;

    const dummy = new SinglyLinkedListNode(0);
    dummy.next = head;

    let fast: SinglyLinkedListNode | null = dummy;
    let slow: SinglyLinkedListNode | null = dummy;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
        if (!fast) {
            return head;
        }
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next!;
    }

    slow.next = slow.next!.next;

    return dummy.next;
}
