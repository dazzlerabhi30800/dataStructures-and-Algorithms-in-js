console.log("Linked List in Data Structures");

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
  refer() {
    return this.next;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // case: empty list
    if (!this.head) return;

    // case : one node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // case : many nodes
    let current = this.head;
    let newTail = null;
    while (current != null) {
      if (current.next) {
        newTail = current;
      }
      current = current.next;
    }
    const deleteNode = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return deleteNode;
  }
  shift() {
    // case : empty list
    if (!this.head) return;

    // case : one node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // case: many nodes
    const currentHead = this.head;
    const newHead = currentHead.next;
    this.head = newHead;
    this.length--;
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);

    // case : empty list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }

    // case : many cases
    const currentHead = this.head;
    const newHead = newNode;
    this.head = newHead;
    newHead.next = currentHead;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let target = this.head;
    for (let i = 1; i <= index; i++) {
      target = target.next;
    }
    return target;
  }
  set(index, val) {
    const target = this.get(index);
    if (target) {
      target.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    // insert end
    if (index === this.length) {
      this.push(val);
      return true;
    }

    // insert beginning
    if (index == 0) {
      this.unshift(val);
      return true;
    }

    // inser middle
    const newNode = new Node(val);
    const previous = this.get(index - 1);
    const current = previous.next;
    previous.next = newNode;
    newNode.next = current;
    this.length++;

    return this;
  }
  remove(index) {
    // edge cases
    if (index < 0 || index <= this.length) {
      return false;
    }

    // remove first node
    if (index === 0) {
      this.shift();
      return true;
    }

    // remove last node
    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    // remove in middle
    const previous = this.get(index - 1);
    const after = previous.next.next;
    previous.next = after;
    this.length--;
    return true;
  }
  reverse() {
    let movingNode = this.head;
    this.head = this.tail;
    this.tail = movingNode;
    // console.log(this.tail);

    let nextNode;
    let previousNode = null;
    for (let i = 0; i < this.length; i++) {
      // tme
      nextNode = movingNode.next;
      // console.log("next node is");
      // console.log(nextNode);

      // main logic : reverse pointers
      movingNode.next = previousNode;
      // console.log("moving node is");
      // console.log(movingNode.next);

      // preparation for next iteration : update vars
      previousNode = movingNode;
      console.log("previous node is");
      console.log(previousNode);
      movingNode = nextNode;
      // console.log("moving Node is");
      // console.log(movingNode);
    }
    return this;
  }
}

// const list = new SingleLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// console.log(list.push(4));
// console.log(list.unshift(9));
// console.log(list.get(3));
// console.log(list.set(3, 5));
// console.log(list.insert(3, 7));
// console.log(list.reverse());

class Node2 {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join("<-->"));
    return this;
  }
  // insert node at end of the list
  append(value) {
    let newNode = new Node2(value);

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    this.length++;
    this.printList();
  }

  // insert node at the start of the list
  prepend(value) {
    let newNode = new Node2(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
    this.printList();
  }

  // Insert node at a given index
  insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length) {
      console.log(`Invalid length. Current Length is ${this.length}`);
      return this;
    }

    // if index is 0, prepend
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    // Index is equal to this.length, append
    if (index === this.length - 1) {
      this.append(value);
      return this;
    }

    // Reach the node at that index
    let newNode = new Node2(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    let nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    nextNode.previous = newNode;

    this.length++;
    this.printList();
  }

  // Remove a node
  remove(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.length) {
      console.log(`Invalid index. Current length is ${this.length}`);
      return this;
    }

    // Remove Head
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      this.printList();
      return this;
    }

    // Remove tail
    if (index === this.length - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
      this.printList();
      return this;
    }

    // remove an index
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }
    let deleteNode = previousNode.next;
    let nextNode = deleteNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    this.length--;
    this.printList();
    return this;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = node.previous;
      node.previous = next;
      node = next;
    }

    return this;
  }
}

let myDoublyList = new doublyLinkedList(10);

// myDoublyList.append(5);
// myDoublyList.prepend(15);
// myDoublyList.insert(1, 20);
// myDoublyList.remove(1);
// console.log(myDoublyList.reverse());
