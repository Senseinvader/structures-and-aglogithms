
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    const newNode = new Node(value);
    let currentNode = this.root;
    while(currentNode) {
      if (value <= currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }        
    }
  }

  find(node, value) {
    if (node.value === null) {
      return null;
    }
    if (node.value < value) {
      this.find(node.left, value);
    } else if (node.value > value) {
      this.find(node.right, value);
    } else if (node.value === value) {
      return node;
    } else {
      throw "Not found";
    }
  }

  delete(node, value) {
    const node = find(node, value);
    if (node.left) {
      node = node.left;
    } else if (node.right) {
      node = node.right;
    } else {
      node = null;
    }
    return node;
  }

  sortedArrayToTree(array) {
    if (!array.length) {
      return null;
    }
    let index = (array.length-1)/2 | 0;
    const node = new Node(array[index]);
    node.left = this.sortedArrayToTree(array.slice(0, index));
    node.right = this.sortedArrayToTree(array.slice(index+1));
    return node;
  }
}