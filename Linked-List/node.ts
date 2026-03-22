/**
 * @file node.ts
 * @description A single node in a singly linked list.
 *
 * ─────────────────────────────────────────────────────────────────
 *  What is a Node?
 * ─────────────────────────────────────────────────────────────────
 *  In an array, elements sit side-by-side in consecutive memory slots.
 *  In a linked list, data is scattered anywhere in memory. To keep
 *  everything connected, we wrap each piece of data in a small container
 *  called a **Node**. Every node holds two things:
 *
 *    1. value  — the actual data (a number in this case)
 *    2. next   — a pointer / reference to the next node in the chain
 *
 *  Visual representation of a single node:
 *
 *   ┌─────────┬──────────┐
 *   │  value  │  next  ──┼──► (next Node, or null if this is the last one)
 *   └─────────┴──────────┘
 *
 *  When `next` is `null`, the node is the last node in the list (the tail).
 */

/**
 * Represents a single element (node) in a singly linked list.
 *
 * @example
 * const a = new Node(10);
 * const b = new Node(20);
 * a.setNext(b);
 *
 * console.log(a.getValue()); // 10
 * console.log(a.getNext()?.getValue()); // 20
 * console.log(b.getNext()); // null  ← b is the tail
 */
export class Node {

    /**
     * Creates a new Node.
     *
     * @param value - The numeric data this node will store.
     * @param next  - An optional reference to the next node in the list.
     *               Defaults to `null`, meaning the node starts as an isolated tail.
     */
    constructor(
        private value: number,
        private next: Node | null = null
    ) {}

    /**
     * Returns the value stored inside this node.
     *
     * Time Complexity: O(1)
     *
     * @returns The numeric value of this node.
     */
    getValue(): number {
        return this.value;
    }

    /**
     * Overwrites the value stored inside this node.
     *
     * Time Complexity: O(1)
     *
     * @param value - The new numeric value to store.
     */
    setValue(value: number): void {
        this.value = value;
    }

    /**
     * Returns the reference to the next node in the list.
     *
     * If this returns `null`, the current node is the last one (the tail).
     *
     * Time Complexity: O(1)
     *
     * @returns The next `Node`, or `null` if there is no successor.
     */
    getNext(): Node | null {
        return this.next;
    }

    /**
     * Updates the `next` pointer to link this node to another node.
     *
     * This is used internally by `LinkedList` when inserting, removing,
     * or rearranging nodes. Passing `null` marks this node as the tail.
     *
     * Time Complexity: O(1)
     *
     * @param node - The node to link as the successor, or `null` to detach.
     */
    setNext(node: Node | null): void {
        this.next = node;
    }
}