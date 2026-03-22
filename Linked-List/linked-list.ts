/**
 * @file linked-list.ts
 * @description A singly linked list implementation in TypeScript.
 *
 * ─────────────────────────────────────────────────────────────────
 *  What is a Linked List?
 * ─────────────────────────────────────────────────────────────────
 *  A linked list is a linear data structure where elements (nodes) are
 *  NOT stored in contiguous memory like an array. Instead, every node
 *  holds its own data AND a pointer to the next node, forming a chain.
 *
 *  Visualising a list that holds [10 → 20 → 30]:
 *
 *   head                                   tail
 *    │                                       │
 *    ▼                                       ▼
 *   ┌────┬────┐     ┌────┬────┐     ┌────┬──────┐
 *   │ 10 │  ──┼────►│ 20 │  ──┼────►│ 30 │ null │
 *   └────┴────┘     └────┴────┘     └────┴──────┘
 *
 * ─────────────────────────────────────────────────────────────────
 *  Linked List vs Array — when to use which
 * ─────────────────────────────────────────────────────────────────
 *  │ Operation          │ Array  │ Singly Linked List │
 *  │────────────────────│────────│────────────────────│
 *  │ Access by index    │ O(1)   │ O(n)               │
 *  │ Insert at front    │ O(n)   │ O(1)  ← advantage  │
 *  │ Insert at back     │ O(1)*  │ O(1)  ← advantage  │
 *  │ Remove from front  │ O(n)   │ O(1)  ← advantage  │
 *  │ Remove from back   │ O(1)*  │ O(n)  ← disadvantage│
 *  │ Insert in middle   │ O(n)   │ O(n)               │
 *  (* amortised for dynamic arrays)
 *
 *  Use a linked list when need of frequent insertions/deletions at
 *  the head and do NOT need random index access.
 *
 * ─────────────────────────────────────────────────────────────────
 *  Key Terminology
 * ─────────────────────────────────────────────────────────────────
 *  head   — The very first node. Entry point for every traversal.
 *  tail   — The very last node. Its `next` is always `null`.
 *  length — How many nodes are currently in the list.
 */

import { Node } from "./node";

/**
 * A singly linked list that stores numeric values inside `Node` objects.
 *
 * This implementation maintains explicit `head` and `tail` pointers so that
 * both appending (`push`) and prepending (`unshift`) run in O(1). Removing
 * from the tail (`pop`) is O(n) because a singly linked list has no
 * back-pointer — we must walk the chain to find the second-to-last node.
 *
 * ─── Supported operations ────────────────────────────────────────
 *  push(node)           — Append a node to the end            O(1)
 *  pop()                — Remove & return the last node       O(n)
 *  unshift(node)        — Prepend a node to the front         O(1)
 *  shift()              — Remove & return the first node      O(1)
 *  getNodeAt(index)     — Read a node by position             O(n)
 *  setNodeAt(index, node) — Replace a node at a position      O(n)
 *  getLength()          — How many nodes exist                O(1)
 *  toArray()            — Export values as a plain array      O(n)
 *  print()              — Log the list visually to console    O(n)
 * ─────────────────────────────────────────────────────────────────
 */
export class LinkedList {

    /** The first node in the list. `null` when the list is empty. */
    private head: Node | null = null;

    /** The last node in the list. `null` when the list is empty. */
    private tail: Node | null = null;

    /**
     * The number of nodes currently in the list.
     * Kept in sync by every insertion and removal so that `getLength()` is O(1).
     */
    private length: number = 0;

    /**
     * Creates a new LinkedList.
     *
     * If `value` is provided the list starts with a single node containing
     * that value (both `head` and `tail` point to it). Otherwise the list
     * starts empty.
     *
     * @param value - Optional seed value for the first node.
     *
     * @example
     * const list = new LinkedList(10);  // [10]
     * const empty = new LinkedList();   // []
     */
    constructor(value?: number) {
        if (value !== undefined) {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }

    // ─────────────────────────────────────────────────────────────
    //  Insertion Methods
    // ─────────────────────────────────────────────────────────────

    /**
     * Appends `node` to the **end** of the list (tail insertion).
     *
     * Because we keep a direct `tail` reference, no traversal is needed.
     *
     * Time Complexity:  O(1)
     * Space Complexity: O(1)
     *
     *   Before:  head → [10] → [20] → null           (tail = 20)
     *   push([30])
     *   After:   head → [10] → [20] → [30] → null    (tail = 30)
     *
     * @param node - The node to append.
     */
    push(node: Node): void {
        if (!this.head) {
            // Empty list — the new node becomes both head and tail.
            this.head = node;
            this.tail = node;
        } else {
            // Wire the current tail to the new node, then advance tail.
            this.tail!.setNext(node);
            this.tail = node;
        }
        this.length++;
    }

    /**
     * Prepends `node` to the **beginning** of the list (head insertion).
     *
     * Time Complexity:  O(1)
     * Space Complexity: O(1)
     *
     *   Before:  head → [10] → [20] → null
     *   unshift([5])
     *   After:   head → [5] → [10] → [20] → null
     *
     * @param node - The node to prepend.
     */
    unshift(node: Node): void {
        if (!this.head) {
            // Empty list — the new node becomes both head and tail.
            this.head = node;
            this.tail = node;
        } else {
            // Point the new node at the current head, then make it the new head.
            node.setNext(this.head);
            this.head = node;
        }
        this.length++;
    }

    // ─────────────────────────────────────────────────────────────
    //  Removal Methods
    // ─────────────────────────────────────────────────────────────

    /**
     * Removes and returns the **last** node (tail removal).
     *
     * Because this is a *singly* linked list there is no back-pointer, so
     * we traverse from `head` to find and promote the second-to-last node
     * as the new tail. This makes `pop` linear rather than constant time.
     *
     * Time Complexity:  O(n) — traversal required to find the new tail.
     * Space Complexity: O(1)
     *
     *   Before:  head → [10] → [20] → [30] → null
     *   pop()  → returns Node(30)
     *   After:   head → [10] → [20] → null           (tail = 20)
     *
     * @returns The removed tail node, or `null` if the list is empty.
     */
    pop(): Node | null {
        if (!this.head) return null;

        // Single-element list — removing the only node empties the list entirely.
        if (this.head === this.tail) {
            const popped = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return popped;
        }

        const popped = this.tail!;
        const newTail = this.getNodeAt(this.length - 2)!;
        newTail.setNext(null); // sever the link so the removed node is isolated
        this.tail = newTail;
        this.length--;
        return popped;
    }

    /**
     * Removes and returns the **first** node (head removal).
     *
     * We simply advance `head` to the next node — no traversal needed.
     *
     * Time Complexity:  O(1)
     * Space Complexity: O(1)
     *
     *   Before:  head → [10] → [20] → [30] → null
     *   shift() → returns Node(10)
     *   After:   head → [20] → [30] → null
     *
     * @returns The removed head node, or `null` if the list is empty.
     */
    shift(): Node | null {
        if (!this.head) return null;

        const shifted = this.head;

        // Advance head to the next node (or null if the list had one element).
        this.head = this.head.getNext();

        // Sever the removed node's forward link so it holds no references to the list.
        shifted.setNext(null);
        this.length--;

        // If the list is now empty, clear the stale tail pointer.
        if (this.length === 0) {
            this.tail = null;
        }

        return shifted;
    }

    // ─────────────────────────────────────────────────────────────
    //  Access & Update Methods
    // ─────────────────────────────────────────────────────────────

    /**
     * Returns the number of nodes currently in the list.
     *
     * `length` is maintained by every mutation, so this is a direct lookup.
     *
     * Time Complexity:  O(1)
     * Space Complexity: O(1)
     *
     * @returns The current node count.
     */
    getLength(): number {
        return this.length;
    }

    /**
     * Retrieves (but does NOT remove) the node at the given zero-based `index`.
     *
     * Traversal always starts from `head`, so accessing the last element costs
     * as much as accessing every element before it.
     *
     * Time Complexity:  O(n)
     * Space Complexity: O(1)
     *
     * @param index - Zero-based position (0 = head, length-1 = tail).
     * @returns The node at `index`, or `null` if `index` is out of bounds.
     *
     * @example
     * // List: [10] → [20] → [30]
     * list.getNodeAt(1); // Node(20)
     * list.getNodeAt(9); // null
     */
    getNodeAt(index: number): Node | null {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.getNext();
        }
        return current;
    }

    /**
     * Replaces the node at `index` with a new node, preserving the rest of
     * the chain.
     *
     * The new node inherits the `next` pointer of the node it displaces, so
     * every node after position `index` remains reachable and in the same order.
     *
     * Time Complexity:  O(n) — must traverse to the target index.
     * Space Complexity: O(1)
     *
     *   Before:  head → [10] → [20] → [30] → null
     *   setNodeAt(1, Node(99))
     *   After:   head → [10] → [99] → [30] → null   (Node(20) is discarded)
     *
     * @param index - Zero-based position of the node to replace.
     * @param node  - The replacement node.
     * @returns `true` on success, `false` if `index` is out of bounds.
     */
    setNodeAt(index: number, node: Node): boolean {
        if (index < 0 || index >= this.length) return false;

        if (index === 0) {
            // The new node must inherit the current head's successor so the
            // rest of the list is not lost.
            node.setNext(this.head!.getNext());
            this.head = node;
            // When the list has exactly one node, tail must mirror head.
            if (this.length === 1) {
                this.tail = node;
            }
            return true;
        }

        // Navigate to the node just before the target position.
        const prevNode = this.getNodeAt(index - 1);
        if (!prevNode) return false;

        // `nodeToReplace` is the node we are discarding; we need its `next`
        // so the new node can continue to point further down the chain.
        const nodeToReplace = prevNode.getNext();

        // Wire the new node into the chain, bypassing the old node.
        node.setNext(nodeToReplace!.getNext());
        prevNode.setNext(node);

        // If we just replaced the tail, keep the tail pointer accurate.
        if (index === this.length - 1) {
            this.tail = node;
        }

        return true;
    }

    // ─────────────────────────────────────────────────────────────
    //  Utility Methods
    // ─────────────────────────────────────────────────────────────

    /**
     * Exports every node's value into a plain array, in list order.
     *
     * Particularly useful in tests — you can compare the result with an
     * expected array instead of manually traversing nodes.
     *
     * Time Complexity:  O(n)
     * Space Complexity: O(n)
     *
     * @returns An array of numbers representing the list from head to tail.
     *
     * @example
     * // List: [10] → [20] → [30]
     * list.toArray(); // [10, 20, 30]
     */
    toArray(): number[] {
        const result: number[] = [];
        let current = this.head;
        while (current) {
            result.push(current.getValue());
            current = current.getNext();
        }
        return result;
    }

    /**
     * Logs a human-readable representation of the list to the console.
     *
     * Great for debugging — lets you see the current state of the list at
     * a glance without inspecting individual node objects.
     *
     * Time Complexity:  O(n)
     * Space Complexity: O(n)  (for the temporary string array)
     *
     * @example
     * // List: [10] → [20] → [30]
     * list.print();  // "10 → 20 → 30 → null"
     *
     * emptyList.print();  // "(empty list)"
     */
    print(): void {
        if (!this.head) {
            console.log("(empty list)");
            return;
        }

        const parts: string[] = [];
        let current: Node | null = this.head;
        while (current) {
            parts.push(String(current.getValue()));
            current = current.getNext();
        }
        console.log(parts.join(" → ") + " → null");
    }
}
