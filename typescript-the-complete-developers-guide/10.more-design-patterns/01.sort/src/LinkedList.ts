import { ISortable } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) { }
}

export class LinkedList implements ISortable<any> {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(index: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(index).data > this.at(index + 1).data;
  }

  swap(index: number): void {
    const leftNode = this.at(index);
    const rightNode = this.at(index + 1);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  get data(): unknown[] {
    if (!this.head) {
      return [];
    }

    let results: unknown[] = [];
    let node: Node | null = this.head;

    while (node) {
      results.push(node?.data);
      node = node.next;
    }

    return results.filter(Boolean);
  }
}
