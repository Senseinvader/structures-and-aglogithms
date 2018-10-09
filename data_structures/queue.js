
class Node {
  constructor(value) {
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      throw "Queue is empty";
    } else {
      let itemToDequeue = this.head;
      this.head = this.head.next;
      return itemToDequeue.value;
    }
  }

  peek() {
    if (!this.head) {
      throw "Queue is empty";
    }
    else {
      return this.head.value;
    }
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }

  queueSize() {
    let counter = 0;
    currentItem = this.head;
    while(currentItem){
      counter++;
      currentItem = currentItem.next;
    }
    return counter;
  }
}