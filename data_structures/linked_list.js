// Inner helper class 
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  construcor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  add(value) {
    const currentNode = head.next;
    if (!currentNode) {
      this.addToHead(value);
      return this;
    }
    
    const node = new Node(value);
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }


  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  find(val) {
    const thisNode = this.head;

    while(thisNode) {
      if (thisNode.value === val) {
        return thisNode;
      }
      thisNode = thisNode.next;
    }
    return undefined;
  }

  remove(val) {
    if (this.length === 0) {
      return undefined;
    }
    if (this.head.value === val) {
      this.removeFromHead();
      return this;
    }

    const prevNode = this.head;
    const thisNode = this.head.next;

    while (thisNode) {
      if (thisNode.value === val) {
        prevNode.next = thisNode.next;
        this.length--;
        return thisNode;
      }
      prevNode = thisNode;
      thisNode = thisNode.next;
    }
    return undefined;
  }

}

