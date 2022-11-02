export class MyHashTable {
  /* 
  a hash table is basically an array to store 
  key:val pair data with a hash function that take the key
  as parameter and return an arr index  hash(key) => index
  */
  constructor() {
    this.table = new Array(128);
    // keep track of the size
    this.size = 0;
    // Load factor : size / table.length if it's > 0.7 => table.length must
    // be resized to table.length * 2. but i'm not going to implement this
  }
  // private method
  _hash(key) {
    //sum all the ascii code of the key
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = +key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, val) {
    //hash the key
    const index = this._hash(key);
    this.table[index] = [key, val];
    // inc the size
    this.size++;
  }
  get(key) {
    // return the stored [key,value] or undefined
    const index = this._hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this._hash(key);
    // check if the index store a truthy value and the value has length
    // since it is an array, and assign an undefined val to it
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      //dec the size
      this.size--;
      return true;
    } else return false;
  }
}
