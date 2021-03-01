class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const deletedItem = this.data[index];
    this.shift(index);
    this.length--;
    return deletedItem;
  }
  shift(index) {
    for (let i = index; i < this.length; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray = new Array();
newArray.push(10);
newArray.push(13);
newArray.push(16);
newArray.push(2);
newArray.pop();
newArray.delete(1);
console.log(newArray);
