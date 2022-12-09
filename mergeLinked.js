console.log("merge sort in linked list");

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

    let nextNode;
    let previousNode = null;
    for (let i = 0; i < this.length; i++) {
      // tme
      nextNode = movingNode.next;

      // main logic : reverse pointers
      movingNode.next = previousNode;

      // preparation for next iteration : update vars
      previousNode = movingNode;
      // console.log("previous node is");
      // console.log(previousNode);
      movingNode = nextNode;
    }
    return this;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}

// merge list in linked list
const mergeSortLL = (head) => {
  if (head == null || head.next == null) {
    return head;
  }

  // Break the list from middle
  let middle = llMiddle(head);
  let middleNext = middle.next;
  middle.next = null;
  // console.log("the middle is");
  // console.log(middle);

  // sort the lower bound
  let left = mergeSortLL(head);

  // sort the upper bound
  let right = mergeSortLL(middleNext);

  console.log("the left is");
  console.log(left);
  console.log("the right is");
  console.log(right);

  // return merged sort list
  return sortedMerge(left, right);
};

// merge the sorted list
const sortedMerge = (a, b) => {
  let result = null;

  if (a === null) {
    return b;
  }
  if (b === null) {
    return a;
  }
  // console.log("the next of a is");
  // console.log(b.next);

  // recursively merge the list by calling the same function with appropriate next value
  if (a.value <= b.value) {
    result = a;
    result.next = sortedMerge(a.next, b);
  } else {
    result = b;
    result.next = sortedMerge(a, b.next);
  }
  console.log("result is");
  console.log(result);
  return result;
};

// Get the middle of the list
const llMiddle = (head) => {
  if (head === null) {
    return head;
  }

  let slow = head,
    fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    // console.log(slow);
    fast = fast.next.next;
  }
  return slow;
};

const N1 = new SingleLinkedList();
N1.push(5);
N1.push(7);
N1.push(4);
N1.push(6);
// console.log(N1.getHead());
// console.log(N1.getTail());
let sorted = mergeSortLL(N1.getHead());
// let sorted = llMiddle(N1.getHead());

console.log(sorted);
