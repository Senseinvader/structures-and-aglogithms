
class Node {
  constructor(value) {
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (this.length) {
      tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  remove(position) {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let prevNode = currentNode.pre;
    let count = 1;

    if (this.length === 0 || position < 1 || position > this.length) {
      return "no such element";
    }
    if (position === 1) {
      this.head = currentNode.next;
      if (!this.head) {
        this.tail = null;
      } else {
        this.head.pre = null;
      }
    }
    if(position === this.length) {
      this.tail = this.tail.pre;
      this.tail.next = null;
    } else {
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      prevNode = currentNode.pre;
      nextNode = currentNode.next;
      prevNode.next = nextNode;
      currentNode = null;
    }
    return this;
  }

  findAt(position) {
    let currentNode = this.head;
    let count = 1;

    if (this.head === null || position < 1 || position > this.length) {
      return "no such element found";
    }
    if (position === 1) {
      return this.head.value;
    }
    if (position === this.length) {
      return this.tail.value;
    }
    else {
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
    }
    return currentNode;
  }

}