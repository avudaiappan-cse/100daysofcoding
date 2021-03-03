class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  printList() {
    const nodeValues = [];
    let currentHead = this.head;
    while (currentHead !== null) {
      nodeValues.push(currentHead.value);
      currentHead = currentHead.next;
    }
    return nodeValues;
  }
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    const newNode = {
      value,
      next: null,
    };
    const prev = this.traverseToIndex(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const prev = this.traverseToIndex(index - 1);
    const nodeToBeRemoved = prev.next;
    prev.next = nodeToBeRemoved.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentHead = this.head;
    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }
    return currentHead;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.prepend(1);
linkedList.insert(2, 99);
linkedList.insert(100, 89);
console.log(linkedList.printList());
linkedList.remove(1);
console.log(linkedList);
