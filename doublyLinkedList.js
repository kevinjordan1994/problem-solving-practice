class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(...values) {
    values.forEach((value) => {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        const previous = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.tail.previous = previous;
      }
      this.length++;
    });
    return this;
  }

  pop() {
    if (!this.head) return;
    const removedTail = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = removedTail.previous;
      this.tail.next = null;
      removedTail.previous = null;
    }
    this.length--;
    return removedTail;
  }
}

const list = new DoublyLinkedList();
list.push(1, 2, 3);
