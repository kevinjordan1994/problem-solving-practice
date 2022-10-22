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

  shift() {
    if (!this.head) return;
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.previous = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }

  unshift(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.previous = newHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  #searchAndReturnNodeFromHead(index) {
    let count = 0;
    let target = this.head;
    while (count !== index) {
      target = target.next;
      count++;
    }
    return target;
  }

  #searchAndReturnNodeFromTail(index) {
    let count = this.length - 1;
    let target = this.tail;
    while (count !== index) {
      target = target.previous;
      count--;
    }
    return target;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index >= this.length / 2) {
      return this.#searchAndReturnNodeFromTail(index);
    } else {
      return this.#searchAndReturnNodeFromHead(index);
    }
  }

  set(index, value) {
    const target = this.get(index);
    if (!target) return false;
    target.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return this;
    }
    if (index === this.length) {
      this.push(value);
      return this;
    }
    const afterNode = this.get(index);
    if (!afterNode) return null;
    const beforeNode = afterNode.previous;
    const node = new Node(value);
    beforeNode.next = node;
    afterNode.previous = node;
    node.previous = beforeNode;
    node.next = afterNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    if (!removedNode) return null;
    const beforeNode = removedNode.previous;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.previous = beforeNode;
    removedNode.next = removedNode.previous = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    const newHead = this.tail;
    this.tail = this.head;
    this.head = newHead;
    let currentNode = newHead;
    let count = 0;
    let currentPrevious = null;
    let currentNext = newHead.previous;
    while (count !== this.length) {
      currentNode.previous = currentPrevious;
      currentPrevious = currentNode;
      currentNode.next = currentNext;
      currentNext = currentNext?.previous
      currentNode = currentNode.next;
      count++;
    }
    return this;
  }

  printAllValues() {
    let current = 0;
    let node = this.head;
    while (current !== this.length) {
      console.log(node.value);
      node = node.next;
      current++;
    }
  }
}

const list = new DoublyLinkedList();
list.push(1, 2, 3, 4, 5);
list.reverse();
