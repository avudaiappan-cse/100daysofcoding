class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let hashedKey = this._hash(key);
    if (!this.data[hashedKey]) this.data[hashedKey] = [];
    this.data[hashedKey].push([key, value]);
    return value;
  }
  get(key) {
    let hashedKey = this._hash(key);
    let bucket = this.data[hashedKey];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("apple", 100);
myHashTable.set("orange", 100000);
console.log(myHashTable.get("orange"));
console.log(myHashTable.keys());
console.log(myHashTable.values());
