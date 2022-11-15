class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return;
    const shiftedNode = this.first;
    this.first = shiftedNode.next;
    shiftedNode.next = null;
    this.length--;
    return shiftedNode;
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
