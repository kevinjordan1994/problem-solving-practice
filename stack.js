class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.top) return null;
    const removedTop = this.top;
    this.top = removedTop.next;
    removedTop.next = null;
    this.size--;
    return removedTop.value;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
