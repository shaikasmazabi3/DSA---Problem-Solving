// Stack Implementation using an Array
class Stack {
  constructor() {
    this.stack = [];
  }
  top() {
    return console.log("Top is ", this.stack[this.stack.length - 1]);
  }
  length() {
    return this.stack.length;
  }
  isEmpty() {
    if (this.stack.length > 1) {
      return false;
    } else {
      return true;
    }
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    this.stack.pop();
  }
}
const stack = new Stack();
stack.push(23);
stack.push(25);
stack.push(28);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
