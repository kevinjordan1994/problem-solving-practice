class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    let point = this.head;
    let newTail;
    while (point !== this.tail) {
      newTail = point;
      point = point.next;
    }
    const poppedNode = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return poppedNode;
  }
}

const list = new SinglyLinkedList();
list.push("Test");
list.push("New Tail");
console.log(list.push("New new tail"));
console.log(list.pop());
