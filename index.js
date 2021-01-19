class SortedList {
  constructor() {
   this.items = [];
   this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  this.length += 1;
  this.items.sort(function (a,b){
    return a-b;
  });
  }
  
  get(pos) {
    if(pos > this.length){
    throw new Error ('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return this.sum() / this.items.length;
  }
}
module.exports = SortedList;
