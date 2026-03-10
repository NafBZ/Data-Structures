export class Node {
    
    constructor(
       private value: number,
       private next: Node | null = null
    )
    {}

    getValue(): number {
        return this.value;
    }

    getNext(): Node | null {
        return this.next;
    }

    setNext(node: Node | null): void {
        this.next = node;
    }
}