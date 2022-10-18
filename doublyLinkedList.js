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
}

const list = new DoublyLinkedList();
list.push(1, 2, 3, 4, 5);
