import { Node } from "./node";

export class LinkedList {
    private head: Node | null = null;
    private tail: Node | null = null;
    private length: number = 0;

    constructor(value?: number) {
        if (value !== undefined) {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }

    push(node: Node): void {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.setNext(node);
            this.tail = node;
        }
        this.length++;
    }

    pop(): Node | null {
        if (!this.head) return null;

        if (this.head === this.tail) {
            const popped = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return popped;
        }

        let current = this.head;
        let newTail = current;
        while (current.getNext()) {
            newTail = current;
            current = current.getNext()!;
        }
        this.tail = newTail;
        this.tail.setNext(null);
        this.length--;
        return current;
    }

    getLength(): number {
        return this.length;
    }
}