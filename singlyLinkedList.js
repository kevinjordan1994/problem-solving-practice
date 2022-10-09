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

  push(...values) {
    values.forEach((value) => {
      const node = new Node(value);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
    });
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    let point = this.head;
    let newTail = point;
    while (point !== this.tail) {
      newTail = point;
      point = point.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return point;
  }

  unshift(...values) {
    const appendableList = new SinglyLinkedList();
    appendableList.push(...values);
    const previousHead = this.head;
    if (!previousHead) {
      this.head = appendableList.head;
      this.tail = appendableList.tail;
    }
    appendableList.tail.next = previousHead;
    this.head = appendableList.head;
    this.length += appendableList.length;
    return this;
  }

  shift() {
    if (this.length === 0) return null;
    const decapitatedHead = this.head;
    this.head = decapitatedHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return decapitatedHead;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, value) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const insertionPoint = this.get(index - 1);
    if (!insertionPoint) return false;
    if (insertionPoint === this.tail) {
      this.push(value);
      return true;
    }
    const node = new Node(value);
    node.next = insertionPoint.next;
    insertionPoint.next = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return null;
    const previousNode = this.get(index - 1);
    const targetNode = previousNode.next;
    previousNode.next = targetNode.next;
    this.length--;
    return targetNode;
  }

  reverse() {
    //First swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    //Then create two variables: one will be the previous node and the other will be the next.
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      //The temp variable that is initialized as this.head will be used to transfer the pointers.
      //First set next to the temp node's next
      next = temp.next;
      //Set the temp node's next to the previous node (initially null since the head is now the tail and we don't want the tail pointing at anything)
      temp.next = prev;
      //The next two lines are set up for the next loop iteration. We just set the previous node to the current node and the current node to the next node.
      prev = temp;
      temp = next;
    }
    return this;
  }

  printAllValues() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    return this;
  }

  printAllNodes() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.unshift("Value", 27, 87, "tail");
list.set(1, "New second node");
list.insert(2, "New third value");
list.reverse();
