class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.base = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.base = newNode;
      this.length++;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
      this.length++;
      return this;
    }
  }
  pop() {
    if(this.isEmpty()){
        return 'Stack UnderFlow !!!'
    }
    if (!this.top || this.top === this.base) {
      this.top = null;
      this.base = null;
      this.length = 0;
    } else {
      this.top = this.top.next;
      this.length--;
    }
  }
  peek() {
    console.log("Top Peek is ", this.top);
    return this.top;
  }
  isEmpty() {
    console.log(this.length === 0, "hhhhh");
    return this.length === 0;
  }
  size() {
    if (!this.top) {
      return 0;
    } else {
      let count = 1;
      let temp = this.top;
      while (temp.next) {
        temp = temp.next;
        count++;
      }
      return count;
    }
  }
}

const stack = new Stack();

stack.push(8);
console.log(stack);
stack.push(9);
stack.push(12);
stack.pop();
stack.push(24);
console.log(stack);

console.log(stack.size());
stack.peek();
