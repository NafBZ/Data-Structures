/**
 * @file example.ts
 * @description A step-by-step walkthrough of every LinkedList operation.
 *
 * Run this file from the project root with:
 *
 *   npx ts-node Linked-List/example.ts
 *
 * Each section shows the list before and after the operation, plus the
 * return value so you can confirm everything behaves as expected.
 */

import { LinkedList } from "./linked-list";
import { Node } from "./node";

// ─── Helper ──────────────────────────────────────────────────────────────────
// A small utility to print a labelled divider so the output is easy to follow.
function section(title: string): void {
    console.log(`\n${"─".repeat(52)}`);
    console.log(`  ${title}`);
    console.log("─".repeat(52));
}

// ─── 1. Constructor ───────────────────────────────────────────────────────────
section("1. new LinkedList(10)  — seed with an initial value");

const list = new LinkedList(10);
list.print();                           // 10 → null
console.log("length:", list.getLength()); // 1

// ─── 2. push() ────────────────────────────────────────────────────────────────
section("2. push()  — append nodes to the end  O(1)");

list.push(new Node(20));
list.push(new Node(30));
list.push(new Node(40));
list.print();                           // 10 → 20 → 30 → 40 → null
console.log("length:", list.getLength()); // 4

// ─── 3. unshift() ─────────────────────────────────────────────────────────────
section("3. unshift()  — prepend a node to the front  O(1)");

list.unshift(new Node(5));
list.print();                           // 5 → 10 → 20 → 30 → 40 → null
console.log("length:", list.getLength()); // 5

// ─── 4. getNodeAt() ───────────────────────────────────────────────────────────
section("4. getNodeAt()  — read a node by index  O(n)");

const nodeAt2 = list.getNodeAt(2);
console.log("getNodeAt(2):", nodeAt2?.getValue()); // 20

const nodeAt0 = list.getNodeAt(0);
console.log("getNodeAt(0):", nodeAt0?.getValue()); // 5 (head)

const nodeAtLast = list.getNodeAt(list.getLength() - 1);
console.log("getNodeAt(last):", nodeAtLast?.getValue()); // 40 (tail)

const oob = list.getNodeAt(99);
console.log("getNodeAt(99):", oob); // null (out of bounds)

// ─── 5. setNodeAt() ───────────────────────────────────────────────────────────
section("5. setNodeAt()  — replace a node at a given index  O(n)");

//   Before:  5 → 10 → 20 → 30 → 40 → null
//   Replace index 2 (value 20) with 99
console.log("Before replace:");
list.print();

const replaced = list.setNodeAt(2, new Node(99));
console.log("setNodeAt(2, Node(99)) returned:", replaced); // true

console.log("After replace:");
list.print();                           // 5 → 10 → 99 → 30 → 40 → null

// Replace the head (index 0)
list.setNodeAt(0, new Node(1));
console.log("After replacing head (index 0) with 1:");
list.print();                           // 1 → 10 → 99 → 30 → 40 → null

// Replace the tail (last index)
list.setNodeAt(list.getLength() - 1, new Node(50));
console.log("After replacing tail with 50:");
list.print();                           // 1 → 10 → 99 → 30 → 50 → null

// Out-of-bounds attempt
const badReplace = list.setNodeAt(100, new Node(0));
console.log("setNodeAt(100, ...) returned:", badReplace); // false

// ─── 6. shift() ───────────────────────────────────────────────────────────────
section("6. shift()  — remove the first node  O(1)");

const shifted = list.shift();
console.log("Removed (shift):", shifted?.getValue()); // 1
list.print();                           // 10 → 99 → 30 → 50 → null
console.log("length:", list.getLength()); // 4

// ─── 7. pop() ─────────────────────────────────────────────────────────────────
section("7. pop()  — remove the last node  O(n)");

const popped = list.pop();
console.log("Removed (pop):", popped?.getValue()); // 50
list.print();                           // 10 → 99 → 30 → null
console.log("length:", list.getLength()); // 3

// ─── 8. toArray() ─────────────────────────────────────────────────────────────
section("8. toArray()  — export values as a plain array  O(n)");

console.log("toArray():", list.toArray()); // [10, 99, 30]

// ─── 9. Edge cases ────────────────────────────────────────────────────────────
section("9. Edge cases");

// pop() on a single-element list empties it completely
const single = new LinkedList(42);
console.log("Single-element list:");
single.print();                         // 42 → null
single.pop();
console.log("After pop():");
single.print();                         // (empty list)
console.log("length:", single.getLength()); // 0

// Operations on an empty list return null gracefully
const empty = new LinkedList();
console.log("\nEmpty list:");
empty.print();                          // (empty list)
console.log("shift() on empty:", empty.shift()); // null
console.log("pop()   on empty:", empty.pop());   // null

// push() onto an empty list then immediately pop() should return same value
const solo = new LinkedList();
solo.push(new Node(77));
console.log("\nPushed 77 onto empty list:");
solo.print();                           // 77 → null
console.log("pop():", solo.pop()?.getValue()); // 77
console.log("After pop():");
solo.print();                           // (empty list)

// ─── 10. Node.setValue() ──────────────────────────────────────────────────────
section("10. Node.setValue()  — mutate a node's value in place");

list.push(new Node(100));
console.log("Before mutation:");
list.print();                           // 10 → 99 → 30 → 100 → null

// Retrieve the node at index 1 and update its value directly.
const mutTarget = list.getNodeAt(1);
mutTarget?.setValue(999);
console.log("After mutTarget.setValue(999) on index 1:");
list.print();                           // 10 → 999 → 30 → 100 → null

console.log("\n✓ All examples completed.\n");
