
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 10;
    this.length = 0;
  }


  push(value) {
    let node = new Node(value);

    if (this.top && this.length < this.size) {
      node.next = this.top;
      this.top = node;
      this.length++;
    } 
    else if (this.top && this.length >= this.size) {
      throw "Stack size exceeded";
    }
    else {
      this.top = node;
      this.length++;
    }
  }

  pop() {

    if(this.top) {
      let itemToPop = this.top;
      this.top = this.top.next;
      this.length--;
      return itemToPop.value;
    }
    else {
      throw "Stack is empty";
    }
  }

  peek() {
    if (this.top) {
      return this.top;
    } else {
      throw "Stack is empty";
    }
  }

  size() {
    return this.size;
  }

  freeSize() {
    return this.size - this.length;
  }
}


const stack = new Stack();
stack.push("one");
stack.push("two");
console.log(stack.pop());
console.log(stack.freeSize());