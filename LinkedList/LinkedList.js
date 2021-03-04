class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // first Element
    this.tail = null; // last element
  }
  //Add element to the head of LL
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  //Add element to the tail of LL
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  delete(value) {
    if (!this.head) return;

    //Check if head is to be deleted
    while (this.head && this.head.data === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode)
      while (currentNode.next) {
        if (currentNode.next.data === value)
          currentNode.next = currentNode.next.next;
        else currentNode = currentNode.next;
      }

    //check if tail is to be deleted
    if (this.tail.data === value) this.tail = currentNode;
  }
  insertAfter(value, afterValue) {
    const newNode = new Node(afterValue);
    const previous = this.find(value);
    if (previous) {
      newNode.next = previous.next;
      previous.next = newNode;
    }
  }
  find(value) {
    if (!this.head) return;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }
  // Traverse add LL element to Array
  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      elements.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const ll = new LinkedList();
ll.append(12);
ll.append(13);
ll.append(14);
ll.prepend(11);
ll.prepend(10);
ll.delete(10);
console.log(ll.find(13));
console.log(ll.find(10));

console.log(ll.toArray());
console.log(ll);
