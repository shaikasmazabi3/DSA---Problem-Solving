class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    // Adding a Node at the End of the Linked List
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  shift() {
    // Deleting a Node in the Begining of the Linked List
    if (!this.head) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    this.head = this.head.next;
    this.length--;
    return this.head;
  }
  pop() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    if (!temp.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    while (temp.next.next) {
      temp = temp.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
  }
  traverse() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log("\n");
  }

  middle() {
    if (!this.head) {
      return null;
    }
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return console.log("Middle is", slow);
  }

  middleDel() {
    // Focus on Tail and Head
    if (!this.head || !this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    let fast = this.head;
    let slow = this.head;
    let prev = this.head;

    while (fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (prev) {
      prev.next = slow.next;
      this.length--;
    }

    if (slow === this.tail) {
      this.tail = prev;
    }
    return this;
  }
}

const myList = new LinkedList();
myList.push(1);
// myList.push(2)
// myList.push(3)
// myList.push(4)
// myList.push(5)
// myList.push(6)
// myList.push(7)
myList.middleDelete();
console.log(myList);
// myList.traverse()
